/*
 * this problem is derived from
 * https://www.topcoder.com/community/data-science/data-science-tutorials/an-introduction-to-recursion-part-1/
 * */

var fs = require("fs");
var content = fs.readFileSync("employees.json");

var dataTree = JSON.parse(content);

function Solution(empName){
    //ok this person count even if he is not manger of anyone else
    var counter = 1;
    //just printing the name
    console.log(empName);

    //look into every
    dataTree.every(function (person,index) {
        if(person.manager == empName){
            counter = counter + Solution(person.name);
        }
        return true
    });
    return counter;
}

console.log(Solution(empName = 'Veronica'))
