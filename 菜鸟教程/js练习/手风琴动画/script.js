var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}
/*
1行： if (panel.style.maxHeight) {  如果条件语句为真即panel的maxHeight为大于0，即执行null语句
2行：           panel.style.maxHeight = null;
3行：       } else {
4行：           panel.style.maxHeight = panel.scrollHeight + "px";如果条件语句为假即等于0，即执行此语句
       }
当用户开始第一次点击acc时此段语句的执行顺序时else语句先执行，因为panel.style.maxHeight时获取html标签内部写的样式，此元素标签内没写样式，即条件语句为假，
所以执行4行（将panel的html页面内的标签内部加上panel.scrollHeight（实际高度） + "px"；
当用户第二次点击同一个acc时此段条件语句为真（因为标签内已有样式），所以将高度设置为空，即隐藏起对应的panel）
*/