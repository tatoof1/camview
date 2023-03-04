import helper from'../custom.js'

let buttonsObjects = {}

/*
"buttonName" htmlbutton
*/
    
const productsHolder = document.getElementById("caranounce")

const page1Button = document.getElementById("indexonebtn")
page1Button.onclick = ()=>{fetchPageProdcuts("page1Button")}
buttonsObjects["page1Button"] = page1Button.innerHTML

const page2Button = document.getElementById("indextwobtn")
page2Button.onclick = ()=>{fetchPageProdcuts("page2Button")}
buttonsObjects["page2Button"] = page2Button.innerHTML

const page3Button = document.getElementById("indexthreebtn")
page3Button.onclick = ()=>{fetchPageProdcuts("page3Button")}
buttonsObjects["page3Button"] = page3Button.innerHTML


function fetchPages(){
    // request to database , get pages count
    const pagesCount = 0
    for(let i=0;i<pagesCount;i++){
        const buttonId = `index${i}btn`
        const pageIButton = document.getElementById(buttonId)
        pageIButton.onclick = fetchPageProdcuts(buttonId)
        buttonsObjects[buttonId] = pageIButton
    }    
}



function fetchPageProdcuts (buttonName){   
    const pageNumber = buttonsObjects[buttonName]  
    helper.fetchCar(pageNumber,renderProductsCards)   
}

function renderProductsCards(carsArray){
    const cardsHtml = []
    // method 1 bad cpu intensive : create element then immediatly append it
    //method 2 good : create parent div add all elements inside , then render parent
    // 100 elemnt => method 1 = 100 render , method 2 = 1 render

    
    function htmlHelper(elementType ,className){
        const card = document.createElement(elementType)
        if(className != undefined){
            card.className = className
        }
        return card 
    }

    const virtualRootHtml = htmlHelper("div","row")


    carsArray.forEach(
        car => {
            const column = htmlHelper("div" ,"col-md-4")
            const card = htmlHelper("div","card mb-4 product-wap rounded-0")
            column.appendChild(card)
  
            const card1 = htmlHelper("div" , "card rounded-0")
            card.appendChild(card1)

            const image = htmlHelper("img" , "card-img rounded-0 img-fluid")
            console.log(car.Pictures)
            image.src = car.Pictures
            card1.appendChild(image)


            const card2 = htmlHelper ("div" , "card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center")
            card1.appendChild(card2)

            const ul1 = htmlHelper ("ul" , "list-unstyled")
            card2.appendChild(ul1)

            const li1 = htmlHelper("li" )
            ul1.appendChild (li1)

            const a1 = htmlHelper("a" , "btn btn-success text-white")
            li1.appendChild(a1)

            const i1 = htmlHelper("i" , "far fa-heart")
            a1.appendChild(i1)
  
        const li2 = htmlHelper ("li")
        ul1.appendChild(li2)
        const a2 = htmlHelper("a", "btn btn-success text-white mt-2")
        a2.href= `shop-single2.html?name=${car.Car_name}?brand=${car.Brand}?distance=${car.Distance}?
            phone_number=${car.Phone_Number}?state=${car.State}?engine=${car.Engine}?pictures=${car.Pictures}??`
        
        // getElementById .innerText = valeur 
        li2.appendChild(a2)

        const i2 = htmlHelper("i","far fa-eye")

        a2.appendChild(i2)



      const cardbody = htmlHelper ("div","card-body")
      card.appendChild(cardbody)
     

       const a3 = htmlHelper ("a","h3 text-decoration-none font1")
       a3.innerText = car.Car_name
       cardbody.appendChild(a3)

       const ul2 = htmlHelper("ul","w-100 list-unstyled d-flex justify-content-between mb-0")
       cardbody.appendChild(ul2)

       const li3 = htmlHelper("li")
       li3.innerText = "Description"   
       ul2.appendChild(li3)

       const li4 = htmlHelper("li","pt-2")
       ul2.appendChild(li4)


       const span1 = htmlHelper("span","product-color-dot color-dot-red float-left rounded-circle ml-1")
       li4.appendChild(span1)

       const span2 = htmlHelper("span","product-color-dot color-dot-blue float-left rounded-circle ml-1")
       li4.appendChild(span2)

       const span3 = htmlHelper("span","product-color-dot color-dot-black float-left rounded-circle ml-1")
       li4.appendChild(span3)

       const span4 = htmlHelper("span","product-color-dot color-dot-light float-left rounded-circle ml-1")
       li4.appendChild(span4)

       const span5 = htmlHelper("span","product-color-dot color-dot-green float-left rounded-circle ml-1")
       li4.appendChild(span5)


       const i3 = htmlHelper("i", "fas fa-gas-pump center d-flex justify-content-center fs-5")
       cardbody.appendChild(i3)

       const p = htmlHelper("p", "text-center fs-4 font1 simple")
       p.innerText = car.Engine
       cardbody.appendChild(p)

       const br = htmlHelper("br")
       cardbody.appendChild(br)
        
       const i4 = htmlHelper("i", "fa-solid fa-gauge-high fs-5 d-flex justify-content-center")
       cardbody.appendChild(i4)

       const p1 = htmlHelper("p", "fa-solid fs-5 d-flex justify-content-center") 
       p1.innerText = car.Distance
       cardbody.appendChild(p1)

       const br1 = htmlHelper("br")
       cardbody.appendChild(br1)

       const i5 = htmlHelper ("i", "fa-solid fa-location-dot fs-5 d-flex justify-content-center")
       cardbody.appendChild(i5)

       const p2 = htmlHelper("p", "text-center fs-4 font1 simple") 
       p2.innerText = car.State
       cardbody.appendChild(p2)

       const ul3 = htmlHelper("ul", "list-unstyled d-flex justify-content-center mb-1")
       cardbody.appendChild(ul3)



      const li5 = htmlHelper("li")
      ul3.appendChild(li5)

      const i6 = htmlHelper("i","text-warning fa fa-star")
      li5.appendChild(i6)

      const i7 = htmlHelper("i","text-warning fa fa-star")
      li5.appendChild(i7)

      const i8 = htmlHelper("i","text-warning fa fa-star")
      li5.appendChild(i8)

      const i9 = htmlHelper("i","text-warning fa fa-star")
      li5.appendChild(i9)
      
      const i10 = htmlHelper("i","text-muted fa fa-star")
      li5.appendChild(i10)

      const p3 = htmlHelper("p","text-center mb-0 font1 simple")
      p3.innerText = "80000 DA"
      cardbody.appendChild(p3)


     virtualRootHtml.appendChild(column)

        }
    )
    
    productsHolder.appendChild(virtualRootHtml)
    
    // kano f memoire doka trsomhom f page
    
    /*
    var tag = document.createElement("p");
   var text = document.createTextNode("Tutorix is the best e-learning platform");
   tag.appendChild(text);
    */


    /*





    */

}
