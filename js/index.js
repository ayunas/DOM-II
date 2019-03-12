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





