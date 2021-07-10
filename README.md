# Detox-Testing-React-Native

A sample of using [Detox](https://github.com/wix/Detox#readme) with React Native Sample App

## Getting Started

### Set Up Your Development Environment

1. Follow [this guide](https://reactnative.dev/docs/environment-setup) outlined to setup 'React Native CLI QuickStart'

2. For Android see the Detox Guide [Setting Up an Android Development & Testing Environment](https://github.com/wix/Detox/blob/master/docs/Introduction.AndroidDevEnv.md). The default avdName for this project is `Pixel API 30`.

### App Setup

1. Make a folder and navigate to it: `mkdir detox-sample` then `cd detox-sample`.

2. Clone the repo `git clone https://github.com/MuckT/Detox-Testing-React-Native.git`.

3. Navigate to the folder you cloned into and install the dev dependencies: `yarn install`.

### Running the App

1. Start the App: `yarn start`

2. In a new terminal run `yarn <android|ios>` to run the application

### Running Detox

1. Create you Detox test build:
  Mac / Linux `detox build -c <android|ios>` OR Windows `yarn win:build:detox`

2. Run the app

3. Run Detox: `yarn e2e:<android|ios>`

## Detox Video Sample

![Detox-Sample](https://user-images.githubusercontent.com/26950305/125153496-eef5b480-e108-11eb-8832-200bbec88c2f.gif)

