const d = 24 * 60 * 60 * 1000;
const h = d / 24;
const m = h / 60;

var x = setInterval(function() {
    var long = new Date("Jan 5, 2028 15:37:25").getTime();
    var short = Date().now();
    var distance = long - short;
    var day = Math.floor(distance / d);
    var hour = Math.floor(distance % d / h);
    var minute = Math.floor(distance % h / m);
    var second = Math.floor(distance % m / 1000);
    const str = `${day}天${hour}小时${minute}分钟${second}秒`;
    document.getElementById('h2').innerHTML = str;
    if (distance <= 0) {
        clearInterval(x);
    }
}, 1000);