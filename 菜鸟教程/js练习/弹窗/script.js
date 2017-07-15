var btn = document.getElementById("mybtn");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

/*此处的window.onclick代表的是所有可以点击的区域*/
window.onclick = function(event) {
    //event.target表示当前点击的区域，若当前点击的区域是modal区域（由于modal区域默认是占满全屏的），则modal区域消失
    if (event.target == modal) {
        modal.style.display = "none";
    }
}