from whispercpp import Whisper


class Transcriber:
    def __init__(self, model_name):
        self.whisper = Whisper.from_pretrained(model_name)

    def transcribe_from_file(self, audio_file):
        text = self.whisper.transcribe_from_file(audio_file)
        return text


if __name__ == "__main__":
    transcriber = Transcriber("tiny.en")
    wav_file = "./jfk.wav"
    text = transcriber.transcribe_from_file(wav_file)  # needs 16k 16bit mono wav
    print(text)
