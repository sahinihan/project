const allLists = document.querySelector('.all-lists')
const favorites = document.querySelector('.favorite-lists')
const lastAdded = document.querySelector('.last-added-items')

const budget = document.querySelector(".budget").textContent;

document.querySelector(".check").addEventListener("click", function () {
  const budget = Number(document.querySelector(".budget").value);
  console.log(budget, typeof budget);
})

//const currentBudget = document.querySelector(".known-budget").classList.add('hidden')

//const changeBudget = document.querySelector(".changing-the-budget").classList.add('hidden')

//const itemForm = document.querySelector(".add-items-form").classList.add('hidden')