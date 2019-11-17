function translate(str) {
	let str1 = str.split(' ');
	let res = ''
	for (i = 0; i < str1.length; i++) {
		let str2 = str1[i];
		if (str2.match(/^[aeiou]/)) {
		res += " " + str2 + "way";} else {
		let consonantCluster = str2.match(/^[^aeiou]+/)[0];
		res += " " + str2.substring(consonantCluster.length) + consonantCluster + "ay";}}
	
	return res.trim();

}


module.exports = {
	translate
}

