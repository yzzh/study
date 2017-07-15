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

/*//函数checked()可以实现点击以后添加类checked的效果，但是无法实现再次选中li后移除类checked的效果，window.onclick也无法实现?
function checked() {
    for (var i = 0; i < li.length; i++) {
        (function(j) {
            li[j].onclick = function e() {
                li[j].classList.add("checked");
            }
            window.onclick = function(event) {
                if (event.target.tagName == "li") {
                    event.target.classList.remove("checked");
                }
            }
        })(i);
    }
}
// checked();*/

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
            //以下这两行有何区别?
            // close[i].parentElement.style.display = "none";
            this.parentNode.style.display = "none";
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
    if (input === "") {
        alert("you must write something");
    } else {
        ul.appendChild(newLi);
    }
    document.getElementById("input").value = ""; //这里为何不可以用input变量来代替？input的话添加新的li后input框的内容无法清楚，why?
    //创建关闭按钮
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newLi.appendChild(span);
    //关闭按钮添加事件(由于close1()函数是一个申明的函数，如果newLi()函数里面不重复写一下的话就无法在这个函数里面实现关闭按钮的功能)
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            // close[i].parentElement.style.display = "none";
            this.parentNode.style.display = "none";
        }
    }
}