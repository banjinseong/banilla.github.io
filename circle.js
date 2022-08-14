const circle = document.getElementById("circle");
function timeset(){
    const time = new Date();
    const hour = String(time.getHours()).padStart(2,0);
    const min = String(time.getMinutes()).padStart(2,0);
    const sec = String(time.getSeconds()).padStart(2,0);
    circle.innerText=`${hour}:${min}:${sec}`;
}
timeset();
setInterval(timeset,1000);