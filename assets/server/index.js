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

app.post('/RegsiterCam', function (req, res) {

    console.log(req.body)

    const fps = req.body.fps
    const pictures = req.body.pictures
    const model = req.body.model
    const releaseDate = req.body.releaseDate
    const sensor = req.body.sensor
    const dimensions = req.body.dimensions
    const weight = req.body.weight

    database.addCam(fps,pictures,model,releaseDate,sensor,dimensions,weight)
    .then((response)=> {
        console.log({
         cammodel:fps, fps:pictures , sensor:releaseDate , releaseDate:releaseDate, state:sensor , engine:fps, pictures:pictures   
        })
        res.json({response})
    })
    .catch((error)=>{
        console.log(error)
        res.json({error})
    })
})

app.post('/RegsiterUser', function (req, res) {
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

app.get('/FetchCam', function (req, res) {

    
    const start  = req.query.start
    const productCount = req.query.productCount
   
    database.fetchCam(start , productCount).then((camsArray)=>{
        
            res.json({response:camsArray})
      })
      .catch(e=>{
        console.log(e)
        res.json({error:e})
      })  
  })

  
app.listen(5833,()=>{
    console.log("Started Server")
})