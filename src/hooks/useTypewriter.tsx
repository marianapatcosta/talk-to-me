import { useEffect, useState } from 'react'

interface UseTypewriteProps {
  sentence: string
  resetSentence: () => void
}

const TYPING_INTERVAL = 100 // in ms

export const useTypeWriter = (
  stringToType: string,
  delayToStart?: number
): UseTypewriteProps => {
  const [{ sentence, letterIndex }, setSentence] = useState({
    sentence: '',
    letterIndex: 0,
  })
  const time =
    delayToStart && letterIndex === 0 ? delayToStart : TYPING_INTERVAL

  const resetSentence = () =>
    setSentence({
      sentence: '',
      letterIndex: 0,
    })

  useEffect(() => {
    if (letterIndex > stringToType.length) return
    const delay = setTimeout(() => {
      setSentence(({ letterIndex }) => ({
        sentence: stringToType.substring(0, letterIndex),
        letterIndex: letterIndex + 1,
      }))
      clearTimeout(delay)
    }, time)
    return () => clearTimeout(delay)
  }, [sentence, letterIndex, time, stringToType])

  return { sentence, resetSentence }
}
