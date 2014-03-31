(function($, window){

  xively.setKey('fqC5dtaOFBByR1yQgtu3fdrUqWkiCmzHWDIogAwh56AwipDZ');

  // Replace with your own values  
  var feedID        = 767865973,     // Feed ID  
      selector      = "#total-coins";   // Your element on the page  

  var traverse = function (value) {
    return (value * .25).toFixed(2);
  };

  var formatTime = function (value) {
    return "last updated at "+ moment(value).format('h:mm:ss a');
  };
  
  // Get datastream data from Xively
  xively.datastream.get (feedID, "total_coins", function ( datastream ) {  
    $(selector).html( traverse(datastream["current_value"]) );
    $("#coin-timestamp").html(formatTime(datastream.at));
  
    xively.datastream.subscribe( feedID, "total_coins", function ( event , datastream_updated ) {  
      $(selector).html( traverse(datastream_updated["current_value"]) );  
      $("#coin-timestamp").html(formatTime(datastream_updated.at));
    });  
  });


})(jQuery, window, undefined);
