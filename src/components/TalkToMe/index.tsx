import {
  ReactElement,
  useState,
  MouseEvent,
  MemoExoticComponent,
  useCallback,
  CSSProperties,
} from 'react'
import { Avatar as DefaultAvatar, ButtonIcon, TextChat } from '../../components'
import { Keyboard, Microphone } from '../../assets/svg'
import { AvatarProps, Dialogue, VoiceGender } from '../../types'
import { useSpeech } from '../../hooks/useSpeech'
import styles from './styles.module.scss'

enum ChatMode {
  TALK = 'talk',
  TEXT = 'text',
}

const HIDE_ANIMATION_DURATION = 0.5 // in seconds

export interface TalkToMeProps {
  conversation: Dialogue[]
  avatarProps: AvatarProps
  avatar?: MemoExoticComponent<(avatarProps: AvatarProps) => JSX.Element>
  defaultOutput?: string
  lang?: string
  preferredVoiceName?: string
  voiceGender?: VoiceGender | ''
  additionalClass?: string
  avatarAdditionalClass?: string
  textChatPlaceholder?: string
  activateSpeech?: boolean
  activateTextChat?: boolean
  interactive?: boolean
  onUnmatchedOutput?: () => Promise<void> | void
  onTyping?: () => void
  onStopTalking?: () => void
  onNoSpeechRecognitionSupport?: () => void
}

export const TalkToMe = ({
  conversation,
  avatarProps,
  lang = 'en',
  defaultOutput = "I didn't understand!",
  textChatPlaceholder = 'Type your question here',
  activateTextChat = true,
  activateSpeech = true,
  additionalClass = '',
  avatarAdditionalClass = '',
  avatar: CustomAvatar,
  preferredVoiceName,
  voiceGender,
  interactive = true,
  onUnmatchedOutput,
  onTyping,
  onStopTalking,
  onNoSpeechRecognitionSupport,
}: TalkToMeProps): ReactElement => {
  const supportSpeechRecognition =
    (typeof window !== 'undefined' && 'SpeechRecognition' in window) ||
    'webkitSpeechRecognition' in window
  const showToggleButton =
    supportSpeechRecognition && activateSpeech && activateTextChat
  const [chatMode, setChatMode] = useState<ChatMode>(
    activateSpeech && supportSpeechRecognition ? ChatMode.TALK : ChatMode.TEXT
  )
  const [textChatDisappearing, setTextChatDisappearing] = useState(false)

  const toggleChatMode = useCallback(
    (event: MouseEvent<HTMLButtonElement>): void => {
      event.stopPropagation()
      if (chatMode === ChatMode.TALK) {
        setChatMode(ChatMode.TEXT)
        return
      }

      setTextChatDisappearing(true)
      setTimeout(() => {
        setChatMode(ChatMode.TALK)
        setTextChatDisappearing(false)
      }, HIDE_ANIMATION_DURATION * 1000)
    },
    [chatMode]
  )

  const onAvatarClick = (): void => {
    if (chatMode !== ChatMode.TALK) {
      setChatMode(ChatMode.TALK)
    }
    startListening()
  }

  if (!supportSpeechRecognition) {
    !!onNoSpeechRecognitionSupport && onNoSpeechRecognitionSupport()
  }

  const { startListening, talking } = useSpeech({
    supportSpeechRecognition,
    conversation,
    lang,
    defaultOutput,
    preferredVoiceName,
    voiceGender,
    onUnmatchedOutput,
    onStopTalking,
  })

  const Avatar = CustomAvatar || DefaultAvatar

  return (
    <div className={`${styles['talk-to-me']} ${additionalClass}`}>
      <div className={`${styles['talk-to-me__avatar-wrapper']} `}>
        <button
          data-testid='avatar-button'
          className={styles['talk-to-me__button']}
          onClick={onAvatarClick}
          disabled={!interactive || !supportSpeechRecognition}
        >
          <Avatar
            additionalClass={avatarAdditionalClass}
            talking={talking}
            {...avatarProps}
          />
        </button>

        {interactive && showToggleButton && (
          <ButtonIcon
            data-testid='toggle-button'
            icon={chatMode === ChatMode.TALK ? Keyboard : Microphone}
            onClick={toggleChatMode}
            aria-label={`click to activate ${
              chatMode === ChatMode.TEXT ? ChatMode.TALK : ChatMode.TEXT
            } mode to chat.`}
            additionalClass={styles['talk-to-me__toggle']}
          />
        )}
      </div>
      {interactive && activateTextChat && chatMode === ChatMode.TEXT && (
        <TextChat
          conversation={conversation}
          defaultOutput={defaultOutput}
          textChatPlaceholder={textChatPlaceholder}
          additionalClass={`${styles['talk-to-me__texting']} ${
            textChatDisappearing ? styles['talk-to-me__texting--hide'] : ''
          }`}
          style={
            {
              '--hide-duration': `${HIDE_ANIMATION_DURATION}s`,
            } as CSSProperties
          }
          onUnmatchedOutput={onUnmatchedOutput}
          onTyping={onTyping}
        />
      )}
    </div>
  )
}
