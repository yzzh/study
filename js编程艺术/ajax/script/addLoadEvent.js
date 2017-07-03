function addLoadEvent(func) { //定义函数名为addLoadEvent,参数为func的函数（func代表我需要用到的函数）
    var oldonload = window.onload; //将window.onload事件处理函数的值赋给变量oldonload
    if (typeof window.onload != 'function') { //检查window.onload上是否有绑定任何函数(类型是否为函数)
        window.onload = func; //如果window.onload事件处理函数上没有绑定(上一行中的!=‘function’代表不等于函数，即没有绑定任何函数),就将我需要用到的函数func添加给window.onload
    } else { //如果window.onload事件处理函数上有绑定了一些函数
        window.onload = function() { //为window.onload另行定义一个匿名函数（这是一种在代码执行的时候创建函数的办法）
            oldonload(); //先执行window.onload本身已经绑定的函数
            func(); //后执行我需要用到的函数
        }
    }
}