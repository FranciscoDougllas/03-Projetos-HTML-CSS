const button = document.querySelector('#button');
const li = document.querySelectorAll('li');

addEventListener('mousemove', () => {
    button.style.display = 'flex';
});

addEventListener('mouseout', () => {
    button.style.display = 'none';
});