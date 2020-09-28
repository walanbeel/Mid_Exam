
/**change css file**/
function styler(attr){
    var href;
    if(attr=="a")
       href ="css/style.css";
        
    else
       href="css/styleENG.css";

    document.getElementById('myStyleSheet').href=href;
}

/**Frist Slider**/
//$(document).ready(function(){
//$(".slider-one").not(".slick-intialized").slick({
   // autoplay:true,
   // autoplaySpeed:3000,
   // dots:true,
   // prevArrow:".site-slider.slider-btn .prev",
    //nextArrow:".site-slider.slider-btn .next",
//});


/**Scond Slider**/

/*$(".site-slider-two").not(".slick-intialized").slick({
    
    prevArrow:".site-slider-two .prev",
    nextArrow:".site-slider-two .next",
    slidesToShow:5,
    slidesToScroll:1,
    autoplaySpeed:3000
});*/


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
      


        //test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
var langArray = [];
$('.vodiapicker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></li>';
  langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'Yemen');

//change button stuff on click
$('#a li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".b").toggle();
  //console.log(value);
});

$(".btn-select").click(function(){
        $(".b").toggle();
    });

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  console.log(langIndex);
  $('.btn-select').html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}




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
    

