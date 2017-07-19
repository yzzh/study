function move() {
    var bar = document.getElementById("bar");
    var progress = document.getElementById("progress");
    var width = 1;
    setInterval(function() {
        if (width < 100) {
            width++;
            bar.style.width = width + "%";
        } else {
            clearInterval(setInterval);
        }
    }, 10);
}


var btn = document.getElementById("btn");
/*var width = 10;
btn.onclick = setInterval(function(x) {

    var bar = document.getElementById("bar-a");
    if (width < 100) {
        width++;
        bar.style.width = width + "%";
        bar.innerHTML = width + "%";
    } else {
        clearInterval(setInterval);
    }
}, 10);*/

btn.onclick = function move1() {
    // var btn = document.getElementById("btn");
    var bar = document.getElementById("bar-a");
    var width = 10;
    setInterval(function() {
        if (width < 100) {
            width++;
            bar.style.width = width + "%";
            bar.innerHTML = width + "%";
        } else {
            clearInterval(setInterval);
        }
    }, 10);

}