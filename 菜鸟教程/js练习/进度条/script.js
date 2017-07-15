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

function move1() {
    // var btn = document.getElementById("btn");
    var bar = document.getElementById("bar-a");
    var progress = document.getElementById("progress-a");
    var width = 10;
    btn.addEventListner("click", setInterval(function() {
        if (width < 100) {
            width++;
            bar.style.width = width + "%";
            bar.innerHTML = width + "%";
        } else {
            clearInterval(setInterval);
        }
    }, 10), false);

}

move1();