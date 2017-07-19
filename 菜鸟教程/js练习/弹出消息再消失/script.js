var btn = document.getElementById("btn");
var snackbar = document.getElementById("snackbar");
btn.onclick = function() {
        snackbar.classList.add("choice");
        setTimeout(function() {
            snackbar.classList.remove("choice");
        }, 4000);
    }
    /*btn按钮点击以后执行函数，
    第一步将snackbar的类名加上类choice；
    第二步在4s以后执行去除类choice的操作；其中4s是动画fadeout中的animation-duration和delay的时间之和，
    这样可以保证文本出现（从点击到出现时间为1s），到文本展示（delay表示展示3s，），到消失（从开始消失到完全消失共1s）是样式中我写的时间.
    若settimeout函数中的时间大于样式中fadeout的总时间，比如设置为5000，那么文本在执行完fadein和fadeout之后又会出现1s然后消失（没有任
    何动画效果），以满足函数中设置的时间，所以需要计算好*/