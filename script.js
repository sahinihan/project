"use strict";

const hide = function (arr) {
  for (let part of arr) document.querySelector(part).classList.add("hidden");
};

const removeHidden = function (arr) {
  for (let part2 of arr)
    document.querySelector(part2).classList.remove("hidden");
};

//hidden content when restarted
hide([".known-budget", ".change-known-budget", ".changing-the-budget"]);
hide([".p-list-name", ".list-name", ".list-name-check", ".List-Name"]);
hide([".Food", ".Health", ".Clothing", ".Cosmetics", ".Other"]);
hide([".list-item", ".last-added-items"]);
hide([".save-list"]);

let budget = document.querySelector(".budget-number");
let budgetInfo = document.querySelector(".known-budget").textContent;
let changeBudget = document.querySelector(".changing-the-budget");
let btnChange = document.querySelector(".change-known-budget");

let budgetBtn = document.querySelector(".budget-check");
let changedBudgetBtn = document.querySelector(".changed-budget-check");

let budgetAmount = 0;
let items = [];
let itemNames = [];
let allLists = document.querySelector(".category-lists");
let saveBtn = document.querySelector(".save-list");

// recieving initial budget and portraying it
const assignBudget = budgetBtn.addEventListener("click", function budgetF() {
  let budget = Number(document.querySelector(".budget-number").value);
  budgetAmount = budget;
  document.querySelector(".known-budget").classList.remove("hidden");
  document.querySelector(
    ".known-budget"
  ).textContent = `${budgetInfo} ${budget} Turkish liras`;
  hide([".budget-form", ".budget-number", ".budget-check", ".assign-budget"]);
  saveBudget();
  removeHidden([".change-known-budget"]);
});

// changing the budget
const change = (budget = document
  .querySelector(".change-known-budget")
  .addEventListener("click", function () {
    removeHidden([".changing-the-budget"]);
    changedBudgetBtn.addEventListener("click", function () {
      let budget = Number(document.querySelector(".changed-budget").value);
      budgetAmount = budget;
      document.querySelector(
        ".known-budget"
      ).textContent = `${budgetInfo} ${budget} Turkish liras `;
      hide([".changing-the-budget"]);
      saveBudget();
    });
  }));

const listName = document.querySelector(".p-list-name");
const listNameInput = document.querySelector(".list-name");
const listNameButton = document.querySelector(".list-name-check");
const newListName = document.querySelector(".List-Name");

// Assign list name
const assignName = document
  .querySelector(".btn-create-list")
  .addEventListener("click", function () {
    removeHidden([".p-list-name", ".list-name", ".list-name-check"]);
    hide([".btn-create-list", ".create-list-title"]);
  });

const ShowListName = document
  .querySelector(".list-name-check")
  .addEventListener("click", function () {
    if (listNameInput.value !== "") {
      removeHidden([".list-item", ".List-Name"]);
      let newListN = listNameInput.value;
      newListName.textContent = newListN;
      saveListName();
    }
  });

// adding categories
const categoryList = document.querySelector(".categories-list");

createCategoriesF();

const itemButton = document.querySelector(".item-name-check");

