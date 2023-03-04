import helper from'../custom.js'

const addCarButton = document.getElementById("addcarbutton")


addCarButton.onclick = function (){   
    let carname =  document.getElementById("carname").value
    let carbrand = document.getElementById("carbrand").value
    let engine = document.getElementById("engine").value
    let distance = document.getElementById("distance").value
    let state = document.getElementById("state").value
    let phonenumber = document.getElementById("phonenumber").value
    let pictures = document.getElementById("formFileMultiple").value

    helper.addCar(carname,carbrand,distance,phonenumber,state,engine,pictures)
    
}
