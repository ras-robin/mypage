let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');


btn1.addEventListener('click', () => {
	img.src = 'car1.jpg';
});

btn2.addEventListener('click', () => {
	img.src = 'car2.jpg';
});

btn3.addEventListener('click', () => {
	img.src = 'car3.jpg';
});

btn4.addEventListener('click', () => {
	img.src = 'car4.jpg';
});
