import data from "./data.js";
const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
// if length is 1 hide buttons
if (data.length === 1) {
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    }
    // if length is 2, add copies of slides
    let people = [...data];
    if (data.length === 2) {
    people = [...data, ...data];
    }
    container.innerHTML = people
    .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = "next";
    