/*Завдання 1*/

const VARIANT = 6;

const index = (VARIANT % 10) + 1;

// Елементи сторінки
const elements = Array.from(document.body.children)
    .filter(el => el.tagName !== 'SCRIPT');

const first = elements[index - 1];   
const second = elements[index];      

// Призначаємо id та клас
if (first) first.id = 'target-first';
if (second) second.classList.add('target-second');

let firstClicked = false;
let secondClicked = false;

// getElementById()
const firstEl = document.getElementById('target-first');
if (firstEl) {
    firstEl.addEventListener('click', function () {
        
        if (!firstClicked) {
            this.style.backgroundColor = '#eb097a';
            this.style.color = '#1a237e';
        } else {
            this.style.backgroundColor = '#1b5e20';
            this.style.color = '#ffffff';
        }
        firstClicked = !firstClicked;
    });
}

// querySelector()
const secondEl = document.querySelector('.target-second');
if (secondEl) {
    secondEl.addEventListener('click', function () {
        if (!secondClicked) {
            this.style.backgroundColor = '#80deea';
            this.style.color = '#b71c1c';
        } else {
            this.style.backgroundColor = '#4a148c';
            this.style.color = '#fff176';
        }
        secondClicked = !secondClicked;
    });
}

/*Завдання 2*/

const gallery = document.getElementById('gallery');
const STEP = 50;     
const MIN_WIDTH = 50;

function lastImage() {
    const images = gallery.querySelectorAll('img');
    return images[images.length - 1];
}

// Додати зображення
document.getElementById('btn-add').addEventListener('click', function () {
    const img = document.createElement('img');
    img.src = 'lausanne.jpg';
    img.alt = 'Фото міста';
    img.width = 400;
    gallery.appendChild(img);
});

// Збільшити
document.getElementById('btn-increase').addEventListener('click', function () {
    const img = lastImage();
    if (img) img.width = img.width + STEP;
});

// Зменшити
document.getElementById('btn-decrease').addEventListener('click', function () {
    const img = lastImage();
    if (img && img.width - STEP >= MIN_WIDTH) img.width = img.width - STEP;
});

// Видалити
document.getElementById('btn-delete').addEventListener('click', function () {
    const img = lastImage();
    if (img) {
        const parent = img.parentElement;
        if (parent.tagName === 'A' && parent.children.length === 1) {
            parent.remove();
        } else {
            img.remove();
        }
    }
});