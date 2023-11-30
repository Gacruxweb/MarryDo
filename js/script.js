

//list of images
let images = ["img1.jpeg", "img2.jpeg", "img3.jpeg"];

//calling slider id and tag
let slider = document.getElementById("slider");
let slides = slider.getElementsById("img");


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
setInterval(changeSlide, 3000);





