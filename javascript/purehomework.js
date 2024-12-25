var userInput = document.querySelector("#inp");
        var btne = document.querySelector("#btn");
        var message = document.querySelector("#text");
        
        btne.addEventListener("click", () => {
            message.innerHTML = userInput.value;
        });