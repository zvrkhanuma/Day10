// Only change code below this line
var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"
};
function myFunction(myObj){
    vegetableValue = myObj["vegetable"];
    fruitValue = myObj["fruit"];
    drinkValue = myObj["drink"];
    return { vegetableValue, fruitValue, drinkValue };
}
// Only change code above this line
console.log(myFunction(myFood));
module.exports = myFunction(myFood);