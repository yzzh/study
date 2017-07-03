function log(param) {
    console.log(param);
}

function showpic(whichpic) { /*定义函数，函数名showpic，参数whichpic,whichpic代表着一个元素节点，也就是这里的某个图片的a元素（元素节点就是P,body等）*/
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    /*利用whichpic和getAttribute得到a元素中图片的文件路径，方法是把路径href作为参数传递给getAttribute，然后通过对象whichpic的点语法访问已经被传递过href参数的
    getAttribute（getAttribute通过元素节点，也就是此处的whichpic调用）。最后把这些数据赋值给变量source，以节省代码*/
    var placeholder = document.getElementById("placeholder"); /*通过document调用getAttribute获取id=placeholder的元素的图片，并赋值给placeholder.以节省代码*/

    placeholder.setAttribute("src", source); /*通过setAttribute对元素节点placeholder的属性节点src做出修改，修改后的属性为source，也就是某个a元素的图片路径*/
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        /*当网页上的某个图片链接也就是a元素链接的title属性值就被提出来并赋值
               给变量text*/
        /*此处问号后面的语句为三元操作符语句，表示如果title属性存在，text将被正常赋值，如果title属性不存在，text将被赋值为一个空字符串（发现如果不写这一段，并且删掉
        某个title，text也表示为空字符串）*/
        var description = document.getElementById("description"); /*得到ID=description的p元素，并把他保存到变量description里 */
        if (description.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }

    }
    return true;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    log(body_element.childNodes.length);
}

function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return !showpic(this);
        }
        links[i].onkeypress = links[i].onclick;
    }
}

function addLoadEvent(func) { //定义函数名为addLoadEvent,参数为func的函数（func代表我需要用到的函数）
    var oldonload = window.onload; //将window.onload事件处理函数的值赋给变量oldonload
    if (typeof window.onload != 'function') { //检查window.onload上是否有绑定任何函数(类型是否为函数)
        window.onload = func; //如果window.onload事件处理函数上没有绑定(上一行中的!=‘function’代表不等于函数，即没有绑定任何函数),就将我需要用到的函数func添加给window.onload
    } else { //如果window.onload事件处理函数上有绑定了一些函数
        window.onload = function() { //为window.onload另行定义一个匿名函数（这是一种在代码执行的时候创建函数的办法）
            oldonload(); //先执行window.onload本身已经绑定的函数
            func(); //后执行我需要用到的函数
        }
    }
}
addLoadEvent(prepareGallery); //将我需要用到的函数prepareGallery加到addLoadEvent函数队列中去

function insertAfter(newElement, targetElement) { //把新元素插入到目标元素的后面
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "");
    placeholder.setAttribute("alt", "my image gellery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("choose an image");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}
addLoadEvent(preparePlaceholder);