/*从var slideIndex到function currentSlides(n)函数这三处是调用showSlides(n)函数，所以这个文件不需要另行调用函数*/

var slideIndex = 1;
showSlides(slideIndex); //默认slideIndex=1,然后调用showSlides(n)函数（n为形参，调用时给n传了实参slideIndex）

function plusSlides(n) {
    showSlides(slideIndex += n);
    /*此处函数是对向左向右的的箭头起作用的，当点击的时候传入参数n，并且执行当前数值slideIndex+n，于是图片就展示为加了以后的图片数值*/
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    /*此处是针对dot，和html中的dot中相对应*/
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("my-slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
        /*此处的if语句中的n是针对点击向左向右的动作次数，当次数大于图片数量时，手动设置为展示第一个图片，并且此处函数会被plusSlides(n)函数调用*/
    }
    if (n < 1) {
        slideIndex = slides.length;
        /*此处的if语句中的n是针对点击向左向右的动作次数，当次数小于图片数量时，手动设置为展示第三个图片，并且此处函数会被plusSlides(n)函数调用*/
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        /*此处循环遍历每一个i，一共遍历了三次（slides.length）所以其实是给每一个图片都加了display=none 的属性。*/
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        /*此处循环遍历每一个i，一共遍历了三次（slides.length）所以其实是给每一个dots去掉了类.active。*/
    }
    /*slideIndex - 1 表示当前需要展示的图片(图片可以看作是数组，数组的下标是从0开始的，但是传给showSlides函数的实参是从1开始的)，给当前需要展示的图片加display=block*/
    slides[slideIndex - 1].style.display = "block";
    /*slideIndex - 1 表示当前需要展示的图片，给当前需要展示的图片对应的dots上的原有的类加active类*/
    dots[slideIndex - 1].className += " active";
}

/*此处函数中的plusSlides(-1)是和function plusSlides(n)相对应，若自动向右切换则plusSlides(-1)改为plusSlides(1)*/
setInterval(function() {
    plusSlides(-1);
}, 3000);