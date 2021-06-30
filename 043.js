//Array Destructuring

function getScores() {
    return [70, 21, 100];
}

// var scores = getScores();
// scores[0];
// scores[1];
// scores[2];

var [x, y, z] = getScores();
console.log(x);
console.log(y);
console.log(z);