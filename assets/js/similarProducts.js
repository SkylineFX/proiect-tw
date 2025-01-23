
window.addEventListener('load', function() {
  const currentProductId = new URLSearchParams(window.location.search).get('id');
  let categories = document.getElementsByClassName('similar-products')

  fetch('./assets/products.json')
  .then((response) => response.json())
  .then((json) => {

    for (const product of json.product) {
      if (product.id == currentProductId) {
        continue;
      }

      const card = document.createElement('div')
      card.classList.add('card')

      const a = document.createElement('a')
      a.href = product.url

      const img = document.createElement('img')
      img.src = product.info.image_url
      img.classList.add('cover')

      const cardName = document.createElement('div')
      cardName.classList.add('card-name')

      const p = document.createElement('p')
      p.textContent = product.info.name

      const icon = document.createElement('img')
      icon.src = './assets/images/arrow-right.svg'

      cardName.appendChild(p)
      cardName.appendChild(icon)

      a.appendChild(img)
      a.appendChild(cardName)

      card.appendChild(a)

      categories[0].appendChild(card)
    }
  });
})