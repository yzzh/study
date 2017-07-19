function shortList() {
    var btn = document.getElementById("btn");
    var ul = document.getElementById("id");
    var li = ul.getElementsByTagName("li");
    var result = Array.prototype.slice.call(li).sort(function(a, b) {
        return a.innerText.toLowerCase() > b.innerText.toLowerCase();
    });
    console.log(result);
    //此循环相当于function(element)函数
    for (var i = 0; i < result.length; i++) {
        ul.appendChild(result[i]);

        // result = function(element) {
        //     ul.appendChild(element);
        // }
    }
    /*result.forEach(function(element) {
        ul.appendChild(element);
    });*/
}
// shortList();
/*li是一个类数组，看起来像数组，但是没有数组的属性和方法，所以如果需要像数组似地使用他，需要先转为为数组。li = Array.prototype.slice.call(li)此语句是
将li转化为数组&有能力添加数组属性和方法（prototype）且继承数组的属性和方法（call(li)）&调用slice方法获取数组的元素。
sort是数组的一个方法，是针对数组进行排序，此处参数是function(a,b)，返回值为参数a,b中大的在前面的排序。
对排好序的result进行遍历，并依次放入ul中*/