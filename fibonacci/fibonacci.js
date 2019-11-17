const fibonacci = function(n) {
    if (n <= 2) {return 1;}
    let x = 1;
    let y = 1;
    let res = 0;
    for (i = 2; i < n; i++)
    {
      res = x + y;
      x = y;
      y = res;
    }
    return res;
}

module.exports = fibonacci
