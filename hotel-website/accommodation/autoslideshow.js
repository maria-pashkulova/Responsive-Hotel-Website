function setSlider(element, sliderArray,delay) {
    var arrIndex = 0;
    setInterval(function () {
        element.src = sliderArray[arrIndex];
         if(arrIndex < sliderArray.length - 1){
         arrIndex++;
        } else { 
            
           arrIndex= 0;
        }
    }, delay)
}

setSlider(document.getElementById('slide1'),
    [
       "dr/dr1.jpg",
        "dr/dr2.jpg",
        "dr/dr3.jpg",
        "dr/dr5.jpg"
    ],2800);

setSlider(document.getElementById('slide2'),
    [
        "studio/s1.jpg",
        "studio/s2.jpg",
        "studio/s3.jpg",
        "studio/s4.jpg",
        "studio/s5.jpg",
        "studio/s6.jpg",
         "studio/s7.jpg",
        "studio/s8.jpg"
    ],2800);
setSlider(document.getElementById('slide3'),
    [
        "apartment/a1.jpg",
        "apartment/a2.jpg",
        "apartment/a3.jpg",
        "apartment/a4.jpg",
        "apartment/a5.jpg",
        "apartment/a6.jpg",
        "apartment/a7.jpg",
        "apartment/a8.jpg"
    ],2800);