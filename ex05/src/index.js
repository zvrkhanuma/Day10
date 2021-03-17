// Create school object here
var school = {
    "name": "Arena",
    "location": "Sarajevo",
    "established": 2020
};
// End of school bject
function myFunction(name){
// Only change code below this line
school.name = "Paragon";
return school;
// Only change code above this line
}
console.log(myFunction(school))
myFunction(school);
module.exports = { school, myFunction };