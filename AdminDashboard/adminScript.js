
const productsContainer = document.getElementById("main-container");
window.onscroll = function(){
    const nav = document.querySelector("nav");
    if(window.scrollY >=20){
        nav.style.backgroundColor = "#fff";
    }else{
        nav.style.backgroundColor = "#F5E6E0";
    }
};
function readArrayFromLocalStorage(key) {
    const jsonString = localStorage.getItem(key);
    return jsonString ? JSON.parse(jsonString) : [];
  }
function writeArrayToLocalStorage(key, dataArray) {
    const jsonString = JSON.stringify(dataArray);
    localStorage.setItem(key, jsonString);
  }
  const getCategories = async function(){
    const categoryArr = [];
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const data = await response.json();
    categoryArr.push(data);
    return categoryArr;
};

getCategories().then(data=>writeArrayToLocalStorage("categories",data[0]));
const categories=readArrayFromLocalStorage("categories");


const getProducts = async function(){
    const productsArr = [];
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    productsArr.push(data);
    return productsArr;
};
getProducts().then(data=>writeArrayToLocalStorage("products",data[0]));


// function displayProducts(){

//    const products= readArrayFromLocalStorage("products");
//    for (const product of products){
//     productsContainer.innerHTML += `
//         <div class="single-product" data-id="${product.id}">
//             <div class="icons-container">
                
//                 <img src="../images/dashboardimages/icons8-update-48.png" alt="add icon" id="update-btn">
//                 <img src="../images/dashboardimages/icons8-delete-64.png" alt="eye icon" id="delete-btn">
//             </div>
//             <div class="product-img-container">
//                 <img src="${product.image}" alt="${product.title}">
//             </div>
//             <p class="product-category">${product.category}</p>
//             <p class="product-title">${product.title}</p>
//             <p class="product-price">$ ${product.price}</p>
//         </div>
//     `;
// } 

// }
// displayProducts();

const deleteBtns = document.querySelectorAll("#delete-btn");
//var theNewOne=[];
const productsArrFromLocalStorage=readArrayFromLocalStorage("products");
writeArrayToLocalStorage("products",productsArrFromLocalStorage);
function deleteProduct(e){
   
    const currentelement = e.target.parentElement.parentElement;
    const currentelementId = parseInt(currentelement.getAttribute("data-id"));
    for(let i =0;i<productsArrFromLocalStorage.length;i++){
        
        if(productsArrFromLocalStorage[i].id===currentelementId){
            
            if(currentelement){
        
                currentelement.parentNode.removeChild(currentelement);
                productsArrFromLocalStorage.splice(i,1);
              
                displayProducts(); 
                    
               // location.reload();

            }else{
                console.error("Element with ID 'yourElementId' not found");
            }

        }
        
    }


}
for(let i =0 ; i < deleteBtns.length; i++){

    
    deleteBtns[i].addEventListener("click", deleteProduct); 
    //location.reload();
  
};


// Mahmoud samir
const renderPendingOredrs = ()=>{
    const userNameContainer = document.getElementById("user-name");
    const userName = localStorage.getItem("user name");
    const ordersContainer = document.getElementById("orders-container");
    const userPendingOrders = JSON.parse(localStorage.getItem("pending items"));
    userPendingOrders.forEach(item => {
        ordersContainer.innerHTML += `
        <tr>
            <td class="center">${item.id}</td>
            <td>${item.title}</td>
            <td><img class="order-img" src="${item.image}" alt="order image"></td>
            <td>$ ${item.price}</td>
            <td class="center">${item.quantity}</td>
        </tr>
        `
    });
    userNameContainer.textContent = userName;
}
renderPendingOredrs()

