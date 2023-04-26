// FUNCTIONS

/**
 *  Return a random floating point value between min (inclusive) and max (inclusive)
 */
function randomFloat(min, max) {
	return Math.random() * (max - min + 1) + min;
}
/**
 *  Return a random integer between min (inclusive) and max (inclusive)
 */
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 *  Capitalize first letter of string. Credit: https://stackoverflow.com/a/1026087/441878
 */
function upperCaseFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
