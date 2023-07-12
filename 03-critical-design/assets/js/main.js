



// 2
document.getElementById("ele2").addEventListener("click", function () {
  if (this.src.includes("cat-01")){
    this.src = "assets/img/cat-02.jpg";
  } else {
    this.src = "assets/img/cat-01.jpg";
  }
});

// 3
let ele3 = document.querySelector("#ele3");
ele3.addEventListener("click", function () {
  if (this.src.includes("cat-01")){
    this.src = "assets/img/cat-02.jpg";
  } else {
    this.src = "assets/img/cat-01.jpg";
  }
});

// 4
let ele4 = document.querySelector("#ele4");
ele4.addEventListener("mouseover", function () {
  this.src = "assets/img/cat-02.jpg";
});
ele4.addEventListener("mouseout", function () {
  this.src = "assets/img/cat-01.jpg";
});

// 5
let ele5 = document.querySelector("#ele5");
ele5.addEventListener("mouseover", function () {
  this.style.backgroundImage = "url(assets/img/cat-02.jpg)";
});
ele5.addEventListener("mouseout", function () {
  this.style.backgroundImage = "url(assets/img/cat-01.jpg)";
});


