'use client'

import {useState} from 'react'
import Image from 'next/image'

import Audio from '@/assets/audio.svg'
let RecordRTC

export default function RecordForm() {
  let lorem =
    'lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputVal, setInputVal] = useState(lorem)
  const [recording, setRecording] = useState(false)
  const [error, setError] = useState('')

  // Recording states
  const recorder = useRef(null)
  const microphone = useRef(null)

  useEffect(() => {
    import('recordrtc').then((r) => {
      RecordRTC = r.default
    })

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [recording])

  const handleKeyDown = (event) => {
    if (event.code === 'Space') {
      if (recording) {
        stopRecording()
      } else {
        startRecording()
      }
    }
  }

  const captureMicrophone = async (callback) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({audio: true})
      callback(stream)
    } catch (error) {
      alert('Unable to access your microphone.')
      console.error(error)
    }
  }

  const startRecording = async () => {
    if (!recording) {
      await captureMicrophone((stream) => {
        microphone.current = stream

        const options = {
          // Required format for speech to text, 16k mono channel
          type: 'audio',
          recorderType: RecordRTC.StereoAudioRecorder,
          desiredSampRate: 16000,
          numberOfAudioChannels: 1,
        }

        recorder.current = RecordRTC(stream, options)
        recorder.current.startRecording()
        recorder.current.microphone = microphone.current

        setRecording(true)
      })
    }
  }

  const stopRecordingCallback = () => {
    const audioBlob = recorder.current.getBlob()
    setRecording(false)
    setLoading(true)

    const reader = new FileReader()
    reader.readAsDataURL(audioBlob)
    reader.onloadend = () => {
      let base64Audio = reader.result

      fetch('/dream', {
        method: 'POST',
        headers: {
          'Content-Type': 'audio/wav',
        },
        body: JSON.stringify({
          audio: base64Audio,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // additional logic to handle response...
        })
        .finally(() => {
          recorder.current.microphone.stop()
        })
    }
  }

  const stopRecording = () => {
    if (recorder.current) {
      recorder.current.stopRecording(stopRecordingCallback)
    }
  }

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
          <button
            onClick={() => setRecording(!recording)}
            className="font-bold px-[1rem] w-[64px] bg-bgwhite hover:bg-purple transition-all h-[48px] rounded-[8px] border border-black text-[#FFFFFF]"
          >
            <Image src={Audio} alt="audio" className="" />
          </button>
          {recording && <div className="text-purple">Recording...</div>}
        </div>

        <div className="">
          <textarea
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="mt-[1rem] w-[400px] h-[200px] overflow-y-auto bg-bgwhite border border-[#BBBBBB] resize-none px-2 py-1"
          ></textarea>
        </div>
        <button className="font-bold bg-black hover:bg-purple transition-all w-[176px] h-[56px] rounded-[8px] mt-[2rem] text-[#FFFFFF]">
          Analyze Dream
        </button>
      </div>
    </div>
  )
}
