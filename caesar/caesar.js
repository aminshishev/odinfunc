const caesar = function(str, pos) {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    newstr = str.split('');
    let res = '';
    if (pos < 0) {
        pos = alphabet.length + pos;
    }
    for (let i = 0; i < newstr.length; i += 1) {
        switch (newstr[i].toLowerCase()) {
            case ' ':
            case '!':
            case ',':
            case '?':
            case '.':
                res += newstr[i];
                break;
            default:
				if ((alphabet.indexOf(newstr[i].toLowerCase()) + pos) > 25) {
                    let symb = alphabet[(alphabet.indexOf(newstr[i].toLowerCase()) + pos) - 26];
                    if (newstr[i] == newstr[i].toUpperCase()) {
                        symb = symb.toUpperCase();
                    }
                    res += symb;} else {
                        let symb = alphabet[alphabet.indexOf(newstr[i].toLowerCase()) + pos];
                        if (newstr[i] == newstr[i].toUpperCase()) {
                            symb = symb.toUpperCase();}
                        res += symb;}}}
    let result = res.replace(res[0], res[0].toUpperCase());
    return result;}
module.exports = caesar;