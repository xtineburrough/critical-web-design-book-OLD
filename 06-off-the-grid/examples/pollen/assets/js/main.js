// import flash.filters.BlurFilter;

// The Class SnowFlake is gratefully borrowed from
// http://pixelfumes.blogspot.com/2006/11/actionscript-2-version-of-snow-storm.html

var speedMultiplier = 5;
var speedVariMultiplier = 4;
var viewWidth = 1000;
var viewHeight = 560;

var speedVariation;
// var drift;
var str;
var flakeCount;

function SnowFlake() {
	speed = Math.random() * speedMultiplier;
	speedVariation = Math.random() * speedVariMultiplier + 1;
	setSpeed(speed);
	readyFlake();
	moveMe();
}

function setSpeed(n) {
	this.speed = n * speedVariation + 1;
}

function readyFlake() {
	getDrift();

	this._y = Math.random() * viewHeight * -1;
	this._x = Math.random() * viewWidth;

	// Change the amount by setting them to invisible

	//trace(_parent.flakeCount);

	//trace(this); //_level0.flake_210.flake

	//str = getProperty(this, _name)

	//str = str.slice(14, 16)
	//trace(str);

	if (_parent.flakeCount > _root.newHighestNumber) {
		this._alpha = 0;
		this._visible = false;
	} else {
		this._alpha = 100;
		this._visible = true;
	}

	// var bf: BlurFilter = new BlurFilter(drift * 2, speed / 2, 2);
	// this.filters = [bf];

	if (speed / 2 < speedVariation) {
		this._xscale = this._yscale = 50;
	}
}

function move(ele) {
	this._y += speed;
	this._x += drift;

	if (this._y > viewHeight || this._x < 0 || this._x > viewWidth) {
		readyFlake();
	}
	this._xscale = speed * 9;
	this._yscale = speed * 9;
}

let snow = [];

function createFlakes() {
	for (let i = 0; i < 200; i++) {
		let div = document.createElement("div");
		div.classList.add("pollen");

		div.dataset.scale = Math.random() * 10 + 10;
		div.style.width = div.dataset.scale + "px";
		div.style.height = div.dataset.scale + "px";

		div.style.top = Math.random() * window.innerHeight + "px";
		div.style.left = Math.random() * window.innerWidth + "px";

		document.body.appendChild(div);
		snow.push(div);
	}
}
createFlakes();

function moveFlakes() {
	for (let i = 0; i < 200; i++) {
		let top = parseInt(snow[i].offsetTop);
		let left = parseInt(snow[i].offsetLeft);

		let scale = parseInt(snow[i].dataset.scale);
		if (top > window.innerHeight + 10) {
			top = -10;
		}

		// console.log(top);

		snow[i].style.top = top + scale * speed + "px";
		snow[i].style.left = left + "px";
	}
	// console.log(snow);
}

function getDrift() {
	let drift = Math.random() * 7; // max
	if (Math.random() > 0.5) drift *= -1; // flip
	if (Math.random() < 0.5) drift = 0;
	return drift;
}

let drift;
let speed = 1

setInterval(function () {
    moveFlakes();
}, 50);
