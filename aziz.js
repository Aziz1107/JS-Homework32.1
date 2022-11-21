const button = document.querySelector('.button'),
    btn = document.querySelector('.btn'),
    span = document.querySelector('.span'),
    menu = document.querySelector('.header__nav-links')
button.addEventListener('click', buttonHand);

function buttonHand(e) {
    e.preventDefault();
    btn.classList.toggle("open");
    button.classList.toggle('active')
    renderBtn()
}

function renderBtn() {
    btn.appendChild(menu)
}