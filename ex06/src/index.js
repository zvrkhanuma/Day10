// Create lion object here
var lion = {
"name": "Simba",
"legs": 4,
"tails": 1
};

// End of lion object
function myFunction(propName, propValue){
// Only change code below this line

lion["roar"] = "roar-roar";
return lion;
// Only change code above this line
}
console.log(myFunction("roar", "roar-roar"));
myFunction("roar");
module.exports = myFunction();