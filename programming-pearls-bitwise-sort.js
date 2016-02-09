/*
    Some facts:
        A should have unique natural number
        Max value range is known is of natural nummber is known in this case
*/
var A= [2,3,5,34,67,1,43];

function Solution(){
    var bitArray = [];
    bitArray.length = 100;
    bitArray.fill(0);
    A.forEach(function (value,index) {
        bitArray[value] = 1;
    })//i get [0,1,1,0,0,5,....]
    A.length = 0; //empty A
    bitArray.forEach(function (value,index) {
        if(value==1){
            A.push(index);
        }
    });

    return A;
}

console.log(Solution(A));