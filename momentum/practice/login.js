const loginForm = document.querySelector("#login-form");
const loginInputt = loginForm.querySelector("input");
const fff = document.querySelector("#fff");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInputt.value;
    loginForm.classList.add("bush")
    localStorage.setItem("이름", username);
    already(username)
}

function already(a) {
    fff.innerText = `hello ${a}`;
    fff.classList.remove("bush");
}
const savedUsername = localStorage.getItem("이름");

if(savedUsername === null) {
    loginForm.addEventListener("submit", onLoginSubmit);
    loginForm.classList.remove("bush")
} else{
    already(savedUsername);
}