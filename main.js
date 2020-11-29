function show(){
    var x = document.getElementById("test").innerHTML = "The password is !mcnerds2020";
    x.style.display="block";
}

var showCurrentTime = function(){
    var clock = document.getElementById("clock");
 
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    if (hours >= 12){
        meridian = "PM";
    }
    if (hours > 12){
        hours = hours - 12;
    }
    hours = ('0' + hours.toString()).slice(-2);
    minutes = ('0' + minutes.toString()).slice(-2);
    seconds = ('0' + seconds.toString()).slice(-2);
    clock.innerText = hours + ':' + minutes + ':' + seconds + " " + meridian;
};

setInterval(showCurrentTime, 100);