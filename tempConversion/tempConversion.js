const ftoc = function(a) {
  res = 5/9 * (a - 32);
  return Number(res.toFixed(1));
}

const ctof = function(a) {
  res = 9/5 * a + 32;
  return Number(res.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
