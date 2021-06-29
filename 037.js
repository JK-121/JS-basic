//Rest Parameter - 전달받을 변수가 몇개일지 알 수 없을때

// function add(x1, x2){
//     return x1 + x2;
// }

// function add(x1, x2, x3){
//     return x1 + x2 + x3;
// }

function add(...nums) {
    var sum = 0;
    for (var n of nums) {
        sum += n;
    }

    return sum;
}

console.log(add(2, 5, 3, 7, 20, 123));