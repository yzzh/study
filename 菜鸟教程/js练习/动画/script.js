function myAnimation() {
    var elem = document.getElementById("animation");
    var pos = 0;
    setInterval(function move() {
        if (pos < 350) {
            pos++;
            elem.style.top = pos + "px";
            elem.style.right = pos + "px";
        } else {
            clearInterval(setInterval);
        }
    }, 10)
}