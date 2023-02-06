let path =
  "https://omundy.github.io/sample-node-express-cat-api/public/assets/img/cat-";

/**
 *  Return the full path to a random cat image
 */
let i = 0;
function getRandomCat() {
  if (++i > 100) i = 0;
  return path + String(i).padStart(2, "0") + ".jpg";
}
/**
 *  Compare two strings and return opposite one
 */
function compareImgStr(current, img1, img2){
  if (current == `${path}${img1}.jpg`) return `${path}${img2}.jpg`
  else return `${path}${img1}.jpg`
}

// 2
document.getElementById("ele2").addEventListener("click", function () {
  this.src = compareImgStr(this.src, "01", "02");
});

// 3
let ele3 = document.querySelector("#ele3");
ele3.addEventListener("click", function () {
  this.src = compareImgStr(this.src, "03", "04");
});

// 4
let ele4 = document.querySelector("#ele4");
ele4.addEventListener("mouseover", function () {
  this.src = `${path}06.jpg`
});
ele4.addEventListener("mouseout", function () {
  this.src = `${path}05.jpg`
});

// 5
let ele5 = document.querySelector("#ele5");
ele5.addEventListener("mouseover", function () {
  this.style.backgroundImage = `url(${path}08.jpg)`
});
ele5.addEventListener("mouseout", function () {
  this.style.backgroundImage = `url(${path}07.jpg)`
});



// 6

$(".swapImgSimple").click(function () {
  $(this).attr("src", getRandomCat());
});

// 2 - Adds listener using $(document) selector so will work on content added dynamically
$(document).on("click", ".swapImgDom", function () {
  $(this).attr("src", getRandomCat());
});

// 3
$(document).on("click", ".swapImgBtn1", () => {
  $(".swapImgBtn").attr("src", getRandomCat());
});
$(document).on("click", ".swapImgBtn2", function () {
  $(".swapImgBtn").attr("src", getRandomCat());
});

// 4 - hover
$(document)
  .on("mouseover", ".swapImgMouseover", function () {
    $(this).attr("src", getRandomCat());
  })
  .on("mouseout", ".swapImgMouseover", function () {
    $(this).attr("src", getRandomCat());
  });

// 5
$(".changeImgSrc").click(function () {
  $(this).attr("src", getRandomCat());
});

// 6
$(".changeImgSrcInDiv").click(function () {
  $(".changeImgSrcInDiv img").attr("src", getRandomCat());
});

// 7
$(".changeBgImg").click(function () {
  $(".changeBgImg").css({
    "background-image": `url(${getRandomCat()})`
  });
});

// 8
$(document).on("click", ".changeBgImgBtn", function () {
  $(this).css({
    "background-image": `url(${getRandomCat()})`
  });
});