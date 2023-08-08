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
hide([".save-list",]);

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




const listName = document.querySelector(".p-list-name")
const listNameInput = document.querySelector(".list-name")
const listNameButton = document.querySelector(".list-name-check")
const newListName = document.querySelector(".List-Name")

// Assign list name
const asignName = document
  .querySelector(".btn-create-list")
  .addEventListener("click", function () {
    removeHidden([".p-list-name", ".list-name", ".list-name-check"])
})

const ShowListName = document.querySelector(".list-name-check").addEventListener("click", function() {
  removeHidden([".list-item", ".List-Name"])
  let newListN = listNameInput.value
  newListName.textContent = newListN
  // console.log(`${newListN}`)
})

const list = document.querySelector('ul')
const itemInput = document.querySelector(".item-name")
const itemButton = document.querySelector(".item-name-check")
let items = []

// adding items to the list
itemButton.addEventListener("click", function(){
  let myItem = itemInput.value
  items.push(myItem)
  console.log(items)

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');
  const infoBtn = document.createElement("button")

  listItem.appendChild(listText);
  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  listItem.appendChild(infoBtn);
  infoBtn.textContent = 'add more info';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });


});



// const addAdditionalInfo = document
//   .querySelector(".more-info")
//   .addEventListener("click", function () {
//     removeHidden([".item-amount", ".item-price", ".info-check"]);
//   });

// let listName = document.querySelector(".list-name").value;
// let itemAmount = document.querySelector(".item-amount").value;
// let itemPrice = document.querySelector(".item-price").value;
// let itemInfo = document.querySelector(".item-info");
// let itemName = String(document.querySelector(".item-name").value);

// // Assign list name
// const asignName = document
//   .querySelector(".list-name-check")
//   .addEventListener("click", function () {
//     let listName = document.querySelector(".list-name").value;
//     removeHidden([".current-list-name", ".current-list"]);
//     document.querySelector(".current-list-name").textContent = listName;
//     console.log(listName);

//     let list = document.createElement(listName);
//     console.log(list, typeof list);
//   });

// // assign item name
// const asignItem = document
//   .querySelector(".add-the-item")
//   .addEventListener("click", function () {
//     let itemName = String(document.querySelector(".item-name").value);
//     removeHidden([".first-item", ".current-list-items"]);
//     document.querySelector(".first-item").textContent = itemName;

    

//     let itemAmount = Boolean(document.querySelector(".item-amount").value);
//     let itemPrice = Boolean(document.querySelector(".item-price").value);

//     if (itemPrice == false && itemAmount == false) {
//       document.querySelector(".item-info").textContent = "No item information";
//     }


//     // assign item info
//     const assignItemInfo = document
//       .querySelector(".info-check")
//       .addEventListener("click", function () {
//         let itemAmount = Boolean(document.querySelector(".item-amount").value);
//         let itemPrice = Boolean(document.querySelector(".item-price").value);

//         if (itemPrice == false && itemAmount == false) {
//           document.querySelector(".item-info").textContent =
//             "No item information";
//         } else if (itemAmount == false && itemPrice == true) {
//           document.querySelector(".item-info").textContent = `price: ${
//             document.querySelector(".item-price").value
//           }₺`;
//         } else if (itemPrice == false && itemAmount == true) {
//           document.querySelector(".item-info").textContent = `amount: ${
//             document.querySelector(".item-amount").value
//           }`;
//         } else if (itemAmount == true && itemPrice == true) {
//           document.querySelector(".item-info").textContent = `amount: ${
//             document.querySelector(".item-amount").value
//           }, price: ${document.querySelector(".item-price").value}₺`;
//         }
//       });

//     console.log(itemInfo);
//   });
