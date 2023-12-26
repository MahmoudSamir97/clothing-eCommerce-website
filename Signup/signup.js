//  variable declaration
const input_area=document.querySelector(".input-area");
const inputFname=document.querySelector(".inputFname");
const inputEmail=document.querySelector(".inputEmail");
const inputPhone=document.querySelector(".inputPhone");
const inputUser=document.querySelector(".inputUser");
const inputPassword=document.querySelector(".inputPassword");
const email=document.getElementById("email");
const phone=document.getElementById("phoneNumber");
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const form = document.getElementById("signupForm");
const select = document.getElementById("gender");
let fnameField = document.getElementById("fnameField");
let lnameField = document.getElementById("lnameField");
let usersArr = [
  {
    username: "Admin",
    password: "Xerox20/30/*_admin"
  },
  {
    username: "Mahmoud samir",
    password: "mahmoudsamir123$$"
  },
  {
    username: "Ahmed",
    password: "Xerox20/40/*"
  },
  {
    username: "Abdelaziz",
    password: "Xerox20/50/*"
  },
  {
    username: "Ali",
    password: "Xerox20/60/*"
  }
  ];

function readArrayFromLocalStorage(key) {
  const jsonString = localStorage.getItem(key);
  return jsonString ? JSON.parse(jsonString) : [];
}

// Function to write array of objects to localStorage
function writeArrayToLocalStorage(key, dataArray) {
  const jsonString = JSON.stringify(dataArray);
  localStorage.setItem(key, jsonString);
}

// Function to push an object into the array in localStorage
function pushObjectToArrayInLocalStorage(key, objectToAdd) {
  // Read the existing array from localStorage
  const existingArray = readArrayFromLocalStorage(key);

  // Push the new object into the array
  existingArray.push(objectToAdd);

  // Write the updated array back to localStorage
  writeArrayToLocalStorage(key, existingArray);
}


const usersArrFromLocal=readArrayFromLocalStorage("users");

function isDuplicated(name,pass){
  let result=false;
  for(let i=0;i<readArrayFromLocalStorage("users").length;i++){

    if((readArrayFromLocalStorage("users")[i].username==name)&&(readArrayFromLocalStorage("users")[i].password==pass)){
      result=true;
      break;
    }else{
      result= false;
    }
  }
  return result;
}

let userObj={};
let current = 1;

writeArrayToLocalStorage("users",usersArr);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let pass = document.getElementById("password").value;
  let userName = document.getElementById("username").value;
 
  if (validatePassword(pass) && validateUsername(userName)) {

   
  
    if (!(isDuplicated(userName,pass))) {
      inputUser.querySelector(".iconUser").style.color='#5372F0';
      inputUser.querySelector(".error-icon").style.display="none";
      inputPassword.querySelector(".iconPass").style.color='#5372F0';
      inputPassword.querySelector(".error-icon").style.display="none";
      document.getElementById("spMessage5").style.display='none';
     
      document.getElementById("spMessage6").style.display='none';
    
     let adminObj={};
        adminObj.username=userName;
        adminObj.password=pass;
        adminObj.firstname=document.getElementById("fnameField").value;
        adminObj.lastname=document.getElementById("lnameField").value;
        adminObj.email=document.getElementById("email").value;
        adminObj.phonenumber=document.getElementById("phoneNumber").value;
        adminObj.BDate=document.getElementById("birthdate").value;
        adminObj.gender=(gender.options[gender.selectedIndex]).value;
        //the new one
        pushObjectToArrayInLocalStorage("users",adminObj);
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        setTimeout(function () {
          if(!(pass.slice(-6)=="_admin")){
            window.location.href="../Login/login.html";
          }else{ 
            localStorage.setItem("admin name", userName);
            window.location.href="../AdminDashboard/adminDashBoard.html";
          }
        }, 800);
    }else{
      inputUser.querySelector(".iconUser").style.color='#dc3545';
      inputUser.querySelector(".error-icon").style.display="block";
      inputPassword.querySelector(".iconPass").style.color='#dc3545';
      inputPassword.querySelector(".error-icon").style.display="block";
      document.getElementById("spMessage5").style.display='block';
      document.getElementById("spMessage5").innerHTML = "*try another username because there are account with the same username";
      document.getElementById("spMessage6").style.display='block';
      document.getElementById("spMessage6").innerHTML = "*try another username because there are account with the same username";
    } 
    }else{ 
      if(validateUsername(userName)){

        inputUser.querySelector(".iconUser").style.color='#5372F0';
        inputUser.querySelector(".error-icon").style.display="none";
        document.getElementById("spMessage5").style.display='none';

      }else{
        inputPassword.querySelector(".iconPass").style.color='#dc3545';
        inputPassword.querySelector(".error-icon").style.display="block";
        document.getElementById("spMessage5").style.display='block';
        document.getElementById("spMessage5").innerHTML = "*the user name must be more than 3 letters";
      }
      if(validatePassword(pass)){
        inputPassword.querySelector(".iconPass").style.color='#5372F0';
        inputPassword.querySelector(".error-icon").style.display="none";
        document.getElementById("spMessage6").style.display='none';
      }else{
        inputPassword.querySelector(".iconPass").style.color='#dc3545';
        inputPassword.querySelector(".error-icon").style.display="block";
        document.getElementById("spMessage6").style.display='block';
        document.getElementById("spMessage6").innerHTML = "*please match this pattern Aa1/*#$%";
      }
         }
  }
);

