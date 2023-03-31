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

//login attemps
console.log(login("faruz", "011018"))