var slides = [];

slides.push({
  img: "https://www.wethetalent.co/wp-content/uploads/2017/08/1400_700-QSfR8wHNRjrYs5hfY6QKKLviQvrlXldmrtC85OoJslZcPOzXcTtVSTLZ5cW5QQZI.jpg",
  headerText: "BUILD. LEARN. WIN.",
  lowerHTML: "if($('#you') == 'code-lover') <br> print('Come hack with us!');",
});
slides.push({
  img: "https://www.veracode.com/sites/default/files/shutterstock_601201364%20%281%29.jpg",
  headerText: "JOIN US!",
  lowerHTML: "The JBoss Community<br><br><a href='https://codein.withgoogle.com/archive/2017/organization/5717119551406080/'><button class='buttonStyle buttonRed'>Check us out!</button></a>",
});
slides.push({
  img: "https://www.veracode.com/sites/default/files/shutterstock_133524401.jpg",
  headerText: "INTRIGUING BLOGS",
  lowerHTML: "Read our thought-provoking stories<br><br><a href='https://blog.jboss-outreach.org/'><button class='buttonStyle buttonRed'>Read</button></a>",
});


// add 'dots' of slideshow
var dots = "";
for(var i=0; i<slides.length; i++){
  dots += "<span class='dot' onclick='showSlides("+i+")'></span>";
}
$("#dots-wrapper").html(dots);


var slideShowEngine;
var slideIndex = 0;



function carousel() {
  window.clearTimeout(slideShowEngine);
  showSlides(slideIndex);
  slideIndex+=1;
  if(slideIndex === slides.length){
    slideIndex = 0;
  }
  slideShowEngine = setTimeout(carousel, 5000);
}
carousel();


function plusSlides(n) {
  slideIndex+=n;
  if(slideIndex<0){
    slideIndex = slides.length-1;
  }
  if(n<0 && slideIndex===slides.length-1){
    slideIndex = slides.length-2;
  }
  carousel();
}

function showSlides(n) {
  if(n<0 || n>slides.length){
    slideIndex = 0;
    return;
  }
  // Replace data
  $("#slideImage").attr("src", slides[n].img);
  $("#slideTitle").text(slides[n].headerText);
  $("#slideLower").html(slides[n].lowerHTML);

  // Change current slide's dots class to active
  $(".dot").each(function(i, obj){
    if(i === n){
      $(obj).addClass("active");
    }else{
      $(obj).removeClass("active");
    }
  });
}
