import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery= document.querySelector(`.gallery`);
gallery.addEventListener('click',onClickImage);

const markup=galleryItems.map(({preview,original,description})=>
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join(``);
gallery.insertAdjacentHTML(`beforeend`,markup)



function onClickImage (event){
  event.preventDefault();
const instance = basicLightbox.create(`
	<img src=${event.target.dataset.source} width="500" height="600">
`);
instance.show();


}
