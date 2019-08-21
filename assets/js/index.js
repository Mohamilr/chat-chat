// left
const name1 = document.querySelector('#name1');
const login1 = document.querySelector('.login1');
const status1 = document.querySelector('.status1');
const chatMate1 = document.querySelector('.chatmate1');
const chatsInput1 = document.querySelector('#chatsinput1');
const send1 = document.querySelector('#send1');
const chats1 = document.querySelector('.chats1');
const clearChats1 = document.querySelector('#clear1');



// right
const name2 = document.querySelector('#name2');
const login2 = document.querySelector('.login2');
const status2 = document.querySelector('.status2');
const chatMate2 = document.querySelector('.chatmate2');
const chatsInput2 = document.querySelector('#chatsinput2');
const send2 = document.querySelector('#send2');
const chats2 = document.querySelector('.chats2');
const clearChats2 = document.querySelector('#clear2');

const Status = [status1, status2];

Status.forEach(Status => {
    if(Status.textContent === 'active'){
        Status.style.color = 'green';
    }
})
// log in on the left
login1.addEventListener('click', (event) => {
    event.preventDefault();

    if(name1.value === ''){
        alert('please input name to login')
    }

    chatMate2.textContent = name1.value;

    status1.textContent = 'active';

    if(status1.textContent === 'active'){
        status1.style.color = 'green';
    }

   name1.value = '';
})

// login on the right
login2.addEventListener('click', (event) => {
    event.preventDefault();

    if(name2.value === ''){
        alert('please input name to login')
    }
    chatMate1.textContent = name2.value
    status2.textContent = 'active';
  

    if(status2.textContent === 'active'){
        status2.style.color = 'green';
    }

   name2.value = '';
})

// sendbutton on the left
send1.addEventListener('click', (event) => {
    event.preventDefault();

    const sentChat1 = document.createElement('p');
    sentChat1.classList.add('lines');
    sentChat1.textContent = chatsInput1.value;


    if(chatsInput1.value === ''){
        alert('please type in a chat')
    }
    else if(status1.textContent === 'offline'){
        alert('please login');
    }
    else {
        
        chats2.appendChild(sentChat1);
    }

    
    chatsInput1.value = '';
})

// sendbutton on the right
send2.addEventListener('click', (event) => {
    event.preventDefault();

    const sentChat2 = document.createElement('p');
    sentChat2.classList.add('lines');
    sentChat2.textContent = chatsInput2.value;

    //
    if(chatsInput2.value === ''){
        alert('please type in a chat')
    }
    else if(status2.textContent === 'offline'){
        alert('please login');
    }
    else{
        chats1.appendChild(sentChat2);
    }

    chatsInput2.value = '';
})

// clear button on the left
clearChats1.addEventListener('click', () => {
    if(chats1.textContent === ''){
        alert('there are no chats')
    }
    chats1.textContent = '';
})

// clear button on the right
clearChats2.addEventListener('click', () => {
    if(chats2.textContent === ''){
        alert('there are no chats')
    }
    chats2.textContent = '';
})