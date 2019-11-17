const removeFromArray = function(array, ...args) {
    for (i = 0; i < args.length; i++) {
        if (array.includes(args[i])) {
            array.splice(array.indexOf(args[i]), 1);
        }
    }
    return array;
}

module.exports = removeFromArray
