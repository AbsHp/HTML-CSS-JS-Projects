import data from "./data.js";
const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
// if length is 1 hide buttons
if (data.length === 1) {
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    }
    