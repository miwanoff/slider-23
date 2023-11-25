let arrSrc = [
  "images/landscape-photography-tips-yosemite-valley-feature.webp",
  "images/lanscape.jfif",
  "images/UK_advice-gardening-growing-poppies_header.jpg",
]; // масив шляхів до картинок

let i = 0;
const slider = document.getElementById("slider");
const nextButton = document.getElementById("next");

nextButton.addEventListener("click", next);

function next() {
  i++;
  if (i >= arrSrc.length) {
    i = 0;
  }
  slider.src = arrSrc[i];
}
