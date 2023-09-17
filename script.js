    const button = document.querySelector("#button")
    const result = document.querySelector("#result")
    
    
    function generatenumbers() {

        const inputmin = Math.ceil(document.querySelector(".inputmin").value)
        const inputmax= Math.floor(document.querySelector(".inputmax").value)

        const resultnumber = Math.floor(Math.random() * (inputmax - inputmin) + inputmin);
       
        if (inputmin > inputmax) {
            alert("O valor minimo precisa ser menor que o máximo!")  
 
        }else{
        result.innerHTML = resultnumber
        }


    }

   