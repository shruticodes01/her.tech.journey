"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsShowModal.length; i++) {
  //   btnsShowModal[i].addEventListener("click", function () {
  //     modal.classList.remove("hidden");
  //     overlay.classList.remove("hidden"); // do not add dot(.)
  //   });

  btnsShowModal[i].addEventListener("click", showModal);
}

btnCloseModal.addEventListener("click", closeModal);

// document.querySelector("body").addEventListener("click", function () { //// NOTE: Overlay has a z-index of 5!!
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

overlay.addEventListener("click", closeModal);
