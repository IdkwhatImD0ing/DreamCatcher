from whispercpp import Whisper
import ray


runtime_env = {
    "pip": [
    "aiohttp==3.8.4",
    "aiosignal==1.3.1",
    "anyio==3.7.0",
    "async-timeout==4.0.2",
    "asyncio==3.4.3",
    "attrs==23.1.0",
    "certifi==2023.5.7",
    "charset-normalizer==3.1.0",
    "click==8.1.3",
    "colorama==0.4.6",
    "distlib==0.3.6",
    "exceptiongroup==1.1.1",
    "fastapi==0.97.0",
    "filelock==3.12.2",
    "frozenlist==1.3.3",
    "grpcio==1.51.3",
    "h11==0.14.0",
    "httptools==0.5.0",
    "hume==0.3.3",
    "idna==3.4",
    "jsonschema==4.17.3",
    "msgpack==1.0.5",
    "multidict==6.0.4",
    "numpy==1.25.0",
    "openai==0.27.8",
    "packaging==23.1",
    "platformdirs==3.6.0",
    "protobuf==4.23.3",
    "pydantic==1.10.9",
    "pyrsistent==0.19.3",
    "python-dotenv==1.0.0",
    "PyYAML==6.0",
    "ray==2.5.0",
    "requests==2.31.0",
    "sniffio==1.3.0",
    "starlette==0.27.0",
    "tqdm==4.65.0",
    "typing_extensions==4.6.3",
    "urllib3==2.0.3",
    "uvicorn==0.22.0",
    "virtualenv==20.23.1",
    "watchfiles==0.19.0",
    "websockets==11.0.3",
    "whispercpp==0.0.17",
    "yarl==1.9.2"
]

}
ray.init(runtime_env = runtime_env)

@ray.remote
class Transcriber:
    def __init__(self, model_name):
        self.whisper = Whisper.from_pretrained(model_name)

    def transcribe_from_file(self, audio_file):
        text = self.whisper.transcribe_from_file(audio_file)
        return text


if __name__ == "__main__":
    transcriber = Transcriber.remote("tiny.en")
    wav_file = "jfk.wav"
    text = transcriber.transcribe_from_file.remote(wav_file)  # needs 16k 16bit mono wav
    print(ray.get(text))
