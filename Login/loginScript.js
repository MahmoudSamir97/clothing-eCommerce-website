const form = document.querySelector("form");
uField = form.querySelector(".username"),

uInput = uField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (uInput.value == "") ? uField.classList.add("shake", "error") : checkUsername();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();




  uInput.onkeyup = ()=>{checkUsername();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup

  function checkUsername(){ //checkEmail function
    var nameRegex = /^[a-zA-Z]{3,}$/; //pattern for validate email
    if((!uInput.value.match(nameRegex))&&(checkUsername(uInput.value))){ //if pattern not matched then add error and remove valid class
      uField.classList.add("error");
      uField.classList.remove("valid");
      let errorTxt = uField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (uInput.value != "") ? errorTxt.innerText = "Enter a valid username" : errorTxt.innerText = "Username can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      uField.classList.remove("error");
      uField.classList.add("valid");
    }
  }

  function checkPass(){ //checkPass function
    if((pInput.value == "")&&(validatePassword(pInput.value))){
       //if pass is empty then add error and remove valid class

      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!checkUsernamePassword(uInput.value,pInput.value)){
    uField.querySelector(".error-txt").innerHTML="Try again Username is wrong"
    uField.classList.add("error");
    pField.querySelector(".error-txt").innerHTML="Try again Password is wrong";
    pField.classList.add("error");
   // window.location.href = "/Login/login.html" //redirecting user to the specified url which is inside action attribute of form tag
  }else{
    if((pInput.value.slice(-6)=="_admin")&&checkUsernamePassword(uInput.value,pInput.value)){

      window.location.href="/AdminDashboard/adminDashBoard.html";
    }else{
      window.location.href = "/main.html";
    }
    pField.classList.remove("error");
    uField.classList.remove("error");
    pField.classList.add("valid");
    uField.classList.add("valid");
  }
}
function readArrayFromLocalStorage(key) {
  const jsonString = localStorage.getItem(key);
  return jsonString ? JSON.parse(jsonString) : [];
}


function checkUsernamePassword(username,password){

  const arr=readArrayFromLocalStorage("users");

console.log(arr);
let result=false;
for(let i=0;i<arr.length;i++){
//console.log(arr[i].username);
  if((arr[i].username==username)&&(arr[i].password==password)){
     result=true;
     break;

  }else{
     result=false;
  }
}
  return result;
}
function validatePassword(password) {
  // At least 8 characters
  const lengthRegex = /.{8,}/;

  // At least one lowercase letter
  const lowercaseRegex = /[a-z]/;

  // At least one uppercase letter
  const uppercaseRegex = /[A-Z]/;

  // At least one digit
  const digitRegex = /\d/;

  // At least one special character (you can customize this set)
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

  // Combine all criteria using logical AND
  const isLengthValid = lengthRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasUppercase = uppercaseRegex.test(password);
  const hasDigit = digitRegex.test(password);
  const hasSpecialChar = specialCharRegex.test(password);

  // Check if all criteria are met
  return isLengthValid && hasLowercase && hasUppercase && hasDigit && hasSpecialChar;
}