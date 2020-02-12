chrome.storage.onChanged.addListener(function(changes, namespace) {
    var act = changes["act"].newValue;
    console.log(act);
    // console.log();
    document.getElementById("draft-status-lozenge").setAttribute("original-title","초안아아아아");
    document.getElementById("wow").appendChild("<span>test</span>");
    // $("#draft-status-lozenge").setAttribute("original-title","초안아아아아");
    // $("#draft-status-lozenge").append("<span>test</span>");
});
