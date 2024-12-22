function openNav3() {
    document.getElementById("mySidenavh").style.width = "75%";
}
function closeNavh() {
    document.getElementById("mySidenavh").style.width = "0";
    document.getElementById("mainh").style.marginLeft = "0";
}
function closeOffcanvas2() {
    document.getElementById("myOffcanvas2").style.display = "none";
}
function openNav4() {
    document.getElementById("mySidenav").style.width = "75%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

//   function save() {
//     document.body.style.overflow = ''; // السماح بالتمرير عند إغلاق الـ modal
//     document.getElementById("more-details").style.display = "none";
//   }
//     document.getElementById("more-details").addEventListener("click", function(event) {
//         if (event.target === this) { // إذا كان النقر على الخلفية
//             save();
//   }});

  $(document).on("shown.bs.modal",function(){
    $('.images-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows:true
    });
});

const cartLength = document.querySelector(".cart-length");
const cartTableTbody = document.querySelector(".cart-table-tbody");
const productsContainer = document.querySelector(".products-container");
const totalPriceCell = document.querySelector(".total-price");


// Products array
const products = [
    {
      id: 0,
      product_name: "A bottle of water, milk or juice",
      product_price: 19,
      product_image: "images/bottel.jpg",
      product_description:
        "Immerse yourself in crystal-clear sound with the Beats Red Headset.",
      count: 0,
      added_to_cart: false,
    },
    {
      id: 1,
      product_name: "ENZO blender 10000 watts",
      product_price: 1499,
      product_image: "images/enzo1.jpg",
      product_description:
        "Experience professional-grade audio recording and communication with the Black Microphone and Headset Combo.",
      count: 0,
      added_to_cart: false,
    },
    {
      id: 2,
      product_name: "Jessie Glass Spice and Salt Set",
      product_price: 89,
      product_image: "images/jess.jpg",
      product_description:
        "Perfect for studio recordings and live performances, the Professional Microphone delivers exceptional sound quality.",
      count: 0,
      added_to_cart: false,
    },
    {
      id: 3,
      product_name: "Glass spice jar set",
      product_price:19,
      product_image: "images/jar.jpg",
      product_description:
        "Reduce unwanted noise and improve vocal clarity with the Microphone featuring a Pop Filter.",
      count: 0,
      added_to_cart: false,
    },
    {
      id: 4,
      product_name: "OPPo A58",
      product_price: 7899,
      product_image: "images/oppo.jpg",
      product_description:
        "Dominate the gaming battlefield with the Red Gaming Headset, designed for immersive gaming experiences.",
      count: 0,
      added_to_cart: false,
    },
    {
      id: 6,
      product_name: "Realme 11  8/256gb    4g",
      product_price: 7799,
      product_image: "images/reml.jpg",
      product_description:
        "Experience the future of mobile technology with the sleek and powerful White iPhone 15.",
      count: 0,
      added_to_cart: false,
    },
    {
      id: 7,
      product_name: "Winter orange two pieces",
      product_price: 499,
      product_image: "images/Winter orange two pieces.jpg",
      product_description:
        "Combine style and functionality with the Black and Gold Wireless Headset, delivering premium sound without the wires.",
      count: 0,
      added_to_cart: false,
    },
    {
      id: 8,
      product_name: "Winter orange two pieces",
      product_price: 459,
      product_image: "images/Winter orange two pieces2.jpg",
      product_description:
        "Enjoy wireless freedom and superior sound quality with the sleek Black Wireless Headset.",
      count: 0,
      added_to_cart: false,
    },
    {
      id: 9,
      product_name: "Bomber jacket",
      product_price: 319,
      product_image: "images/Bomber jacket.jpg",
      product_description:
        "Elevate your music listening experience with the stylish and comfortable White Headphones.",
      count: 0,
      added_to_cart: false,
    },
  ];
  let cart = [];

// Save cart to local storage
function saveCartToLocalStorage(cartArray) {
  localStorage.setItem("cart", JSON.stringify(cartArray));
}

// Check if cart exists in local storage
if (localStorage.cart) {
  cart = JSON.parse(localStorage.cart);
}

// Get cart length to display in the cart icon
function updateCartLength() {
  cartLength.textContent = cart.length || 0;
}

// Update cart length on page load
window.onload = updateCartLength;

  // Add product to cart
function addToCart(idx) {
  const product = products[idx];
  if (product.added_to_cart) {
    product.count++;
  } else {
    product.count = 1;
    product.added_to_cart = true;
    cart.push(product);
  }
  saveCartToLocalStorage(cart);
  updateCartLength();
}

// Generate product cards
if (productsContainer) {
  products.forEach((product, idx) => {
    const productCard = `
  <div class="row g-4">
  <div class="cards flex-column-md row">
      <div class="col-lg-4 col-md-4 col-sm-6 d-flex">
        <div class="img-container flex-center">
        <div class="card h-75">
          <img src="${product.product_image}" alt="${product.product_name}" class="img-fluid img-thumbnail h-50"/>
          <div class="card-content p-3">
            <h2 class="card-title">${product.product_name}</h2>
            <p class="text-warning">&star; &star; &star; &star;&star;</p>
            <p class="product-price">price is ${product.product_price} <span class="product-price-currency">LE</span></p>
            <p class="text-success">Available in stock</p>
            <button class="btn btn-danger w-50 add" onclick="addToCart(${idx})">Add to Cart</button>
            <button class="btn btn-info w-100 m-2 view" onclick="viewModal(${idx})">View</button>
          </div>
        </div>
      </div>
      </div>
    `;
    productsContainer.innerHTML += productCard;
  });
}

  // const categories =[...new set products.map((item)=>
  //   {return item})]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item)=>
      {
        var {product_name, product_price, product_image, product_description} = item;
        return (
          `<div class='box'>
          <div class='img-box'>
            <img class='images' src=${product_image}></img>
            </div>
            <div class='bottom'>
              <p>${product_name}</p>
              <h2>${product_price}.00</h2>`+
              "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
            `</div>
            </div>`
        )
      }).join('')
      // var cart=[];
      function displaycart(){
        let j=0;
        if(cart,length==0){
          document.getElementById('cartitem').innerHTML="your cart is empty";
        }
        else{
          document.getElementById('cartitem').innerHTML=cart.map((item)=>
          {
            var{product_name, product_price,product_image,product}=item;
            return(
              `<div class='cart-item'>
              <div class='row-img'>
              <img class='rowimg' src=${product_image}></img>
              </div>
              <p>${product_name}</p>
              <h2>${product_price}.00</h2>`+
              "<i class= onclick='delElement("+(j++)+")'>Add to Cart</i>"
            `</div>
            </div>`
              
            )
          }).join('')
        }
      }