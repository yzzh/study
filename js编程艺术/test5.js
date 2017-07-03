function displayAbbreviations() {
    //检查兼容性
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //取得缩略词abbr并建立数组
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    //遍历缩略词并以数组的形式保存其文本和title属性值
    for (var i = 0; i < abbreviations.length; i++) {
        if (abbreviations[i].childNodes.length < 1) continue; /*针对IE浏览器不支持abbr元素，IE在统计abbr元素的子节点个数时总时会返回一个错误的值0，所以会不再执行后面的循环*/
        var definition = abbreviations[i].getAttribute("title")
        var key = abbreviations[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表dl
    var dlist = document.createElement("dl");
    //遍历定义并创建dl中的内容
    for (key in defs) {
        var definition = defs[key];
        //创建定义标题dt及文本内容
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //创建定义描述dd及文本内容
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //将dt和dd添加到dl
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) return false; /*若浏览器不支持abbr则defs数组数量为空，即dl元素没有任何子节点，所以立刻退出displayAbbreviations函数 */
    //创建标题及内容
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //将标题和定理列表添加到页面主体（此处以HTML-DOM形式引用给定文档的body属性。另一种方法为DOM Core：document.getElementByTagName("body"）[0].）
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);


function displayCitations() {
    //检测兼容性
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false || !document.getAttribute || !document.setAttribute;
    //获取所有blockquote引用，并赋值给变量quotes
    var quotes = document.getElementsByTagName("blockquote");
    //如果没有引用元素，则结束循环（是否应该放在for循环前面？）(这段检测语句是否与遍历引用的循环作用重复的？)
    if (quotes.length < 1) return false;
    //遍历引用
    for (var i = 0; i < quotes.length; i++) {
        //如果没有cite属性，结束循环（此处用continue是因为要结束本次循环，但是不确定此函数后面是否需要再添加其他循环的意思吗？）
        if (!quotes[i].getAttribute("cite")) continue;
        //将cite属性赋值给变量url
        var url = quotes[i].getAttribute("cite");
        //获取变量quotes的所有子元素节点
        var quotesChildren = quotes[i].getElementsByTagName("*");
        //如果没有元素节点，则结束循环（此处用continue也是和上面一样的意思吗？）
        if (quotesChildren.length < 1) continue;
        //将quotes的最后一个子元素节点赋值给变量elem
        var elem = quotesChildren[quotesChildren.length - 1];
        //创建a元素及其文本内容，并将a元素的href属性设置为变量url包含的值
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);
        //创建sup元素，包围a元素（sup中的内容将会以当前文本流中字符高度的一半来显示，以此突出a元素文本内容）
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //将包围a元素的sup元素添加到quotes的最后一个子元素节点的位置上
        elem.appendChild(superscript);
    }
}
addLoadEvent(displayCitations);


function displayAccesskeys() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var links = document.getElementsByTagName("a");
    var akeys = new Array();
    for (var i = 0; i < links.length; i++) {
        if (!links[i].getAttribute("accesskey")) continue;
        var key = links[i].getAttribute("accesskey");
        var text = links[i].lastChild.nodeValue;

        akeys[key] = text;

    }
    var list = document.createElement("ul");
    for (key in akeys) {
        var text = akeys[key];
        var item = document.createElement("li");
        var str = key + ": " + text;
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);


    document.body.appendChild(header);
    document.body.appendChild(list);


}
addLoadEvent(displayAccesskeys);

function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += "";
        newClassName += value;
        element.className = newClassName;
    }
}

function styleHeaderSiblings(tag, theclass) { //对函数进行抽象
    if (!document.getElementsByTagName) return false;
    var elems = document.getElementsByTagName(tag);
    for (var i = 0; i < elems.length; i++) {
        var elem = getNextElement(elems[i].nextSibling);
        addClass(elem, theclass);
    }
}
addLoadEvent(function() {
    styleHeaderSiblings("h1", "intro");
});