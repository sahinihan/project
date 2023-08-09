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
    hide([".budget-form", ".budget-number", ".budget-check"]);
    btnChange.classList.remove("hidden");
  });

// changing the budget
const change = (budget = document
  .querySelector(".change-known-budget")
  .addEventListener("click", function () {
    changeBudget.classList.remove("hidden");
    document
      .querySelector(".changed-budget-check")
      .addEventListener("click", function () {
        let budget = Number(document.querySelector(".changed-budget").value);
        console.log(budget);
        document.querySelector(
          ".known-budget"
        ).textContent = `${budgetInfo} ${budget} Turkish liras`;
        hide([".changing-the-budget"]);
      });
  }));



const listName = document.querySelector(".p-list-name");
const listNameInput = document.querySelector(".list-name");
const listNameButton = document.querySelector(".list-name-check");
const newListName = document.querySelector(".List-Name");

// Assign list name
const asignName = document
  .querySelector(".btn-create-list")
  .addEventListener("click", function () {
    removeHidden([".p-list-name", ".list-name", ".list-name-check"]);
  });

const ShowListName = document
  .querySelector(".list-name-check")
  .addEventListener("click", function () {
    if (listNameInput.value !== "") {
      removeHidden([".list-item", ".List-Name"]);
      let newListN = listNameInput.value;
      newListName.textContent = newListN;
      // console.log(`${newListN}`)
    }
  });



const list = document.querySelector("dl");
const itemInput = document.querySelector(".item-name");
const itemButton = document.querySelector(".item-name-check");
let items = [];
let deletedItems = [];
let prices = []
let amounts = []
let itemInfo = []


// adding items to the list
itemButton.addEventListener("click", function () {
  if (itemInput.value !== "") {
    let myItem = itemInput.value;
    items.push(itemInput.value);

    const listItem = document.createElement("dt");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");
    const infoBtn = document.createElement("button");

    const infoList = document.createElement("dd")
    const priceBtn = document.createElement("button")
    const amountBtn = document.createElement("button")

    listItem.appendChild(listText);
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    listItem.appendChild(infoBtn);
    infoBtn.textContent = "add more info";
    list.appendChild(listItem);
    list.appendChild(infoList)

    // TO-DO adding more info about the items
    const priceInput = document.createElement("input")
    const amountInput = document.createElement("input")
    const endAddingInfo = document.createElement("button")

    infoBtn.addEventListener("click", () => {
      infoList.appendChild(priceBtn)
      priceBtn.textContent = "price (₺)"
      priceBtn.appendChild(priceInput)

      infoList.appendChild(amountBtn)
      amountBtn.textContent = "amount"
      amountBtn.appendChild(amountInput)

      infoList.appendChild(endAddingInfo)
      endAddingInfo.textContent = "Done"
    })

    endAddingInfo.addEventListener("click", () => { 
      prices.push(priceInput.value)
      amounts.push(amountInput.value)
      itemInfo.push([priceInput.value, amountInput.value])
      // console.log(prices)
      // console.log(amounts)
      // console.log(itemInfo)

      // ***** TO-DO remove inputs and replace them with the info

    })


    // deleting items from the list
    listBtn.addEventListener("click", () => {
      list.removeChild(listItem);
      items.indexOf(myItem);
      let dItems = items.splice(items.indexOf(myItem), 1);
      deletedItems.push(dItems);
    });

    // console.log(items)
    // console.log(deletedItems)


    // ***** TO-DO view deleted items


  }
});
