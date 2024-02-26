const h1 = document.querySelector('h1');

const greetings = [
    'Привіт!',
    'Вітаю!',
    'Hey!',
    'Hola!',
    'Greetings!',
    'Good day!'
]

function getRandomEl(arr) {
    return arr[ Math.floor(Math.random() * arr.length) ];
}

h1.innerText = getRandomEl(greetings);
h1.style.color = 'red';

