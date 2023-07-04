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
    <div className="flex flex-col pb-[2rem] text-[16px] font-normal md:pb-0">
      <div className="flex h-full max-w-[18rem] flex-col">
        <label>Dream Title</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="focus-purple mt-[0.5rem] h-[36px] rounded-[4px] border border-[#BBBBBB] bg-[#FFFFFF] px-[0.5rem]"
        />
        <label className="mt-[2rem]">Date of Dream</label>
        <input
          type="date"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-[0.5rem] h-[36px] rounded-[4px] border border-[#BBBBBB] bg-[#FFFFFF] px-[0.5rem]"
        />
        <div className="mt-[2rem] flex items-center gap-[1rem]">
          {recording ? (
            <button
              onClick={() => {
                setRecording(!recording);
                stopRecording();
              }}
              className="h-[48px] w-[64px] rounded-[8px] border border-black bg-purple px-[1rem] font-bold text-[#FFFFFF] transition-all hover:bg-bgwhite"
            >
              <Image src={Audio} alt="audio" className="" />
            </button>
          ) : (
            <button
              onClick={() => {
                setRecording(!recording);
                startRecording();
              }}
              className="h-[48px] w-[64px] rounded-[8px] border border-black bg-bgwhite px-[1rem] font-bold text-[#FFFFFF] transition-all hover:bg-purple"
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
            className="mt-[1rem] h-[200px] w-[400px] resize-none overflow-y-auto border border-[#BBBBBB] bg-bgwhite px-2 py-1"
          ></textarea>
        </div>
        <button
          onClick={() => router.push("/dashboard/dream/1")}
          className="mt-[2rem] h-[56px] w-[176px] rounded-[8px] bg-black font-bold text-[#FFFFFF] transition-all hover:bg-purple"
        >
          Analyze Dream
        </button>
      </div>
    </div>
  );
}
