// Your code goes here
const title = document.querySelector('.logo-heading');

title.addEventListener('mouseover',function() {
    title.style.color = '#FDBA58';    //@bus-yellow
})

title.addEventListener('mouseout',function() {
    title.style.color = 'black';
})

const h2 = document.querySelectorAll('h2');

h2.forEach( function(h2tag) {
    h2tag.addEventListener('mouseover', () => h2tag.style.color = '#FDBA58' );
})

h2.forEach( h2tag => h2tag.addEventListener('mouseout', () => h2tag.style.color = 'black'));

const h4 = document.querySelectorAll('h4');

h4.forEach( h4tag => h4tag.addEventListener('mouseover', () => h4tag.style.color = '#FDBA58'));

h4.forEach(h4tag => h4tag.addEventListener('mouseout', () => h4tag.style.color = 'black'));


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
    if (input.classList.contains('invalid')) {
        input.classList.remove('invalid');
        error.textContent = '';
    }
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

const busImg = document.querySelector('img');

busImg.addEventListener('mouseover', () => {
    busImg.style.borderRadius = '100%';
    busImg.style.transition = 'all 2s';
    busImg.style.objectFit = 'cover';
    //can't figure out how to crop the image on left and right.  tried doing the object-fit : cover
//    busImg.style.height = '100';
//    busImg.style.width: '100';   //and why do these properties suspend the animation?  
});

busImg.addEventListener('mouseout', () => busImg.style.borderRadius = '0%');

const nav = document.querySelector('.nav-container');
const container = document.querySelector('.container');

container.addEventListener('wheel', () => {
    nav.style.background = '#FDBA58';
})

const bottomContent = document.querySelector('.content-pick');
const destinations = bottomContent.children;
console.log(destinations[2]);

destinations[0].addEventListener('dblclick', () => {
    destinations[0].style.order = '-1';
    destinations[1].style.order = '1';
    destinations[2].style.order = '1';
});
destinations[1].addEventListener('dblclick', () => {
    destinations[1].style.order = '-1';
    destinations[0].style.order = '1';
    destinations[2].style.order = '1';
});
destinations[2].addEventListener('dblclick', () => {
    destinations[2].style.order = '-1';
    destinations[0].style.order = '1';
    destinations[1].style.order = '1';
});


