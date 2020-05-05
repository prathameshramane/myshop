document.getElementById("submitBtn").addEventListener('click', (e) => {
    e.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
  
    let reg_name = /[a-z A-Z]{3,20} [a-z A-Z]{3,20} [a-z A-Z]{3,20}/i
    let reg_email = /[a-z A-Z 0-9 _ .]{4,30}@[a-z A-Z]{3,12}\.[a-z A-Z]{1,5}/i
    let reg_phone = /[+ 0-9]{3,6}-[0-9]{10}/

    document.getElementById("invalid_phone").style.display = 'none'
    document.getElementById("invalid_name").style.display = 'none'
    document.getElementById("invalid_email").style.display = 'none'

    if(!(reg_name.test(name) && reg_email.test(email) && reg_phone.test(phone))){
        if (!(reg_name.test(name))) {
            document.getElementById("invalid_name").style.display = 'block'
        }
        if (!(reg_email.test(email))) {
            document.getElementById("invalid_email").style.display = 'block'
        }
        if (!(reg_phone.test(phone))) {
            document.getElementById("invalid_phone").style.display = 'block'
        }
    } else {
        document.getElementById("contact_form").submit()
    }

})