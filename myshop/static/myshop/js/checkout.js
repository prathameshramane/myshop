console.log("checkout")

let list = document.getElementById("list_items");

document.getElementById('cart').style.display = 'none'

//Updating Cart
if (localStorage.getItem('cart') != null) {
    let cart = JSON.parse(localStorage.getItem('cart'))
    document.getElementById("items_quantity").innerText = Object.keys(cart).length
}

document.getElementById("checkout_btn").addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("clicked")
    if(1!=2){
        document.getElementById("checkout_form").submit();
    }
})

