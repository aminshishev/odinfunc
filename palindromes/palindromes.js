const palindromes = function(a) {
    let b = '';
    let c = '';
    for (i = a.length - 1; i >= 0; i--) {
        switch (a[i]) {
            case '!':
            case '?':
            case '.':
            case ':':
            case ',':
                break;
            default: 
                b += a[i].toLowerCase();
    }}
    for (i = 0; i < a.length; i++) {
        switch (a[i]) {
            case '!':
            case '?':
            case '.':
            case ':':
            case ',':
                break;
            default:
                c += a[i].toLowerCase();
    }}
    b = b.replace(/\s+/g, '');
    c = c.replace(/\s+/g, '');
    if (c === b) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindromes
