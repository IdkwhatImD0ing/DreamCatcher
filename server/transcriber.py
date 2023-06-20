from whispercpp import Whisper
import numpy as np
from scipy.io import wavfile
import io
import base64

class Transcriber:
    def __init__(self, model_name):
        self.whisper = Whisper.from_pretrained(model_name)

    def transcribe_from_file(self, audio_file):
        text = self.whisper.transcribe_from_file(audio_file)
        return text

    def transcribe(self, audio_array):
        text = self.whisper.transcribe(audio_array)
        return text
    
    def encode_audio(self, audio_file):
        with open(audio_file, 'rb') as audio_file:
            encoded_audio = base64.b64encode(audio_file.read())
        return encoded_audio

    def decode_audio_to_np_array(self, encoded_audio):
        decoded_audio = base64.b64decode(encoded_audio)
        sr, audio = wavfile.read(io.BytesIO(decoded_audio))
        audio = audio.astype(np.float32)
        return audio


if __name__ == "__main__":
    transcriber = Transcriber("tiny.en")
    wav_file = "output.wav"

    # Convert wav file to base64
    encoded_audio = transcriber.encode_audio(wav_file)

    # Convert base64 to numpy array
    audio_np_array = transcriber.decode_audio_to_np_array(encoded_audio)
    # Normalize between -1 and 1
    audio_np_array = audio_np_array / np.max(np.abs(audio_np_array))
    text = transcriber.transcribe(audio_np_array)  # needs 16k 16bit mono wav
    
    # text = transcriber.transcribe_from_file(wav_file)  # needs 16k 16bit mono wav
    print(text)
