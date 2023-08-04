"use strict";

const hide = function (thing) {
  document.querySelector(thing).classList.add("hidden");
};

const removeHidden = function (thing2) {
  document.querySelector(thing2).classList.remove("hidden");
};

//hidden content when restarted
hide(".known-budget");
hide(".change-known-budget");
hide(".changing-the-budget");

hide(".p-list-name");
hide(".list-name");
hide(".list-name-check")
hide(".btn-add-elements");

hide(".add-item-form");
hide(".item-form");
hide(".item-name");

hide(".more-info");
hide(".item-amount");
hide(".amount-check");
hide(".item-price");
hide(".price-check");

hide(".p-last-items");
hide(".last-added-items");
hide(".add-the-item");

hide(".current-list");
hide(".save-list");
hide(".item-name-check")

hide(".current-list")
hide(".current-list-name")
hide(".current-list-items")


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
    hide(".budget-form");
    hide(".budget-number");
    hide(".budget-check");
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
        hide(".changing-the-budget");
      });
  }));



let creatList = document.querySelector(".btn-create-list");
let addItem = document.querySelector(".btn-add-elements");
let itemName = document.querySelector(".item-name");

let addInfo = document.querySelector(".more-info");
let amountItem = document.querySelector(".item-amount");
let amountConfirm = document.querySelector(".amount-check");
let priceItem = document.querySelector(".item-price");
let priceConfirm = document.querySelector(".price-check");

let lastAdded = document.querySelector(".last-added-items");

const createList = document
  .querySelector(".btn-create-list")
  .addEventListener("click", function () {
    removeHidden(".p-list-name");
    removeHidden(".list-name");
    removeHidden(".list-name-check");
    removeHidden(".btn-add-elements");
    removeHidden(".add-item-form");
    removeHidden(".current-list");
    removeHidden(".save-list");
  });

const addItems = document
  .querySelector(".btn-add-elements")
  .addEventListener("click", function () {
    removeHidden(".item-form");
    removeHidden(".item-name");
    removeHidden(".item-name-check");
    removeHidden(".more-info");
    removeHidden(".last-added-items");
    removeHidden(".add-the-item");
  });

const addAdditionalInfo = document
  .querySelector(".more-info")
  .addEventListener("click", function () {
    removeHidden(".item-amount");
    removeHidden(".amount-check");
    removeHidden(".item-price");
    removeHidden(".price-check");
  });

const asignName = document.querySelector(".list-name-check").addEventListener("click", function(){
  let listName = document.querySelector(".list-name").value;
  removeHidden(".current-list-name");
  document.querySelector(".current-list-name").textContent = listName
  console.log(listName)
})

const asignItem = document.querySelector(".item-name-check").addEventListener("click", function(){
  let itemName = String(document.querySelector(".item-name").value);
  removeHidden(".first-item")
  removeHidden(".current-list-items")
  document.querySelector(".first-item").textContent = itemName
  console.log(itemName)
})



