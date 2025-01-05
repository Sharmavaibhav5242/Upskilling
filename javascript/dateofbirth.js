let dob=()=>{
   let ans= document.querySelector("#year").value
   let date= new Date().getFullYear()
   let xyz=date-ans
   document.querySelector("#show").innerHTML=`your current age is ${xyz}`
}