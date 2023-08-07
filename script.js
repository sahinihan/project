"use strict";

const hide = function (arr) {
  for (let part of arr) document.querySelector(part).classList.add("hidden");
};

const removeHidden = function (arr) {
  for (let part2 of arr) document.querySelector(part2).classList.remove("hidden");
};

//hidden content when restarted
hide([".known-budget", ".change-known-budget", ".changing-the-budget"]);
hide([".p-list-name", ".list-name", ".list-name-check", ".btn-add-elements"]);
hide([".add-item-form", ".item-form", ".item-name"]);
hide([".more-info", ".item-amount", ".amount-check", ".item-price", ".price-check"]);
hide([".p-last-items", ".last-added-items", ".add-the-item"]);
hide([".current-list", ".save-list", ".item-name-check"]);
hide([".current-list", ".current-list-name", ".current-list-items"]);


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

const createList = document
  .querySelector(".btn-create-list")
  .addEventListener("click", function () {
    removeHidden([".p-list-name", ".list-name", ".list-name-check", ".btn-add-elements", ".add-item-form", ".save-list"]);
  });

const addItems = document
  .querySelector(".btn-add-elements")
  .addEventListener("click", function () {
    removeHidden([".item-form", ".item-name", ".item-name-check", ".more-info", ".last-added-items", ".add-the-item"]);
  });

const addAdditionalInfo = document
  .querySelector(".more-info")
  .addEventListener("click", function () {
    removeHidden([".item-amount", ".amount-check", ".item-price", ".price-check"]);
  });

const asignName = document
  .querySelector(".list-name-check")
  .addEventListener("click", function () {
    let listName = document.querySelector(".list-name").value;
    removeHidden([".current-list-name", ".current-list"]);
    document.querySelector(".current-list-name").textContent = listName;
    console.log(listName);
  });

  let itemAmount = document.querySelector(".item-amount").value
  let itemPrice = document.querySelector(".item-price").value


const asignItem = document
  .querySelector(".add-the-item")
  .addEventListener("click", function () {
    let itemName = String(document.querySelector(".item-name").value);
    removeHidden([".first-item", ".current-list-items"]);
    document.querySelector(".first-item").textContent = itemName;
    console.log(itemName);
    if (itemPrice == false && itemAmount == false) {
      document.querySelector(".item-info").textContent = "No item information"
    }
  });

