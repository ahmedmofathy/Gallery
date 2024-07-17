var item = Array.from(document.querySelectorAll(".item"));
var lightBox = document.querySelector(".light-box");
var light = document.querySelector(".light");
var close = document.querySelector(".x");
var right = document.querySelector(".next");
var left = document.querySelector(".prev");
var showMore = document.querySelector(".show-more");
var moreDiv = document.querySelector(".more");
var moreImg = document.querySelector("#more");
var currentItem;
for (var i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function (e) {
    var src = e.target.getAttribute("src");
    currentItem = item.indexOf(e.target);
    lightBox.style.backgroundImage = `url(${src})`;
    light.classList.replace("d-none", "d-flex");
  });
}

function next() {
  if (currentItem == item.length - 1) {
    currentItem = -1;
  }
  currentItem++;
  var src = item[currentItem].getAttribute("src");
  lightBox.style.backgroundImage = `url(${src})`;
}
function prev() {
  if (currentItem == 0) {
    currentItem = item.length;
  }
  currentItem--;
  var src = item[currentItem].getAttribute("src");
  lightBox.style.backgroundImage = `url(${src})`;
}
function x() {
  light.classList.replace("d-flex", "d-none");
}
right.addEventListener("click", next);
left.addEventListener("click", prev);
close.addEventListener("click", x);
light.addEventListener("click", function () {
  x();
});
lightBox.addEventListener("click", function (e) {
  e.stopImmediatePropagation();
});
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    next();
  }
  if (e.key == "ArrowLeft") {
    prev();
  }
  if (e.key == "Escape") {
    x();
  }
});
showMore.addEventListener("click", function () {
  moreImg.classList.remove("d-none");
  moreDiv.classList.remove("d-none");
  showMore.classList.replace("d-flex", "d-none");
});
