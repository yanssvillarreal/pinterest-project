import { renderImageCard } from './ImageCard.js'

export function renderImageGallery(images) {
 const gallery = document.getElementById('image-gallery')
 gallery.innerHTML = ''

 images.forEach((image) => {
  const imageCard = renderImageCard(image)
  gallery.appendChild(imageCard)
 })
}
