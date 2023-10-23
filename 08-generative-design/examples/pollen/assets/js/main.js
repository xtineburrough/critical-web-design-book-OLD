// import flash.filters.BlurFilter;

// The Class SnowFlake is gratefully borrowed from
// http://pixelfumes.blogspot.com/2006/11/actionscript-2-version-of-snow-storm.html

// var speedMultiplier = 5;
// var speedVariMultiplier = 4;
// var viewWidth = 1000;
// var viewHeight = 560;

// var speedVariation;
// // var drift;
// var str;
// var flakeCount;

// function SnowFlake() {
// 	speed = Math.random() * speedMultiplier;
// 	speedVariation = Math.random() * speedVariMultiplier + 1;
// 	setSpeed(speed);
// 	readyFlake();
// 	moveMe();
// }

// function setSpeed(n) {
// 	this.speed = n * speedVariation + 1;
// }

// function readyFlake() {
// 	getDrift();

// 	this._y = Math.random() * viewHeight * -1;
// 	this._x = Math.random() * viewWidth;

// 	// Change the amount by setting them to invisible

// 	//trace(_parent.flakeCount);

// 	//trace(this); //_level0.flake_210.flake

// 	//str = getProperty(this, _name)

// 	//str = str.slice(14, 16)
// 	//trace(str);

// 	if (_parent.flakeCount > _root.newHighestNumber) {
// 		this._alpha = 0;
// 		this._visible = false;
// 	} else {
// 		this._alpha = 100;
// 		this._visible = true;
// 	}

// 	// var bf: BlurFilter = new BlurFilter(drift * 2, speed / 2, 2);
// 	// this.filters = [bf];

// 	if (speed / 2 < speedVariation) {
// 		this._xscale = this._yscale = 50;
// 	}
// }

// function move(ele) {
// 	this._y += speed;
// 	this._x += drift;

// 	if (this._y > viewHeight || this._x < 0 || this._x > viewWidth) {
// 		readyFlake();
// 	}
// 	this._xscale = speed * 9;
// 	this._yscale = speed * 9;
// }

let snow = [];
let drift;
let speed = 0.2;
let max = 200;

let countIndex = 0;
let countArr = [200, 150, 100, 50, 10, 50, 100, 150, 200];

let countEle = document.querySelector(".count");
let snowEle = document.querySelector(".snow");

async function create() {
	for (let i = 0; i < countArr[countIndex]; i++) {
		let div = document.createElement("div");
		div.classList.add("pollen");

		let scale = Math.random() * 10 + 10;
		div.style.width = scale + "px";
		div.style.height = scale + "px";

		div.style.top = Math.random() * window.innerHeight + "px";
		div.style.left = Math.random() * window.innerWidth + "px";

		div.style.filter = `blur(${scale}px);`;

		document.body.appendChild(div);
		snow.push(div);
	}
}

function getDrift() {
	let drift = Math.random() * 7; // max
	if (Math.random() > 0.5) drift *= -1; // flip
	if (Math.random() < 0.5) drift = 0;
	return drift;
}

function move() {
	for (let i = 0; i < snow.length; i++) {
		// debug
		if (!snow[i]) continue;
		snowEle.innerHTML = snow.length;
		countEle.innerHTML = countArr[countIndex];

		// status
		let visible = i < countArr[countIndex];

		// move
		let top = parseInt(snow[i].offsetTop);
		let left = parseInt(snow[i].offsetLeft);
		let scale = parseInt(snow[i].style.width);

		// when it reaches the bottom of the window
		if (top > window.innerHeight + scale) {
			// move to top
			top = -scale;
		}

		if (!visible) {
			// snow[i].remove();
			// if (i > -1) snow.splice(i, 1);
			snow[i].style.backgroundColor = "red";
		} else {
			snow[i].style.backgroundColor = "#ece004";
		}

        snow[i].style.top = top + scale * speed + "px";
        // snow[i].style.transform = `translate3d(0px, ${top + scale * speed}px, 0px)`;
		snow[i].style.left = left + "px";
	}
	// recursive call to move function
	requestAnimationFrame(move);
}

(async () => {
	await create();
	// start animation
	requestAnimationFrame(move);
})();

function updateCount() {
	countIndex++;
	if (countIndex >= countArr.length) countIndex = 0;
}

setInterval(function () {
	updateCount();
}, 4000);


// to do
// switch to https://github.com/IceCreamYou/MainLoop.js
// http://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing