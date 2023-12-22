let cartItems = [];
const getProducts = async function(){
    const productsArr = [];
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
    const data = await response.json();
    productsArr.push(data);
    return productsArr;
};

const displayOnPage = async()=>{
    const mainProductContainer = document.getElementById("main-container");
    const products = await getProducts(); 
        for (const product of products[0]){
            mainProductContainer.innerHTML += `
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
                    <p class="product-price">${product.price}</p>
                </div>
            `;
        } 
        const addBtns = document.querySelectorAll("#add-btn");
        for(let i =0 ; i < addBtns.length; i++){
            addBtns[i].addEventListener("click", addToCart);

            function addToCart(e){
                for (const product of products[0]){
                    const currentelement = e.target.parentElement.parentElement;
                    if(parseInt(currentelement.getAttribute("data-id")) === product.id){
                        let counter = 1;
                        if(!cartItems.includes(product)){
                            cartItems.push(product);
                            updateCartDisplay(counter);
                        }else{
                            counter++;
                            updateCartDisplay(counter);
                        }

                    };
                }
            }
    };
}
    displayOnPage();

    function updateCartDisplay(numberOfOrder){
        const cartItemsContainer = document.querySelector(".cart-items-container");

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
                                    <img src="images/minus-sign.png" alt="minus" class="minus_btn btn ">
                                    <p id="numberOfItems">${numberOfOrder}</p>
                                    <img src="images/add.png" alt="add button" class="add_btn btn">
                                </div>
                                <p class="item-price">$${item.price}</p>
                            </div>
                        </div>
                        <div class="lst-col">
                            <img src="images/close.png" alt="close cart" class="close-btn">
                            <p class="totalOfItem">$109.95</p>
                        </div>
                </div>
            `;

        });

        
    }




window.onscroll = function(){
    const nav = document.querySelector("nav");
    if(window.scrollY >=20){
        nav.style.backgroundColor = "#fff";
    }else{
        nav.style.backgroundColor = "";
    }
}

console.log(cartItems);


