//credit :https://code-boxx.com/simple-javascript-countdown-timer/

// from 25 min-->0 then 5 min-->0 (no loop)
var counter = {};
 window.addEventListener("click", function () {

  counter.end = 1500;
  counter.min = document.getElementById("cd-min");
  counter.sec = document.getElementById("cd-sec");

  if (counter.end > 0) {
    counter.ticker = setInterval(function(){
  
      counter.end--;
      if (counter.end <= 0) { 
        clearInterval(counter.ticker); 
        counter.end = 300;
      }
      
      var secs = counter.end;
      var mins  = Math.floor(secs / 60); 
      secs -= mins * 60;

      counter.min.innerHTML = mins;
      counter.sec.innerHTML = secs;
      
    }, 1000);
  }
});


