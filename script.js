const username = document.querySelector('.username');

const email = document.querySelector('.email');

const message = document.querySelector('.message');

const button = document.querySelector('.btn');

username.addEventListener('click', ()=>{
    username.style.backgroundColor='lime';
})

username.addEventListener('blur', ()=>{
    username.style.backgroundColor='white';
})

email.addEventListener('click', ()=>{
    email.style.backgroundColor='lime';
})

email.addEventListener('blur', ()=>{
    email.style.backgroundColor='white';
})

message.addEventListener('click', ()=>{
    message.style.backgroundColor='lime';
})

message.addEventListener('blur', ()=>{
    message.style.backgroundColor='white';
})

button.addEventListener('click', (event)=>{

    if(username.value == "" || email.value == "" || message.value == ""){
        alert("Form can't be empty");
        event.preventDefault();
    }
})