// adding items to the list
itemButton.addEventListener("click", function () {
  let selectedCategory = categoryList.value;
  const itemInput = document.querySelector(".item-name").value;
  removeHidden([".save-list"]);

  if (itemInput.value !== "") {
    const listItem = document.createElement("dt");
    listItem.textContent = itemInput;
    listItem.classList.add("list-of-items");

    itemNames.push(`${selectedCategory}_${itemInput}`);
    console.log(itemNames);
    saveItems2();

    const listBtn = document.createElement("button");
    const infoBtn = document.createElement("button");
    const infoList = document.createElement("dd");
    const priceBtn = document.createElement("button");
    const amountBtn = document.createElement("button");
    const priceInput = document.createElement("input");
    const amountInput = document.createElement("input");

    listBtn.classList.add("delete-btn");
    infoBtn.classList.add("info-btn");
    priceBtn.classList.add("price-btn");
    amountBtn.classList.add("amount-btn");

    priceInput.type = "number";
    priceInput.classList.add("price-input");
    amountInput.type = "number";
    amountInput.classList.add("amount-input");
    infoBtn.textContent = "additional information";
    listBtn.textContent = "Delete";

    const list = document.querySelector(`.${selectedCategory}`);
    removeHidden([`.${selectedCategory}`]);
    list.appendChild(listItem);

    listItem.appendChild(infoList);
    infoList.appendChild(infoBtn);
    infoList.appendChild(listBtn);

    const endAddingInfo = document.createElement("button");

    function createInfoInputsF() {
      infoList.appendChild(priceBtn);
      priceBtn.textContent = "unit price (₺)";
      priceBtn.appendChild(priceInput);
      infoList.appendChild(amountBtn);
      amountBtn.textContent = "amount";
      amountBtn.appendChild(amountInput);
      infoList.appendChild(endAddingInfo);
      endAddingInfo.textContent = "Done";
      endAddingInfo.classList.add("done-btn");
    }

    // adding more info about the items
    infoBtn.addEventListener("click", function () {
      createInfoInputsF();
      infoList.removeChild(infoBtn);
    });

    const displayInfo = document.createElement("span");
    displayInfo.classList.add("displayed-info");
    const changeInfoBtn = document.createElement("button");
    changeInfoBtn.classList.add("change-info-btn");

    let itemId = Date.now().toString();
    endAddingInfo.addEventListener("click", () => {
      infoList.removeChild(priceBtn);
      priceBtn.removeChild(priceInput);
      infoList.removeChild(amountBtn);
      amountBtn.removeChild(amountInput);
      infoList.removeChild(endAddingInfo);

      // remove inputs and replace them with the values
      let unitPrice = parseFloat(priceInput.value);
      let amount = parseFloat(amountInput.value);
      let itemTotalPrice = unitPrice * amount;

      let newItem = {
        id: itemId,
        name: itemInput,
        price: itemTotalPrice,
        amount: amount,
      };

      items.push(newItem);
      console.log(items);
      updateTotalPrice();

      infoList.appendChild(displayInfo);

      if (amountInput.value !== "" && priceInput.value !== "") {
        displayInfo.textContent = `total price: ${itemTotalPrice}(₺), amount: ${amount}`;
        displayInfo.appendChild(changeInfoBtn);
      } else if (amountInput.value !== "") {
        displayInfo.textContent = `amount: ${amountInput.value}`;
        displayInfo.appendChild(changeInfoBtn);
      } else if (priceInput.value !== "") {
        alert("Please enter your amount.");
        infoList.appendChild(infoBtn);
      } else {
        listItem.appendChild(infoBtn);
      }

      changeInfoBtn.textContent = "change information";
      changeInfoBtn.addEventListener("click", () => {
        createInfoInputsF();

        items = items.filter((item) => item.id !== itemId);
        newItem["price"] = itemTotalPrice;

        displayInfo.removeChild(changeInfoBtn);
      });
    });

    // deleting items from the list
    listBtn.addEventListener("click", () => {
      items = items.filter((item) => item.id !== itemId);

      for (let i = 0; i < itemNames.length; i++) {
        if (itemNames[i] == `${selectedCategory}_${itemInput}`) {
          itemNames.splice(i, 1);
          localStorage.removeItem(`item_${i + 1}`);
          break;
        }
      }

      list.removeChild(listItem);
      infoList.removeChild(displayInfo);
    });
  }
});

function createCategoriesF() {
  let food = document.createElement("option");
  food.textContent = "Food";
  categoryList.add(food);

  let health = document.createElement("option");
  health.textContent = "Health";
  categoryList.add(health);

  let cosmetics = document.createElement("option");
  cosmetics.textContent = "Cosmetics";
  categoryList.add(cosmetics);

  let clothes = document.createElement("option");
  clothes.textContent = "Clothing";
  categoryList.add(clothes);

  let other = document.createElement("option");
  other.textContent = "Other";
  categoryList.add(other);
}

function updateTotalPrice() {
  let totalPrice = 0;
  items.forEach((item) => {
    totalPrice += item.price;
    console.log(totalPrice);
  });

  if (totalPrice > budgetAmount) {
    alert("Total price exceeds budget!");
  }
}

function saveBudget() {
  const currentBudget = budgetAmount;

  if (typeof Storage !== "undefined") {
    if (localStorage.getItem("savedBudget")) {
      localStorage.setItem("savedBudget", currentBudget);
    } else {
      localStorage.setItem("savedBudget", currentBudget);
    }
  }
}

function saveListName() {
  const currenListName = listNameInput.value;

  if (typeof Storage !== "undefined") {
    if (localStorage.getItem("savedListName")) {
      localStorage.setItem("savedListName", currenListName);
    } else {
      localStorage.setItem("savedListName", currenListName);
    }
  }
}

function saveItems2() {
  if (typeof Storage !== "undefined") {
    localStorage.removeItem("savedItems");
    for (let i = 0; i < itemNames.length; i++) {
      const key = `item_${i + 1}`;
      localStorage.setItem(key, itemNames[i]);
    }
  }
}

function doesSavedListNameExist() {
  return localStorage.getItem("savedListName") !== null;
}
const hasSavedListName = doesSavedListNameExist();

function doesSavedBudgetExist() {
  return localStorage.getItem("savedBudget") !== null;
}
const hasSavedBudget = doesSavedBudgetExist();

if (hasSavedListName) {
  removeHidden([
    ".List-Name",
    ".list-item",
    ".p-list-name",
    ".list-name",
    ".list-name-check",
  ]);
  hide([".btn-create-list", ".create-list-title"]);
  window.addEventListener("load", function () {
    newListName.textContent = localStorage.getItem("savedListName");
  });
}

if (hasSavedBudget) {
  hide([".budget-form", ".budget-number", ".budget-check", ".assign-budget"]);
  removeHidden([".change-known-budget", ".known-budget"]);
  window.addEventListener("load", function () {
    budget = parseFloat(this.localStorage.getItem("savedBudget"));
    document.querySelector(
      ".known-budget"
    ).textContent = `${budgetInfo} ${budget} Turkish liras`;
  });
}

function createListFromLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("item")) {
      const [category, itemStr] = localStorage.getItem(key).split("_");

      const list = document.querySelector(`.${category}`);
      removeHidden([`.${category}`]);
    }
  }
}

window.onload = function() {
  createListFromLocalStorage();
}
