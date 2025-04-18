let cart = 0;
let left = 6;
const allBtn = document.getElementsByClassName('allBtn')
console.log(allBtn);
for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        console.log('clik');

        if (left == 0) {
            alert('full')
        }
        else {
            cart = cart + 1

            setInnerText('add', cart)

        }

        if (left > 0) {
            left = left - 1
            setInnerText('left', left)

        }
        else {
            alert("You reached max limited")
        }
        const name = e.target.parentNode.parentNode.childNodes[1].innerText
        console.log(name);
        const price = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText
        console.log(price);
        const categoty = e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText
        console.log(categoty);



        const selectedArea = document.getElementById('selected')
        const li = document.createElement('li')
        const p = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        p.innerText = name
        p2.innerText = price
        p3.innerText = categoty
        li.appendChild(p)
        li.appendChild(p2)
        li.appendChild(p3)
        selectedArea.appendChild(li)

        const totalPrice = document.getElementById('total').innerText
        console.log(totalPrice);

        const convertedTotalPrice = parseInt(totalPrice)
        console.log(convertedTotalPrice);

        const newTotalPrice = convertedTotalPrice + parseInt(price)
        console.log(newTotalPrice);

        document.getElementById('total').innerText = newTotalPrice

        const grandTotal = document.getElementById('grand-total').innerText
        const convertrdGrandTotal = parseInt('grand-total')
        const newGrandTotal = convertrdGrandTotal + parseInt(price)
        document.getElementById('grand-total').innerText = newTotalPrice


    })



}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value
}
