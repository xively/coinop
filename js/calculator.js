(function($, window){

  xively.setKey('fqC5dtaOFBByR1yQgtu3fdrUqWkiCmzHWDIogAwh56AwipDZ');

  // Replace with your own values  
  var feedID        = 767865973,     // Feed ID  
  
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
