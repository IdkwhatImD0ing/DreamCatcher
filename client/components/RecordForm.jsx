"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Audio from "@/assets/audio.svg";
let RecordRTC;

export default function RecordForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Recording states
  const recorder = useRef(null);
  const microphone = useRef(null);

  useEffect(() => {
    import("recordrtc").then((r) => {
      RecordRTC = r.default;
    });

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [recording]);

  const handleKeyDown = (event) => {
    if (event.code === "Space") {
      if (recording) {
        stopRecording();
      } else {
        startRecording();
      }
    }
  };

  const captureMicrophone = async (callback) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      callback(stream);
    } catch (error) {
      alert("Unable to access your microphone.");
      console.error(error);
    }
  };

  const startRecording = async () => {
    if (!recording) {
      await captureMicrophone((stream) => {
        microphone.current = stream;

        const options = {
          // Required format for speech to text, 16k mono channel
          type: "audio",
          recorderType: RecordRTC.StereoAudioRecorder,
          desiredSampRate: 16000,
          numberOfAudioChannels: 1,
        };

        recorder.current = RecordRTC(stream, options);
        console.log(recorder.current);
        recorder.current.startRecording();
        recorder.current.microphone = microphone.current;

        setRecording(true);
      });
    }
  };

  const stopRecordingCallback = () => {
    console.log(recorder.current);
    const audioBlob = recorder.current.getBlob();
    setRecording(false);
    setLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    reader.onloadend = () => {
      let base64Audio = reader.result;
      console.log(base64Audio);
      sendAudioToServer(base64Audio);
    };
  };

  const sendAudioToServer = async (base64Audio) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/convert_audio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: base64Audio,
        }),
      });

      const data = await response.json();
      setInputVal(data.transcript);
    } catch (error) {
      console.error("Error sending audio to server: ", error);
    } finally {
      recorder.current.microphone.stop();
    }
  };

  const stopRecording = () => {
    if (recorder.current) {
      recorder.current.stopRecording(stopRecordingCallback);
    }
  };

  return (
    <div className="flex flex-col text-[16px] font-normal pb-[2rem] md:pb-0">
      <div className="flex flex-col h-full max-w-[18rem]">
        <label>Dream Title</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-[0.5rem] px-[0.5rem] bg-[#FFFFFF] border border-[#BBBBBB] rounded-[4px] h-[36px] focus-purple"
        />
        <label className="mt-[2rem]">Date of Dream</label>
        <input
          type="date"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-[0.5rem] px-[0.5rem] bg-[#FFFFFF] border border-[#BBBBBB] rounded-[4px] h-[36px]"
        />
        <div className="flex items-center mt-[2rem] gap-[1rem]">
          {recording ? (
            <button
              onClick={() => {
                setRecording(!recording);
                stopRecording();
              }}
              className="font-bold px-[1rem] w-[64px] bg-purple hover:bg-bgwhite transition-all h-[48px] rounded-[8px] border border-black text-[#FFFFFF]"
            >
              <Image src={Audio} alt="audio" className="" />
            </button>
          ) : (
            <button
              onClick={() => {
                setRecording(!recording);
                startRecording();
              }}
              className="font-bold px-[1rem] w-[64px] bg-bgwhite hover:bg-purple transition-all h-[48px] rounded-[8px] border border-black text-[#FFFFFF]"
            >
              <Image src={Audio} alt="audio" className="" />
            </button>
          )}
          {recording && <div className="text-purple">Recording...</div>}
        </div>

        <div className="">
          <textarea
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="mt-[1rem] w-[400px] h-[200px] overflow-y-auto bg-bgwhite border border-[#BBBBBB] resize-none px-2 py-1"
          ></textarea>
        </div>
        <button
          onClick={() => router.push("/dashboard/dream/1")}
          className="font-bold bg-black hover:bg-purple transition-all w-[176px] h-[56px] rounded-[8px] mt-[2rem] text-[#FFFFFF]"
        >
          Analyze Dream
        </button>
      </div>
    </div>
  );
}
