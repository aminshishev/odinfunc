const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return 'ERROR';
    } else if (typeof a == 'number' && typeof b == 'number') {
        let x = a;
        let y = b;
        if (a > b) {
            x = b;
            y = a;
        } 
        let res = 0;
        for (i = x; i <= y; i++) {
           res += i;
        }
        return res;
    } else {
        return 'ERROR';
    } 
}

module.exports = sumAll
