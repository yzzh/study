var clear = document.getElementById("clear");
var calculator = document.getElementById("calculator");

clear.onclick = function() {
    document.getElementById("display").value = "";
}

calculator.addEventListener("click", function(e) {
    var target = e.target;
    var classList = target.classList;
    if (classList.contains("number") || classList.contains("operator")) {
        get(target.value);
    }
})

function get(value) {
    document.getElementById("display").value = (display.value + value);
}

document.getElementsByClassName("other")[1].onclick = function calculates() {
    var result = 0;
    result = document.getElementById("display").value;
    // document.getElementById("display").value = "";这一行没必要写
    document.getElementById("display").value = eval(result);
};