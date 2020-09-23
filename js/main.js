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
                var optionArray = "<option value='Sana'>Sana'a</option><option value='Taiz'>Taiz</option><option value='Abb'>Abb</option>";
                s2.innerHTML=optionArray;
                
            } else if(s1.value == " Egypt"){
                var optionArray2 ="<option value='Cairo'>Cairo</option><option value='Alexandria'>Alexandria</option><option value='giza'>giza</option>" ;
                s2.innerHTML=optionArray2;
            } 
           
        }
      /*  var drop = document.getElementById("slct2");
            var divimg = document.getElementById("div-img");
        
              
        function swapImage(){	
            if(drop.value=="Sana"){
                divimg.innerHTML = sanaaImg;
            }
            else if(drop.value=="Taiz"){
                divimg.innerHTML = taizImg;
            }
            else if(drop.value=="Abb"){
                divimg.innerHTML = ibbImg;
            }
            else if(drop.value=="Cairo"){
                divimg.innerHTML = cairoImg;
            }
            else if(drop.value=="Alexandria"){
                divimg.innerHTML = alexImg;
                }
            else if(drop.value=="giza"){
                divimg.innerHTML = giazImg;
            }
    
        }*/

