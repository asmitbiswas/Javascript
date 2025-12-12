function user(username){
    //  complex DB calls
    this.username = username
    // console.log("called")
}

function usert(username, email, password){
    user.call(this, username)
    this.email = email
    this.password = password
}

const am = new usert("Asmit", "Asmitpopexapmle@gmail.com", "1561641")
console.log(am)