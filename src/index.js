import "./styles.css";
import {createHomePage} from "./home-page";
import {createContactPage} from "./contact-page";
import {createMenuPage} from "./menu-page";

const contentDiv = document.getElementById('content');

// contentDiv.appendChild(createHomePage());
// contentDiv.appendChild(createContactPage());
contentDiv.appendChild(createMenuPage());