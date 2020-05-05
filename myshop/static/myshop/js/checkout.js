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
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let address = document.getElementById("address").value
    let country = document.getElementById("country").value
    let state = document.getElementById("state").value
    let zip = document.getElementById("zip").value

    let reg_name = /[a-z A-Z]{3,20} [a-z A-Z]{3,20} [a-z A-Z]{3,20}/i
    let reg_email = /[a-z A-Z 0-9 _ .]{4,30}@[a-z A-Z]{3,12}\.[a-z A-Z]{1,5}/i
    let reg_phone = /[+ 0-9]{3,6}-[0-9]{10}/

    document.getElementById("invalid_phone").style.display = 'none'
    document.getElementById("invalid_name").style.display = 'none'
    document.getElementById("invalid_email").style.display = 'none'
    document.getElementById("invalid_address").style.display = 'none'
    document.getElementById("invalid_country").style.display = 'none'
    document.getElementById("invalid_state").style.display = 'none'
    document.getElementById("invalid_zip").style.display = 'none'

    if(!(reg_name.test(name) && reg_email.test(email) && reg_phone.test(phone) && country!="" && address!="" && state!="" &&zip!="")){
        if (!(reg_name.test(name))) {
            document.getElementById("invalid_name").style.display = 'block'
        }
        if (!(reg_email.test(email))) {
            document.getElementById("invalid_email").style.display = 'block'
        }
        if (!(reg_phone.test(phone))) {
            document.getElementById("invalid_phone").style.display = 'block'
        }
        if (address=="") {
            document.getElementById("invalid_address").style.display = 'block'
        }
        if (country=="") {
            document.getElementById("invalid_country").style.display = 'block'
        }
        if (state=="") {
            document.getElementById("invalid_state").style.display = 'block'
        }
        if (zip=="") {
            document.getElementById("invalid_zip").style.display = 'block'
        }
        console.log("Entered")
    } else {
        document.getElementById("order").innerText = localStorage.getItem('cart')
        document.getElementById("checkout_form").submit();
        localStorage.clear()
    }
})


