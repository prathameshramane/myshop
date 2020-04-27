console.log("Quick view js file!!")
change_add_to_cart()
change_cart()

// Function to minimize char in paragraphs
function maxchar(string) {
    count = 0
    maxcount = 80
    newstring = ''
    for (i in string) {
        if (count <= maxcount) {
            newstring += string[i]
            count += 1
        } else {
            newstring += "..."
            return newstring
        }
    }
    newstring += "..."
    return newstring
}

// Accessing all paragraphs of cards and minimizing text 
let para = document.querySelectorAll('.card-body p')
para.forEach(element => {
    element.innerHTML = maxchar(element.innerHTML)
});


$(".prod_info").on('click', '.add_to_cart', function (e) {
    e.preventDefault();
    if (localStorage.getItem('cart') == null) {
        cart = {}
    } else {
        cart = JSON.parse(localStorage.getItem('cart'))
    }
    if (cart[this.id.slice(12)] == undefined || cart[this.id.slice(12)] == 0) {
        cart[this.id.slice(12)] = 1
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    change_add_to_cart()
    change_cart()

});


function change_add_to_cart() {
    let add_to_cart = document.querySelector(".add_to_cart")
    id = add_to_cart.id
    if (localStorage.getItem('cart') != null) {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (cart[id.slice(12)] != undefined) {
            let div = document.createElement('div')
            div.id = id
            div.classList.add("add_to_cart")
            div.innerHTML = `<button type="button" class="btn btn-primary mx-2" onclick="minusclick('${id}')">-
                            </button>` + cart[id.slice(12)] + `<button type="button" class="btn btn-primary mx-2" onclick="plusclick('${id}')">+</button>`
            let parent_div = add_to_cart.parentElement
            parent_div.removeChild(add_to_cart)
            parent_div.appendChild(div)   
        }
    }
}

//When minus is clicked
function plusclick(id) {
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart[id.slice(12)] += 1
    localStorage.setItem('cart', JSON.stringify(cart))
    change_add_to_cart()
    change_cart()
}

//When plus is clicked 
function minusclick(id) {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if (cart[id.slice(12)] > 1) {
        cart[id.slice(12)] -= 1
        localStorage.setItem('cart', JSON.stringify(cart))
        change_add_to_cart()
    } else {
        delete cart[id.slice(12)]
        localStorage.setItem('cart', JSON.stringify(cart))
        try {
            let card = document.getElementById(id).parentElement
            card.removeChild(card.lastElementChild)
            let a = document.createElement('button')
            a.id = id
            a.classList.add('btn')
            a.classList.add('btn-primary')
            a.classList.add('add_to_cart')
            a.innerHTML = "Add to cart"
            card.appendChild(a) 
        } catch (error) {
            console.log("Inside cart")
        }
    }
    change_cart()
}

function change_cart() {
    let items_cart = document.getElementById('items_cart')
    let html = ``
    if (localStorage.getItem('cart') != null && localStorage.getItem('cart') != '{}') {
        let cart = JSON.parse(localStorage.getItem('cart'))
        html = `<ul>`
        count = 0
        for (key in cart) {
            if (cart[key] > 0) {
                prod_name = document.getElementById(key).innerText
                html += `<li class="row" > <div class="col">` + prod_name + `</div> <div class="col"><button type="button" class="btn btn-primary mx-2" onclick="minusclick('add_to_cart_${key}')" style='padding:0px 3px;'">-
                </button>` + cart[key] + `<button type="button" class="btn btn-primary mx-2" onclick="plusclick('add_to_cart_${key}')"  style='padding:0px 3px;'>+</button></div>` + `</li>`
                count += 1
            }
        }
        html += `</ul><button class="btn btn-primary my-1 mx-3">Checkout</button>`
        document.getElementById('number_of_items').innerText = count
    } else {
        html = `<h5>Your Cart is empty...<br>Please add items to cart...</h5>`
        document.getElementById('number_of_items').innerText = 0
    }
    items_cart.innerHTML = html
}
