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
                let counter = 0;
                for (const product of products[0]){
                    const currentelement = e.target.parentElement.parentElement;
                    if(parseInt(currentelement.getAttribute("data-id")) === product.id){
                        cartItems.push(product);
                    if(cartItems.includes(product)){
                        cartItems.push({
                            ...product,
                            count: counter++
                        })
                    }
                        updateCartDisplay();

                    };
                }
            }
    };
}
    displayOnPage();

    function updateCartDisplay(){
        const cartContainer = document.getElementById("cart");
        const cartUnorederdList = document.getElementById("cart-items");

        cartUnorederdList.innerHTML = '';
        cartItems.forEach(item => {
            const li =document.createElement("li");
            li.textContent = item.title;
            cartUnorederdList.appendChild(li);
            const p = document.createElement("P");
            p.textContent = item.count;
            cartContainer.appendChild(p)
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


