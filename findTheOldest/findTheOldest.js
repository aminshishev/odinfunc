let findTheOldest = function(people) {
    let oldest = 0;
    let res;
    for (i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath) {
            let age = people[i].yearOfDeath - people[i].yearOfBirth;
            if (age > oldest) {
                oldest = age;
                res = people[i];
            }
        } else {
            let age = new Date().getFullYear() - people[i].yearOfBirth;
            if (age > oldest) {
                oldest = age;
                res = people[i];
            }
        }
    }
    return res;

}

module.exports = findTheOldest
