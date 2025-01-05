
// let go=()=>{
//  let show= document.querySelector("#dispaly");
//     let time =new Date()
//    let arr=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
//     let date = arr[time.getDay()]
//     show.innerHTML=date
//     // show.innerHTML= new Date().toLocaleString()

// }

// clock js
// setInterval(()=>{
//     let show=document.querySelector("#display");
//     let time=new Date()
    
//     show.innerHTML=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
// },1000)

// alaram

let alaram=()=>{
    let show=document.querySelector("#display")
    let inp=document.querySelector("#inp").value;
   let inter= setInterval(()=>{
    let time=new Date()
    let alaramtime=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`
    if (alaramtime==inp){
        show.innerHTML="Alaram is ringing";
        document.querySelector("#aud").play()
        
        setTimeout(()=>{
        document.querySelector("#aud").pause()
        clearInterval(inter)
        },7000)
    }
    },1000)
}
