const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
const chosimg = images[Math.floor(Math.random()*images.length)];

const bgimg = `url(img/${chosimg})`;
document.body.classList.add("background");
document.body.style.backgroundImage= bgimg;
