    const button = document.querySelector("#button")
    const result = document.querySelector("#result")
    
    
    function generatenumbers() {

        const inputmin = Math.ceil(document.querySelector(".inputmin").value)
        const inputmax= Math.floor(document.querySelector(".inputmax").value)

        const resultnumber = Math.floor(Math.random() * (inputmax - inputmin) + inputmin);
       
        if (inputmin >= inputmax) {
            alert("Por favor preencha os números que vão ser sorteados")  
        
        }else{
        result.innerHTML = resultnumber
        }

    }

