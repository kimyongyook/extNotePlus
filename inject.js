window.onload = function(){
    chrome.storage.onChanged.addListener(function(changes, namespace) {
    
        var act = changes["act"].newValue;
        console.log(act);
        
        document.getElementById("draft-status-lozenge").append("<span>test</span>");
    
    });
}


