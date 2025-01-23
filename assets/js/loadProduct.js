window.addEventListener('load', function() {
  const productId = new URLSearchParams(window.location.search).get('id');

  const productName = this.document.getElementsByClassName("name")[0];
  const productNewPrice = this.document.getElementsByClassName("new")[0];
  const productOldPrice = this.document.getElementsByClassName("old")[0];
  const productDescription = this.document.getElementsByClassName("description")[0];

  const productImage = this.document.getElementsByClassName("plant-image")[0];
  const productSize = this.document.getElementsByClassName("plant-size")[0];
  const productRequirements = this.document.getElementsByClassName("req-list")[0];

  fetch('/assets/products.json')
  .then((response) => response.json())
  .then((json) => {
    const product = (json.product.find(x => x.id == Number(productId)));

    productName.textContent = product.info.name;
    productNewPrice.textContent = product.info.price_new + " lei";
    productOldPrice.textContent = product.info.price_old + " lei";
    productDescription.textContent = product.info.description;

    productImage.src = product.info.image_url;
    productSize.textContent = product.info.size;
    
    for (const requirement of product.info.requirements) {
      const li = document.createElement('li');
      li.textContent = requirement.name;
      productRequirements.appendChild(li);
    }
  });
})