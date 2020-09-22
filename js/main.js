/**Frist Slider**/



$(document).ready(function(){
$(".slider-one").not(".slick-intialized").slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider.slider-btn .prev",
    nextArrow:".site-slider.slider-btn .next",
});


/**Scond Slider**/

$(".site-slider-two").not(".slick-intialized").slick({
    
    prevArrow:".site-slider-two .prev",
    nextArrow:".site-slider-two .next",
    slidesToShow:5,
    slidesToScroll:1,
    autoplaySpeed:3000
});
});

/*$(document).ready(function(){
    $('.slider-one').slick({
        dots:true,
        infinite:true,
        slidesToShow:3,
        slidesToScroll:3,
        variableWidth:true,
        swipeToSlide:true,
        mobileFirst:true,
        swipe:false,
        autoplay:true,
    });
  });*/


 // Material Select Initialization
$(document).ready(function() {
    $('.mdb-select').materialSelect();
    });

    
        $(".regular").slick({
          
          dots:true,
          infinite:true,
          slidesToShow:3,
          slidesToScroll:3,
          variableWidth:true,
          swipeToSlide:true,
          mobileFirst:true,
          swipe:false,
          autoplay:true,
  
  
        });
      


    function populate(s1,s2){
        var s1 = document.getElementById(s1);
        var s2 = document.getElementById(s2);
        s2.innerHTML = "";
        if(s1.value == "Yemen"){
            var optionArray = ["|","sana'a|Sana'a","taiz|Taiz","abb|Abb"];
        } else if(s1.value == " Egypt"){
            var optionArray = ["|","cairo|Cairo","alexandria|Alexandria","giza|Giza"];
        } 
        for(var option in optionArray){
            var pair = optionArray[option].split("|");
            var newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            s2.options.add(newOption);
        }
    }

