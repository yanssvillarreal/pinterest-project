export function renderHeader(onSearch) {
 const header = document.getElementById('header')
 header.className = 'header'

 header.innerHTML = `
    <div class="header__logo" id="logo">
      <img src="./assets/pinterest.png" alt="Logo" class="logo-icon" />
    </div>
    <nav class="header__nav">
      <button class="nav-button" id="inicio-btn">Inicio</button>
      <button class="nav-button" id="explorar-btn">Explorar</button>
      <button class="nav-button" id="crear-btn">Crear</button>
    </nav>
    <form id="search-form" class="header__search">
      <input type="text" id="search-input" placeholder="Buscar imágenes..." />
    </form>
    <div class="header__icons">
      <img src="./assets/campana.png" alt="Campana" class="icon" id="campana-icon" />
      <img src="./assets/comentario.png" alt="Mensajes" class="icon" id="mensajes-icon" />
      <img src="./assets/profile-user.png" alt="Perfil" class="icon" id="perfil-icon" />
    </div>
  `

 // Evento de búsqueda y clic en el logo
 const searchForm = document.getElementById('search-form')
 searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const query = document.getElementById('search-input').value
  onSearch(query)
  searchForm.reset()
 })

 document
  .getElementById('logo')
  .addEventListener('click', () => onSearch('popular'))
}