nextBtnFirst.addEventListener("click", function (event) {
  let fname = fnameField.value;
  let lname = lnameField.value;

  if (validateName(fname) && validateName(lname)) {
    event.preventDefault();

    input_area.querySelector(".icon").style.color='#5372F0';
    input_area.querySelector(".error-icon").style.display="none";
    inputFname.querySelector(".icon").style.color='#5372F0';
    inputFname.querySelector(".error-icon").style.display="none";
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  } else {
    event.preventDefault();
    input_area.querySelector(".icon").style.color='#dc3545';
    input_area.querySelector(".error-icon").style.display="block";
    inputFname.querySelector(".icon").style.color='#dc3545';
    inputFname.querySelector(".error-icon").style.display="block";
    let spMessage = document.getElementById("spMessage");
  
    document.getElementById("spMessage").style.display='block';
    document.getElementById("spMessage").innerHTML = "*please enter a valid name";
    document.getElementById("spMessage2").style.display='block';
    document.getElementById("spMessage2").innerHTML = "*please enter a valid name";
  }
});
nextBtnSec.addEventListener("click", function (event) {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phoneNumber").value;
  if (validateEmail(email) && validateEgyptianPhoneNumber(phone)) {
    event.preventDefault();
    inputEmail.querySelector(".iconEmail").style.color='#5372F0';
    inputEmail.querySelector(".error-icon").style.display="none";
    inputPhone.querySelector(".iconPhone").style.color='#dc3545';
    inputPhone.querySelector(".error-icon").style.display="none";
    document.getElementById("spMessage3").style.display="none";
    document.getElementById("spMessage4").style.display="none";
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  } else {
    event.preventDefault();

    inputEmail.querySelector(".iconEmail").style.color='#dc3545';
    inputEmail.querySelector(".error-icon").style.display="block";
    inputPhone.querySelector(".iconPhone").style.color='#dc3545';
    inputPhone.querySelector(".error-icon").style.display="block";
    document.getElementById("spMessage3").style.display='block';
    document.getElementById("spMessage3").innerHTML = "*please enter a valid Email";
    document.getElementById("spMessage4").style.display='block';
    document.getElementById("spMessage4").innerHTML = "*please enter a Phone Number";
  }
});
nextBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

function validateName(name) {
  // Define the regex pattern for a basic name validation
  var nameRegex = /^[a-zA-Z]{3,}$/;
  // Test the input against the regex pattern
  return nameRegex.test(name);
}

fnameField.addEventListener("keyup", function () {
  let fnameValue = fnameField.value;
  let isFnameValid = validateName(fnameValue);
  let spMessage = document.getElementById("spMessage");
 
  if (isFnameValid) {
    inputFname.querySelector(".icon").style.color='#5372F0';
    inputFname.querySelector(".error-icon").style.display="none";
    spMessage.style.display = 'none';

    fnameField.style.border = "1px green solid";
  } else {
    inputFname.querySelector(".icon").style.color='#dc3545';
    inputFname.querySelector(".error-icon").style.display="block";
    spMessage.style.display = 'block';
    spMessage.innerHTML = "*please enter a valid name";
    // validImage.setAttribute('src','/images/notvalid.png');
    fnameField.style.border = "1px red solid";
  }
});
phone.addEventListener("keyup",function(){
  phoneValue=phone.value;
  let isValidPhone=validateEgyptianPhoneNumber(phoneValue);
  if(isValidPhone){
  
    inputPhone.querySelector(".iconPhone").style.color='#5372F0';
    inputPhone.querySelector(".error-icon").style.display="none";
    document.getElementById("spMessage4").style.display="none";
    
  }else{
    inputPhone.querySelector(".iconPhone").style.color='#dc3545';
    inputPhone.querySelector(".error-icon").style.display="block";
    document.getElementById("spMessage4").style.display="block";
    document.getElementById("spMessage4").innerHTML = "*please enter a valid Phone Number";
  }
})
email.addEventListener("keyup",function(){
  emailValue=email.value;
  let isValidEmail=validateEmail(emailValue);
  if(isValidEmail){
  
    inputEmail.querySelector(".iconEmail").style.color='#5372F0';
    inputEmail.querySelector(".error-icon").style.display="none";
    document.getElementById("spMessage3").style.display="none";
    
  }else{
    inputEmail.querySelector(".iconEmail").style.color='#dc3545';
    inputEmail.querySelector(".error-icon").style.display="block";
    document.getElementById("spMessage3").style.display='block';
    document.getElementById("spMessage3").innerHTML = "*please enter a valid email Number";
  }
})



lnameField.addEventListener("keyup", function () {

  let lnameValue = lnameField.value;
  let isLnameValid = validateName(lnameValue);
  let spMessage2 = document.getElementById("spMessage2");
  // let validImage2=document.getElementById("validImage2");
  if (isLnameValid) {
    input_area.querySelector(".icon").style.color='#5372F0';
    input_area.querySelector(".error-icon").style.display="none";
    spMessage2.style.display = 'none';
    // validImage2.setAttribute('src','/images/valid.png');
    lnameField.style.border = "1px green solid";

  } else {
    input_area.querySelector(".icon").style.color='#dc3545';
    input_area.querySelector(".error-icon").style.display="block";
    spMessage2.style.display = 'block';
    //validImage2.setAttribute('src','/images/notvalid.png');
    spMessage2.innerHTML = "*please enter a valid name";
    lnameField.style.border = "1px red solid";
  }
})
function validateEmail(email) {
  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex
  return emailRegex.test(email);
}

function validateEgyptianPhoneNumber(phoneNumber) {
  // Regular expression for an Egyptian phone number
  const egyptPhoneRegex = /^((\+|00)20)\d{10}$/;

  // Test the phone number against the regex
  return egyptPhoneRegex.test(phoneNumber);
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
function validateUsername(username) {
  // Regular expression for username validation
  const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
  return usernameRegex.test(username);
}