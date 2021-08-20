const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');


const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');

const total = document.getElementById('total')

const shippingField = document.getElementById('shipping');

free.addEventListener('click', function () {
    shippingField.innerText = '5'
    updateTotal()

})
express.addEventListener('click', function () {

    // total.innerText='650'
    shippingField.innerText = '30'
    updateTotal()

})

function updateTotal() {
    const shippingCharge = shippingField.innerText;
    const productPrice = price.innerText;

    total.innerText = parseInt(shippingCharge) + parseInt(productPrice)

}

div1.addEventListener('click', function () {
    img.src = "images/1.jpg";
    desc.innerText = 'First-Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit similique laudantium dolore perspiciatis ratione. Odit id expedita veritatis quos tenetur sint, sed inventore excepturi!'

    // changing price
    price.innerText = '650$'
    // changing total price
    total.innerText = '650'
})
div2.addEventListener('click', function () {
    img.src = "images/2.jpg";
    desc.innerText = 'Second-Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit similique laudantium dolore perspiciatis ratione. Odit id expedita veritatis quos tenetur sint, sed inventore excepturi!'
    // changing price
    price.innerText = '550$'
    // changing total price
    total.innerText = '550'
})
div3.addEventListener('click', function () {
    img.src = "images/3.jpg";
    desc.innerText = 'Third-Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit similique laudantium dolore perspiciatis ratione. Odit id expedita veritatis quos tenetur sint, sed inventore excepturi!'
    // changing price
    price.innerText = '350$'
    // changing total price
    total.innerText = '350'
})