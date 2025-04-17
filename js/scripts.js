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

    })

}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value
}
