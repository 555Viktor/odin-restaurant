// Container for contact page
function createContactPageContainer () {
    const contactPageContainer = document.createElement('div');
    contactPageContainer.id = 'contact-page';

    return contactPageContainer;
}

// Container for contact details
function createContactDetailsContainer () {
    const contactDetailsContainer = document.createElement('div');
    contactDetailsContainer.classList.add('contact-details');

    return contactDetailsContainer;
}

// Function to fill contact details with respective elements
function fillContactDetailsContainer () {
    let contactDetailsContainer = createContactDetailsContainer();

    const headerLogo = document.createElement('h2');
    const headerLogoText = 'The Nook Kitchen';
    headerLogo.classList.add('logo');
    headerLogo.textContent = headerLogoText;

    const addressDetailsContainer = document.createElement('div');
    const addressDetails = {
        streetAddress: "1234 Ocean Drive, Suite 7B",
        cityStateZip: "33139, Miami Beach, Florida",
        country: "United States"
    };
    addressDetailsContainer.classList.add('address-details');

    for (let data in addressDetails) {
        const paragraphEl = document.createElement('p');
        paragraphEl.textContent = addressDetails[data];
        addressDetailsContainer.appendChild(paragraphEl);
    };

    const phoneDetailsContainer = document.createElement('div');
    phoneDetailsContainer.classList.add('phone-details');
    const phoneDetails = {
        mainNumber: '+1 305 555 0192',
        secondNumber: '+1 305 555 0837'
    };

    for (let number in phoneDetails) {
        const paragraphEl = document.createElement('p');
        paragraphEl.textContent = phoneDetails[number];
        phoneDetailsContainer.appendChild(paragraphEl);
    };

    contactDetailsContainer.appendChild(headerLogo);
    contactDetailsContainer.appendChild(addressDetailsContainer);
    contactDetailsContainer.appendChild(phoneDetailsContainer);
    return contactDetailsContainer;
}

// Function to load entire contact page

export function createContactPage () {
    const contactPageContainer = createContactPageContainer();

    contactPageContainer.appendChild(fillContactDetailsContainer());
    return contactPageContainer;
}

/* <h2 class="logo">The Nook Kitchen</h2>

<div class="address-details">
    <p>1234 Ocean Drive, Suite 7B,</p>
    <p>33139, Miami Beach, Florida,</p>
    <p>United States</p>
</div>

<div class="phone-details">
    <p>+1 305 555 0192</p>
    <p>+1 305 555 0837</p>
</div> */