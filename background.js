chrome.browserAction.onClicked.addListener(
    //     function (tab) {
    //         chrome.tabs.executeScript(tab.id, {
    //         file: 'inject.js'
    //     });
    // }
);

// function checkForValidUrl(tabId, changeInfo, tab) {

//     if (tab.url.indexOf("https://xxx.abc.com/CFM/Messages/FraudPrevention/") == 0) 
//         {
//         chrome.pageAction.show(tabId);
//         }
//     else if (tab.url.indexOf("https://xxx.abc.com/CFM/Messages/CFMEWFA/") == 0) 
//         {
//         chrome.pageAction.show(tabId);
//         }
// };

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//     chrome.tabs.executeScript(tab.id, {
//         file: 'inject.js'
//     });
// })


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch (request.act) {
            case "on":
                chrome.storage.sync.set({ "act": "on" }, function(){});
                sendResponse({ res: "request [ACTIVATE_ON]" }); // sending back empty response to sender
                break;
            case "off":
                chrome.storage.sync.set({ "act": "off" }, function(){});
                sendResponse({ res: "request [ACTIVATE_OFF]" }); // sending back empty response to sender
                break;
            default:
                chrome.storage.sync.set({ "act": "off" }, function(){});
                sendResponse({ res: "error" });
                // helps debug when request 'act' doesn't match
                alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
                break;
        }
    }
);