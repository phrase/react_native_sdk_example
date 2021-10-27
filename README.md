# Phrase OTA for React Native Example

Example application for the [OTA React Native SDK](https://www.npmjs.com/package/react-native-phrase-sdk).

## Setup

- Replace `YOUR_DISTRIBUTION_ID` and `YOUR_ENVIRONMENT_ID` with your values from Phrase in https://github.com/phrase/react_native_sdk_example/blob/main/i18n.js
- `npm install`
- Start app with `npm start`

### Android
- Set Android SDK ENV variables `export ANDROID_SDK_ROOT=/path_to_sdk` `export ANDROID_HOME=/path_to_sdk`
- Make sure the Android emulator is running
- Run Android app `npm run android`

### iOS
- Run `cd ios && pod install`
- Launch app `npm run ios`

