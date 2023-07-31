"use strict";

const budget = document.querySelector(".budget").textContent;

document.querySelector(".check").addEventListener("click", function () {
  const budget = Number(document.querySelector(".budget").value);
  console.log(budget, typeof budget);
});

