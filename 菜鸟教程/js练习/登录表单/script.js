var btn = document.getElementById("btn");
var modal = document.getElementById("modal");
btn.onclick = function() {
    modal.style.display = "block";
}

// 关闭时也有动画效果怎么做？

/*window.onclick = function(e) {

    if (e.target == modal) {
        modal.style.display = "none";
    }
    var classList = e.target.classList;
    if (classList.contains("close") || classList.contains("cancelbtn")) {
        modal.style.display = "none";
    }
}*/
// window.onclick = function(e) {
//         var classList = e.target.classList;
//         if (classList.contains("close") || classList.contains("cancelbtn") || e.target == modal) {
//             modal.classList.add("fadeout");
//         }
//     }无法实现关闭登录框时的动画效果

window.onclick = function(e) {
        var classList = e.target.classList;
        if (classList.contains("close") || classList.contains("cancelbtn") || e.target == modal) {
            modal.style.animation = "scaleout .6s"; //标记为1，简称1行
            setTimeout(function() { //此函数标记为2函数，简称2函数
                modal.style.animation = "";
                modal.style.display = "none";
            }, 500);
        }
    }
    /*1行和2函数执行顺序是异步的（指开始时间为异步），1行先开始执行，2函数后开始执行，但是1行的执行的时候有0.6s的持续时间，此时2函数已经开始执行，
    2函数也有执行的持续时间，此时若两者的持续时间相等，就会发生1行已经执行完毕，2函数还有将近1s的时间空隙，执行效果上会出现动画效果已经执行完毕即登陆
    表单已经消失后再出现一下后再消失（执行2函数的表现），所以为了执行效果考虑，2函数的延迟执行时间需要比1行少（少多一些也没关系，若动画没有执行完毕，
    2函数可以强制让1行动画消失，效果上没有问题）。（同步：1行已经开始执行并且执行完毕2行才能开始执行。异步：1行开始执行的时候2行后面随即开始执行，异步
    执行间隙较短，一般看不太出来）
     */
    /*以上函数同时完成了三件事：1.鼠标点击modal-content外区域关闭登录框；2.点击close关闭符号关闭登录框；3.点击cancelbtn按钮关闭登录框*/