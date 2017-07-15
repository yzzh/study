var section = document.getElementsByClassName("section");
var title = document.getElementsByClassName("title");
var body = document.getElementsByClassName("body");

function click() {
    for (var i = 0; i < title.length; i++) {
        title[i].onclick = (function() {
            // body[j].classList.add("click");
            body[j].classList.toggle("click");

        })(i);
    }
}
click();