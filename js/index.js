/*const GALLERY_WIDTH = 600;
const IMAGE_SIZE = 300;
const IMAGES_DISTANCE = IMAGE_SIZE + (0.1 * GALLERY_WIDTH);
const LEFT_START = (GALLERY_WIDTH - IMAGE_SIZE) / 2;
let currentImage = 0;

const getCSSValue = (element, prop) => parseFloat(element.style[prop].replace("px", "").replace("%", ""));

const images = document.getElementsByClassName("gallery__container__image");
for(let i = 0; i < images.length; i++) {
    images[i].style.left = (LEFT_START + (i * IMAGES_DISTANCE)) + "px";

    const img = images[i].getElementsByTagName("img")[0];
    images[i].style.top = (i * - IMAGE_SIZE) + "px";

    if(i === currentImage) {
        img.style.width = "100%";
    }
    else {
        img.style.width = "80%";
    }
}

const calculateAnimationStep = (T, t, D, m) => {
    hValues = [];
    let r = 0;
    for(let i = 0; i <= (T/ t); i++) {
        hValues.push(Math.PI / (T / t) * i);
        r += Math.sin(hValues[i]);
    }
    return D / r;
};



const moveGallery = direction => {
    const multiplier = direction === "left" ? 1 : -1;
    if(currentImage - multiplier >= images.length || currentImage - multiplier < 0) {
        return;
    }
    const stepTime = 10;
    const animationTime = 400;
    const increase = Math.PI / (animationTime / stepTime);
    const step = calculateAnimationStep(animationTime, stepTime, IMAGES_DISTANCE, multiplier);
    previousCurrentImage = currentImage;
    currentImage -= multiplier;

    let x = 0;
    let counter = 0;
    let y = 0;
    
    const interval = setInterval(() => {
        y++;
        x = Math.sin(counter);
        counter += increase;
        for(let i = 0; i < images.length; i++) {
            images[i].style.left = (getCSSValue(images[i], "left") + multiplier * x * step) + "px";
            const img = images[i].getElementsByTagName("img")[0];

            if(currentImage === i) {
                img.style.width = (80 + y * (20 / (animationTime / stepTime))) + "%";
            }
            if(previousCurrentImage === i) {
                img.style.width = (100 - y * (20 / (animationTime / stepTime))) + "%";
            }
        }
    }, stepTime);
    setTimeout(() => {
        clearInterval(interval);
        for(let i = 0; i < images.length; i++) {
            const img = images[i].getElementsByTagName("img")[0];
            images[i].style.left = Math.round(getCSSValue(images[i], "left")) + "px";
            if(i === currentImage) {
                //images[i].style.top = (i * - 240) + "px";
                img.style.width = "100%";
            }
            else {
                images[i].style.top = ((i * - IMAGE_SIZE)) + "px";
                img.style.width = "80%";

            }
        }
    }, animationTime);
};



const buttons = document.getElementsByClassName("gallery__control");
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => moveGallery(buttons[i].dataset.side));
}*/

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 80,
    centeredSlides: true,
    freeMode: true,
    freeModeSticky: true,
    speed: 400,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },

    // If we need pagination

  
    // Navigation arrows
 
  
  });