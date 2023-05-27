import helper from'../custom.js'

const addCamButton = document.getElementById("addcambutton")

addCamButton.onclick = function (){   
    let cammodel =  document.getElementById("cammodel").value
    let fps = document.getElementById("fps").value
    let weight = document.getElementById("weight").value
    let sensor = document.getElementById("sensor").value
    let dimensions = document.getElementById("dimensions").value
    let releaseDate = document.getElementById("releasedate").value
    let pictures = document.getElementById("formFileMultiple").value
    helper.addCam(fps,cammodel,releaseDate,sensor,weight,dimensions,pictures)
    
}
