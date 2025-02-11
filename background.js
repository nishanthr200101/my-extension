// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log("Screen Cut Extension Installed!");
});

// Listen for messages from the popup or content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "takeScreenshot") {
    chrome.tabs.captureVisibleTab(null, {}, (image) => {
      sendResponse({ image: image });
    });
    return true; // Keep the message channel open for sendResponse
  }
});
