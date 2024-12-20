let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let slider = document.getElementsByClassName("slider")[0];
let slide = document.getElementsByClassName("slide");

let currentIndex = 0;

function updateSlider(){
    slider.style.transform = `translateX(-${currentIndex * 100}%)`
}

nextBtn.addEventListener('click' , ()=>{
    if(slide.length-1 == currentIndex){
        currentIndex = 0;
        updateSlider()
    }
    else{
        currentIndex++ ;
        updateSlider()
    }
})

prevBtn.addEventListener('click' , ()=>{
    currentIndex-- ;

    if(currentIndex < 0){
        currentIndex = slide.length -1 ;
        updateSlider
    }
    updateSlider()
})
updateSlider()