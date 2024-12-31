// let inter;
// let startt=()=>{
//     let count=10;
//    inter=  setInterval(()=>{
//         console.log(count);
//         count--;

        
//     },1000)
// }
// let stopp=()=>{
//     clearInterval(inter);
// }
let isname=true;
setInterval(()=>{
    let display=document.querySelector("#display")
    display.innerHTML=isname?"Vaibhav":"Sharma"
    isname=!isname
},1000)