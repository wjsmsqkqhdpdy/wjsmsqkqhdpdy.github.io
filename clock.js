const clock = document.querySelector(".js-clock .clock_text");

function getTime(){
  const now = new Date();
  const hours = new.getHours();
  const minutes = new.getMinutes();  
  const seconds = new.getSeconds();
  const time = `${hours} : ${minutes} : ${seconds}`;
  clock.inneerHTML = time;
  console.log(hours, time);
  return;
}

function init(){
  getTine();
  setInterval(getTime, 1000);
  return;
}

init();
