import { galleryItems } from "./gallery-items.js";
// Change code below this line
function getGalleryElement() {
  return document.querySelector(".gallery");
}
function createImageElement({ preview, original, description }) {
  return `
    <a class="gallery__item" href="${original}" onclick="return false">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
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

  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  gallery.open();
}

function rander() {
  const container = getGalleryElement();
  const elementsToRander = galleryItems.map(createImageElement).join("");
  container.insertAdjacentHTML("beforeend", elementsToRander);
  onGalleryImageClick(container);
}
rander();
