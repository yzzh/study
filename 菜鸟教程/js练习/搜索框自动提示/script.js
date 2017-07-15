//下列函数若想变成区分大小写搜索则把每行的toUpperCase去掉即可实现
function myFunction() {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("myUL");
    var li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        /*以下的判断语句中条件语句的意思为每个a的内容变为大写内容后，在其中寻找是否有已变为大写的input.value的值即赋值给变量filter的值，若有，则相对应的
        li的display不变，若没有表示不符合搜索条件就不显示对应的li*/
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
myFunction(); //这个不写也可以吗？why