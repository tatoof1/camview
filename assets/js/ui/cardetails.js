

const url = window.location.search

let values = []

function parseUrl(){
   // = match ? , pictures / ?
const valuesRegex = /(?<=\=)(.*?)(?=\?)/g

const temp = [...url.matchAll(valuesRegex)]
temp.forEach(value => {
    values.push(value[0].replaceAll("%20" ," "))
})
console.log(values)

}

parseUrl()
console.log(values)
const cammodel = document.getElementById("cammodel")
cammodel.innerText = values[0]
const sensor = document.getElementById("sensor")
sensor.innerText = values[1]
// const weight = document.getElementById("weight")
// weight.innerText = values[2]
const releaseDate = document.getElementById("releasedate")
releaseDate.innerText = values[3]
const fps = document.getElementById("fps")
fps.innerText = values[4]
const dimensions = document.getElementById("dimensions")
dimensions.innerText = values[5]
const imgone = document.getElementById("img1")
imgone.src = values[6]
const imgtwo = document.getElementById("img2")
imgtwo.src = values[6]
const imgthree = document.getElementById("img3")
imgthree.src = values[6]
const imgfoor = document.getElementById("img4")
imgfoor.src = values[6]

