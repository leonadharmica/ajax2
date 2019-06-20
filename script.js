
// 1) Creo el objeto XHR

let xhr = new XMLHttpRequest

//2) Abrir/Configurar el metodo y url
xhr.open("GET", "https://jsonplaceholder.typicode.com/users")

//3) Asignarle un evento de load 

xhr.addEventListener("load", () => {
    //3.1 verificar el exito del pedido
   
    if(xhr.status == 200){
        let resultado = JSON.parse(xhr.response)

        for(let i=0; i<resultado.length; i++){
            let p = document.createElement("p")
            p.innerText = resultado[i].name
            document.body.appendChild(p)
        }
    }
})

//4) Envio el pedido

xhr.send()
