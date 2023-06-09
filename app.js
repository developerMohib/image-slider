// Images Slider Building

let sliderImages = [ 'img/mohib1.jpg' , 'img/mohib2.jpg' , 'img/mohib3.jpg' ];

let image = document.querySelector('img');

let stayImg = 1 ;

function next(){
    // image 1 e bose takbe but click kelei to barbe

    stayImg++ ;
    let length = sliderImages.length;
    if(stayImg >= length){
        // click kaia baira gele abar 0 index a aisa bosbe 
        stayImg = 0;
        image.src = sliderImages[stayImg];
    }
    else{
        image.src = sliderImages[stayImg];
    }
}


function previous(){
    // akane clk kelei to kombe 
    stayImg-- ; 
    let length = sliderImages.length;
    if(stayImg < 0){
        /* click kaia kome 0 index er nice aia gele koi jabe . tkn abar length teke 1 kom a jabe */
        stayImg = length -1 ;
        image.src = sliderImages[stayImg]  ;
    }
    else{
        image.src = sliderImages[stayImg];
    }
}