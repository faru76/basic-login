let dbUsers = [
    {
        username: "faru",
        password: "011018",
        name: "Fairuz",
        email: "faru@mail.com"
    },
    
    {
        username: "polobon",
        password: "010831",
        name: "Bon",
        email: "polobon@mail.com"
    },
    
    {
        username: "lengzaii",
        password: "011120",
        name: "Cheok",
        email: "lengzaii@mail.com"
    },
]

function login(username, password){
    console.log("someone tried to login with", username, password)
    
    let matched = dbUsers.find(element=>element.username == username)

    if(matched) {
        if(matched.password == password){
            return matched
        }         
        else {
            return "Password not matched"
        }
    }
    else {
        return "Username not found"
    }
}

function register(newusername, newpassword, newname, newemail){
    //TODO: Check if username exists
    let matched = dbUsers.find(element=>element.username == newusername)

    if(matched) {
        return "This user already exists"
    }

    else {
        dbUsers.push({
            username: newusername,
            password: newpassword,
            name : newname,
            email: newemail
        })
    }
}

//login attemps
//console.log(login("faruz", "011018"))

//register attemps
//console.log(register("faru","123456","melaka","utem@mail.com")) //this user already exist
//console.log(register("utem","123456","melaka","utem@mail.com")) //