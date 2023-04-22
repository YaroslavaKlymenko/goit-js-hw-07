import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');

  const galleryMarkup = galleryItems
    .map(({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>
    `)
    .join('');

  gallery.insertAdjacentHTML('beforeend', galleryMarkup);

  gallery.addEventListener('click', event => {
    event.preventDefault();

    const { target } = event;

    if (target.nodeName === 'IMG') {
      const originalSrc = target.dataset.source;

      const modal = basicLightbox.create(`
        <div class="modal">
          <img src="${originalSrc}" class="gallery__image">
        </div>
      `);

      modal.show();

      const modalImg = document.querySelector('.basicLightbox__placeholder');
      modalImg.addEventListener('click', () => {
        modal.close();
      });
    }
  });
});