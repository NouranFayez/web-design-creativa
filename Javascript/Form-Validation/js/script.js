

let form = document.querySelector('.registerForm')

function checkName(input){
    // console.log(input.nextElementSibling)
    let val = input.value.trim()
    if(val.length < 3 ){
       handleError(input , "enter at least 3 characters")
    }
    else handleError(input)

}

function checkEmail(input){
    // https://zparacha.com/validate-email-address-using-javascript-regular-expression

    // nouran@checkEmail.com

    let regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
   console.log(regEx.test(input.value));
   (regEx.test(input.value)) ? handleError(input) : handleError(input , 'please enter a valid Email')
}


function handleError(input , msg = ''){
    input.nextElementSibling.innerText = msg
}

function checkPassword(input){
    // https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
    // let regEx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    let regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    (regEx.test(input.value)) ? handleError(input) : handleError(input , 'enter at least 1 lowercase letter , uppercase letter ............');



    console.log(regEx.test(input.value))
}

form.addEventListener('input' , (e)=>{
    // e.preventDefault()
    // console.log(e)
    // console.log(e.target.id)
    switch(e.target.id){
        case  'userName' :
            checkName(e.target)
        // console.log('username input')
        break;
        case 'userEmail' : 
            checkEmail(e.target)
        break
        case 'userPassword' : 
        checkPassword(e.target)
        // console.log('user password ')
        break
    }
})
