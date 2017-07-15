function show() {
    var pop = document.getElementById("pop");
    var poptext = document.getElementById("poptext");
    pop.onclick = function() {
        poptext.style.display = "block";
    }
    window.onclick = function(event) {
        if (event.target != pop) {
            poptext.style.display = "none";
        }
    }
}

function show1() {
    var poptext = document.getElementById("poptext");
    poptext.classList.toggle("show");
}