// main.js

function preloadImage(url) {
	var img = new Image();
	img.src = url;
}
for (let i = 0; i < 116; i++) {
	preloadImage(`assets/img/users-200w/${i}.jpg`);
}

let viewportSize,
	viewportUserCounts = { xs: 8, sm: 8, md: 15, lg: 18, xl: 32, xxl: 36 },
	userCount = 0,
	currentOption = 0,
	currentPercent = 0,
	cardMenu = document.querySelectorAll(".cardMenu"),
	usersEle = document.querySelector(".users"),
	reportEle = document.querySelector(".report"),
	resetFlag = false;

function report() {
	reportEle.innerHTML = `
        viewportSize <span class="report-value">${viewportSize}</span> 
        userCount <span class="report-value">${userCount}</span> 
        currentOption <span class="report-value">${currentOption}</span> 
        currentPercent <span class="report-value">${currentPercent}</span> 
    `;
}

// 1. when the page finishes loading
document.addEventListener(
	"DOMContentLoaded",
	function () {
		// console.log("DOMContentLoaded");

		// add an event listener to each button in menu
		for (let i = 0; i < cardMenu.length; i++) {
			cardMenu[i].addEventListener("mouseover", menuOptionHandler, false);
			cardMenu[i].addEventListener("focus", menuOptionHandler, false);
		}

		// check if previous option stored in url, if not default to zero
		let optionFromUrl = Number(window.location.href.split("#")[1]) || 0;
		// console.log(optionFromUrl, window.location.href);

		// show option
		selectOption(optionFromUrl);
	},
	false
);

// when a menu option is selected
function menuOptionHandler(e) {
	// console.log(e.currentTarget);
	// console.log(e.currentTarget.dataset);
	// console.log(e.currentTarget.dataset.percent);

	// confirm there is a value
	if (!e.currentTarget.dataset.option || !e.currentTarget.dataset.percent)
		return;

	// exit if the option already shown
	if (currentOption == e.currentTarget.dataset.option) return;

	// show selected
	selectOption(e.currentTarget.dataset.option);
}

// every time viewport is been resized
window.addEventListener(
	"resize",
	function (event) {
		// save previous user count
		let previousUserCount = userCount;
		// update # of users to show
		userCount = updateUserCount();

		console.log(viewportSize, userCount, previousUserCount);
		// number of users has changed
		if (userCount != previousUserCount) {
			// update layout
			selectOption(currentOption);
		}
	},
	true
);

function updateUserCount() {
	// update viewport size
	viewportSize = getViewportSize();
	// update number of persons in display
	return viewportUserCounts[viewportSize];
}

// show it as selected, display users
function selectOption(option) {
	console.log("selectOption()", option);

	// update # of users to show
	userCount = updateUserCount();

	// save data
	currentOption = cardMenu[option].dataset.option;
	currentPercent = cardMenu[option].dataset.percent;
	// console.log(currentOption, currentPercent)

	// replace hash in url
	window.location.hash = "#" + option;

	// remove active from all
	for (let i = 0; i < cardMenu.length; i++) {
		cardMenu[i].classList.remove("active");
	}
	// add active to just the target
	cardMenu[option].classList.add("active");
	displayUsers();
}

// show users on the page
function displayUsers() {
	console.log("displayUsers()", "userCount", userCount);

	// get the random user ids
	let arr = returnRandomIntsArr(0, 115, userCount);
	// number of affected users
	let affected = Math.ceil((userCount * currentPercent) / 100);
	// string to store html data
	let str = "";
	// loop through array, save
	for (let i = 0; i < arr.length; i++) {
		let showAffectedClass = "";
		if (i < affected) {
			showAffectedClass = "affected";
		}
		str += `
            <span class="${showAffectedClass}" title="${showAffectedClass}">
                <img src="assets/img/users-200w/${arr[i]}.jpg" class="img-fluid graphic" alt="this person does not exist ${i}">
            </span>`;
	}
	usersEle.innerHTML = str;
	console.log(
		"currentOption",
		currentOption,
		"currentPercent",
		currentPercent,
		"affected",
		affected + "/" + userCount
	);
	report();
}

/**
 *  Return current Bootstrap breakpoint size https://stackoverflow.com/a/55368012/441878
 */
function getViewportSize() {
	const width = Math.max(
		document.documentElement.clientWidth,
		window.innerWidth || 0
	);
	if (width <= 576) return "xs";
	if (width <= 768) return "sm";
	if (width <= 992) return "md";
	if (width <= 1200) return "lg";
	if (width <= 1400) return "xl";
	return "xxl";
}

/**
 *  Return an array of unique integers between min/max, of length
 */
function returnRandomIntsArr(min, max, length) {
	// create array with #s
	let arr = [];
	// create array with all the numbers
	for (let i = min; i < max; i++) {
		arr.push(i);
	}
	shuffleArray(arr);
	// console.log(arr)
	return arr.splice(0, length);
}
