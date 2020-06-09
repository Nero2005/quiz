function billingFunction(){
    var checkBox = document.getElementById("same");
    var name = document.getElementById("billingName");
    var zip = document.getElementById("billingZip");
    var shipname = document.getElementById("shippingName");
    var shipzip = document.getElementById("shippingZip");
    if(checkBox.checked){
        name.value = shipname.value;
        zip.value = shipzip.value;
    }
    else{
        name.value = "";
        zip.value = "";
    }
}