var time_in_minutes = 10;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);


function time_remaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
 
  return {'total':t, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(endtime){
  function update_clock(){
    var t = time_remaining(endtime);
    if(t.minutes<10){
      t.minutes="0"+t.minutes;
    }
    document.getElementById("time").innerHTML=+t.minutes+"  minutes  "+t.seconds+"  Seconds  ";
    if(t.total<=0){ 
        run_clock(endtime);
     }
  }
  update_clock();
  var timeinterval = setInterval(update_clock,1000);
}
run_clock(deadline);
var show=document.getElementById("appear");
window.onload = function() {
  
  window.setTimeout(function() {
   
    show.style.display = "block";
    
  }, 15000);
}
function dis(){
  show.style.display="none";
}