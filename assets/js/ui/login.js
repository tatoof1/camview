import helper from'../custom.js'

const loginButton = document.getElementById("loginButton")


loginButton.onclick = function (){
   
    let emailField =  document.getElementById("loginEmail")
    let passwordField = document.getElementById("enterpassword")

    console.log("email :" + emailField.value)
    helper.login(emailField.value , passwordField.value)
}