// Define product data
const products = [
    {
      name: "Lenovo Legion 5",
      price: 1276.38,
      image: "https://m.media-amazon.com/images/I/611aDZwqERL._SX569_.jpg"
    },
    {
      name: "MSI Raider GE78HX ",
      price: 6807.87,
      image: "https://m.media-amazon.com/images/I/41lshLcdFxL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      name: "ASUS TUF Gaming F15 (2022) ",
      price: 1154.79,
      image: "https://m.media-amazon.com/images/I/71NxKpg1NIL._SX569_.jpg"
    },
    {
      name: "Acer Predator Helios Neo 16 ",
      price: 1580.30,
      image: "https://m.media-amazon.com/images/I/51hvBtWe0IL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      name: "Acer Aspire 5 ",
      price: 771.96,
      image: "https://m.media-amazon.com/images/I/61gGtqfZFlL._SX569_.jpg"
    },
    {
      name: "HP Victus Gaming Laptop ",
      price: 717.15,
      image: "https://m.media-amazon.com/images/I/41nJB6T+aKL._SY300_SX300_.jpg"
    },
    // Add more products...
  ];
  
  // Render products on the page
  const productsSection = document.getElementById("products");
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
  
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productElement.appendChild(productImage);
  
    const productName = document.createElement("h3");
    productName.innerText = product.name;
    productElement.appendChild(productName);
  
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    productElement.appendChild(productPrice);
  
    const addToCartButton = document.createElement("button");
    addToCartButton.innerText = "Add to Cart";
    addToCartButton.addEventListener("click", () => {
      addToCart(product);
    });
    productElement.appendChild(addToCartButton);
  
    productsSection.appendChild(productElement);
  });
  
  // Add a product to the cart
  function addToCart(product) {
    const cartItems = document.getElementById("cart-items");
    const cartItem = document.createElement("li");
    cartItem.innerText = product.name + " - $" + product.price;
    cartItems.appendChild(cartItem);
  }
  