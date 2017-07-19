var ul = document.getElementById("ul");
var li = ul.children;
var close = document.getElementsByClassName("close");

//创建页面中的span关闭按钮
function newSpan() {
    for (var i = 0; i < li.length; i++) {
        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li[i].appendChild(span);
    }
}
newSpan();

//函数checked()智能针对现有的li切换类checked,后面用户再添加的li无法实现此效果，除非在newLi()函数中针对新增加的li再添加点击后切换类checked的事件
/*function checked() {
    for (var i = 0; i < li.length; i++) {
        (function(j) {
            li[j].onclick = function e() {
                li[j].classList.toggle("checked");
            }
        })(i);
    }
}
checked();*/

//以下两个区别：ul为何在这里不能正确起作用?(现在又起作用了。。。)
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
/*var list = document.getElementById('ul');
list.addEventListener('click', function(ev) {
    // if (ev.target.tagName === 'LI') {  经实践发现if语句可以不需要，因为ul中除了li和close没有其他元素了，当然保险起见，最好是要
    ev.target.classList.toggle('checked');
    // }
}, false);
*/

//函数close()也可以实现close功能，但是较为复杂,close1()相对简单
/*function close0() {
    //此处如果把close放在close()外面作为全局变量后，函数close()就变成不是一个申明的函数了，why?
    var close = document.getElementsByClassName("close");
    for (i = 0; i < li.length; i++) {
        (function(j) {
            close[i].onclick = function() {
                li[j].style.display = "none";
            }
        })(i)
    }
}
// close();*/
function close1() {
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            //以下这两行都可以
            this.parentElement.style.display = "none";
            // this.parentNode.style.display = "none";
            //上一行也可以写成以下两行
            /*var div = this.parentNode;
            div.style.display = "none";*/
        }
    }
}
close1();

//以下这个函数原网站是在html页面中加onclick事件的，但是我加了之后页面刚刷新好alert框就出来了，若用以下这个方法就不会出现这种情况，why?
var add = document.getElementById("add");
add.onclick = function newLi() {
    //创建新的li元素
    var newLi = document.createElement("li");
    var input = document.getElementById("input").value;
    var txt = document.createTextNode(input);
    newLi.appendChild(txt);
    if (input.value === "") {
        alert("you must write something");
    } else {
        ul.appendChild(newLi);
    }
    document.getElementById("input").value = "";
    /*这里为何不可以用input变量来代替？input的话添加新的li后input框的内容无法清除，
       why?变量input是临时储存input输入框的属性value的变量，此处是需要对输入框的值进行更改，所以不可以直接在变量上更改，还是需要随时获取输入框的value再进行操作*/
    //创建关闭按钮
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newLi.appendChild(span);
    //关闭按钮添加事件(由于close1()函数是一个申明的函数，如果newLi()函数里面不再写一下关闭按钮事件的话就无法在这个函数里面实现关闭按钮的功能)
    span.onclick = function() {
            newLi.style.display = 'none';
        }
        //以下两行是为了实现给新增加的类切换类checked的效果（前提是现有的li使用了本文件中checked()函数）
        // newLi.onclick = function() {
        //     newLi.classList.toggle('checked');
        // }

}