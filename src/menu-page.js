// Placeholder image for all menu items
import menuPlaceholderImg from './assets/menu-placeholder.svg';

// Create restaurant menu page container
function createMenuPageContainer () {
    const menuPageEl = document.createElement('div');
    menuPageEl.id = 'menu-page';

    return menuPageEl;
}

// Create menu item container
function createMenuItemContainer () {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    return menuItem;
}

// Create card image container 
function createCardImgContainer () {
    const cardImgContainer = document.createElement('div');
    cardImgContainer.classList.add('card-img');

    return cardImgContainer;
}

// Create img inside cardImg container and return the container
function createCardImg (imgSource, imgAlt) {
    const cardImgContainer = createCardImgContainer();

    const cardImgEl = document.createElement('img');
    cardImgEl.src = imgSource;
    cardImgEl.alt = imgAlt;

    cardImgContainer.appendChild(cardImgEl);

    return cardImgContainer;
}

// Create card container 
function createCardContainer () {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

    return cardContainer;
}

// Fill card container with text tags - h3, p, span and return container
function fillCardContainerEls (itemName, itemDescription, itemPrice) {
    const cardContainer = createCardContainer();

    const itemHeaderEl = document.createElement('h3');
    itemHeaderEl.textContent = itemName;

    const itemDescriptionEl = document.createElement('p');
    itemDescriptionEl.textContent = itemDescription;

    const itemPriceEl = document.createElement('span');
    itemPriceEl.textContent = itemPrice;

    cardContainer.appendChild(itemHeaderEl);
    cardContainer.appendChild(itemDescriptionEl);
    cardContainer.appendChild(itemPriceEl);

    return cardContainer;
};
// Function to load entire menu page
export function createMenuPage () {
    // Array of objects for menu items
    const menuItemsArr = [
        {
            img: menuPlaceholderImg,
            name: "Grilled Chicken Caesar Salad",
            description: "Tender grilled chicken breast served on a bed of crisp romaine lettuce, topped with parmesan cheese, croutons, and creamy Caesar dressing.",
            price: "$12.99"
        },
        {
            img: menuPlaceholderImg,
            name: "Beef Tenderloin Steak",
            description: "A perfectly seared, juicy tenderloin steak served with mashed potatoes, grilled vegetables, and a rich red wine sauce.",
            price: "$24.99"
        },
        {
            img: menuPlaceholderImg,
            name: "Vegetarian Tacos",
            description: "Soft corn tortillas filled with sautéed mushrooms, peppers, onions, fresh guacamole, and topped with a zesty lime crema.",
            price: "$9.99"
        },
        {
            img: menuPlaceholderImg,
            name: "Shrimp Scampi",
            description: "Succulent shrimp sautéed in garlic, white wine, and lemon butter sauce, served over a bed of pasta.",
            price: "$17.99"
        },
        {
            img: menuPlaceholderImg,
            name: "Lobster Bisque",
            description: "Rich and creamy lobster soup made with fresh lobster meat, a hint of brandy, and a delicate blend of spices.",
            price: "$8.99"
        },
        {
            img: menuPlaceholderImg,
            name: "BBQ Ribs",
            description: "Tender baby back ribs slow-cooked and smothered in smoky barbecue sauce, served with crispy fries and coleslaw.",
            price: "$21.99"
        },
        {
            img: menuPlaceholderImg,
            name: "Grilled Salmon Fillet",
            description: "A fresh, perfectly grilled salmon fillet served with roasted vegetables and a lemon butter sauce.",
            price: "$18.99"
        },
        {
            img: menuPlaceholderImg,
            name: "Pasta with Broccoli and Garlic",
            description: "Al dente pasta tossed with sautéed broccoli, garlic, and olive oil, finished with parmesan cheese.",
            price: "$13.49"
        }
    ];

    const menuPage = createMenuPageContainer();

    menuItemsArr.forEach(item => {

        const menuItem = createMenuItemContainer();
        
        const cardImg = createCardImg(item.img, item.name);
        const cardContainer = fillCardContainerEls(item.name, item.description, item.price);

        menuItem.appendChild(cardImg);
        menuItem.appendChild(cardContainer);

        menuPage.appendChild(menuItem);
    });

    return menuPage;
}