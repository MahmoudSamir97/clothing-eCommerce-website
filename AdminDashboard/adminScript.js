window.onscroll = function(){
    const nav = document.querySelector("nav");
    if(window.scrollY >=20){
        nav.style.backgroundColor = "#fff";
    }else{
        nav.style.backgroundColor = "#F5E6E0";
    }
}; 
// Mahmoud samir
const confirmBtn = document.querySelector(".confirm-btn");
const rejectBtn = document.querySelector(".reject-btn");
const renderPendingOredrs = ()=>{
    const adminNameContainer = document.getElementById("admin-name");
    const userNameContainer = document.getElementById("user-name");
    const adminName = localStorage.getItem("admin name");
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
    adminNameContainer.textContent = adminName;
    userNameContainer.textContent = userName;
};
renderPendingOredrs();
confirmBtn.addEventListener("click", ()=>{
    localStorage.setItem("order status", "confirmed");
});
rejectBtn.addEventListener("click", ()=>{
    localStorage.setItem("order status", "rejected");
});

function writeToLocalStorage(key, value) {
    const jsonString = JSON.stringify(value);
    localStorage.setItem(key, jsonString);
};

