
function getdata() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'index.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                setpage(xhr.responseText);
            }
        }
    }
    xhr.send(null);
}
getdata()

function setpage(data) {
   var data = JSON.parse(data);
   var $ul = document.getElementsByTagName('ul')[0];
   for(var i = 0;i < 10;i++) {
       var $li = document.createElement('li');
       $li.className = "list-row";
       $li.innerHTML = "<div class='list-info'><div class='airport-info'><div class='from-info'><p class='from-time'>" + data.fromtime +
           "</p><p class='from-place'>" + data.fromaddress + "</p></div><div class='time-info'><p class='howlong'></p></div><div class='to-info'><p class='to-time'>" + data.totime +
           "</p><p class='to-place'>" + data.toaddress + "</p></div></div><div class='compony-info'><span>" + data.airport + "</span><span>" + data.module +
           "</span></div></div ><div class='price'><p class='price-info'><span>￥</span><span>" + data.price + "</span></p><p class='more-info'>" + data.place + "</p></div>";
       $ul.appendChild($li);
    }
}

window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var date = document.getElementById('date');
    var bottom = document.getElementById('bottom');
    if(t > 0) {
        date.style.opacity = 0;
        bottom.style.opacity = 0;
    }else{
        date.style.opacity = 1;
        bottom.style.opacity = 1;
    }
    var interval = setInterval(function(){
        var t2 = document.documentElement.scrollTop || document.body.scrollTop;
        if(t2 == t) {
           bottom.style.opacity = 1;
           clearInterval(interval);
        }
    },100)
}