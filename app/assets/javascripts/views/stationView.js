
function StationView(station) {
  this.model = station;
  this.el = undefined;
}

//GO GET THIS.MODEL. ALL THE DATA TO SHOW - SHOW IT IN THE RIGHT PLACE FROM/TO
StationView.prototype.render = function() {
  
    // newDiv = $("<div class='selected'>").html("<ul class='station-info'>");  

    function makeSpan(idee, infor){
      var newSpan = $("<span>").attr('id', idee ).html(infor);
    }

    //   newDiv.append("<li class='station-detail'>").html(li);
    // }

    // addLi(this.model.current.label);


    this.el = newSpan; 

}
function makeSpan(idee, infor){
      var newSpan = $("<span>").attr('id', idee ).html(infor);
      return newSpan[0];
    }
    
function populateFromEl() {
  var label = $(".from_head .label");
  var avail = $(".pickup .available");
  var avgs = $(".pickup .forecasts");
  var a_label = $(".pickup .a_label");
  var a_avail = $(".pickup .a_available");
  var a_avgs = $(".pickup .a_averages");

  function roundDec(num){
    return Math.round(num * 100) / 100;
  }
  
  var dot = $("<div id = 'dot'>").css({'width':'.5em', 'height':'.5em', 'border-radius':'50%', 'background-color':'green', 'display':'inline-block', 'margin-bottom':'.1em', 'margin-left':'.3em'});
  var aDot = $("<div id = 'dot'>").css({'width':'.5em', 'height':'.5em', 'border-radius':'50%', 'background-color':'yellow', 'display':'inline-block', 'margin-bottom':'.1em', 'margin-left':'.1em'});
  


  label.html(makeSpan('from_station', fromStation.current.label)).append(dot);
  avail.html('').append('Bikes: ').append(makeSpan('from_avail', fromStation.current.availableBikes))
               .append(makeSpan('from_avg', roundDec(fromStation.history[fromStation.currHour].avail_bikes_avg)));
               $('#from_avg').prepend('Avg: ');
  avgs.html("<span id='casts'>Forecasts</span>"+'<br/>');
                  avgs.append((currStation.currHour % 12)+ 1 + ':00 ')
               .append(makeSpan('from_one_hr', roundDec(fromStation.bikeForecast[0])))
               .append((currStation.currHour % 12)+ 2 + ':00 ')
               .append(makeSpan('from_two_hr', roundDec(fromStation.bikeForecast[1])));
  a_label.html('')
         .append('Alternative: ')
         .append(makeSpan('from_alt', fromStation.bestAlternative.current.label)).append(aDot);
  a_avail.html('').append('Bikes: ').append(makeSpan('from_alt_avail', fromStation.bestAlternative.current.availableBikes));
  a_avgs.html("<span id='casts'>Forecasts</span>"+'<br/>');
                  a_avgs.append((currStation.currHour % 12)+ 1 + ':00 ')
                 .append(makeSpan('from_alt_one_hr', roundDec(fromStation.bestAlternative.bikeForecast[0])))
                 .append((currStation.currHour % 12)+ 2 + ':00 ')
                 .append(makeSpan('from_alt_two_hr', roundDec(fromStation.bestAlternative.bikeForecast[1])));


  $('.sidebar').css('width','30%');
  $('#map1').css('width', '68.5%');
  // $('#sidebar').animate({width: '30%'});
  // $('#map1').animate({width: '68.5%'});
}


function populateToEl() {

  var label = $(".to_head .label");
  // var label = $(".dropoff .label");
  var avail = $(".dropoff .available");
  var avgs = $(".dropoff .forecasts"); //fix this in index!!
  var a_label = $(".dropoff .a_label");
  var a_avail = $(".dropoff .a_available");
  var a_avgs = $(".dropoff .a_averages");

 

  function roundDec(num){
    return Math.round(num * 100) / 100;
  }
  var dot = $("<div id = 'dot'>").css({'width':'.5em', 'height':'.5em', 'border-radius':'50%', 'background-color':'green', 'display':'inline-block', 'margin-bottom':'.1em', 'margin-left':'.3em'});
  var aDot = $("<div id = 'dot'>").css({'width':'.5em', 'height':'.5em', 'border-radius':'50%', 'background-color':'yellow', 'display':'inline-block', 'margin-bottom':'.1em', 'margin-left':'.1em'});
  
  label.html(makeSpan('to_station', toStation.current.label)).append(dot);
  avail.html('').append('Docks: ').append(makeSpan('to_avail', toStation.current.availableDocks))
               .append(makeSpan('to_avg', roundDec(toStation.history[toStation.currHour].avail_docks_avg)));
               $('#to_avg').prepend('Avg: ');
  avgs.html("<span id='casts'>Forecasts</span>"+'<br/>');
                  avgs.append((currStation.currHour % 12)+ 1 + ':00 ')
               .append(makeSpan('to_one_hr', roundDec(toStation.dockForecast[0])))
               .append((currStation.currHour % 12)+ 2 + ':00 ')
               .append(makeSpan('to_two_hr', roundDec(toStation.dockForecast[1])));
  a_label.html('')
         .append('Alternative: ')
         .append(makeSpan('to_alt', toStation.bestAlternative.current.label)).append(aDot);
  a_avail.html('').append('Docks: ').append(makeSpan('to_alt_avail', toStation.bestAlternative.current.availableDocks));
  a_avgs.html("<span id='casts'>Forecasts</span>"+'<br/>');
                  a_avgs.append((currStation.currHour % 12)+ 1 + ':00 ')
                 .append(makeSpan('to_alt_one_hr', roundDec(toStation.bestAlternative.dockForecast[0])))
                 .append((currStation.currHour % 12)+ 2 + ':00 ')
                 .append(makeSpan('to_alt_two_hr', roundDec(toStation.bestAlternative.dockForecast[1])));


  $('.sidebar').css('width','30%');
  $('#map1').css('width', '68.5%');




  // label.html(makeSpan('to_station', toStation.current.label));
  // avail.html('').append('Docks: ').append(makeSpan('to_avail', toStation.current.availableDocks))
  //              .append(" | Avg: ")
  //              .append(makeSpan('to_avg', toStation.history[toStation.currHour].avail_docks_avg));
  // avgs.html('').append(' Forecast: ')
  //              .append(' +1hr: ')
  //              .append(makeSpan('to_one_hr', toStation.dockForecast[0]))
  //              .append(' +2hr: ')
  //              .append(makeSpan('to_two_hr', toStation.dockForecast[1]));
  // a_label.html('')
  //        .append('Alternative: ')
  //        .append(makeSpan('to_alt', toStation.bestAlternative.current.label));
  // a_avail.html('').append('Docks: ').append(makeSpan('to_alt_avail', toStation.bestAlternative.current.availableDocks));
  // a_avgs.html('').append('Avg: ')
  //                .append(makeSpan('to_alt_avg', toStation.bestAlternative.history[currHour].avail_docks_avg))
  //                .append(' +1hr: ')
  //                .append(makeSpan('to_alt_one_hr', toStation.bestAlternative.dockForecast[0]))
  //                .append(' +2hr: ')
  //                .append(makeSpan('to_alt_two_hr', toStation.bestAlternative.dockForecast[1]));

}






