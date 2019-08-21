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



// functions
// function names(event) {
//     // event.preventDefault();
//     let loginInput = name1.value;
//     if(loginInput === ''){
//         alert('hello')
//     }

//    console.log(loginInput)
    
// }

login1.addEventListener('click', (event) => {
    event.preventDefault();

    if(name1.value === ''){
        alert('please input name to login')
    }

    chatMate2.textContent = name1.value;

    status1.textContent = 'active';
   console.log(name1.value)
   name1.value = '';
})

login2.addEventListener('click', (event) => {
    event.preventDefault();

    if(name2.value === ''){
        alert('please input name to login')
    }
    chatMate1.textContent = name2.value
    status2.textContent = 'active';
  
   console.log(name2.value)
   name2.value = '';
})

