    const button = document.querySelector("#button")
    const result = document.querySelector("#result")
    
    
    function generatenumbers() {

        const inputmin = Math.ceil(document.querySelector(".inputmin").value)
        const inputmax= Math.floor(document.querySelector(".inputmax").value)

        const result = Math.floor(Math.random() * (inputmax - inputmin) + inputmin);
       
        if (inputmin >= inputmax) {
            alert("O Primeiro número tem que ser menor que do segundo!")  
        
        }else{
        result.innerHTML = result
        }

    }

