let submitt=()=>{
   let name=document.querySelector("#name").value;
   let number=document.querySelector("#mobile").value;
   let email=document.querySelector("#email").value;
   let password=document.querySelector("#pass").value;
   let confirm=document.querySelector("#password").value;

   let errname=document.querySelector("#errname")
   let errnumber=document.querySelector("#errnumber")
   let erremail=document.querySelector("#erremail")
   let errpassword=document.querySelector("#errpassword")
   let errconfirm=document.querySelector("#errconfirm")

   if(name===""){
    errname.innerHTML="Please enter your name";
    errname.style.color="red";
    document.querySelector("#name").placeholder="Enter name please";
    return false;
   }
   else if(isNaN(number)){
      errnumber.innerHTML="Please enter a valid number";
      errnumber.style.color="red";
      return false;
   }
   else if(number==="")
   {
      errnumber.innerHTML="Please enter number";
      errnumber.style.color="red";
      return false;
   }
   else if(number.length!=10)
   {
      errnumber.innerHTML="Please enter valid number of 10 digits";
      errnumber.style.color="red";
      return false;
   }
   else if(!(email.includes('@'))&& (email.includes('.com')))
   {
         erremail.innerHTML="Please enter a valid email";
         erremail.style.color="red";
         return false;
   }
   else if(email===""){
      erremail.innerHTML="Please enter email";
      erremail.style.color="red";
      return false;
   }
   else if(password===""){
      errpassword.innerHTML="Enter password";
      errpassword.style.color="red";
      return false;
   }
   else if(confirm===password){
      return true;
   }
   else if(
      !(
         password.match(/[1234567890]/) &&
         password.match(/[!@#$%^&*()]/) &&
         password.match(/[a-z]/) &&
         password.match(/[A-Z]/)
      )
   )
   {
      errpassword.innerHTML="Enter a strong password";
      errpassword.style.color="red";
      return false;
   }
   else{
      errconfirm.innerHTML="Password does not match";
      document.querySelector("#password").value="";
      document.querySelector("#password").focus();
      errconfirm.style.color="red";
      return false;
   }
   
}


