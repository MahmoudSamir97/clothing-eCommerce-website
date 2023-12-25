// main nav functionality 
let cartItems = [];
const cartLogoBtn = document.getElementById("cart-logo");
const mainPageIcon = document.querySelector(".main-page");
const backArrow = document.querySelector(".backArrow");
const cartContainer = document.querySelector(".cart");
const productsContainer = document.getElementById("main-container");
const productDescContainer = document.querySelector(".product-description");
cartLogoBtn.addEventListener("click",()=>{
    cartContainer.style.visibility = "visible";
});
backArrow.addEventListener("click", ()=>{
    cartContainer.style.visibility = "hidden";
});
mainPageIcon.addEventListener("click",()=>{
    productDescContainer.style.display = "none";
    productsContainer.style.display = "grid";
});

window.onscroll = function(){
    const nav = document.querySelector("nav");
    if(window.scrollY >=20){
        nav.style.backgroundColor = "#fff";
    }else{
        nav.style.backgroundColor = "";
    }
};

// Getting products from API
const getProducts = async function(){
    const productsArr = [];
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    productsArr.push(data);
    return productsArr;
};
getProducts().then(data=>console.log(data));

// render products from API
const displayOnPage = async()=>{

    // remove all from cart
    removeAllFromCart();
    const products = await getProducts(); 
    console.log(products);
        for (const product of products[0]){
            productsContainer.innerHTML += `
                <div class="single-product" data-id="${product.id}">
                    <div class="icons-container">
                        <img src="images/icons8-add-50.png" alt="add icon" id="add-btn">
                        <img src="images/eye (1).png" alt="eye icon" id="eye-btn">
                    </div>
                    <div class="product-img-container">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <p class="product-category">${product.category}</p>
                    <p class="product-title">${product.title}</p>
                    <p class="product-price">$ ${product.price}</p>
                </div>
            `;
        } 

        // adding product to cart when click on "+" icon
        const addBtns = document.querySelectorAll("#add-btn");
        for(let i =0 ; i < addBtns.length; i++){
            addBtns[i].addEventListener("click", addToCart);
            function addToCart(e){
                const currentelement = e.target.parentElement.parentElement;
                const currentelementId = parseInt(currentelement.getAttribute("data-id"));
                const targetElementInArray = products[0].find(element=> element.id === currentelementId);  
                // // create separate object, can't modify directly on Array object
                const existInCartItems = cartItems.find(item=> item.id === targetElementInArray.id);
                if(existInCartItems){
                    existInCartItems.quantity++;
                }else{
                    cartItems.push({...targetElementInArray, quantity:1})
                }   
                updateCartDisplay();

      
            }
    };

    // open product description in separate page when click on "eye" icon
    const eyeBtns = document.querySelectorAll("#eye-btn");
    eyeBtns.forEach(btn=>{
        btn.addEventListener("click", showingTheCart);
    });
    function showingTheCart(e){
        productDescContainer.innerHTML = '';
        productDescContainer.style.display = "flex";
        productsContainer.style.display = "none";
        const currentelement = e.target.parentElement.parentElement;
        const targetProduct = products[0].find( product => product.id === parseInt(currentelement.getAttribute("data-id")));
     
        productDescContainer.innerHTML = `
                <div class="desc-image-container">
                    <img src="${targetProduct.image}" alt="product image">
                </div>
                <div class="info-container">
                    <h1 class="desc-product-title">${targetProduct.title}</h1>
                    <p class="desc-product-price">$ ${targetProduct.price}</p>
                    <p class="desc-product-description">${targetProduct.description}</p>
                    <button class="desc-product-AddButton" data-id="${targetProduct.id}">Add to cart</button>
                </div>
        `;
        const addFromDesc = document.querySelector(".desc-product-AddButton");
        addFromDesc.addEventListener("click",(e)=> {
            const targetElemId = parseInt(e.target.dataset.id);
            const targetElemInArray = products[0].find(product=> product.id === targetElemId);
            const existInCartItems = cartItems.find(item => item.id === targetElemInArray.id);
            if(existInCartItems){
                existInCartItems.quantity++;
            }else{
                cartItems.push({...targetElemInArray, quantity:1})
            }
            updateCartDisplay()
        });
    }
  
}
    // calcualte price of all items in shopping cart
    function calcTotal(){
        const totalHolder = document.getElementById("total_count");
        const value = cartItems.reduce( (accumulator,current)=>{
            return accumulator + (current.price * current.quantity) ;
        },0);
        totalHolder.innerText = value.toFixed(2);
    }

    // aside cart handler function
     function updateCartDisplay(){
        calcTotal();
        const cartItemsContainer = document.querySelector(".cart-items-container");
        const countHolder = document.getElementById("count");
        countHolder.textContent = cartItems.length; 
        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
            cartItemsContainer.innerHTML += `
                    <div class="cart-item">
                        <div class="img-container">
                            <img src="${item.image}" alt="item photo">
                        </div>
                        <div class="item-info">
                            <p class="item-title">${item.title}</p>
                            <div class="item-number-price">
                                <div class="item-count">
                                    <img src="images/minus-sign.png" alt="minus" data-id="${item.id}" class="minus_btn btn">
                                    <p id="numberOfItems">${item.quantity}</p>
                                    <img src="images/add.png" alt="add button"  data-id="${item.id}" class="add_btn btn">
                                </div>
                                <p class="item-price">$${item.price}</p>
                            </div>
                        </div>
                        <div class="lst-col">
                            <img src="images/close.png" alt="close cart" data-id="${item.id}" class="close-btn">
                            <p class="totalOfItem">$ <span id="itemTotal">${(item.price * item.quantity).toFixed(2)}</span> </p>
                        </div>
                </div>
            `;
        });

        // increasing and decreasing when clicking on add and minus btn beside item in cart 
        const minusBtns = document.querySelectorAll(".minus_btn");
        const addBtns = document.querySelectorAll(".add_btn");
        minusBtns.forEach(btn=>{
            btn.addEventListener("click", (e)=>{
                cartItems.forEach(item=>{
                    if(parseInt(e.target.dataset.id) === item.id ){
                        const index = cartItems.indexOf(item);
                        item.quantity--;
                        if (item.quantity <= 0){
                            cartItems.splice(index,1);
                        }
                    }
                    updateCartDisplay();
                })
            });
        });
        addBtns.forEach(btn=>{
            btn.addEventListener("click", (e)=>{
                cartItems.forEach(item=>{
                    if(parseInt(e.target.dataset.id) === item.id ){
                        item.quantity++;
                    }
                    updateCartDisplay();
                })

            });
        });

        // delete item from cart when click on *
        const deleteBtns = document.querySelectorAll(".close-btn");
        deleteBtns.forEach(btn=>{
            btn.addEventListener("click", (e)=>{
                cartItems.forEach(item=>{
                    if(parseInt(e.target.dataset.id) === item.id ){
                        const index = cartItems.indexOf(item);
                            cartItems.splice(index,1);
                        }
                        updateCartDisplay();
                });
            });
        });
    };

    function removeAllFromCart(){
        const rubbishIcon = document.querySelector(".rubbish-icon");
        rubbishIcon.addEventListener("click", ()=>{
            cartItems = [];
            updateCartDisplay();
        })
    }


    // main function get executed first
    displayOnPage();







