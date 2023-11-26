let arrSrc = [
  "images/landscape-photography-tips-yosemite-valley-feature.webp",
  "images/lanscape.jfif",
  "images/UK_advice-gardening-growing-poppies_header.jpg",
]; // масив шляхів до картинок

let i = 0;
const slider = document.getElementById("slider");
const nextButton = document.getElementById("next");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const miniatures = document.getElementsByClassName("mini");

let timer;

function next() {
  i++;
  if (i >= arrSrc.length) {
    i = 0;
  }
  slider.src = arrSrc[i];
}

nextButton.addEventListener("click", next);

startButton.addEventListener("click", start);

function start() {
  stop();
  timer = setInterval(function () {
    next();
  }, 3000);
}

stopButton.addEventListener("click", stop);

function stop() {
  clearInterval(timer);
}

for (let i = 0; i < miniatures.length; i++) {
  miniatures[i].addEventListener("click", showSlide);
}

function showSlide(event) {
  let imageMini = event.target;
  // replace src
}
