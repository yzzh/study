var section = document.getElementsByClassName("section");
var title = document.getElementsByClassName("title");
var body = document.getElementsByClassName("body");

// function click() {
//     for (var i = 0; i < title.length; i++) {
//         (function(j) {
//             title[i].onclick = function() {
//                 section[j].classList.toggle("open");
//             }
//         })(i)

//     }
// }
// click();

$(document).ready(function() {
    $(".title").click(function(event) {
        //   $(".section").toggleClass("open");此行的效果： 每次点击其中一个title时所有body元素都出现切换类的效果
        $(event.currentTarget).parent().toggleClass("open");
    })
})

// $(document).ready(function() {
//         $(".title").click(function(event) {
//             // $(".body").toggle();此行的效果： 每次点击其中一个title时所有body元素都出现切换类的效果
//             $(event.currentTarget).next().toggle();
//         })
//     }) //css中.section不写固定高度，.body设置初始display:none；即可通过此函数实现点击title显示/隐藏body部分的效果

/*实现这个下拉菜单的效果有很多种方法，其中可以将.body类中的transform: translateY(-100%)去掉，.section.open .body {
transform: none;}改为.section.open .body {height: auto;}，就可实现原来的效果*/

function show() {
    var btn = document.getElementsByClassName("dropbtn");
    var down = document.getElementsByClassName("myDropdown");
    for (var i = 0; i < btn.length; i++) {
        (function(j) {
            btn[j].onclick = function() {
                down[j].classList.toggle("show");
            }
        })(i)
    }
}
// show()

// var btn = document.getElementsByClassName("dropbtn");
// var down = document.getElementsByClassName("myDropdown");
// window.onclick = function(e) {
//     if (e.target.matches('.dropbtn')) {
//         for (var i = 0; i < down.length; i++) {
//             if (!down[i].classList.contains("show")) {
//                 down[i].style.display = "block";
//             } else {
//                 down[i].style.display = "none";
//             }
//         }
//     }
// }