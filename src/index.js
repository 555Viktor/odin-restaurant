import "./styles.css";
import {createHomePage} from "./home-page";
import {createContactPage} from "./contact-page";
import {createMenuPage} from "./menu-page";

const contentDiv = document.getElementById('content');

const navHomeBtn = document.querySelector('.nav-btn-home');
const navMenuBtn = document.querySelector('.nav-btn-menu');
const navContactBtn = document.querySelector('.nav-btn-contact');


function clearContentContainer () {
    contentDiv.innerHTML = '';
}

function loadHomePage () {
    contentDiv.appendChild(createHomePage());
};

function loadMenuPage () {
    contentDiv.appendChild(createMenuPage());
};

function loadContactPage () {
    contentDiv.appendChild(createContactPage());
};

navHomeBtn.addEventListener('click', () => {
    clearContentContainer()
    loadHomePage()
})

navMenuBtn.addEventListener('click', () => {
    clearContentContainer();
    loadMenuPage();
})

navContactBtn.addEventListener('click', () => {
    clearContentContainer()
    loadContactPage();
})

window.onload(loadHomePage());