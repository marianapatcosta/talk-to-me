import { useState } from 'react'
import { Dialogue, VoiceGender } from '@/types'
import { getOutput, getSpeechVoice } from '@/utils'

interface UseSpeechProps {
  startListening: () => void
  stopListening: () => void
  talk: (speech: string) => void
  talking: boolean
}

interface UseSpeechConfigs {
  supportSpeechRecognition: boolean
  conversation: Dialogue[]
  defaultOutput: string
  lang?: string
  preferredVoiceName?: string
  voiceGender?: VoiceGender | ''
  onStopTalking?: () => void
  onUnmatchedOutput?: () => Promise<void> | void
}

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList
const SpeechSynthesisUtterance = window.SpeechSynthesisUtterance

const MIN_SPEECH_CONFIDENCE = 0.75

export const useSpeech = ({
  supportSpeechRecognition,
  conversation,
  defaultOutput,
  lang = '',
  preferredVoiceName = '',
  voiceGender = '',
  onStopTalking,
  onUnmatchedOutput,
}: UseSpeechConfigs): UseSpeechProps => {
  const [talking, setTalking] = useState(false)

  if (!supportSpeechRecognition) {
    return {} as UseSpeechProps
  }
  const speechRecognition = new SpeechRecognition()
  const speechRecognitionList = new SpeechGrammarList()
  const speechSynthesisUtterance = new SpeechSynthesisUtterance()

  const speechSynthesis = window.speechSynthesis

  if (lang) {
    speechSynthesisUtterance.lang = lang
    speechRecognition.lang = lang
  }

  const grammar = conversation.reduce(
    (grammarSentence, { inputs }) =>
      `${grammarSentence} | ${inputs.join(' | ')}`,
    ''
  )
  speechRecognitionList.addFromString(grammar, 1)
  speechRecognition.grammars = speechRecognitionList

  const startListening = (): void => {
    try {
      speechRecognition.start()
    } catch (error) {}
  }

  speechRecognition.onspeechend = () => {
    speechRecognition.stop()
  }

  speechRecognition.onresult = (event) => {
    if (event.results[0][0].confidence < MIN_SPEECH_CONFIDENCE) {
      return talk(defaultOutput)
    }
    const recognitionResult = event.results[0][0].transcript.toLowerCase()

    const output = getOutput(conversation, recognitionResult)
    talk(output || defaultOutput)
  }

  const stopListening = () => {
    speechRecognition.stop()
  }

  const setVoice = (): void => {
    const availableVoices = speechSynthesis.getVoices()
    const voice = getSpeechVoice(
      availableVoices,
      preferredVoiceName,
      lang,
      voiceGender
    )

    if (voice) {
      speechSynthesisUtterance.voice = voice
    }
  }

  const talk = async (speech: string) => {
    setVoice()
    const isUnmatchedSpeech = speech === defaultOutput
    speechSynthesisUtterance.text = speech
    speechSynthesis.cancel()
    speechSynthesisUtterance.onend = () => {
      setTalking(false)
      if (!!onStopTalking && !isUnmatchedSpeech) {
        onStopTalking()
      }
    }

    if (!!onUnmatchedOutput && isUnmatchedSpeech) {
      await onUnmatchedOutput()
    }
    setTalking(true)
    speechSynthesis.speak(speechSynthesisUtterance)
  }

  return { startListening, stopListening, talk, talking }
}
