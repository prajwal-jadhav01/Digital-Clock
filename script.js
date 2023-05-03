let hour=document.getElementById("hours")
let minute=document.getElementById("minutes")
let second=document.getElementById("seconds")
let AMPM=document.getElementById("AMPM")

setInterval(()=>{
  // console.log(dt)
  let dt=new Date()
  let hours=dt.getHours()
  let minutes=dt.getMinutes()
  let seconds=dt.getSeconds()
  if (hours>12) {
    hours=hours-12
    AMPM.innerHTML="PM"
  }else{
    AMPM.innerHTML="AM"
  }
  
  if (hours<10) {
    hours="0"+hours;
  }
  if (minutes<10) {
    minutes="0"+minutes;
  }
  if (seconds<10) {
    seconds="0"+seconds;
  }
  if (hours==0) {
    hours=12
  }
  
  hour.innerHTML=hours;
  minute.innerHTML=minutes;
  second.innerHTML=seconds;

},1000)


// hours=dt