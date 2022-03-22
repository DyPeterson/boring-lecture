$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
    $("button#dark").addClass("hidden");
    $("button#light").removeClass("hidden");
  })
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
    $("button#light").addClass("hidden");
    $("button#dark").removeClass("hidden");
  })
  $("p").click(function(){
    // $(this).removeClass();
    // $(this).toggleClass("p");
    $(this).toggleClass("highlight");
  });
});




// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $("#walrus-showing").toggle();
//     $("#walrus-hidden").toggle();
//   });
// });