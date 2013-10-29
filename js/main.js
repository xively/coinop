(function($, window){

  xively.setKey('hhxC0a74hsDp5dVnVA127oTYV81jedhJsB5axKqvsIWTrUdx');

  // Replace with your own values  
  var feedID        = 1574193013,     // Feed ID  
      selector      = "#total-coins";   // Your element on the page  

  var traverse = function (value) {
    return value * .25;
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
