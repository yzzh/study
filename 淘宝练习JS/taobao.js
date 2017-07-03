function getId(id) { //getdocumentById赋值给变量的抽象函数
    return document.getElementById(id);
}

function addEvent(dom, type, fn) { //addEventListener的抽象函数
    dom.addEventListener(type, fn, false);
}

function addTaoEvent() {
    var myTaoArea = document.getElementById('myTaoArea');
    var myTaoCon = document.getElementById('myTaoCon');
    addEvent(myTaoArea, 'mouseover', function(event) {
        //event.stopPropagation();
        myTaoCon.classList.remove('hide');
    }, false);
    addEvent(myTaoArea, 'mouseout', function(event) {
        // if (event.srcElement !== myTaoAreaAll) return;
        myTaoCon.classList.add('hide');
    }, false);
}
// addLoadEvent(addTaoEvent)
addTaoEvent();

function addShouEvent() {
    var shouCangArea = document.getElementById("shouCangArea");
    var shouCangCon = document.getElementById("shouCangCon");
    shouCangArea.addEventListener("mouseover", function(event) {
        shouCangCon.classList.remove("shouCang-hide");
    }, false);

    shouCangArea.addEventListener("mouseout", function(event) {
        shouCangCon.classList.add("shouCang-hide");
    }, false);
}
addShouEvent();

function addMaiEvent() { //模仿addShouEvent
    var maijiaArea = document.getElementById("maijiaArea");
    var maijiaConCover = document.getElementById("maijiaCon-cover");
    maijiaArea.addEventListener("mouseover", function(event) {
        maijiaArea.classList.add("hover")
    }, false);

    maijiaArea.addEventListener("mouseout", function(event) {
        maijiaArea.classList.remove("hover")
    }, false);
}
addMaiEvent();

function addClass(elementArea, elementCover) { //此函数是模仿addShouEvent和addMaiEvent写的抽象函数
    var elementArea = getId(elementArea);
    var elementCover = getId(elementCover);
    elementArea.addEventListener("mouseover", function(event) {
        elementCover.classList.remove("hide");
        elementArea.classList.add("hover")
    }, false);
    elementArea.addEventListener("mouseout", function(event) {
        elementCover.classList.add("hide");
        elementArea.classList.remove("hover")
    }, false);
} //结合hide和hover类来控制下拉菜单，和下拉菜单是上面的下边框和下面的上边框


addClass("kefuArea", "kefuCon-cover");

addClass("daohangArea", "daohangCon-cover");
addClass("main-left-p-a", "main-left-hide");

function addClassClick() {
    var lineArea = document.getElementById("lineArea");
    var qrcodeCover = document.getElementById("qrcode-cover");
    lineArea.addEventListener("click", function(event) {
        qrcodeCover.style.display = 'none';
        // qrcodeCover.setAttribute('style', 'display:none;');这个方法可能会影响其他STYLE属性，即覆盖掉其他style属性。

    }, false);
}
addClassClick();

function addtianMao() {
    var tian = document.getElementById("tian");
    var topInputCover = document.getElementById("top-input-cover");
    tian.addEventListener("click", function(event) {
        /*tian.classList.add("tianmao");*/
        topInputCover.classList.add("tianmao");
    }, false);

}
addtianMao();

function bannerSlider() {
    var current = 0;
    var prev, next;
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var list = document.getElementById('banner-img-list');
    var navList = document.getElementById('banner-nav-list').children;
    var imgList = list.children;
    console.log(imgList);
    prevBtn.addEventListener('click', toLeft, false);
    nextBtn.addEventListener('click', toRight, false);

    function toLeft() {
        next = current;
        if (!current) {
            current = 4;

        } else {
            current -= 1;
        }
        clearImgsClass();
        imgList[current].className = 'current';
        imgList[next].className = 'next';
        list.classList.add('to-left');
        navAddClass();
    }

    function toRight() {
        prev = current;
        if (current == 4) {
            current = 0;
        } else {
            current += 1;
        }
        clearImgsClass();
        imgList[current].className = 'current';
        imgList[prev].className = 'prev';
        list.classList.add('to-right');
        navAddClass();
    }

    function clearImgsClass() {
        list.classList.remove('to-right');
        list.classList.remove('to-left');
        for (var i = 0, length = imgList.length; i < length; i++) {
            imgList[i].className = '';
        }
    }

    function navListAddEvent() {
        for (var i = 0, length = navList.length; i < length; i++) {
            navList[i].onclick = (function(i) {
                return function(e) {
                    if (i == 4) {
                        current = 0;
                    } else {
                        current = i + 1;
                    }
                    toLeft();
                };
            })(i);
        }
    }
    navListAddEvent();

    function navAddClass() {
        for (var i = 0, length = navList.length; i < length; i++) {
            navList[i].className = '';
        }
        navList[current].className = 'current-nav';
    }
}
bannerSlider();

