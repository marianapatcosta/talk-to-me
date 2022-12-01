export enum VoiceGender {
  FEMALE = 'female',
  MALE = 'male',
}

export interface Dialogue {
  inputs: string[]
  inputKeywords: string[][] // array of keywords mandatory in the input, to look for a matched answer if levenshtein distance is not confident enough
  output: string
}

export interface AvatarProps {
  breathing?: boolean
  talking?: boolean
  smiling?: boolean
  pouting?: boolean
  blinking?: boolean
  rollingEyes?: boolean
  lookingUp?: boolean
  leftEyeWink?: boolean
  rightEyeWink?: boolean
  liftLeftEyebrow?: boolean
  liftRightEyebrow?: boolean
  width?: number
  height?: number
  additionalClass?: string
}
