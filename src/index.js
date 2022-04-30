import './style.css';

console.log('funguju!');


const burgerMenu =document.querySelector('#nav-btn')
const navigation = document.querySelector('nav')
const active = () => {
    navigation.classList.toggle('nav-closed')
}

burgerMenu.addEventListener('click', active)

