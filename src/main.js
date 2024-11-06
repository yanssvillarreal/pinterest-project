import { fetchImages } from './services/unsplashService.js'
import { renderHeader } from './components/Header.js'
import { renderImageGallery } from './components/ImageGallery.js'

// Renderiza el header con la barra de búsqueda
renderHeader(onSearch)

// Función para manejar la búsqueda
async function onSearch(query) {
 const images = await fetchImages(query)
 renderImageGallery(images)
}

// Carga inicial de imágenes populares
onSearch('popular')
