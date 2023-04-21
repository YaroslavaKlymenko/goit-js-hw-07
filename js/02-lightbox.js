import { galleryItems } from './gallery-items.js';


document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');

  const galleryMarkup = galleryItems
    .map(({ preview, original, description }) => `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </div>
    `)
    .join('');

  gallery.insertAdjacentHTML('beforeend', galleryMarkup);

  gallery.addEventListener('click', event => {
    event.preventDefault();

    const { target } = event;

    if (target.nodeName === 'IMG') {
      const originalSrc = target.closest('.gallery__link').getAttribute('href');
      const modalImg = document.querySelector('.gallery__image');

      modalImg.setAttribute('src', originalSrc);

      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
   
      lightbox.open();
    }
  });
});

