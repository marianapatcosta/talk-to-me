import { Dialogue, VoiceGender } from './types'

const MIN_LEVENSHTEIN_DISTANCE = 75 // in percentage

export const getSpeechVoice = (
  availableVoices: SpeechSynthesisVoice[],
  preferredVoiceName: string,
  lang: string,
  voiceGender: VoiceGender | ''
): SpeechSynthesisVoice | undefined => {
  if (preferredVoiceName) {
    const voice = availableVoices.find(({ name }) =>
      name.toLowerCase().includes(preferredVoiceName.toLowerCase())
    )
    if (voice) {
      return voice
    }
  }

  if (voiceGender && lang) {
    const voice = availableVoices.find(
      ({ name, lang: voiceLang }) =>
        name.toLowerCase().split(' ').includes(voiceGender) &&
        voiceLang.includes(lang.toLowerCase())
    )

    if (voice) {
      return voice
    }
  }

  if (lang) {
    const voice = availableVoices.find(({ lang: voiceLang }) =>
      voiceLang.includes(lang.toLowerCase())
    )

    if (voice) {
      return voice
    }
  }

  if (voiceGender) {
    const voice = availableVoices.find(({ name }) =>
      name.toLowerCase().split(' ').includes(voiceGender)
    )
    if (voice) {
      return voice
    }
  }
}

export const getLevenshteinDistance = (
  sentenceA: string,
  sentenceB: string
): number => {
  if (sentenceA === sentenceB) {
    return 0
  }
  if (!sentenceA || !sentenceB) {
    return (sentenceA || sentenceB).length
  }
  const matrix = []
  for (let i = 0; i <= sentenceA.length; i++) {
    matrix[i] = [i]
    for (let j = 1; j <= sentenceB.length; j++) {
      matrix[i][j] =
        i === 0
          ? j
          : Math.min(
              matrix[i - 1][j] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j - 1] +
                (sentenceB[j - 1] === sentenceA[i - 1] ? 0 : 1)
            )
    }
  }
  return matrix[sentenceA.length][sentenceB.length]
}

export const getLevenshteinDistanceInPercentage = (
  sentenceA: string,
  sentenceB: string
): number => {
  const levenshteinDistance = getLevenshteinDistance(sentenceA, sentenceB)
  return (
    Math.round(
      (1 - levenshteinDistance / Math.max(sentenceA.length, sentenceB.length)) *
        100 *
        10
    ) / 10
  )
}

export const getOutput = (
  conversation: Dialogue[],
  recognitionResult: string
): string | undefined => {
  for (const item of conversation) {
    const hasMatchingInput = item.inputs.some(
      (input) =>
        getLevenshteinDistanceInPercentage(
          input.toLowerCase(),
          recognitionResult
        ) > MIN_LEVENSHTEIN_DISTANCE
    )

    if (hasMatchingInput) {
      return item.output
    }
  }

  for (const item of conversation) {
    if (!item.inputKeywords || !item.inputKeywords.length) {
      continue
    }
    const hasAllInputKeywords = item.inputKeywords.every((keyword) =>
      recognitionResult.toLowerCase().includes(keyword.toLowerCase())
    )

    if (hasAllInputKeywords) {
      return item.output
    }
  }
}
