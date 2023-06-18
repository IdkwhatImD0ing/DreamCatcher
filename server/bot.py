import asyncio
import signal

import vocode
from vocode.helpers import create_streaming_microphone_input_and_speaker_output
from vocode.streaming.agent.chat_gpt_agent import ChatGPTAgent
from vocode.streaming.models.agent import ChatGPTAgentConfig
from vocode.streaming.models.message import BaseMessage
from vocode.streaming.models.synthesizer import GTTSSynthesizerConfig
from vocode.streaming.models.transcriber import (
    PunctuationEndpointingConfig,
    WhisperCPPTranscriberConfig,
)
from vocode.streaming.streaming_conversation import StreamingConversation
from vocode.streaming.synthesizer import GTTSSynthesizer
from vocode.streaming.transcriber import WhisperCPPTranscriber

vocode.setenv(
    OPENAI_API_KEY="your api key",
)


async def main():
    (
        microphone_input,
        speaker_output,
    ) = create_streaming_microphone_input_and_speaker_output(
        use_default_devices=True,
    )

    conversation = StreamingConversation(
        output_device=speaker_output,
        transcriber=WhisperCPPTranscriber(
            WhisperCPPTranscriberConfig.from_input_device(
                microphone_input,
                endpointing_config=PunctuationEndpointingConfig(),
                libname="/Users/flerovious/Documents/whisper.cpp/main",  # compiled whisper.cpp library, follow the quick start on whisper.cpp repo
                fname_model="/Users/flerovious/Documents/whisper.cpp/models/ggml-base.en.bin",  # path to whisper model
            )
        ),
        agent=ChatGPTAgent(
            ChatGPTAgentConfig(
                initial_message=BaseMessage(text="Hello!"),
                prompt_preamble="Have a pleasant conversation about life",
            ),
        ),
        synthesizer=GTTSSynthesizer(
            GTTSSynthesizerConfig.from_output_device(speaker_output)
        ),
    )
    await conversation.start()
    print("Conversation started, press Ctrl+C to end")
    signal.signal(signal.SIGINT, lambda _0, _1: conversation.terminate())
    while conversation.is_active():
        chunk = await microphone_input.get_audio()
        conversation.receive_audio(chunk)


if __name__ == "__main__":
    asyncio.run(main())
