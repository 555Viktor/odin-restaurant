import "./styles.css";
import {createHomePage} from "./home-page";
import {createContactPage} from "./contact-page";
import {createMenuPage} from "./menu-page";

// Variables for DOM elements
const contentDiv = document.getElementById('content');

const navHomeBtn = document.querySelector('.nav-btn-home');
const navMenuBtn = document.querySelector('.nav-btn-menu');
const navContactBtn = document.querySelector('.nav-btn-contact');

// Helper functions for clearing content div and appending pages
function clearContentContainer () {
    contentDiv.innerHTML = '';
};

function loadHomePage () {
    contentDiv.appendChild(createHomePage());
};

function loadMenuPage () {
    contentDiv.appendChild(createMenuPage());
};

function loadContactPage () {
    contentDiv.appendChild(createContactPage());
};

// Navigation menu event listeners for page loading
navHomeBtn.addEventListener('click', () => {
    clearContentContainer();
    loadHomePage();
});

navMenuBtn.addEventListener('click', () => {
    clearContentContainer();
    loadMenuPage();
});

navContactBtn.addEventListener('click', () => {
    clearContentContainer()
    loadContactPage();
});

// Default page
loadHomePage();

// Exporting to home-page.js for home-page btn event listeners
export {loadMenuPage, loadContactPage, clearContentContainer};