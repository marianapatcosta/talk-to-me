# Talk to Me

Talk to Me is an application that allows the user to talk/text to a customizable avatar. It was developed with Speech recognition API, TypeScript, React and SCSS modules.

The interaction can occur in two ways:

1. By clicking in the avatar and talk;
2. By switching to text mode and text the input;

![talk-to-meA](https://mariana-costa.web.app/)

A demo is deployed [here](https://caniuse.com/speech-recognition).

Note: SpeechRecognition API is only available in some browsers. Check [here](https://caniuse.com/speech-recognition) browser compatibility.

## Installation
### **_npm_**

```shell
npm install @marianapatcosta/talk-to-me
```

### **_yarn_**

```shell
yarn add @marianapatcosta/talk-to-me
```

## Get Start

You can customize the conversation, by defining your own object of input/output and passing it as a `conversation` as a prop. This `conversation` object must follow the structure below, and you can check `conversation.example.ts` file as an example.

```js
const conversation = [
  {
    inputs: string[]
    inputKeywords: string[][] // array of keywords mandatory in the input, to reproduce the corresponding output. Each array of keywords must exist in the input to reproduce the corresponding output
    output: string
  },
  { ... },
]
```

The avatar shown in this project is an example created at [SVG Avatars](https://svgavatars.com/). You can create your own avatar, converted into a React component and add the SCSS classes needed for the SVG animations in the corresponding SVG elements, as shown in the template avatar.

`TalkToMe`component can be used as described in the example below and in `App.tsx` file:

```jsx
const Component = () => {
  return (
    <h1>
    <h1>Click and talk to me</h1>
    <TalkToMe
      conversation={conversation}
      onStopTalking={smile}
      avatarProps={avatarProps}
      onTyping={smile}
      onUnmatchedOutput={onUnmatchedOutput}
    />
    </>
  )
}
```

You can further customize your component by passing the props listed below:
| Prop name | Type | Description | Default |
|----------|:-------------|------:|-------:|
| conversation | Dialogue[] | Array of dialogues to be used in the conversation with the avatar | - |
| avatarProps | AvatarProps | Props to be passed to the SVG avatar | - |
| avatar* | () => JSX.Element | React Component with the custom SVG | - |
| defaultOutput* | string | Sentence that is spoken/written when no matching output is found for the inserted input. | _I didn't understand!_ |
| lang* | string | Code of the language used for input/output speech | en |
| preferredVoiceName* | string | Name of a specific SpeechRecognition API voice to be configured for the avatar | the default value in the chosen browser |
| voiceGender* | string | Gender of the voice to be configured for the avatar. Can take the values "male" or "female". | - |
| additionalClass* | string | css class name to apply to the TalkToMe component. | - |
| avatarAdditionalClass* | string | css class name to apply to the Avatar. | - |
| textChatPlaceholder* | string | Placeholder to display in the text input component. | _Type your question here_ |
| activateSpeech* | boolean | Enables/Disable speech functionality | true |
| activateTextChat* | boolean | Enables/Disable text chat functionality | true |
| interactive* | boolean | Determines if the component is interactive or just displays the avatar | true |
| onUnmatchedOutput* | () => Promise<void> | void | Function to be executed when no matching input was found for the provided output | - |
| onTyping* | () => void | Function to be executed while the output text is being typed | - |
| onStopTalking* | () => void | Function to be executed when the output speech is finished | - |
| onNoSpeechRecognitionSupport* | () => void | Function to be executed when the browser does not support SpeechRecognition API | - |

\*optional

```js
interface AvatarProps {
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

export interface Dialogue {
  inputs: string[]
  inputKeywords: string[][]
}
```

## Available Scripts

### `yarn install`

Installs all the dependencies required to run and develop this application.

### `yarn dev`

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### `yarn build`

Build a production-ready application.

### `yarn preview`

Runs the production build locally

### `yarn storybook`

Runs storybook design system
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `yarn test:unit`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:unit-coverage`

Launches the test runner in the interactive watch mode and shows tets coverage report.
