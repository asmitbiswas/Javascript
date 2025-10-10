// Immediately Invoked Function Expressions (IIFE)

// we can write IIFE like arrow function '-'

(function chai (){
    // named IIFE
    console.log(`DB connected One`);
    
})();

// (  function aurJS ()  {
//     console.log(`DB connected Two`);
// })();


(   (name) => {
    // non named IIFE
    console.log(`DB connected Two ${name}`);
    
})("Asmit");

