// welcome massage

$(document).ready(function(){
  $('.slideUp').slideUp(2000)
  $('body').css('overflow-y','scroll')
})



// scroll smathing
$('.nav-link').click(function () { 
  $("html, body").css({
    "scroll-behavior": "auto"
});
  let url=$(this).attr('href');
  let space=$(url).offset().top
  $("html,body").animate({scrollTop:space},2000);

});

// side bar

$('.rightSide').click(function(){
  let boxWidth= $('.leftSide').outerWidth()
  let position= $('.sideBar').offset().left
  console.log(position);
  
  if(position == 0){
      $('.sideBar').css({left:`-${boxWidth}`,transition:'all 1s'})
  }else{
      $('.sideBar').css({left:`0`,transition:'all 1s'})
  }
})
// change P
$('.leftSide ul li').click(function(){
  let colored=  $(this).css('backgroundColor')
  console.log(colored)
  $('p').css({'color':colored,transition:"all 1s"})
  
})
// change background-image
$('.leftSide img').click(function(){
  let sorce=$(this).attr('src')
  $(".home").css({'background-image':`url(${sorce})`,transition:"all 1s"})
})

// up
$('.up').click(function(){
  $("html, body").css({
    "scroll-behavior": "auto"
});
  $('body,html').animate({
      scrollTop:50
  },2000)
})

// change navebar
$(window).scroll(()=>{
  let windowScroll=$(window).scrollTop()
  let sectionTop=$('#blog').offset().top
  
  console.log(sectionTop);
  if (windowScroll>sectionTop) {
    $('.navbar').addClass('bg-danger');
    $('.up').show(1000)
  }else{
    $('.navbar').removeClass('bg-danger');
    $('.up').hide(1000)
  }

})

