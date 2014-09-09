$(".sections").click(function(){
  $(this).siblings().removeClass("on");
  $(this).toggleClass("on");
});
