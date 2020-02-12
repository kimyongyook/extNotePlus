
var noteObj = {
    pageOnStart: function () {
        this.init();
        noteObj.bindCheckboxEvent();
    },
    init: function(){
        chrome.storage.sync.get(["act"], function(items){
            var actState = items.act;
            if(actState == "on"){
                document.getElementById("toggle").checked = true;
            }else if(actState == "off"){
                document.getElementById("toggle").checked = false;
            }else{
                document.getElementById("toggle").checked = false;
            }   
        });
    },
    bindCheckboxEvent: function () {
        document.getElementById("toggle").onchange = function () {
            if (document.getElementById("toggle").checked) {
                chrome.runtime.sendMessage({
                    act: "on"
                }, function (response) {
                    console.log(response.res);
                });
            } else {
                chrome.runtime.sendMessage({
                    act: "off"
                }, function (response) {
                    console.log(response.res);
                });
            }
        };
    }
}

window.onload = function () {
    this.noteObj.pageOnStart();
};
