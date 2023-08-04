// 2
let ele2 = document.querySelector("#ele2");
ele2.addEventListener("mouseover", function () {
	this.style.backgroundImage = "url(assets/img/cat-02.jpg)";
});
ele2.addEventListener("mouseout", function () {
	this.style.backgroundImage = "url(assets/img/cat-01.jpg)";
});

// 3
let ele3 = document.querySelector("#ele3");
ele3.addEventListener("mouseover", function () {
	this.src = "assets/img/cat-02.jpg";
});
ele3.addEventListener("mouseout", function () {
	this.src = "assets/img/cat-01.jpg";
});

// 5
let ele4 = document.querySelector("#ele4");
ele4.addEventListener("mousedown", function () {
	this.style.backgroundImage = "url(assets/img/cat-02.jpg)";
});
ele4.addEventListener("mouseup", function () {
	this.style.backgroundImage = "url(assets/img/cat-01.jpg)";
});

// 5
let ele5 = document.querySelector("#ele5");
ele5.addEventListener("click", function () {
	if (this.src.includes("cat-01")) {
		this.src = "assets/img/cat-02.jpg";
	} else {
		this.src = "assets/img/cat-01.jpg";
	}
});

// 6
document.getElementById("ele6").addEventListener("click", function () {
	if (this.src.includes("cat-01")) {
		this.src = "assets/img/cat-02.jpg";
	} else {
		this.src = "assets/img/cat-01.jpg";
	}
});
