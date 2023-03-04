

const url = window.location.search

let values = []

function parseUrl(){
   // = match ? , pictures / ?
const valuesRegex = /(?<=\=)(.*?)(?=\?)/g

const temp = [...url.matchAll(valuesRegex)]


temp.forEach(value => {
 
    values.push(value[0].replaceAll("%20" ," "))
})


}


parseUrl()
console.log(values)

const carname = document.getElementById("carname")
carname.innerText = values[0]
const price = document.getElementById("carprice")
price.innerText = "price" 
const brand = document.getElementById("carbrand")
brand.innerText = values[1]
const engine = document.getElementById("carengine")
engine.innerText = values[5]
const distance = document.getElementById("cardistance")
distance.innerText = values[2]
const state = document.getElementById("carstate")
state.innerText = values[4]
const phone = document.getElementById("phone")
phone.innerText = values[3]

const imgone = document.getElementById("img1")
imgone.src = values[6]
const imgtwo = document.getElementById("img2")
imgtwo.src = values[6]
const imgthree = document.getElementById("img3")
imgthree.src = values[6]
const imgfoor = document.getElementById("img4")
imgfoor.src = values[6]

