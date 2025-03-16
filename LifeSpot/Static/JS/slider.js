
//Ïîëó÷àåì ýëåìåíòû ñëàéäåðà
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

//Óñòàíàâëèâàåì îáðàáîò÷èêè ñîáûòèé äëÿ êíîïîê
prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
});


//Äëÿ îáíîâëåíèÿ îòîáðàæåíèÿ ñëàéäåðà
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

//Èíèöèàëèçàöèÿ ñëàéäåðà
updateSlider();