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

