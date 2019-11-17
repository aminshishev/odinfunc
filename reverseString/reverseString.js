const reverseString = function(a) {
    let b = a.split('');
    let res = '';
    for (i = b.length - 1; i >= 0; i--) {
        res += b[i];
    }
    return res;
}

module.exports = reverseString
