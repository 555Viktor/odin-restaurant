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

// Function to create form element
function createContactForm () {
    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    return contactForm;
}

// Function to create form-field with input/textarea and label
function createFormField (labelText, inputType, inputId, placeholderText) {
    const formField = document.createElement('div');
    formField.classList.add('form-field');

    const labelEl = document.createElement('label');
    labelEl.setAttribute.for = inputId;
    labelEl.textContent = labelText;

    const inputEl = document.createElement(inputType === 'textarea' ? 'textarea' : 'input');
    inputEl.id = inputId;
    inputEl.name = inputId;
    inputEl.placeholder = placeholderText;
    if (inputType !== 'textarea') inputEl.type = inputType;
    inputEl.required = true;

    formField.appendChild(labelEl);
    formField.appendChild(inputEl);

    return formField;
}

// Function to fill contact form with respective elements
function fillContactFormEls () {
    const contactForm = createContactForm();

    const formHeader = document.createElement('h2');
    const formHeaderText = 'Contact Us for Reservations or Inquiries';
    formHeader.textContent = formHeaderText;

    const fieldInputName = createFormField('Name:', 'input', 'name', 'Write your name');
    fieldInputName.classList.add('form-name');

    const fieldInputEmail = createFormField('Email:', 'input', 'email', 'Your email (e.g., name@example.com)');
    fieldInputEmail.classList.add('form-email');

    const fieldTextareaMsg = createFormField('Message:', 'textarea', 'message', 'Your message goes here');
    fieldTextareaMsg.classList.add('form-message');

    const submitButton = document.createElement('button');
    const submitButtonText = 'Send';
    submitButton.classList.add('form-btn');
    submitButton.textContent = submitButtonText;

    contactForm.appendChild(formHeader);
    contactForm.appendChild(fieldInputName);
    contactForm.appendChild(fieldInputEmail);
    contactForm.appendChild(fieldTextareaMsg);
    contactForm.appendChild(submitButton)
    return contactForm;
}

// Function to load entire contact page
export function createContactPage () {
    const contactPageContainer = createContactPageContainer();

    contactPageContainer.appendChild(fillContactDetailsContainer());
    contactPageContainer.appendChild(fillContactFormEls());
    return contactPageContainer;
}


/* <form action="" class="contact-form">
<h2>Contact Us for Reservations or Inquiries</h2>
<div class="form-field form-name">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="What's your name?" required>
</div>

<div class="form-field form-email">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Your email (e.g., name@example.com)" required>
</div>

<div class="form-field form-message">
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" placeholder = "Your message goes here" required></textarea>
</div>

<button class="form-btn" type="submit">Send</button>
</form> */