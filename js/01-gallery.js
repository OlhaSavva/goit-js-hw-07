import { galleryItems } from "./gallery-items.js";
// Change code below this line
function getGalleryElement() {
  return document.querySelector(".gallery");
}
function createImageElement({ preview, original, description }) {
  return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
</a>
</div>
    `;
}
function onGalleryImageClick(container) {
  return container.addEventListener("click", handelGalleryImageClick);
}
function handelGalleryImageClick(evt) {
  const isImageElement = evt.target.classList.contains("gallery__image");
  if (!isImageElement) {
    return;
  }
  console.log(evt.target);
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}

function rander() {
  console.log(galleryItems);
  const container = getGalleryElement();
  const elementsToRander = galleryItems.map(createImageElement).join("");
  container.insertAdjacentHTML("beforeend", elementsToRander);
  onGalleryImageClick(container);
}
rander();
