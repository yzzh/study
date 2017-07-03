function addHeadListEvent() {
    var headlist = document.getElementsByClassName('headlist');
    var y = 0;
    setInterval(function() {
        if (y <= -120) {
            y = 60;
        }
        y -= 60; //没有else，所以执行顺序为先执行If条件语句及其执行语句，后再执行y -= 60；
        // headlist[0].style.transform = `translate3d(0px, ${y}px, 0px)`;
        headlist[0].style.transform = 'translate3d(0px, ' + y + 'px, 0px)';
    }, 2000);
}
addHeadListEvent();

function addHeadListEvent1() {
    var headlist = document.getElementsByClassName("headlist");
    var y = 0;
    setInterval(function() {
        if (y > -120) {
            y -= 60;
            headlist[0].style.transform = 'translate3d(0px, ' + y + 'px, 0px)';
        }
        y = 60;
    }, 2000);
}
// addHeadListEvent1();
function addHeadListEvent() {
    var headlist = document.getElementsByClassName('headlist');
    var y = 0;
    setInterval(function() {
        if (y <= -120) {
            y = 0;
        } else {
            y -= 60; //和addHeadListEvent()一样的效果，并且少执行了一次，节省了一次运算
        }
        // headlist[0].style.transform = `translate3d(0px, ${y}px, 0px)`;
        headlist[0].style.transform = 'translate3d(0px, ' + y + 'px, 0px)';
    }, 2000);
}