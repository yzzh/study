function open() {
    var link = document.getElementsByClassName("tablinks");
    var content = document.getElementsByClassName("tabcontent");
    var prevLink = link[0];
    var prevContent = content[0];
    for (i = 0; i < link.length; i++) {
        link[i].addEventListener("click", function() {
            // if (this === prevLink) return;
            var index = this.getAttribute("data-index");
            prevLink.classList.remove("active");
            prevContent.style.display = "none";
            prevLink = link[index];
            prevContent = content[index];
            prevLink.classList.add("active");
            prevContent.style.display = "block";
        }, false);
    }
}
open();

// function openCity() {
//     var tablinks = document.getElementsByClassName("tablinks");
//     var tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     for (var i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     for (var i = 0; i < tablinks.length; i++) {
//         (function(j) {
//             tablinks[j].onclick = function(e) {
//                 // tablinks[j - 1].className = tablinks[j - 1].className.replace(" active", "");
//                 // tabcontent[j - 1].style.display = "none";
//                 tablinks[j].className += " active";
//                 tabcontent[j].style.display = "block";
//             }
//         })(i)
//     }

// }
// openCity();