export const fetchImages = async (query) => {
 try {
  const response = await fetch(
   `https://api.unsplash.com/search/photos?query=${
    query || 'gatos'
   }&per_page=30`,
   {
    headers: {
     Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`
    }
   }
  )

  if (!response.ok) {
   throw new Error(`Error en la solicitud: ${response.status}`)
  }

  const data = await response.json()
  return data.results
 } catch (error) {
  console.error('Error al buscar imágenes:', error)
  return []
 }
}
