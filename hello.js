function updateTime(){
    var date = new Date();
    var currentHours = date.getHours();
    var currentMinutes = date.getMinutes();
    var currentSeconds = date.getSeconds();
    var currentSeconds = date.getSeconds();

  var amPM = currentHours < 12 ? "AM" : "PM";

  // Convert to 12-hour format
  currentHours = currentHours % 12 || 12;
  
    currentMinutes = (currentMinutes < 10 ? "0" : "")  + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
  
    var currentTime = currentHours + " : " + currentMinutes + " : " + currentSeconds;
  
    document.getElementById("hours").firstChild.nodeValue = currentHours + " : ";
    document.getElementById("minutes").firstChild.nodeValue = currentMinutes + " : ";
    document.getElementById("seconds").firstChild.nodeValue = currentSeconds;
    document.getElementById("ampm").textContent = amPM;

  }
  updateTime();
  setInterval(updateTime, 1000);  