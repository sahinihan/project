"use strict";

let budget = document.querySelector(".budget-number");
let budgetInfo = document.querySelector(".known-budget").textContent;
let changeBudget = document.querySelector(".changing-the-budget");
let btnChange = document.querySelector(".change-known-budget");

const hide = function (thing) {
  document.querySelector(thing).classList.add("hidden");
};

hide(".known-budget");
hide(".change-known-budget");
hide(".changing-the-budget");

// recieving initial budget and portraying it
document.querySelector(".budget-check").addEventListener("click", function () {
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
document
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
  });
