// const { JSON } = require('express');

const inputName = document.querySelector("#productName")
const inputPrice = document.querySelector("#productPrice")

const button = document.querySelector("button")

button.addEventListener("click", (e) => { //Petición fetch

    const name = inputName.value
    const price = inputPrice.value
    fetch('/api/v1/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ //Guardar a un objeto en forma de string tipo jSON
            name,
            price,

        }),
    })
})