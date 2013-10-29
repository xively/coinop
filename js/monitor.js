(function($, window){

  xively.setKey('hhxC0a74hsDp5dVnVA127oTYV81jedhJsB5axKqvsIWTrUdx');

  // Replace with your own values  
  var feedID        = 1574193013;

  var seriesData = [ 
    {
      data: [ { x: 1368784604, y: 512 }, { x: 1368871004, y: 891 }, { x: 1368957404, y: 456 }, { x: 1369043804, y: 478 }, { x: 1369130204, y: 540 }, { x: 1369216604, y: 0 } ],
      color: '#4682b4',
      name: 'Walked Past'
    }, {
      data: [ { x: 1368784604, y: 90 }, { x: 1368871004, y: 176 }, { x: 1368957404, y: 77 }, { x: 1369043804, y: 82 }, { x: 1369130204, y: 87 }, { x: 1369216604, y: 0 } ],
      color: '#9cc1e0',
      name: 'Stood at'
    } ];

  
  var graph = new Rickshaw.Graph( {
    element: document.querySelector("#chart"),
    width: 600,
    height: 150,
    renderer: 'line',
    series: seriesData
    } );

  var hoverDetail = new Rickshaw.Graph.HoverDetail( {
    graph: graph
  } );

  var legend = new Rickshaw.Graph.Legend( {
    graph: graph,
    element: document.getElementById('legend')
  } );

  var xAxis = new Rickshaw.Graph.Axis.Time({
      graph: graph
  });

  var xAxis = new Rickshaw.Graph.Axis.Time({
      graph: graph
  });

  var yAxis = new Rickshaw.Graph.Axis.Y( {
    graph: graph,
    tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
    ticksTreatment: "glow"
  } );

  graph.renderer.unstack = true;
  graph.render();


  var curW = 0;
  var curS = 0;
  var timer;
  var timeWindow = false;


  $("#stood").html(curS);
  $("#walked-past").html(curW);
  
  // Get datastream data from Xively
  xively.datastream.subscribe(feedID, "user_present", function ( event, datastream ) {
    var cur = JSON.parse(datastream["current_value"]);

    if ( cur && !timeWindow) {
      timeWindow = true;
      timer = setTimeout(function(){
        timeWindow = false;
        curS++;
        $("#stood").html(curS);
        seriesData[1].data[5].y = curS;
        graph.update();
      },5000);
    }
    else {
      if (timeWindow) {
        timeWindow = false;
        curW++;
        $("#walked-past").html(curW);
        seriesData[0].data[5].y = curW;
        graph.update();
      }

      clearTimeout(timer);
    }
  });


})(jQuery, window, undefined);
