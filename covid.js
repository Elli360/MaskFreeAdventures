      // The below code fills in the first row of the table
   
    //input window
    $("#covid-form").submit(function( event ) {
      event.preventDefault();
      var region = $("#inpt").val();

    var queryURL = "https://api.quarantine.country/api/v1/summary/region?region=" + region;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      var regionIn = $("<h2>").text(region);
      $("#stateHeading").html(regionIn);
      // Create a new table row element
      var tRow = $("<tr>");

      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var totalCasesTd = $("<td>").text(response.data.summary.total_cases);
      var activePosTd = $("<td>").text(response.data.summary.active_cases);
      var deathsTd = $("<td>").text(response.data.summary.deaths);
      var deathRatioTd = $("<td>").text((response.data.summary.death_ratio).toPrecision(2));
        
      // Append the newly created table data to the table row
      tRow.append(totalCasesTd,activePosTd, deathsTd, deathRatioTd);
      // Append the table row to the table body
      $("tbody").html(tRow);
    });

    //var positivePop = response.data.summary.total_cases;
    var queryURL ="https://api.openweathermap.org/data/2.5/forecast?q=" +region+ "&appid=d73e16c126e3f1214d6b4bf3e6b7612c";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

     var totalPop = response.city.population;
     var totalPopDiv = $("<h5>").text("Total population is: " + totalPop);
     $("#totalPopulation").html(totalPopDiv);
    });

  });
