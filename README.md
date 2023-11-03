# Tlon Mobile Automation testing

This repository is POC status.
As of 11/03/2023 it runs locally with a mobile device connected or a simulator.

If the inititive gets traction, the code here would be plugged into a cloud solution such as Saucelabs or Browserstack and run by CI/CD actions.

## Local

### Install dependencies

`npm i --location=global appium`

`appium driver install uiautomator2`

### Android

1. Connect device via USB and ensure it is in development mode.

Ensure `adb` is available and check for devices:

`adb devices`

Should output the connected device ID, fior example

```
List of devices attached
1122AAABB	device
```

For the sample test (join group) the device is expected to have the tlon app installed and authenticated.

11/03/2023 Note:

The group is hardcoded in the test. After running, please reject the invite manually before running the test agaibn.

To do: add accessibilioty IDs or HTML IDs to elements to be targeted by WebdriverIO. Right now the xpath selectorsare not robust and "text="Reject Invite" is reused.

2. Start appium server in a separate terminal window

`appium server`

3. Once this project's node modules are installed, run the sample test with:

`node android-join-group.js`

## References

[Quickstart Intro - Appium Documentation](https://appium.io/docs/en/2.1/quickstart/)
(node v19.3.0)
