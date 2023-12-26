const usersFromStorage = readArrayFromLocalStorage("users");
const form = document.querySelector("form");
uField = form.querySelector(".username");
uInput = uField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
form.onsubmit = e =>{
  e.preventDefault(); 
    if( pInput.value.slice(-6) == "_admin" && isRegisteredBefore( uInput.value , pInput.value ) ){
      localStorage.setItem("admin name", uInput.value);
      window.location.href="/AdminDashboard/adminDashBoard.html";
    }else if ( isRegisteredBefore( uInput.value , pInput.value ) ){
      localStorage.setItem("user name", uInput.value);
      window.location.href = "/main.html";
    } else{
        uField.classList.add("error");
    }
  };

function readArrayFromLocalStorage(key){
  return JSON.parse(localStorage.getItem(key));
};


function isRegisteredBefore(username,password){
  for( let i=0; i < usersFromStorage.length; i++ ){
    if( usersFromStorage[i].userName == username && usersFromStorage[i].password == password ){
      return true;
    }
  }
  return false
};
