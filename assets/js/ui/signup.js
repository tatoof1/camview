import helper from'../custom.js'

const signupButton = document.getElementById("signupbutton")


signupButton.onclick = function (){   
    let email =  document.getElementById("enteremail").value
    let password = document.getElementById("enterpassword1").value
    let passwordConfirmation = document.getElementById("enterpassword2").value
    let userName = document.getElementById("usernamesiginup").value

    if(isValidPassword(password,passwordConfirmation)){
        helper.registerUser(email ,password ,userName,passwordConfirmation)
    }
}

function isValidPassword(password , confirmPassword){
    const validPassword =  (password === confirmPassword)
    if (validPassword){
        alert("password match")
    }
    else{
        alert("password don't match")
    }
    return validPassword
}