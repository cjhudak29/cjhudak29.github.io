setInterval(showTime, 1000);
function showTime() {
    var d = new Date();
    var h = d.getHours();
	var message = "<br>Good Morning, World!";
	
	if(h >= 0 && h <12){
		message="Good Morning, World!";
	} else if(h>=12 && h<=18){
		message="Good Afternoon, World!";
	} else{
		message = "Good Evening, World!";
	}
    document.getElementById("greeting")
            .innerHTML = message;
}
showTime();