function addGongGaoClass(elementA, elementB) { //淘宝首页的.sidebar-b部分的JS抽象函数
    var elementA = document.getElementsByClassName(elementA)[0];
    var elementB = document.getElementById(elementB);
    elementA.addEventListener("mouseover", function(event) {
        elementB.classList.remove("hide");
    }, false);
    /*elementB.addEventListener("mouseover", function(event) {
        elementB.classList.remove("hide");
    }, false);*/
    elementA.addEventListener("mouseout", function(event) {
        elementB.classList.add("hide");
    }, false);
}
// addGongGaoClass("sidebar-b-nav-a", "sidebar-p-a");
// addGongGaoClass("sidebar-b-nav-b", "sidebar-p-b");
// addGongGaoClass("sidebar-b-nav-c", "sidebar-p-c");
// addGongGaoClass("sidebar-b-nav-d", "sidebar-p-d");
// addGongGaoClass("sidebar-b-nav-e", "sidebar-p-e");

// addGongGaoClass("app-group-a", "app-group-taobao");

function addEventShowList() {
    var sideBarNav = document.getElementById('sideBarNav');
    var sideBarNavList = sideBarNav.children;
    var sideBarCon = document.getElementById('sideBarCon');
    var sideBarConList = sideBarCon.children;
    var prevSideNav = sideBarNavList[0];
    var prevSideBarCon = sideBarConList[0];
    for (var i = 0, length = sideBarNavList.length; i < length; i++) {
        /*sideBarNavList[0].onmouseover = addMouse;
    sideBarNavList[1].onmouseover = addMouse;
    sideBarNavList[2].onmouseover = addMouse;
    sideBarNavList[3].onmouseover = addMouse;
    sideBarNavList[4].onmouseover = addMouse;*/
        sideBarNavList[i].onmouseover = function addMouse() {
            if (this === prevSideNav) return;
            var index = this.getAttribute('data-index');
            prevSideNav.classList.remove('selected');
            prevSideBarCon.classList.add('hide');
            prevSideNav = sideBarNavList[index];
            prevSideBarCon = sideBarConList[index];
            prevSideNav.classList.add('selected');
            prevSideBarCon.classList.remove('hide');
        }
    }
}
addEventShowList();

function addEventHideList() {
    var li = document.getElementsByClassName("sidebar-c-li");
    var hide = document.getElementsByClassName("sidebar-c-hide");
    var prevLi = li[0];
    var prevHide = hide[0];
    for (var i = 0; i < li.length; i++) {
        li[i].onmouseover = function addHideMouse() {
            // if (this === prevLi) return;
            var index = this.getAttribute("data-index");
            prevLi.classList.remove("choice");
            prevHide.classList.add("hide");
            prevLi = li[index];
            prevHide = hide[index];
            prevLi.classList.add("choice");
            prevHide.classList.remove("hide");
        }
    }
}
addEventHideList();


function hideClock() {
    var clock = document.getElementsByClassName("hide-clock");
    var hide = document.getElementsByClassName("sidebar-c-li");
    // var hide = document.getElementsByClassName("sidebar-c-hide");
    for (var i = 0; i < clock.length; i++) {
        (function(j) { //声明一个匿名方法，如果没有第245行的（i)去调用，她不会执行（此行括号里面的j是形参）
            clock[j].addEventListener("click", function(event) {
                clock[j].parentNode.parentNode.classList.add('hide');
                hide[j].classList.remove('choice');
                // hide[i].style.display = "none";
                //hide[i].setAttribute("style", "display:none");
            }, false);
        })(i); //237-245行叫立即执行函数。此括号里的i是实参
    }
}
hideClock();