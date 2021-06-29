//Spread Operator

var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];
var arr3 = [...arr2, ...arr1]; //1,2,3,4,5,6

console.log(arr3);

var cd = "CD";
var alphabet = ["A", "B", ...cd]; //A, B, C, D

console.log(alphabet);