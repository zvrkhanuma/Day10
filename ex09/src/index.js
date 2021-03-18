function myFunction (myObj, checkProp){
    // Only change code below this line
    if (myObj.hasOwnProperty (checkProp)) {
        return myObj[checkProp];
    
    }
    return "Not found"; 
    }
    // Only chnage code above this line
    
    var Movie = {
        title: "Titanic", 
        song: "My Heart Will Go On", 
        genre: "drama"
    }
    console.log(myFunction(Movie, "title"));
    console.log(myFunction(Movie, "song"));
    console.log(myFunction(Movie, "genre"));
    console.log(myFunction(Movie, "actor"));
    module.exports = myFunction;