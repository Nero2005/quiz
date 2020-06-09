function time(){
    var hour = document.getElementById("hour");
    var d = new Date();
    var h = d.getHours();
    if(h > 12){
        h -= 12;
    }
    h = h * 30;
    h -= 90;
    hour.setAttribute("transform", "rotate("+h+" 100 100)");
    
    var min = document.getElementById("min");
    var m = d.getMinutes();
    m = m * 6;
    m -= 90;
    min.setAttribute("transform", "rotate("+m+" 100 100)");

    var sec = document.getElementById("first");
    var s = d.getSeconds();
    s = s * 6;
    s -= 90;
    sec.setAttribute("transform", "rotate("+s+" 100 100)");
}