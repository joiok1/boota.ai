const clock = document.querySelector("h2#clock");

function gettick(){
    const date = new Date();
    const Hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${Hour}:${minute}:${second}`;
}

gettick()
setInterval(gettick, 1000);
