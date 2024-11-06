export function renderImageCard(image) {
 const div = document.createElement('div')
 div.classList.add('image-card')

 div.innerHTML = `
   <img src="${image.urls.small}" alt="${image.alt_description}" />
   <div class="info">
     <img src="${image.user.profile_image.small}" alt="${image.user.name} profile" />
     <p>${image.user.name}</p>
   </div>
 `

 return div
}
