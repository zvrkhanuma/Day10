var myPet = {
    species: "Basset",
    name: "Truba",
    legs: 4,
    friends: ["Moli" , "Riki"],
}
// Only change code below this line
function myFunction(myObj){
    return myObj;
}
// Only change code above this line
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };