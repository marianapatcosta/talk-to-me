import { useCallback, useState } from 'react'
import { ChatInputMessage } from '../ChatInputMessage'
import { getOutput } from '../../utils'
import { Dialogue } from '@/types'
import { useTypeWriter } from '../../hooks/useTypewriter'
import styles from './styles.module.scss'

export interface TextChatProps {
  conversation: Dialogue[]
  defaultOutput: string
  textChatPlaceholder?: string
  additionalClass?: string
  onTyping?: () => void
  onUnmatchedOutput?: () => Promise<void> | void
}

const TextChat: React.FC<TextChatProps> = ({
  conversation,
  additionalClass,
  textChatPlaceholder,
  defaultOutput,
  onTyping,
  onUnmatchedOutput,
}) => {
  const [output, setOutput] = useState('')
  const { sentence: outputTypeWriter, resetSentence } = useTypeWriter(output)
  const isTyping = outputTypeWriter < output

  const onTextChatEnterPress = useCallback(
    async (input: string): Promise<void> => {
      const output = getOutput(conversation, input)
      if (!!onUnmatchedOutput && !output) {
        await onUnmatchedOutput()
      }
      resetSentence()
      setOutput(output || defaultOutput)
      !!onTyping && onTyping()
    },
    [conversation, defaultOutput, onTyping, onUnmatchedOutput, resetSentence]
  )

  return (
    <div className={`${styles['text-chat']} ${additionalClass}`}>
      <ChatInputMessage
        placeholder={textChatPlaceholder}
        disabled={isTyping}
        onSubmitMessage={onTextChatEnterPress}
      />
      {output && (
        <p className={styles['text-chat__output']}>{outputTypeWriter}</p>
      )}
    </div>
  )
}

export { TextChat }
