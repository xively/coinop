(function($, window){

  xively.setKey('hhxC0a74hsDp5dVnVA127oTYV81jedhJsB5axKqvsIWTrUdx');

  // Replace with your own values  
  var feedID        = 1574193013;     // Feed ID  
  
  // Get datastream data from Xively
  xively.feed.get (feedID, function ( feed ) {  
    $("#location").html( feed.location.name );
  });


  $("#calc-button").on("click", function(e){
    e.preventDefault();
    $(".js-calc-button").hide();
    $(".js-calc-msg").show();
  });

})(jQuery, window, undefined);
