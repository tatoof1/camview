const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin :"*",
    allowedHeaders :["Content-Type"],
    methods : ["GET","POST","PUT","PATCH","DELETE"]
  }))

app.use(express.json());

const database = require('./database.js')

database.connect()

app.get('/Login', function (req, res) {

    const email = req.query.email
    const password = req.query.password
    console.log(email)
    console.log(password)
    
    database.login(email,password).then((correctPassword)=>{
        if(correctPassword){
            res.json({response:correctPassword})
        }
        else{
            res.json({response:wrongPassword})
        }
      })
      .catch(e=>{
        res.json({error:e})
      })
})

app.post('/RegsiterCar', function (req, res) {

    const carname = req.body.name
    const carbrand = req.body.brand
    const phoneNumber = req.body.phoneNumber
    const distance = req.body.distance
    const state = req.body.state
    const pictures = req.body.pictures
    const engine = req.body.engine
    

    database.addCar(carname,carbrand,distance,phoneNumber,state,engine,pictures)
    .then((response)=> {
        console.log({
         carname:carname, carbrand:carbrand , distance:distance , phoneNumber:phoneNumber, state:state , engine:engine, pictures:pictures   
        })
        res.json({response})
    })
    .catch((error)=>{
        console.log(error)
        res.json({error})
    })
})

app.post('/RegsiterUser', function (req, res) {
    console.log(req.body.options)
    const username = req.body.options.username
    const password = req.body.options.password
    const email = req.body.options.email
    

    database.registerUser(email ,username,password )
    .then((response)=> {
        res.json({response})
    })
    .catch((error)=>{
        console.log(error)
        res.json({error})
    })
})

app.get('/FetchCar', function (req, res) {
    
    const start  = req.query.start
    const productCount = req.query.productCount
   
    database.fetchCar(start , productCount).then((carsArray)=>{
        
            res.json({response:carsArray})
      })
      .catch(e=>{
        console.log(e)
        res.json({error:e})
      })  
  })

  
app.listen(5833,()=>{
    console.log("Started Server")
})