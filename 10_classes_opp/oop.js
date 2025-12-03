const user = {
    username:"Asmit",
    LoggedIn : 8,
    SignedIn : true,

    getUserDetails: function(){
        // console.log("Got details from database")
        // console.log(`Username : ${this.username}`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())

function User(username, IsloggedIn, LoginCount){
    this.username = username;
    this.IsloggedIn = IsloggedIn;
    this.LoginCount = LoginCount;

    this.greetings = () => {
        console.log(`Welcome ${this.username}`)
    }
    return this

}

const userOne = new User("Asmit", "True", "584")
const userTwo = new User("Axmxtx_ 3", "False", "1556")
console.log(userOne.constructor)
// console.log(userTwo),
