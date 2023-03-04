const serverUrl =  "http://localhost:5833/"


function registerUser(email ,password ,username){
    const register_user_api = serverUrl + "RegsiterUser"
    const options = {
        email :email,
        password:password,
        username:username
    }

    axios.post(register_user_api,
        {options:options},
        {
            headers:{'Content-Type': 'application/json',},
        }
        )
        .then(()=>{
            console.log("User registered")
        })
        .catch(()=>{
            console.log("An error occured")
        })
}

function addCar(name,brand,distance,phoneNumber,state,engine,pictures){
    const register_car_api = serverUrl + "RegsiterCar"


    axios.post(register_car_api,
        {
            name:name , brand:brand , distance:distance , phoneNumber:phoneNumber , state:state , engine:engine
            ,pictures:pictures
        })
        .then(
            (value) => {console.log("RegistredCar")}
        )
        .catch(
            (error) => {console.log("Failed")}
        )
}

function login(email,password){
    const login_api = serverUrl + "Login"
    
    axios.get(login_api,
        {
        params:{email:email , password:password}})
        .then(
            (response) => {
                const loggedIn = response.data.response
                console.log(loggedIn)
                if(loggedIn){
                    alert("correct password");

                }
                else{
                    alert("wrong password");
                }
            }
        )
        .catch(
            (error) => {console.log("Failed")}
        )
        
}

function fetchCar(pageNumber,renderProducts){
    const fetch_car_api = serverUrl + "FetchCar"
    const productCount = 3
    
    const start = pageNumber - 1 

    axios.get(fetch_car_api,
        {
        params:{
            start:start,
            productCount:productCount
        }
        })
        .then(
            (response) => {
                renderProducts(response.data.response)
            }
        )
        .catch((error) => {
            console.log(error)
        })
}

export default {login,fetchCar,addCar,registerUser}