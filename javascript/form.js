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
    return false;
   }
}