function prepareSlideshow() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("linklist")) return false;
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("id", "preview");
    preview.setAttribute("src", "https://gw.alicdn.com/imgextra/i4/119/TB2oFK7pxtmpuFjSZFqXXbHFpXa_!!119-0-yamato.jpg_q50.jpg");
    preview.setAttribute("alt", "building blocks of web design");
    slideshow.appendChild(preview);
    var list = document.getElementById("linklist");
    insertAfter(slideshow, list);
    var links = document.getElementsByTagName("a");
    links[0].onmouseover = function() {
        moveElement("preview", -100, 0, 10);
    }
    links[1].onmouseover = function() {
        moveElement("preview", -200, 0, 10);
    }
    links[2].onmouseover = function() {
        moveElement("preview", -300, 0, 10);
    }
}
addLoadEvent(prepareSlideshow);