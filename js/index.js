// Your code goes here
const title = document.querySelector('.logo-heading');

title.addEventListener('mouseover',function() {
    title.style.color = '#FDBA58';    //@bus-yellow
})

title.addEventListener('mouseout',function() {
    title.style.color = 'black';
})

const a = document.querySelectorAll('.nav-link');

a.forEach(atag => atag.addEventListener('mouseover', function() {
    atag.style.color = '#FDBA58';
}));

a.forEach(atag => atag.addEventListener('mouseout', function() {
    atag.style.color = 'black';
}));

const input = document.querySelector('#input');

input.addEventListener('focus', function() {
    input.style.backgroundColor = '#FDBA58';
    input.style.color = 'white';
})

const error = document.querySelector('#error');

input.addEventListener('blur', function() {
    input.style.background = 'white';
    input.style.color = 'black';
    if(!input.value.includes('@')) {
       input.classList.add('invalid');
       error.textContent = 'Please enter a correct email';
       }
});



