const Database =  require('better-sqlite3')

let connection 
function connect(){
    connection =  Database('./database/sqlite.db')   
    
    const createCarsTable = connection.prepare("CREATE TABLE IF NOT EXISTS Cams (\n"
        + "	Cam_id Integer PRIMARY KEY AUTOINCREMENT,\n"
        + "	Max_Fps text ,\n"
        + "	Picutres text ,\n"
        + " Model text,\n"
        + " Release_Date text,\n"
        + " Sensor text,\n"
        + " Dimensions text,\n"
        + " Weight text "
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

async function addCam(fps,pictures,model,releaseDate,sensor,dimensions,weight){
    const insertCar = connection.prepare("INSERT INTO Cams (Max_Fps,Picutres,Model,Release_Date,Sensor,Dimensions,Weight) VALUES(?,?,?,?,?,?,?)")
    insertCar.run(fps,pictures,model,releaseDate,sensor,dimensions,weight,)
    
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


async function fetchCam(startIndex , maxLimit){
    const selectCam = connection.prepare("Select * From Cams LIMIT ? OFFSET ?")
    const cams =  selectCam.all(maxLimit , startIndex)
    console.log(cams)
    return cams
}


module.exports= {fetchCam: fetchCam , login , addCam: addCam ,registerUser ,connect};
