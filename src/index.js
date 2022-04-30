import './style.css';

console.log('funguju!');

//hamburger menu
const burgerMenu =document.querySelector('#nav-btn')
const navigation = document.querySelector('nav')
const active = () => {
    navigation.classList.toggle('nav-closed')
}
burgerMenu.addEventListener('click', active)


const navAll = document.querySelectorAll("nav a")
navAll.forEach((item) => item.addEventListener('click', () => {
    navigation.classList.add('nav-closed')}))

//objednat
const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
let ordered = false;

orderBtn.addEventListener('click', () => {
 if ((ordered)) {
        orderBtn.textContent = 'Objednat';
        drinkCup.classList.remove('drink__cup--selected');
        ordered = false;
    } else {
        orderBtn.textContent = 'Zrušit';
        drinkCup.classList.add('drink__cup--selected');
        ordered = true;
    }
});

