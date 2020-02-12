var plugin = {
    pluginOnStart: function () {
        this.init();

        //bind Plugin
        this.bindFontSize();
    },
    init: function () {
        var div = document.getElementById("toolbar");

        var cDiv = document.createElement("div");
        var id = document.createAttribute("id");
        id.value="plus-rte-toolbar"
        var att = document.createAttribute("class");       // Create a "class" attribute
        att.value = "aui-toolbar aui-toolbar2";                           // Set the value of the class attribute
        cDiv.setAttributeNode(id);
        cDiv.setAttributeNode(att);
        
        div.appendChild(cDiv);
    },
    bindFontSize() {

    },
    destroy: function () {
        var node = document.getElementById("toolbar");
        var childNode = document.getElementById("plus-rte-toolbar");
        node.removeChild(childNode);
    }
}

window.onload = function () {
    chrome.storage.onChanged.addListener(function (changes, namespace) {
        var act = changes["act"].newValue;
        act == "on" ? plugin.pluginOnStart() : plugin.destroy();
    });
}


