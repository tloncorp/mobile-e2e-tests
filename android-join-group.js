const { remote } = require("webdriverio");
async function main() {
  const caps = {
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:ensureWebviewsHavePages": true,
    "appium:nativeWebScreenshot": true,
    "appium:newCommandTimeout": 3600,
  };
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps,
  });
  // const deepLinkUrl = 'https://join.tlon.io/nibset-napwyn-tlon';
  const deepLinkUrl = "https://join.tlon.io/rolwyl-litlut-deeplinks-are-great";
  // await driver.navigateTo();
  await driver.execute("mobile:deepLink", {
    url: deepLinkUrl,
    package: "io.tlon.groups",
  });
  //android.widget.Button[@text="D Deeplinks are great"]
  await driver
    .$('//android.widget.Button[@resource-id="android:id/button1"]')
    .waitForExist({ timeout: 10000 });
  const okButton = await driver.$(
    '//android.widget.Button[@resource-id="android:id/button1"]'
  );
  await okButton.touchAction("tap");
  await driver
    .$('//android.widget.Button[@text="Invited"]')
    .waitForExist({ timeout: 10000 });
  const invitedButton = await driver.$(
    '//android.widget.Button[@text="Invited"]'
  );
  await invitedButton.touchAction("tap");
  const rejectButton = await driver.$(
    '//android.widget.Button[@text="Reject Invite"]'
  );
  await rejectButton.touchAction("tap");
  await driver.deleteSession();
}

main().catch(console.log);
