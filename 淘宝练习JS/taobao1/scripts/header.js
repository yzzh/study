function addHeaderMenu() {
    var area = document.getElementsByClassName("header-menu-area");
    var menu = document.getElementsByClassName("header-menu");
    for (var i = 0; i < area.length; i++) {
        (function(i) {
            area[i].addEventListener("mouseover", function(event) {
                area[i].classList.add("hover")
            }, false);
            area[i].addEventListener("mouseout", function(event) {
                area[i].classList.remove("hover")
            }, false);
        })(i);
    }
}
addHeaderMenu();