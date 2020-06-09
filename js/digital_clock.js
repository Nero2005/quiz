function timed(){
    var houry = document.getElementById("hourd");
    var d = new Date();
    var h = d.getHours();
    if(h < 12){
        document.getElementById("timeofday").innerHTML = "AM";
    }
    h -= 12;
    document.getElementById("timeofday").innerHTML = "PM";
    houry.innerHTML = h;

    var m = d.getMinutes();
    var miny = document.getElementById("mind");
    if(m < 10){
        m = "0" + m;
    }
    miny.innerHTML = m;

    var s = d.getSeconds();
    var secy = document.getElementById("secd");
    if(s < 10){
        s = "0" + s;
    }
    secy.innerHTML = s;
}