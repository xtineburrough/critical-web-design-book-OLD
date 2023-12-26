/**
 *  Helper functions for Critical Web Design Book (2025)
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
function randomRgb(r = [0, 255], g = [0, 255], b = [0, 255]) {
	return {
		r: randomFloat(r[0],r[1]),
		g: randomFloat(g[0],g[1]),
		b: randomFloat(b[0],b[1]),
	};
}
/**
 *  Return a random hex color
 */
function randomHexFromString() {
	let chars = "0123456789abcdef";
	let hex = "";
	for (let i = 0; i <= 6; i++) {
		hex += chars[Math.floor(Math.random() * chars.length)];
	}
	return hex;
}
/**
 *  Return a random hex color using (256 * 256 * 256)
 *  https://gomakethings.com/a-better-way-to-generate-a-random-color-with-vanilla-js/
 */
function randomHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
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
 *  Populate an array with a value => [1,1,1]
 */
function populateArray(val, count) {
	var sizedArray = Array.apply(null, Array(count));
	return sizedArray.map(function (o) {
		return val;
	});
}

/**
 *  Populate an array with random numbers => [3,5,2]
 */
function populateArrayRandomInt(min, max, count) {
	var sizedArray = Array.apply(null, Array(count));
	return sizedArray.map(function (o) {
		return randomInt(min, max);
	});
}

/**
 *  Return an array of unique integers between min/max, of length
 */
function populateArrayRandomIntUnique(min, max, length) {
	if (!length) length = max;
	// create array with #s
	let arr = [];
	// create array with all the numbers
	for (let i = min; i < max; i++) {
		arr.push(i);
	}
	arr = shuffleArray(arr);
	// console.log(arr)
	return arr.splice(0, length);
}

/**
 *  Shuffle an array - credit https://stackoverflow.com/a/12646864/441878
 */
function shuffleArray(_arr) {
    for (let i = _arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [_arr[i], _arr[j]] = [_arr[j], _arr[i]];
    }
    return _arr;
}

/**
 *  Sort an array
 */
function sortArray(arr) {
	return arr.sort((a, b) => {
		return a - b;
	});
}

/**
 *  Get the hash from the current URL (minus the hash)
 */
function getUrlHash() {
	return Number(window.location.href.split("#")[1]) || null;
}
/**
 *  Set a value as the hash in the current URL
 */
function setUrlHash(str) {
	// replace hash in url
	window.location.hash = "#" + str;
}

/**
 *  Return current Bootstrap breakpoint size - credit https://stackoverflow.com/a/55368012/441878
 */
function getViewportSize() {
	const width = Math.max(
		document.documentElement.clientWidth,
		window.innerWidth || 0
	);
	if (width <= 575.98) return "xs";
	if (width <= 767.98) return "sm";
	if (width <= 991.98) return "md";
	if (width <= 1199.98) return "lg";
	if (width <= 1399.98) return "xl";
	return "xxl";
}

/**
 * Preload images
 */
function preloadImage(url) {
	var img = new Image();
	img.src = url;
}
// usage
// for (let i = 0; i < 116; i++) {
// 	preloadImage(`assets/img/users-200w/${i}.jpg`);
// }
