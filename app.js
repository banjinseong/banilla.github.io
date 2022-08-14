const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const NAME = "name";

function handleclick(tomato){
    tomato.preventDefault();
    const name = loginInput.value;
    localStorage.setItem(NAME,name);
    loginForm.classList.add(HIDDEN);
    greeting.classList.remove(HIDDEN);
    greeting.innerText=`Hello ${name}`;
}

const savename = localStorage.getItem(NAME);
if(savename === null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit" , handleclick);
}
else{
    loginForm.classList.add(HIDDEN);
    greeting.classList.remove(HIDDEN);
    greeting.innerText=`Hello ${savename}`;
}