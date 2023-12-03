

let images = ["1.jpeg", "2.jpeg", "3.jpeg"];

let slider = document.getElementById("slider");
let slides = slider.getElementsByTagName("img");

let index = 0;
let length = images.length;

function changeSlide() {
    slides[index].classList.remove("active");

    index++;
    if (index == length) {
        index = 0;
    }
    slides[index].classList.add("active");
}
setInterval(changeSlide, 6000);


