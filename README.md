# redux-audio
Redux bindings for HTML5 audio elements

## Installation

`npm install redux-audio`

## Usage

In your root reducer:

```js
import { audioReducer as audio } from 'redux-audio'
import { combineReducers } from 'redux'

export default combineReducers({ audio })
```

In your view component:

```js
import React from 'react'
import { Audio } from 'redux-audio'

export default () => (
  <div>
    <Audio src='example.mp3' autoPlay uniqueId='example' controls loop />
    <p>Hello world.</p>
  </div>
)
```

## `Audio` Container Component

The `Audio` container component wraps an HTML5 `audio` element, exposing it to Redux actions and bindings. It has the following props:

### autoPlay

Boolean. When `true`, the audio track will play when the component mounts. Defaults to `false`.

### controls

Boolean. When `true`, the `audio` element will expose its controls for playing. Defaults to `false`.

### loop

Boolean. When `true`, the track will loop playback. Defaults to `false`.

### preload

String. Possible values are `['none', 'metadata', 'auto']`. Defaults to `'metadata'`.

### src

String. The source of the audio track. Defaults to `''`.

### uniqueId

String. Required. A unique identifier for the component. Must be unique with respect to other currently mounted `Audio` components.

## Redux Store

The reducer provided attaches a single object to the main store object via the `audio` property. This object is an instance of [immutable's](https://facebook.github.io/immutable-js/) `Map` class. Each `Audio` component's state is accessible by calling `state.audio.get('uniqueId')` where `uniqueId` corresponds to the `uniqueId` prop passed to the `Audio` component. `Audio` components' state objects are added when the component is mounted and removed when the component unmounts.  Each `Audio` component's state is represented further by another `Map` object. This `Map` has the following keys:

### command

Corresponds to strings representing the method last called for the audio element. When `command` is updated, the corresponding method is called. Possible values are `['play', 'pause', 'none']`.

### state

Corresponds to the current state of the audio element. Possible values are `['playing', 'paused', 'ended', 'none']`.

### src

Corresponds to the current value for `src` passed to the `Audio` element. When the value is updated, the `src` prop for the `Audio` component is updated.

## Action Creators

All actions can be imported by `import { actionName } from 'redux-audio/actions'`, where `actionName` is the action you wish to import.

### audioPlay

Takes the `uniqueId` value of the component you want to play as an argument. Plays the audio track.

### audioPause

Takes the `uniqueId` value of the component you want to pause as an argument. Pauses the audio track.

### audioSrc

Takes two arguments. The first is the `uniqueId` value of the component you want to update. The second is the value you want the `src` prop to be updated to. Updates the `src` for the corresponding `Audio` component.
