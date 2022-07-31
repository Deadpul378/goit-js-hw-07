import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML = createGalleryItem(galleryItems);
galleryEl.addEventListener("click", largeImage);

console.log(galleryItems);
function createGalleryItem(item) {
  return item
    .map(
      ({ preview, original, description }) => `<div class="gallery_item">
    <a class="gallery_link  href="${original}"></a>
    <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/>
    </div>`
    )
    .join("");
}

function largeImage(event) {
  event.preventDefault();
  const modalImg = event.target.dataset.source;
  const instance = basicLightbox.create(template(modalImg));
  instance.show(modalImg);
  document.addEventListener("keydown", (e) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
const template = (link) =>
  `<div class="modal">
<img src="${link}" alt="original"/>
</div>`;
