
function cycleImages(){
 var $active = $('#backpiccontainer .backpic1');
 var $next = ($active.next().length > 0) ? $active.next() : $('#backpiccontainer img:first');
 
     
     $next.css('z-index',2);//move the next image up the pile
 $active.fadeOut(3000,function(){//fade out the top image
 $active.css('z-index',1).show().removeClass('backpic1');//reset the z-index and unhide the image
 $next.css('z-index',3).addClass('backpic1');//make the next image the top one
 });
 }
 
 $(window).on("load", function() {
 // run every 7s
                   $('#backpiccontainer').hide().delay(500);
                   $('#backpiccontainer').fadeIn(3500);
 setInterval('cycleImages()', 5000).delay(6000);
                   });
