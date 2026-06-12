const con3Carousel = document.querySelector(".con3-carousel");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h4");

const images = [
  "./Photo/Contactus/normal-array/tarrif/tariff-2.jpg",
  "./Photo/Contactus/normal-array/tarrif/tariff-3.jpg",
  "./Photo/Contactus/normal-array/tarrif/tariff-7.jpg",
  "./Photo/Contactus/normal-array/tarrif/tariff-4.jpg",
  "./Photo/Contactus/normal-array/tarrif/tariff-5.jpg",
  "./Photo/Contactus/normal-array/tarrif/tariff-6.jpg",
  "./Photo/MainCarousel/bg1.jpg",
  "./Photo/MainCarousel/bg2.jpg",
  "./Photo/MainCarousel/bg3.jpg",
  "./Photo/MainCarousel/bg4.jpg",
  "./Photo/MainCarousel/bg5.jpg",
  "./Photo/MainCarousel/bg6.jpg",
];

let id = 0;

function slide(id) {
  //set backgnd img
  con3Carousel.style.backgroundImage = `url(./${images[id]})`;
  //add imagefade animation
  con3Carousel.classList.add("image-fade");
  //remove animation when its done so it can be used again {
  setTimeout(() => {
    con3Carousel.classList.remove("image-fade");
  }, 300);
  //change heading

  heading.innerText = headings[id];
  //change description
  description.innerText = descriptions[id];
}

arrLeft.addEventListener("click", () => {
  id--;
  //check if id is msaller thanthe number of avvailable slides
  if (id < 0) {
    id = images.length - 1;
  }
  //run the slide function
  slide(id);
});

// add click to right arrow
arrRight.addEventListener("click", () => {
  id++;
  //checkif id is greater than number of  available slides
  if (id > images.length - 1) {
    id = 0;
  }
  //run slide fn
  slide(id);
});

//.  card flipping container4

const card = document.querySelector(".con4-card");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

card.addEventListener("click", () => {
  console.log("works");
  card.classList.toggle("flip-card1");
});

card2.addEventListener("click", () => {
  console.log("works");
  card2.classList.toggle("flip-card2");
});

card3.addEventListener("click", () => {
  console.log("works");
  card3.classList.toggle("flip-card3");
});

//. loop
(loop = () => {
  con3Carousel.style.backgroundImage = `url(./${images[id]})`;
  if (++id < images.length) {
    setTimeout(loop, 3000);
  }
})();
