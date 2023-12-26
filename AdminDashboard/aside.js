const getData = async ()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
};
const sendData = async ()=>{
    const dataArr = await getData();
    const obj = {
        id: 55,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday',
        category: "Hamada",
        image: "images/51kzIp0mUnL._AC_SY741_.jpg",
        quantity: 50
    };
    dataArr.push(obj);
    writeToLocalStorage("products", dataArr);
}
sendData();






























// helper function
const writeToLocalStorage = (key,value)=>{
    const valueToString = JSON.stringify(value);
    localStorage.setItem(key, valueToString);
}


// function displayProducts(){
// const products= readArrayFromLocalStorage("products");
// for (const product of products){
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
// `;
// } 
// }
// displayProducts();



// getCategories().then(data=>writeArrayToLocalStorage("categories",data[0]));
// const categories=readArrayFromLocalStorage("categories");

// const deleteBtns = document.querySelectorAll("#delete-btn");
// const productsArrFromLocalStorage=readArrayFromLocalStorage("products");
// writeArrayToLocalStorage("products",productsArrFromLocalStorage);
// function deleteProduct(e){
//     const currentelement = e.target.parentElement.parentElement;
//     const currentelementId = parseInt(currentelement.getAttribute("data-id"));
//     for(let i =0;i<productsArrFromLocalStorage.length;i++){  
//         if(productsArrFromLocalStorage[i].id===currentelementId){ 
//             if(currentelement){
//                 currentelement.parentNode.removeChild(currentelement);
//                 productsArrFromLocalStorage.splice(i,1);
//                 displayProducts(); 
                    
//             }else{
//                 console.error("Element with ID 'yourElementId' not found");
//             }
//         }  
//     }
// }
// for(let i =0 ; i < deleteBtns.length; i++){
//     deleteBtns[i].addEventListener("click", deleteProduct); 
//     //location.reload();
// };


