var slideIndex = 1;
slideShow(slideIndex);

function currentSlide(n) {
    slideShow(slideIndex = n);
}

function plusSlides(n) {
    slideShow(slideIndex = (slideIndex + n));
}

function slideShow(n) {
    var slide = document.getElementsByClassName("my-slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slide.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slide.length;
    }
    for (var i = 0; i < slide.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    dots[slideIndex - 1].className = (dots[slideIndex - 1].className + " active");
    slide[slideIndex - 1].style.display = "block";
}
setInterval(function() {
    plusSlides(1);
}, 2000);