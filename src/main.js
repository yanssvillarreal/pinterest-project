import { fetchImages } from './services/unsplashService.js'
import { renderHeader } from './components/Header.js'
import { renderImageGallery } from './components/ImageGallery.js'

renderHeader(onSearch)

// Función para la búsqueda
async function onSearch(query) {
 const images = await fetchImages(query)

 // Contenedor de resultados
 const container = document.getElementById('results-container')

 // Si no hay resultado, muestra mensaje...
 if (images.length === 0) {
  container.innerHTML = `
      <p class="no-results">
        No se encontraron resultados para "${query}". Intenta buscar "gatos" u otra palabra.
      </p>
    `
  renderImageGallery([])
 } else {
  container.innerHTML = ''
  renderImageGallery(images)
 }
}

// carga de imagenes
onSearch('popular')
