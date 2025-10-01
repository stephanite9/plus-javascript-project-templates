let shoppingListItems = [];

// let listElement = document.getElementById("shopping-list-items");

// for (const shoppingItem of shoppingListItems){
//     console.log(shoppingItem);
//     let itemElement = document.createElement("li");
//     itemElement.innerText = shoppingItem;
//     listElement.appendChild(itemElement);
// }

const addItem = () => {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems = [...shoppingListItems, item];
    updateItems();
    document.getElementById("new-item-text").value = "";
};

const updateItems = () => {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";

    for (const shoppingItem of shoppingListItems){
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }
};

const clearItems = () => {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingListItems = [];
}

