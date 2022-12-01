import { ReactElement, useReducer } from 'react'
import { TalkToMe } from '@/components'
import { conversation } from './conversation.example'
import { AvatarProps } from './types'

const SMILE = 'smile'
const ROLL_EYES = 'rollEyes'
const ANTIPATHY_FACE = 'antipathyFace'

type Action =
  | { type: typeof SMILE; payload: Pick<AvatarProps, 'smiling'> }
  | { type: typeof ROLL_EYES; payload: Pick<AvatarProps, 'rollingEyes'> }
  | {
      type: typeof ANTIPATHY_FACE
      payload: Pick<AvatarProps, 'rollingEyes' & 'pouting'>
    }

const getUnmatchedSpeechAction = (): ((newStatus: boolean) => Action) =>
  Math.random() > 0.5
    ? (newStatus: boolean) => ({
        type: ROLL_EYES,
        payload: { rollingEyes: newStatus },
      })
    : (newStatus: boolean) => ({
        type: ANTIPATHY_FACE,
        payload: { liftLeftEyebrow: newStatus, pouting: newStatus },
      })

const avatarPropsReducer = (
  currentState: AvatarProps,
  action: Action
): AvatarProps => {
  switch (action.type) {
    case SMILE:
      return { ...currentState, ...action.payload }
    case ROLL_EYES:
      return { ...currentState, ...action.payload }
    case ANTIPATHY_FACE:
      return { ...currentState, ...action.payload }
    default:
      return currentState
  }
}

const initialAvatarProps: AvatarProps = {
  smiling: false,
  liftLeftEyebrow: false,
  pouting: false,
  rollingEyes: false,
}

function App(): ReactElement {
  const [avatarProps, dispatch] = useReducer(
    avatarPropsReducer,
    initialAvatarProps
  )

  const onUnmatchedOutput = async (): Promise<void> => {
    const getAction = getUnmatchedSpeechAction()
    dispatch(getAction(true))
    return new Promise((resolve) => {
      setTimeout(() => resolve(dispatch(getAction(false))), 1500)
    })
  }

  const smile = (): void => {
    setTimeout(() => dispatch({ type: SMILE, payload: { smiling: true } }), 50)
    setTimeout(
      () => dispatch({ type: SMILE, payload: { smiling: false } }),
      2000
    )
  }

  return (
    <div className='app'>
      <TalkToMe
        conversation={conversation}
        onStopTalking={smile}
        avatarProps={avatarProps}
        onTyping={smile}
        onUnmatchedOutput={onUnmatchedOutput}
      />
    </div>
  )
}

export default App
