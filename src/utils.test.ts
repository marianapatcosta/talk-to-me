import { VoiceGender } from './types'
import {
  getSpeechVoice,
  getLevenshteinDistance,
  getLevenshteinDistanceInPercentage,
  getOutput,
} from './utils'

const availableVoices = [
  {
    default: true,
    lang: 'pt-PT',
    localService: true,
    name: 'Microsoft Helia - Portuguese (Portugal)',
    voiceURI: 'Microsoft Helia - Portuguese (Portugal)',
  },
  {
    default: false,
    lang: 'en-GB',
    localService: false,
    name: 'Google UK English Female',
    voiceURI: 'Google UK English Female',
  },
  {
    default: false,
    lang: 'en-GB',
    localService: false,
    name: 'Google UK English Male',
    voiceURI: 'Google UK English Male',
  },
]

describe('getSpeechVoice', () => {
  it('should select voice with name `Microsoft Helia` when this name is passed as preferredVoiceName arg', () => {
    const voice = getSpeechVoice(availableVoices, 'Microsoft Helia', 'en', '')
    expect(voice).toMatchObject(availableVoices[0])
  })

  it('should select english male voice when `en` and ´male`are passed as lang and voiceGender arg', () => {
    const voice = getSpeechVoice(availableVoices, '', 'en', VoiceGender.MALE)
    expect(voice).toMatchObject(availableVoices[2])
  })

  it('should select the first english voice when `en` is passed as lang arg', () => {
    const voice = getSpeechVoice(availableVoices, '', 'en', '')
    expect(voice).toMatchObject(availableVoices[1])
  })

  it('should select the first male voice when ´male` is passed as voiceGender arg', () => {
    const voice = getSpeechVoice(availableVoices, '', '', VoiceGender.MALE)
    expect(voice).toMatchObject(availableVoices[2])
  })
})

describe('getLevenshteinDistance', () => {
  it('should return `2` when`Today`and `To may` are passed as arguments', () => {
    const distance = getLevenshteinDistance('Today', 'To may')
    expect(distance).toBe(2)
  })

  it('should return `0` when the same sentence is passed as both arguments', () => {
    const distance = getLevenshteinDistance('Today', 'Today')
    expect(distance).toBe(0)
  })

  it('should return the bigger sentence length when the other sentence is an empty string', () => {
    const distance = getLevenshteinDistance('Today', '')
    expect(distance).toBe(5)
  })
})

describe('getLevenshteinDistanceInPercentage', () => {
  it('should return `66.7` when `Today`and `To may` are passed as arguments', () => {
    const distance = getLevenshteinDistanceInPercentage('Today', 'To may')
    expect(distance).toBe(66.7)
  })
})

const input = 'Hello, Good evening!'
const conversation = [
  {
    inputKeywords: [['Hello']],
    inputs: [input],
    output: 'Hello, how are you?',
  },
  {
    inputKeywords: [],
    inputs: [input],
    output: 'Hello, how are you?',
  },
]
describe('getOutput', () => {
  it('should return `Hello, how are you?` when `Hello, Good evening!` is obtained from speech recognition', () => {
    const output = getOutput(conversation, 'Hello, Good evening!')
    expect(output).toBe('Hello, how are you?')
  })

  it('should return `Hello, how are you?` when `Hello` is included in the result of speech recognition', () => {
    const output = getOutput(conversation, "Hello, What's up")
    expect(output).toBe('Hello, how are you?')
  })
})
