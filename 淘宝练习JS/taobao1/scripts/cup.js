function addClass() {
    var search = document.getElementById("search");
    //var search = document.getElementsByClassName("search")[0];
    var tmall = document.getElementById("tmall")
    tmall.addEventListener("click", function(e) {
        search.classList.add("selected");
    }, false);
}
//addClass();

function addClass() {
    var search = document.getElementById("search");
    var text = document.getElementsByClassName("search-tab-text");

    var input = document.getElementsByClassName("search-input")[0];
    var button = document.getElementsByClassName("search-button")[0];
    var prevText = text[0];

    for (var i = 0; i < text.length; i++) {
        (function(j) {
            text[j].addEventListener("click", function(event) {
                text[j].classList.remove("selected");
                text[j].classList.remove("select");
                var index = this.getAttribute("data-index");
                var prevText = text[index];
                prevText.classList.add("selected");
                prevText.classList.add("select");

            }, false);
        })(i)
    }
}
//addClass();
function addClass() {
    var baby = document.getElementsByClassName("tab-baby")[0];
    var tmall = document.getElementsByClassName("tab-tmall")[0];
    var shop = document.getElementsByClassName("tab-shop");
    var search = document.getElementsByClassName("search")[0];
    var input = document.getElementsByClassName("search-input")[0];
    var button = document.getElementsByClassName("search-button")[0];

    baby.addEventListener("click", function(e) {
        baby.classList.add("baby");
        input.classList.add("baby");
        button.classList.add("baby");
    }, false)
    tmall.addEventListener("click", function(e) {
        tmall.classList.add("tmall");
        input.classList.add("tmall");
        button.classList.add("tmall");
    }, false)
    shop.addEventListener("click", function(e) {
        shop.classList.add("shop");
        input.classList.add("shop");
        button.classList.add("shop");
    }, false)
}
//addClass();

function close() {
    var qr = document.getElementById("qr-cover");
    var line = document.getElementsByClassName("line-area")[0];
    line.addEventListener("click", function(event) {
        qr.style.display = "none";
    }, false);
}
close();

function searchNav() {
    //var tabList = document.getElementById('searchTab').children;
    var tabList = document.getElementsByClassName("search-tab-text");
    for (var i = 0; i < tabList.length; i++) {
        tabList[i].addEventListener("click", function(event) {
            var index = this.getAttribute('data-index');
            var search = document.getElementsByClassName("search")[0];
            search.setAttribute('data-current', index);
        }, false);
    }
}
//searchNav();

function addClass() {
    var tab = document.getElementsByClassName("search-tab-text");
    for (var i = 0; i < tab.length; i++) {
        tab[i].addEventListener("click", function(event) {
            var index = this.getAttribute("data-index");
            var search = document.getElementsByClassName("search")[0];
            search.setAttribute("data-current", index);
        }, false);
    }
}
addClass();
//data-current表示父元素刚开始的值，data-index表示切换到每个子元素时子元素的样式，通过父元素的data-current来切换


function addClass1() {
    var tab = document.getElementsByClassName("search-tab-text");
    for (var i = 0; i < tab.length; i++) {
        tab[i].addEventListener("click", function(e) {
            var index = this.getAttribute("data-index");
            var search = document.getElementById("search");
            search.setAttribute("data-index", index);
        }, false);
    }
} //这个方法是用于#top中的“淘宝”“天猫”“店铺”三者依然需要根据用户点击切换样式，但是不需要默认显示已点击“淘宝”的样式的
//addClass1()