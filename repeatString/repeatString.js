const repeatString = function(str, num) {
    let res = '';
    if (num < 0) {
        return 'ERROR';
    } else if (num == 0) {
        return '';
    } else {
        for (i = 1; i <= num; i++) {
            res += str;
        }
    }
    return res;
}

module.exports = repeatString
