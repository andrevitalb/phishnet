chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === "complete") {
		if (tab.url.includes("mail.google.com")) {
			console.log("Gmail tab detected!")
			chrome.scripting.executeScript({ target: { tabId }, files: ["js/gmail.js"] })
		} else if (tab.url.includes("outlook.live.com")) {
			console.log("Outlook tab detected!")
			chrome.scripting.executeScript({ target: { tabId }, files: ["js/outlook.js"] })
		}
	}
})
