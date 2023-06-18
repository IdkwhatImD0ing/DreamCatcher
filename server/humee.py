from os import environ
import dotenv
from hume import HumeStreamClient
from hume.models.config import ProsodyConfig

dotenv.load_dotenv()
hume_key = environ.get("HUME_API_KEY")

import base64
from pathlib import Path
import websockets.exceptions

def encode_data(file_path: Path, chunk_size: int = 15000):
    with open(file_path, "rb") as file:
        while chunk := file.read(chunk_size):
            yield base64.b64encode(chunk)

file_path = "Dream.mp3"
encoded_data = encode_data(file_path)

import asyncio

async def main():
    client = HumeStreamClient(hume_key)
    config = ProsodyConfig()
    encoded_chunks = list(encode_data(file_path))  # store chunks in a list

    i = 0
    while i < len(encoded_chunks):
        retries = 0
        while retries < 5:  # limit the retries
            try:
                async with client.connect([config]) as socket:
                    while i < len(encoded_chunks):
                        chunk = encoded_chunks[i]
                        result = await socket.send_bytes(chunk)
                        emotions = result['prosody']['predictions'][0]['emotions']
                        highest_emotion = max(emotions, key=lambda emotion: emotion['score'])
                        print(f"The highest emotion is {highest_emotion['name']} with a score of {highest_emotion['score']}")
                        i += 1
                break  # if successful, break the retry loop and proceed to the next chunk
            except websockets.exceptions.ConnectionClosedError:
                print(f"Connection closed while processing chunk {i}, retrying...")
                retries += 1
                continue
        if retries == 5:
            raise Exception("Reached maximum retry limit for chunk {i}")

asyncio.run(main())
