function displayAccesskeys() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var links = document.getElementsByTagName("a");
    var list = document.createElement("ul");
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    for (var i = 0; i < links.length; i++) {
        if (!links[i].getAttribute("accesskey")) continue;
        var key = links[i].getAttribute("accesskey");
        var text = links[i].lastChild.nodeValue;
        var item = document.createElement("li");
        var item_text = document.createTextNode(key + ":" + text);
        item.appendChild(item_text);
        list.appendChild(item);

        document.body.appendChild(list);



    }
}
addLoadEvent(displayAccesskeys);