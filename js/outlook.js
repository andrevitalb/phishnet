console.log("outlook.js loaded")

// function injectScript(url) {
// 	return new Promise((resolve, reject) => {
// 		const script = document.createElement("script")
// 		script.src = url
// 		script.addEventListener("load", resolve)
// 		script.addEventListener("error", (e) => reject(e.error))
// 		document.head.appendChild(script)
// 	})
// }

// chrome.runtime.sendMessage({ action: "fetchOutlookEmails" }, (response) => {
// 	const emails = response.emails

// 	const extractedData = emails.map((email) => {
// 		console.log(email)
// 		const spf = email.headers["SPF"]
// 		const dkim = email.headers["DKIM"]
// 		const dmarc = email.headers["DMARC"]

// 		return { spf, dkim, dmarc }
// 	})

// 	// Perform SPF, DKIM, and DMARC checks
// 	extractedData.forEach((data) => {
// 		// Perform SPF check
// 		if (data.spf === "pass") {
// 			console.log("SPF check passed")
// 		} else {
// 			console.log("SPF check failed")
// 		}

// 		// Perform DKIM check
// 		if (data.dkim === "pass") {
// 			console.log("DKIM check passed")
// 		} else {
// 			console.log("DKIM check failed")
// 		}

// 		// Perform DMARC check
// 		if (data.dmarc === "pass") {
// 			console.log("DMARC check passed")
// 		} else {
// 			console.log("DMARC check failed")
// 		}
// 	})
// })
