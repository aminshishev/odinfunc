const getTheTitles = function(array) {
    let res = [];
    for (i = 0; i < array.length; i++) {
        res.push(array[i].title);
    }
    return res;
}

module.exports = getTheTitles;
