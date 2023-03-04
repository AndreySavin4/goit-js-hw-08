// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryRel = document.querySelector('.gallery');

const markupElements = galleryItems
  .map(({ original, preview, description }) => {
    return `<li class="gallery__link">
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" 
    title="${description}"/>
  </a>
  </li>`;
  })
  .join('');
galleryRel.insertAdjacentHTML('afterbegin', markupElements);

galleryRel.addEventListener('click', modal);

function modal(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  e.preventDefault();
}

new SimpleLightbox('.gallery a', {
  /* options */
});
