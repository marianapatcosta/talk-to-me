const speechRecognitionPrototype = {
  grammars: undefined,
  lang: 'en',
  continuous: false,
  interimResults: false,
  maxAlternatives: 0,
  serviceURI: '',

  start: jest.fn(),
  stop: jest.fn(),
  abort: jest.fn(),

  onaudiostart: jest.fn(),
  onsoundstart: jest.fn(),
  onspeechstart: jest.fn(),
  onspeechend: jest.fn(),
  onsoundend: jest.fn(),
  onaudioend: jest.fn(),
  onresult: jest.fn(),
  onnomatch: jest.fn(),
  onerror: jest.fn(),
  onstart: jest.fn(),
  onend: jest.fn(),
}

const speechGrammarListPrototype = {
  addFromString: jest.fn(),
}

const speechUtterancePrototype = {
  lang: 'en',
  voice: undefined,
  text: '',
  onerror: jest.fn(),
  onstart: jest.fn(),
  onend: jest.fn(),
}

export const SpeechRecognitionMock = Object.defineProperty(
  window,
  'SpeechRecognition',
  {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      prototype: speechRecognitionPrototype,
      new: () => speechRecognitionPrototype,
    })),
  }
)

export const SpeechGrammarListMock = Object.defineProperty(
  window,
  'SpeechGrammarList',
  {
    writable: true,
    value: jest.fn().mockImplementation(() => ( speechGrammarListPrototype)),
  }
)

export const SpeechUtteranceMock = Object.defineProperty(
  window,
  'SpeechSynthesisUtterance',
  {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      prototype: speechUtterancePrototype,
      new: () => speechUtterancePrototype,
    })),
  }
)
