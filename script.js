let email = document.getElementById('email')
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let error = document.getElementById('errorMessage')


const validateEmail = () => {

    console.log(email.value)

    if(emailRegex.test(email.value)){
        console.log('email valid')
        error.innerText = ""
    }
    else{
        console.log('email not valid')
        error.innerText = 'Email not valid'
        email.style.backgroundColor = '#f87171'
        email.style.border = 'red'
    }
    
}