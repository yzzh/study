function addClassHide() {
    var li = document.getElementsByClassName("service-text")[0];
    var liList = li.children;
    var hide = document.getElementsByClassName("service-hide");
    for (var i = 0; i < liList.length; i++) {
        (function(j) {
            liList[j].onmouseover = function(event) {
                hide[j].classList.remove("hide");
            }
            liList[j].onmouseout = function(event) {
                hide[j].classList.add("hide");
            }
        })(i);
    }
} //鼠标没法选中service-hide里的内容
addClassHide();

function addClassHide1() {
    var ul = document.getElementsByClassName("service-text")[0];
    var li = ul.children;
    var hide = document.getElementsByClassName("service-hide");
    var hideCover = document.getElementsByClassName("tb-service-hide")[0];
    var ulCover = document.getElementsByClassName("tb-service")[0];
    //var index = li.getAttribute("data-index");
    for (var i = 0; i < li.length; i++) {
        li[i].onmouseover = function(removeClass) {
            var index = this.getAttribute("data-index");
            hide[index].classList.remove("hide");
        }
        ulCover.onmouseout = function(addClass) {
            //var index = this.getAttribute("data-index");
            //hide[index].classList.add("hide");
            hideCover.classList.add("hide");
        }
    }
}
//addClassHide1();
function addClassHide2() {
    var ul = document.getElementsByClassName("service-text")[0];
    var li = ul.children;
    var hide = document.getElementsByClassName("service-hide");
    var hideCover = document.getElementsByClassName("tb-service-hide")[0];
    var ulCover = document.getElementsByClassName("tb-service")[0];
    var prev;
    for (var i = 0; i < li.length; i++) {
        ulCover.onmouseover = function(e) {
            if (e.fromElement && e.fromElement.nodeName == 'LI') {
                var index = e.fromElement.getAttribute("data-index");
                if (prev) {
                    prev.classList.add('hide');
                }
                prev = hide[index];
                prev.classList.remove('hide');
            }
        }
        ulCover.onmouseout = function(e) {
            console.log(e);
            if (prev && (e.target.classList.contains('tb-service-hide') || e.target.classList.contains('tb-service'))) {
                console.log(prev.classList);
                prev.classList.add('hide');
            }
        }
    }
}
//addClassHide2();

function addSidebarB() {
    var bNotice = document.getElementsByClassName("sidebar-b-notice")[0];
    var notice = bNotice.children;
    var list = document.getElementsByClassName("bd-list");
    var prevNotice = notice[0];
    var prevList = list[0];
    for (var i = 0; i < notice.length; i++) {
        notice[i].addEventListener("mouseover", function(e) {
            if (this === prevNotice) return;
            var index = this.getAttribute("data-index");
            prevNotice.classList.remove("selected");
            prevList.classList.add("hide");
            prevNotice = notice[index];
            prevList = list[index];
            prevNotice.classList.add("selected");
            prevList.classList.remove("hide");
        }, false);
    }
}
addSidebarB();

function addSidebarC() {
    var list = document.getElementsByClassName("c-list");
    var box = document.getElementsByClassName("sidebar-c-box");
    var prevList = list[0];
    var prevBox = box[0];
    for (var i = 0; i < list.length; i++) {
        list[i].onmouseover = function e() {
            var index = this.getAttribute("data-index");
            prevList.classList.remove("choice");
            prevBox.classList.remove("current");
            prevList = list[index];
            prevBox = box[index];
            prevList.classList.add("choice");
            prevBox.classList.add("current");
        }
    }
}
addSidebarC();

function closeBlock() {
    var area = document.getElementsByClassName("box-line-area");
    var list = document.getElementsByClassName("c-list");
    var box = document.getElementsByClassName("sidebar-c-box");
    for (var i = 0; i < box.length; i++) {
        (function(j) {
            area[j].onclick = function e() {
                //area[j].parentNode.parentNode.style.display = "none";如果用这个的话鼠标再移回c-list区域该显示出来的页面就不出来了
                list[j].classList.remove("choice");
                box[j].classList.remove("current");
            }
        })(i)
    }
}
closeBlock();

function boxConvelList() {
    var tab = document.getElementsByClassName("box-tabs")[0];
    var tabList = tab.children;
    var convel = document.getElementsByClassName("box-convel-list");
    var prevTabList = tabList[0];
    var prevConvel = convel[0];
    for (var i = 0; i < tabList.length; i++) {
        (function(j) {
            tabList[j].onmouseover = function e() {
                prevConvel.classList.remove("convel-list-current");
                prevTabList.classList.remove("hovercolor");
                prevConvel = convel[j];
                prevTabList = tabList[j];
                prevConvel.classList.add("convel-list-current");
                prevTabList.classList.add(("hovercolor"))
            }
        })(i)
    }
}
// boxConvelList(); //此方法不需要在html里面加data-index

function boxConvelList1() {
    var tab = document.getElementsByClassName("box-tabs")[0];
    var tabList = tab.children;
    var convel = document.getElementsByClassName("box-convel-list");
    var prevTabList = tabList[0];
    var prevConvel = convel[0];
    for (var i = 0; i < tabList.length; i++) {
        tabList[i].onmouseover = function e() {
            // if (this === prevTabList) return;
            var index = this.getAttribute("data-index");
            prevTabList.classList.remove("hovercolor");
            prevConvel.classList.remove("convel-list-current");
            prevTabList = tabList[index];
            prevConvel = convel[index];
            prevTabList.classList.add("hovercolor");
            prevConvel.classList.add("convel-list-current");
        }
    }
}
// boxConvelList1();//此时和boxConvelList()函数一样的效果

function boxConvelList2() {
    var tab = document.getElementsByClassName("box-tabs")[0];
    var tabList = tab.children;
    var convel = document.getElementsByClassName("box-convel-list");
    var prevIndex = 0;
    var prevTabList = tabList[prevIndex];
    var prevConvel = convel[prevIndex];
    var count = 0;
    for (var i = 0; i < tabList.length; i++) {
        (function(j) {
            tabList[j].onmouseover = function e() {
                if (j) {
                    prevConvel.classList.remove('show');
                }
                // prevConvel.classList.add("hide");
                prevTabList.classList.remove("hovercolor");

                if (j > prevIndex) {
                    prevConvel.classList.remove("convel-list-current-rtol");
                    prevConvel.classList.remove("convel-list-current-ltor");
                    prevTabList = tabList[j];
                    prevIndex = j;
                    prevConvel = convel[prevIndex]
                    prevConvel.classList.add("convel-list-current-rtol");
                    count += 1;
                } else if (j < prevIndex) {
                    prevConvel.classList.remove("convel-list-current-rtol");
                    prevConvel.classList.remove("convel-list-current-ltor");
                    prevTabList = tabList[j];
                    prevIndex = j;
                    prevConvel = convel[prevIndex]
                    prevConvel.classList.add("convel-list-current-ltor");
                    count += 1;
                }

                // prevConvel.classList.remove("hide");
                prevTabList.classList.add(("hovercolor"))
            }
        })(i)
    }
}
boxConvelList2();