import { FormEvent, KeyboardEvent, useRef } from 'react'
import { Send } from '../../assets/svg'
import { ButtonIcon } from '../ButtonIcon'
import styles from './styles.module.scss'

export interface ChatInputMessageProps {
  label?: string
  placeholder?: string
  disabled?: boolean
  additionalClass?: string
  onSubmitMessage: (input: string) => void
}

const ChatInputMessage: React.FC<ChatInputMessageProps> = ({
  label,
  disabled,
  additionalClass,
  placeholder,
  onSubmitMessage,
}) => {
  const chatValue = useRef<HTMLTextAreaElement | null>(null)

  const handleSubmitMessage = (
    event: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    event.preventDefault()
    if (!chatValue.current?.value) return
    onSubmitMessage(chatValue.current?.value)
  }

  const onPressEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      handleSubmitMessage(event)
    }
  }

  return (
    <div
      className={`${styles['chat-input-message']} ${
        additionalClass ? additionalClass : ''
      } ${disabled ? styles['chat-input-message--disabled'] : ''}`}
    >
      {!!label && <label htmlFor={label}>{label}</label>}
      <form
        className={styles['chat-input-message__container']}
        onSubmit={handleSubmitMessage}
      >
        <textarea
          id={label}
          ref={chatValue}
          placeholder={placeholder}
          disabled={disabled}
          rows={2}
          onKeyDown={onPressEnter}
        />
        <ButtonIcon
          icon={Send}
          type='submit'
          aria-label='click to submit your message'
        />
      </form>
    </div>
  )
}

export { ChatInputMessage }
