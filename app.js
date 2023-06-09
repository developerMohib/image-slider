// Images Slider Building

let sliderImages = [ 'img/mohib1.jpg' , 'img/mohib2.jpg' , 'img/mohib3.jpg' ];

let image = document.querySelector('img');

let stayImg = 0 ;

function next(){
    stayImg++ ;
    let length = sliderImages.length;
    if(stayImg >= length){
        stayImg = 0;
        image.src = sliderImages[stayImg];
    }
    else{
        image.src = sliderImages[stayImg];
    }
}


function previous(){
    stayImg-- ; 
    if(stayImg < 0){
        let length = sliderImages.length;
        stayImg = length -1 ;
        image.src = sliderImages[stayImg]  ;
    }
    else{
        image.src = sliderImages[stayImg];
    }
}