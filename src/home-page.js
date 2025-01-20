// Function to create the home page container
function createHomeContainer() {
    const homePageContainer = document.createElement('div');
    homePageContainer.id = 'home-page';

    return homePageContainer;
}

function createHomeHeadersContainer () {
    const homeHeadersContainer = document.createElement('div');
    homeHeadersContainer.id = 'home-headers';

    return homeHeadersContainer;
}

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

export function createHomePage () {
    const homeContainer = createHomeContainer();

    homeContainer.appendChild(createHomeHeaders());
    return homeContainer;
};