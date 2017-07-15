function showImg() {
    var img = document.getElementById("img");
    var close = document.getElementById("close");
    var modal = document.getElementById("modal");
    var bigimg = document.getElementById("bigimg");
    var caption = document.getElementById("caption");
    img.onclick = function() {
        modal.style.display = "block";
        bigimg.src = img.src;
        caption.innerHTML = this.alt;
    }
    close.onclick = function() {
        modal.style.display = "none";
    }
}
showImg();