/*
Name: Vivan Patel
File: main.js
Date: 18 November 2025
Description: JavaScript logic for Image Gallery
*/
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [
    { filename: "pic1.jpg", alt: "Closeup of a human eye" },
    { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
    { filename: "pic3.jpg", alt: "Purple and white pansies" },
    { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

// Base URL

const baseURL = "Image/";

// Looping through images

for (const image of images) {
    const newImage = document.createElement("img");

    // FIXED: use image.filename and image.alt
    newImage.src = baseURL + image.filename;
    newImage.alt = image.alt;

    newImage.setAttribute("tabindex", "0");

    newImage.addEventListener("click", updateDisplayedImage);

    newImage.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            updateDisplayedImage(event);
        }
    });

    thumbBar.appendChild(newImage);
}

function updateDisplayedImage(event) {
    const clickedImage = event.target;
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
}
btn.addEventListener("click", () => {
    const isDark = btn.classList.contains("dark");

    if (isDark) {
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    } else {
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    }

    // Stretch goal: toggle dark class in one line
    btn.classList.toggle("dark");
});