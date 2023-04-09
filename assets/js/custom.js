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
function addCam(fps,model,releaseDate,sensor,weight,dimensions,pictures){
    const register_car_api = serverUrl + "RegsiterCam"
    
    axios.post(register_car_api,
        {
            fps:fps , model:model , dimensions:dimensions , releaseDate:releaseDate , sensor:sensor , weight:weight
            ,pictures:pictures
        })
        .then(
            (value) => {console.log("RegistredCam")}
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

function fetchCam(pageNumber,renderProducts){
    const fetch_car_api = serverUrl + "FetchCam"
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

export default {login,fetchCam: fetchCam,addCam: addCam,registerUser}