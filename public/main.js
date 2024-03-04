//hamburger
const navSlide = () => {
  const burger = document.querySelector(".menu-hamburger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
    burger.classList.toggle("toggle");
  });
  //
};

navSlide();
// DOM
const pink = document.getElementById("pink");
const blue = document.getElementById("blue");
const pinkToBlue = document.getElementById("pinkFood");
const forth = document.getElementById("forth");
const dryFood = document.getElementById("second");
const wave1 = document.getElementById("svg-wave");
const forthHeading = document.getElementById("forth-heading");
blue.addEventListener("click", function (e) {
  pinkToBlue.src = "./images/blue-food.png";
  forth.style.backgroundColor = "var(--secondary-color)";
  dryFood.style.backgroundColor = "var(--forth-color)";
  wave1.style.fill = "#fccedf";
  forthHeading.textContent = "Treats for Puppies";
  e.preventDefault();
});
pink.addEventListener("click", function (e) {
  pinkToBlue.src = "./images/pink-food.png";
  forth.style.backgroundColor = "var(--forth-color)";
  dryFood.style.backgroundColor = "var(--secondary-color)";
  wave1.style.fill = "#a2daef";
  forthHeading.textContent = "Scrummy salmon";
  e.preventDefault();
});
//dropdown
const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");
let dogBreedNames = [
  "German Shepherd",
  "Bulldog",
  "Labrador Retriever",
  "Golden Retriever",
  "French Bulldog",
  "Poodle",
  "Chihuahua",
  "Chow Chow",
  "Dobermann",
];
function addDog(selectedDog) {
  options.innerHTML = "";
  dogBreedNames.forEach((dog) => {
    let isSelected = dog == selectedDog ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${dog}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addDog();
function updateName(selectedLi) {
  searchInp.value = "";
  addDog(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}
searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = dogBreedNames
    .filter((data) => {
      return data.toLowerCase().startsWith(searchWord);
    })
    .map((data) => {
      let isSelected =
        data == selectBtn.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    })
    .join("");
  options.innerHTML = arr
    ? arr
    : `<p style="margin-top: 10px;">Oops! Dog breed not found</p>`;
});
selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
