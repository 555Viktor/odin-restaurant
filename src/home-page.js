// Create the home page container
function createHomeContainer() {
    const homePageContainer = document.createElement('div');
    homePageContainer.id = 'home-page';

    return homePageContainer;
}

// Create the container for header elements
function createHomeHeadersContainer () {
    const homeHeadersContainer = document.createElement('div');
    homeHeadersContainer.id = 'home-headers';

    return homeHeadersContainer;
}

// Create the headers and append them to home-headers container
function createHomeHeaders () {
    const headersContainer = createHomeHeadersContainer();

    const welcomeHeader = document.createElement('h3');
    const welcomeText = 'Welcome to The Nook Kitchen!';
    welcomeHeader.textContent = welcomeText;
    
    const sloganHeader = document.createElement('h1');
    const sloganText = 'Food That Feels Like Home, Made with Love.';
    sloganHeader.classList.add('head-slogan');
    sloganHeader.textContent = sloganText;

    const subSloganHeader = document.createElement('h2');
    const subSloganText = 'Where comfort, food and fresh ingredients meet.';
    subSloganHeader.classList.add('head-slogan');
    subSloganHeader.textContent = subSloganText;

    const callToActionHeader = document.createElement('h2');
    const callToActionText = "Join us for a meal you'll love!";
    callToActionHeader.textContent = callToActionText;

    headersContainer.appendChild(welcomeHeader);
    headersContainer.appendChild(sloganHeader);
    headersContainer.appendChild(subSloganHeader);
    headersContainer.appendChild(callToActionHeader);

    return headersContainer;
};

// Create the container for home page buttons
function createHomeButtonsContainer (){
    const homeButtonsContainer = document.createElement('div');
    homeButtonsContainer.id = 'home-btns';

    return homeButtonsContainer;
}

// Create the buttons and append them to home-btns container
function createHomeButtons () {
    const homeBtnsContainer = createHomeButtonsContainer();

    const menuButton = document.createElement('button');
    const menuButtonText = 'Our menu';
    menuButton.classList.add('home-btn-menu');
    menuButton.textContent = menuButtonText;

    const contactButton = document.createElement('button');
    const contactButtonText = 'Get in touch';
    contactButton.classList.add('home-btn-contact');
    contactButton.textContent = contactButtonText;

    homeBtnsContainer.appendChild(menuButton);
    homeBtnsContainer.appendChild(contactButton);

    return homeBtnsContainer;
}

// Create home page view
export function createHomePage () {
    const homeContainer = createHomeContainer();

    homeContainer.appendChild(createHomeHeaders());
    homeContainer.appendChild(createHomeButtons());

    return homeContainer;
};