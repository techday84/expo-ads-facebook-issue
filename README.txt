Pasos:

1.- Crear projecto
react-native init facebookadtest

2.- Instalar y configurar unimodules:
https://github.com/unimodules/react-native-unimodules

npm install react-native-unimodules

Configure iOS
Go back to the ios directory and open your Podfile, make your Podfile look like this one.
If you need to customize the path to node_modules, for example because you are using yarn workspaces, then you can pass in a param for this: use_unimodules!(modules_paths: ['./path/to/node_modules'])
Run pod install again
Update your AppDelegate.h and AppDelegate.m according to this diff.
If you use react-native-navigation, you will need to use its bridgeManagerDelegate option like in this diff.
Add permission usage description keys to Info.plist
In order to submit your app to the App Store, you will need to eventually add these keys to your Info.plist. Even if you don't use the APIs described, you need to include the keys because code related to asking the permission will be bundled regardless, and Apple's static analysis tools will detect it and reject your app if the key isn't present. Including the key without using it has no impact to your users - iOS app permissions are requested at runtime and not listed in the app store listing as they are on Android. Test the permission prompts and customize the message as needed.

<key>NSCalendarsUsageDescription</key>
<string>Allow $(PRODUCT_NAME) to access your calendar</string>
<key>NSCameraUsageDescription</key>
<string>Allow $(PRODUCT_NAME) to use the camera</string>
<key>NSContactsUsageDescription</key>
<string>Allow $(PRODUCT_NAME) to access your contacts</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>Allow $(PRODUCT_NAME) to use your location</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>Allow $(PRODUCT_NAME) to use your location</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>Allow $(PRODUCT_NAME) to use your location</string>
<key>NSMicrophoneUsageDescription</key>
<string>Allow $(PRODUCT_NAME) to access your microphone</string>
<key>NSMotionUsageDescription</key>
<string>Allow $(PRODUCT_NAME) to access your device's accelerometer</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Give $(PRODUCT_NAME) permission to save photos</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Give $(PRODUCT_NAME) permission to access your photos</string>
<key>NSRemindersUsageDescription</key>
<string>Allow $(PRODUCT_NAME) to access your reminders</string>


3.- Instalar expo-facebook-ads

https://github.com/expo/expo/tree/master/packages/expo-ads-facebook

npm install expo-ads-facebook

3.- Cambiar código  en app.js
