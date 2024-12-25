// let inp=document.querySelector("#inp")
// inp.addEventListener("keydown",(e)=>{
//     console.log(e.key);

// })
// let inpu=document.querySelector("#inpu")
// inpu.addEventListener("input",()=>{
//     console.log(inpu.value);
    
// })

// upper one p tag mai print with event listner.
// there will be one input and one button on clicking the button the text written on input should print on the tag.
var userInput = document.querySelector("#inp");
var text = document.querySelector("#message");

userInput.addEventListener("keydown", () => {
    text.innerHTML = userInput.value;
    console.log(userInput.value);
    
});
let btn=()=>{
    alert("button clicked")
}
