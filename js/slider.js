var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
    currentIndex= currentIndex+num;
    displaySlides(currentIndex);
}
displaySlides(currentIndex);

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("reviews-carousel__item");
    if (num > slides.length) { currentIndex = 1}
    if (num <= 0) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}