$(document).ready(function(){
  $("button").click(function(){
     $("h1").toggle(100);
   /* alert("alert grishma");*/
     $("div").animate({left:"100px"},"slow");
    $("div").animate({fontSize:"3em"},"slow");
    $("p").addClass(function(n)
        {
         return 'test_' + n;
        });
      });
      $("button").click(function(){
        $("p").show(100);
     });
  });
