const Database =  require('better-sqlite3')

let connection 
function connect(){
    connection =  Database('./database/sqlite.db')   
    
    const createCarsTable = connection.prepare("CREATE TABLE IF NOT EXISTS Cars (\n"
        + "	Car_id Integer PRIMARY KEY AUTOINCREMENT,\n"
        + "	Car_Name text ,\n"
        + "	Picutres text ,\n"
        + " Brand text,\n"
        + " Phone_Number text,\n"
        + " Distance text,\n"
        + " Engine text,\n"
        + " State text "
        + ")")

        createCarsTable.run()

        const createUsersTable = connection.prepare("CREATE TABLE IF NOT EXISTS Users (\n"
        + "	user_id Integer PRIMARY KEY AUTOINCREMENT,\n"
        + "	user_name text ,\n"
        + "	email text,\n"
        + " password text "
        + ")")

        createUsersTable.run()
}

async function registerUser(email ,password ,username){
    const registerUser = connection.prepare("INSERT INTO Users (email,password,user_name) VALUES(?,?,?)")
    registerUser.run(email,password,username)
}

async function addCar(name,brand,distance,phoneNumber,state,engine,pictures){
    const insertCar = connection.prepare("INSERT INTO CARS (Car_Name,Brand,Distance,Phone_Number,State,Engine,Pictures) VALUES(?,?,?,?,?,?,?)")
    insertCar.run(name,brand,distance,phoneNumber,state,engine,pictures)
    
}

async function login(email,password) {
    const loginy = connection.prepare("Select password From Users Where email=?")
    const result = loginy.get(email)
    console.log(result[0])
    const resultPass = result["password"]

    console.log(resultPass === password)
    console.log(password +" : " + resultPass)
    return result["password"] === password
    
}
/* 
    0:car0
    1:car1
    Offset = step mnin nbda , offset = 5 
    Limit = 3
    4:car4
    5:car5
    6:car6
    result = [car4,car5,car6]
    ...etc
*/

async function fetchCar(startIndex , maxLimit){
    const selectCar = connection.prepare("Select * From CARS LIMIT ? OFFSET ?")
    const cars =  selectCar.all(maxLimit , startIndex)
    console.log(cars)
    return cars
}


module.exports= {fetchCar , login , addCar ,registerUser ,connect};
