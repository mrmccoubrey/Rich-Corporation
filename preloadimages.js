$(document).ready(function() {

$.fn.preload = function() {
    this.each(function(){
        $('img')[0].src = this;
    });
}

// Usage:

$(['background12.jpg','background22.jpg','background32.jpg','background42.jpg','background52.jpg','background62.jpg']).preload();
