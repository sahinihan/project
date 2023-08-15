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
hide([".list-item", ".last-added-items"]);
hide([".save-list"]);

let budget = document.querySelector(".budget-number");
let budgetInfo = document.querySelector(".known-budget").textContent;
let changeBudget = document.querySelector(".changing-the-budget");
let btnChange = document.querySelector(".change-known-budget");

// recieving initial budget and portraying it
const assignBudget = document
  .querySelector(".budget-check")
  .addEventListener("click", function () {
    let budget = Number(document.querySelector(".budget-number").value);
    document.querySelector(".known-budget").classList.remove("hidden");
    document.querySelector(
      ".known-budget"
    ).textContent = `${budgetInfo} ${budget} Turkish liras`;
    hide([".budget-form", ".budget-number", ".budget-check", ".assign-budget"]);

    removeHidden([".change-known-budget"]);
  });

// changing the budget
const change = (budget = document
  .querySelector(".change-known-budget")
  .addEventListener("click", function () {
    removeHidden([".changing-the-budget"]);
    document
      .querySelector(".changed-budget-check")
      .addEventListener("click", function () {
        let budget = Number(document.querySelector(".changed-budget").value);
        console.log(budget);
        document.querySelector(
          ".known-budget"
        ).textContent = `${budgetInfo} ${budget} Turkish liras `;
        hide([".changing-the-budget"]);
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
    hide([".btn-create-list"]);
  });

const ShowListName = document
  .querySelector(".list-name-check")
  .addEventListener("click", function () {
    if (listNameInput.value !== "") {
      removeHidden([".list-item", ".List-Name"]);
      let newListN = listNameInput.value;
      newListName.textContent = newListN;
    }
  });

// adding categories
const categoryList = document.querySelector(".categories-list");

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


const itemButton = document.querySelector(".item-name-check");

  // adding items to the list
  itemButton.addEventListener("click", function () {
    let selectedCategory = categoryList.value;
    const itemInput = document.querySelector(".item-name").value;
  
    if (itemInput.value !== "") {
      const listItem = document.createElement("dt");
      listItem.textContent = itemInput;
  
      const list = document.querySelector(`.${selectedCategory}`);
      list.appendChild(listItem);
      
      listItem.classList.add("list-of-items");
      const listBtn = document.createElement("button");
      listBtn.classList.add("delete-btn");
      const infoBtn = document.createElement("button");
      infoBtn.classList.add("info-btn");
      
      const infoList = document.createElement("dd");
      const priceBtn = document.createElement("button");
      priceBtn.classList.add("price-btn");
      const amountBtn = document.createElement("button");
      amountBtn.classList.add("amount-btn");
      
      const priceInput = document.createElement("input");
      priceInput.type = "number";
      priceInput.classList.add("price-input");
      const amountInput = document.createElement("input");
      amountInput.type = "number";
      amountInput.classList.add("amount-input");
      
      listItem.appendChild(infoList)
      infoList.appendChild(listBtn);
      listBtn.textContent = "Delete";
      infoList.appendChild(infoBtn);
      infoBtn.textContent = "additional information";
      
      
      // TO-DO adding more info about the items
      const endAddingInfo = document.createElement("button");
      
      infoBtn.addEventListener("click", function () {
        infoList.appendChild(priceBtn);
        priceBtn.textContent = "unit price (₺)";
        priceBtn.appendChild(priceInput);
        infoList.appendChild(amountBtn);
        amountBtn.textContent = "amount";
        amountBtn.appendChild(amountInput);
        infoList.appendChild(endAddingInfo);
        endAddingInfo.textContent = "Done";
        endAddingInfo.classList.add("done-btn");
        
        infoList.removeChild(infoBtn);
      });
      
      const displayInfo = document.createElement("span");
      displayInfo.classList.add("displayed-info");
      const changeInfoBtn = document.createElement("button");
      changeInfoBtn.classList.add("change-info-btn");
      
      endAddingInfo.addEventListener("click", () => {
        infoList.removeChild(priceBtn);
        priceBtn.removeChild(priceInput);
        infoList.removeChild(amountBtn);
        amountBtn.removeChild(amountInput);
        infoList.removeChild(endAddingInfo);
        
        // remove inputs and replace them with the values
        let unitPrice = priceInput.value;
        let amount = amountInput.value;
        let totalPrice = unitPrice * amountInput.value;
        
        infoList.appendChild(displayInfo);
        
        if (amountInput.value !== "" && priceInput.value !== "") {
          displayInfo.textContent = `total price: ${totalPrice}(₺), amount: ${amount}`;
          displayInfo.appendChild(changeInfoBtn);
        } else if (amountInput.value !== "") {
          displayInfo.textContent = `amount: ${amountInput.value}`;
          displayInfo.appendChild(changeInfoBtn);
        } else if (priceInput.value !== "") {
          alert("Please enter your amount.")
          infoList.appendChild(infoBtn);
        } else {
          listItem.appendChild(infoBtn);
        }
        
        changeInfoBtn.textContent = "change information";
        changeInfoBtn.addEventListener("click", () => {
          infoList.appendChild(priceBtn);
          priceBtn.textContent = "price (₺)";
          priceBtn.appendChild(priceInput);
          infoList.appendChild(amountBtn);
          amountBtn.textContent = "amount";
          amountBtn.appendChild(amountInput);
          infoList.appendChild(endAddingInfo);
          endAddingInfo.textContent = "Done";
          
          displayInfo.removeChild(changeInfoBtn);
          console.log(typeof unitPrice);
          console.log(typeof amountInput.value);
          console.log(amount);
        });
      });
      
      // deleting items from the list
      listBtn.addEventListener("click", () => {
        list.removeChild(listItem);
        items.indexOf(myItem);
        let dItems = items.splice(items.indexOf(myItem), 1);
        
        deletedItems.push(...dItems);
        
        infoList.removeChild(displayInfo);
      });
    }
  });
