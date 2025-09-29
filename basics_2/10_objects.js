// Notes // singleton
// if anything is maden with litreal it is not singleton
// if anything is maden with constructor it is singleton

// code // 

//Object.create// this is constructor
// Symbol

const mySym = Symbol("key1")

// litreals
let JSuser = {
    name: "Abhinaba",
    "Full name": "Abhinaba Biswas", 
     [mySym]  : "mykey1",
    Age: "21",
    Adress: "Tehatta, Natunpara, Nadia",
    email: "userExample@gmail.com",
    password: "********21****",
    IsLoggedIn: false,
    lastLoggedIn: ["Sunday", "Monday"]
}
    //JS automaticlly takes the keyword as a string
    // if the name keyword was written like a string it wasn't able to do in ( console.log(JSuser.email) )
    // in this case we have to do ( console.log(JSuser["email"]));

    //  if in the mySym the 3rd brackets were not given it was used like a string.

    // console.log(JSuser.email)
    // //or//
    // console.log(JSuser["email"]);
    // //JS automaticlly takes the keyword as a string.    that's why it is ["email"]
    // console.log(JSuser["Full name"]) // right syntax while this "Full 
    // // name"

    // console.log(JSuser[mySym]);

    // JSuser.email = "Asmitbiswas18245@claude.com"
    // // Object.freeze(JSuser)

    // JSuser.email = "asmit7487@gmail.com"
    // console.log(JSuser);

    JSuser.greetings = function(){
        console.log("Hello JS user");
        
    }

      JSuser.greetingsTwo = function(){
        console.log(`Hello JS user, ${this.name}`);
        
    }

    console.log(JSuser.greetings());
    console.log(JSuser.greetingsTwo());
    
    
    
    




