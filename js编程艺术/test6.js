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

function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");

    for (var i = 0; i < tables.length; i++) {
        var rows = tables[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++) {
            if (j % 2) {
                addClass(rows[j], "odd");
            }
        }
    }
}

addLoadEvent(stripeTables);

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

function highlightRows() {
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function() {
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function() {
            this.style.fontWeight = "normal";
        }
    }
}
addLoadEvent(highlightRows);