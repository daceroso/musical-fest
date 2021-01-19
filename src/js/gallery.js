"use strict";

document.addEventListener("DOMContentLoaded", function () {
  createGallery();
});

const createGallery = function () {
  const gallery = document.querySelector(".img-gallery");

  for (let i = 1; i <= 12; i++) {
    const image = document.createElement("IMG");
    image.src = `build/img/thumb/${i}.webp`;
    image.dataset.imageId = i;

    // add IMG

    image.onclick = showImg;

    const list = document.createElement("LI");
    list.appendChild(image);

    gallery.appendChild(list);
  }
};

const showImg = (e) => {
  const id = parseInt(e.target.dataset.imageId);
  const image = document.createElement("IMG");
  image.src = `build/img/grande/${id}.webp`;

  const overlay = document.createElement("DIV");
  overlay.appendChild(image);
  overlay.classList.add("overlay");

  overlay.onclick = () => overlay.remove();

  // btn

  const closeImg = document.createElement("P");
  closeImg.textContent = "X";
  closeImg.classList.add("close-btn");

  //close IMG

  closeImg.onclick = () => overlay.remove();

  overlay.appendChild(closeImg);

  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add('body-fixed');
};
