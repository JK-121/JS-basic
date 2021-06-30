//Object Litteral Syntax Extension

var firstName = "John";
var lastName = "Bur";

var person = {
    firstName: firstName,
    lastName: lastName
}

var type = "student";
var score = {
    [type]: "John Bur",
    //student: "John Bur",
    score: 95
};

// score.student
// score["student"]
// score[type]