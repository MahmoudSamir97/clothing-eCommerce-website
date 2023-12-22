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
let fnameField=document.getElementById("fnameField");
let lnameField=document.getElementById("lnameField");

let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  let fname=fnameField.value;
  let lname=lnameField.value;
  
if(validateName(fname)&&validateName(lname)){
  event.preventDefault();

  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
 
}else{
  event.preventDefault();
  alert('pleae enter valid name')
  let spMessage=document.getElementById("spMessage");
let validImage=document.getElementById("validImage");
  spMessage.style.display='inline-block';

  validImage.setAttribute('src','/images/notvalid.png');
  
}

});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
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



fnameField.addEventListener("blur",function(){
  let fnameValue=fnameField.value;
  let isFnameValid=validateName(fnameValue); 
  let spMessage=document.getElementById("spMessage");
  let validImage=document.getElementById("validImage");
if(isFnameValid){
 
    spMessage.style.display='none';
    
  
   // validImage.setAttribute('src','/images/valid.png');
  fnameField.style.border="1px green solid";
  
}else{
  spMessage.style.display='block';
  spMessage.innerHTML="*please enter a valid name";
 // validImage.setAttribute('src','/images/notvalid.png');
  fnameField.style.border="1px red solid";
}
});
lnameField.addEventListener("blur",function(){
  
  let lnameValue=lnameField.value;
  let isLnameValid=validateName(lnameValue); 
  let spMessage2=document.getElementById("spMessage2");
 // let validImage2=document.getElementById("validImage2");
 
if(isLnameValid){
  
  spMessage2.style.display='none';
 // validImage2.setAttribute('src','/images/valid.png');
  lnameField.style.border="1px green solid";
  
}else{
  spMessage2.style.display='block';
  //validImage2.setAttribute('src','/images/notvalid.png');
  spMessage2.innerHTML="*please enter a valid name";
  lnameField.style.border="1px red solid";
}
})




