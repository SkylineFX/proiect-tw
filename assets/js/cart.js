const items = document.getElementsByClassName('cart-items')[0]
const emptyMessage = document.getElementsByClassName('empty-message')[0]
const checkoutBtn = document.getElementById('checkout')
const mobileCart = document.getElementById('mobile-cart') 

if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', new Array(0));
  checkoutBtn.style.display = 'none'
}
else {
  localStorage.getItem('cart').split(',').forEach(id => {
    addToCart(id, false);
  })
  emptyMessage.style.display = 'none'
}

async function addToCart(currentProductId, newProduct = true) {
  // fetch product data
  const currentProduct = await fetchProduct(currentProductId)

  // add to localStorage if new product
  if (newProduct) {
    oldCart = localStorage.getItem('cart');
    oldCart = oldCart == "" ? [] : oldCart.split(',')
    oldCart.push(currentProductId);
    localStorage.setItem('cart', JSON.parse(JSON.stringify(oldCart)));
  }

  // create cart item
  emptyMessage.style.display = 'none'
  checkoutBtn.style.display = 'flex'
  createCartItem(currentProduct)
}

async function fetchProduct(currentProductId) {
  const response = await fetch('./assets/products.json');
  const json = response.json();
  return json.product.find(product => product.id == currentProductId);
}

function createCartItem(currentProduct) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  const contents = document.createElement('div');
  contents.classList.add('contents');

  const img = document.createElement('img');
  img.src = currentProduct.info.image_url;

  const details = document.createElement('div');
  const name = document.createElement('p');
  name.textContent = currentProduct.info.name;
  const price = document.createElement('p');
  price.textContent = currentProduct.info.price_new + " lei";

  const buttons = document.createElement('div');
  buttons.classList.add('cart-buttons');
  const remove = document.createElement('img');
  remove.src = './assets/images/bin.svg';

  remove.addEventListener('click', () => {
    let removedIdx = [...items.children].indexOf(cartItem) - 1; // first child is emptyMessage

    let cart = localStorage.getItem('cart').split(',');
    cart = cart.filter((element, idx) => idx != removedIdx);
    localStorage.setItem('cart', cart);
    cartItem.remove();

    if (cart.length == 0) {
      emptyMessage.style.display = 'flex';
      checkoutBtn.style.display = 'none';
    }
  })
  buttons.appendChild(remove);

  details.appendChild(name);
  details.appendChild(price);

  contents.appendChild(img);
  contents.appendChild(details);
  cartItem.appendChild(contents);
  cartItem.appendChild(buttons);
  items.appendChild(cartItem);
}

function checkout() {
  localStorage.setItem('cart', new Array(0));

  for (let i = items.children.length - 1; i > 0; i--) {
    items.children[i].remove();
  }

  emptyMessage.style.display = 'flex';
  checkoutBtn.style.display = 'none';

  mobileCart.classList.remove("active-cart");
  navWrapper.classList.remove("active-nav");
}