function log(param) {
    console.log(param);
}

function showpic(whichpic) { /*定义函数，函数名showpic，参数whichpic,whichpic代表着一个元素节点，也就是这里的某个图片的a元素（元素节点就是P,body等）*/
    var source = whichpic.getAttribute("href");
    /*利用whichpic和getAttribute得到a元素中图片的文件路径，方法是把路径href作为参数传递给getAttribute，然后通过对象whichpic的点语法访问已经被传递过href参数的
    getAttribute（getAttribute通过元素节点，也就是此处的whichpic调用）。最后把这些数据赋值给变量source，以节省代码*/
    var placeholder = document.getElementById("placeholder"); /*通过document调用getAttribute获取id=placeholder的元素的图片，并赋值给placeholder.以节省代码*/
    placeholder.setAttribute("src", source); /*通过setAttribute对元素节点placeholder的属性节点src做出修改，修改后的属性为source，也就是某个a元素的图片路径*/
    var text = whichpic.getAttribute("title"); /*当网页上的某个图片链接也就是a元素链接被点击时，这个链接的title属性值就被提出来并赋值给变量text*/
    var description = document.getElementById("description"); /*得到ID=description的p元素，并把他保存到变量description里 */
    description.firstChild.nodeValue = text; /*把description对象的第一个子节点的nodevalue属性值设置为变量text的值*/
}
log(description.firstChild.nodeValue); /*显示description对象的第一个子节点的nodevalue属性值*/


function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    log(body_element.childNodes.length);
}
window.onload = countBodyChildren; /*利用onload事件处理函数实现在页面加载时执行countBodyChildren函数*/