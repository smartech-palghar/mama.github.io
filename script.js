const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h4");
const description = document.querySelector(".caption p");

// Data(images, Heading, descrption) for slider

console.log(arrLeft, arrRight);
const images = [
  "./Photo/MainCarousel/bg1.jpg",
  "./Photo/MainCarousel/bg2.jpg",
  "./Photo/MainCarousel/bg3.jpg",
  "./Photo/MainCarousel/bg4.jpg",
  "./Photo/MainCarousel/bg5.jpg",
  "./Photo/MainCarousel/bg6.jpg",
  "./Photo/MainCarousel/bg1.jpg",
  "./Photo/MainCarousel/bg2.jpg",
  "./Photo/MainCarousel/bg3.jpg",
  "./Photo/MainCarousel/bg4.jpg",
  "./Photo/MainCarousel/bg5.jpg",
  "./Photo/MainCarousel/bg6.jpg",
];
console.log(images[2]);
const headings = [
  "Cottages",
  "Lush Green Lawns",
  "Playground for Kids",
  "Swimming Pool",
  "Dinning Area",
  "Captivating Surroundings",
  "Cottages",
  "Lush Green Lawns",
  "Playground for Kids",
  "Swimming Pool",
  "Dinning Area",
  "Captivating Surroundings",
];
const descriptions = [
  "The best resort in the area with spacious and comfortable cottages",
  "Greenery around the resort gives you cool vibes",
  "Playground for various activities where kids can enjoy all day",
  "Enjoy swimming with your loved ones",
  "Spacious dinning area covered with plants and trees ",
  "Beautiful surrounding views",
  "The best resort in the area with spacious and comfortable cottages",
  "Greenery around the resort gives you cool vibes",
  "Playground for various activities where kids can enjoy all day",
  "Enjoy swimming with your loved ones",
  "Spacious dinning area covered with plants and trees ",
  "Beautiful surrounding views",
];
//starting index=0
let id = 0;
// Slider function

function slide(id) {
  //set backgnd img
  slider.style.backgroundImage = `url(./${images[id]})`;
  //add imagefade animation
  slider.classList.add("image-fade");
  //remove animation when its done so it can be used again {
  setTimeout(() => {
    slider.classList.remove("image-fade");
  }, 500);
  //change heading

  heading.innerText = headings[id];
  //change description
  description.innerText = descriptions[id];
}

// adding event listener to arrows
const prevCarousel = arrLeft.addEventListener("click", () => {
  id--;
  //check if id is msaller thanthe number of avvailable slides
  console.log("works");
  if (id < 0) {
    id = images.length - 1;
  }
  //run the slide function
  slide(id);
});

// add click to right arrow
const nextCarousel = arrRight.addEventListener("click", () => {
  id++;
  //checkif id is greater than number of  available slides
  if (id > images.length - 1) {
    id = 0;
  }
  //run slide fn
  slide(id);
});
// console.log(nextCarousel);

(loop = () => {
  slider.style.backgroundImage = `url(./${images[id]})`;

  heading.innerText = headings[id];
  //change description
  description.innerText = descriptions[id];
  if (++id < images.length) {
    setTimeout(loop, 3000);
  }
})();

//**************************** */ container 7  click eents ****************************************

const imgSection = document.querySelector(".container7-imgSection");
const swimming = document.querySelector(".container7-tab1");
const raindance = document.querySelector(".container7-tab2");
const playground = document.querySelector(".container7-tab3");

const con7Images = [
  "./Photo/Container7/swimming.jpg",
  "./Photo/Container7/raindance.jpg",
  "./Photo/Container7/playground.jpg",
];

const swimHead = document.querySelector(".swimm-heading");
const rainHead = document.querySelector(".rain-heading");
const playHead = document.querySelector(".play-heading");
const swimtext = document.querySelector(".swimm-text");
const raintext = document.querySelector(".rain-text");
const playtext = document.querySelector(".play-text");

swimming.classList.add("active");
swimHead.style.color = "#ffffff";
swimtext.style.color = "#fff";
swimming.addEventListener("click", () => {
  console.log("clicked");
  imgSection.style.backgroundImage = `url(./${con7Images[0]})`;

  swimming.classList.add("active");

  playground.classList.remove("active");
  raindance.classList.remove("active");
  rainHead.style.color = "#000000";
  swimHead.style.color = "#fff";
  playHead.style.color = "#000000";
  swimtext.style.color = "#fff";
  raintext.style.color = "#000000";
  playtext.style.color = "#000000";
});

raindance.addEventListener("click", () => {
  console.log("clicked");
  imgSection.style.backgroundImage = `url(./${con7Images[1]})`;
  swimming.classList.remove("active");
  playground.classList.remove("active");
  raindance.classList.add("active");
  swimHead.style.color = "#000000";
  rainHead.style.color = "#fff";
  playHead.style.color = "#000000";
  swimtext.style.color = "#000000";
  raintext.style.color = "#fff";
  playtext.style.color = "#000000";
});
playground.addEventListener("click", () => {
  imgSection.style.backgroundImage = `url(./${con7Images[2]})`;
  swimming.classList.remove("active");
  playground.classList.add("active");
  raindance.classList.remove("active");
  swimHead.style.color = "#000000";
  rainHead.style.color = "#000000";
  playHead.style.color = "#fff";
  swimtext.style.color = "#000000";
  raintext.style.color = "#000000";
  playtext.style.color = "#fff";
});
