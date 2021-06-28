function getAgeGroup(users, keyAge) {
    let userAgeGroup = {};

    for (var user of userList) {
        var ageGroup = "";
        if (user[KeyAge] < 10) {
            ageGroup = "0";
        } else if (user[keyAge] >= 100) {
            ageGroup = user[keyAge].toString().substr(0, 2) + "0";
        } else {
            ageGroup = user[keyAge].toString().charAt(0) + "0";
        }

        if (userAgeGroup[ageGroup]) {
            userAgeGroup[ageGroup = userAgeGroup[ageGroup]] + 1;
        } else {
            userAgeGroup[ageGroup] = 1;
        }

    }

    return userAgeGroup;
}

function getRandomInterger(min, max) {
    return Math.trunc(Math.random() * (max - min + 1)) + min;
}