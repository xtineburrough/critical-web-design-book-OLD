/**
 *  Helper functions to accompany Critical Web Design (the book)
 *  2023 Owen Mundy
 *  See license in repository
 */

/**
 *  Return a random number between min (inclusive) and max (exclusive)
 */
function randomNumber(min, max) {
	return Math.random() * (max - min) + min;
}
/**
 *  Return a random floating point value between min (inclusive) and max (inclusive)
 */
function randomFloat(min = 0, max = 1) {
	return Math.random() * (max - min + 1) + min;
}
/**
 *  Return a random integer between min (inclusive) and max (inclusive)
 */
function randomInt(min = 0, max = 1) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 *  Return a random rgb color
 */
function randomRgb() {
	return {
		r: Math.floor(Math.random() * 255),
		g: Math.floor(Math.random() * 255),
		b: Math.floor(Math.random() * 255),
	};
}
/**
 *  Return a random hex color
 */
function randomHex() {
	let chars = "0123456789abcdef";
	let hex = "";
	for (let i = 0; i <= 6; i++) {
		hex += chars[Math.floor(Math.random() * chars.length)];
	}
	return hex;
}
/**
 *  Return a random index from the array
 */
function randomFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

/**
 *  Capitalize first letter of string. Credit: https://stackoverflow.com/a/1026087/441878
 */
function upperCaseFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 *  Zero-pad a string
 */
function zeroPad(str) {
	return ("0" + str).slice(-2);
}

/**
 *  Convert a date to a timezone
 */
function convertTZ(date, tzString) {
	return new Date(
		(typeof date === "string" ? new Date(date) : date).toLocaleString(
			"en-US",
			{ timeZone: tzString }
		)
	);
}

/**
 *  Populate an array with a value
 */
function populateArr(val, count) {
	var sizedArray = Array.apply(null, Array(count));
	return sizedArray.map(function (o) {
		return val;
	});
}

/**
 *  Populate an array with random numbers
 */
function populateArrRandomInt(min, max, count) {
	var sizedArray = Array.apply(null, Array(count));
	return sizedArray.map(function (o) {
		return randomInt(min, max);
	});
}

/**
 *  Shuffle an array - credit https://stackoverflow.com/a/12646864/441878
 */
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function sortArray(arr) {
	return arr.sort((a, b) => {
		return a - b;
	});
}

function getUrlHash() {
	// check if previous option stored in url
	return Number(window.location.href.split("#")[1]) || 0;
}

function setUrlHash(str) {
	// replace hash in url
	window.location.hash = "#" + str;
}
