let cart = 0;
let left = 6;
let budget = 1200;
const allBtn = document.getElementsByClassName('allBtn')
for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        const price = parseInt(e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText)
        if (left === 0) {
            alert('Cart is full!')
            return
        }
        if (price > budget) {
            alert('Not enough budget!')
            return
        }
        cart = cart + 1
        left = left - 1
        budget = budget - price
        setInnerText('add', cart)
        setInnerText('left', left)
        const name = e.target.parentNode.parentNode.childNodes[1].innerText
        const categoty = e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText
        const selectedArea = document.getElementById('selected')
        const row = document.createElement('div')
        row.classList.add('flex', 'justify-around', 'mt-1', 'text-sm')
        const nameEl = document.createElement('p')
        nameEl.classList.add('w-1/3')
        nameEl.innerText = name
        const priceEl = document.createElement('p')
        priceEl.classList.add('w-1/3')
        priceEl.innerText = price
        const categoryEl = document.createElement('p')
        categoryEl.classList.add('w-1/3')
        categoryEl.innerText = categoty
        row.appendChild(nameEl)
        row.appendChild(priceEl)
        row.appendChild(categoryEl)
        selectedArea.appendChild(row)
        const totalPrice = parseInt(document.getElementById('total').innerText)
        const newTotalPrice = totalPrice + price
        document.getElementById('total').innerText = newTotalPrice
        document.getElementById('grand-total').innerText = newTotalPrice
    })
}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value
}