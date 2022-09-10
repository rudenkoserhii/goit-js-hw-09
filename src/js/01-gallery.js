// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const galleryItemsCollection = createGalleryItemsCollection(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsCollection);

function createGalleryItemsCollection(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');

};


const lightbox = new SimpleLightbox('.gallery a', { enableKeyboard: "true", captionDelay: "250ms", captions: "true", captionSelector: "img", captionType: "attr", captionsData: "alt" });

// Change code below this line

console.log(galleryItems);
