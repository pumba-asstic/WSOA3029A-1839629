 // the data
 var ActvitiesData=[
     [1,1], [12,20], [24,36], [32,50], [40,70], [50,100], 
     [25,60], [0,1], [65,123], [73,130], [78,134], [83,138] 
 ];
 
  var svg =d3.select("svg"),
        Margin=140,
        width =svg.attr("width")- margin,
        height = svg.attr("height")- margin;

// the Axis 
var xScale= d3.scaleLinear().domain([0, 100]). range([0, width]),
    yScale= d3.scaleLinear().domain([0, 140]). range([height, 0],),
    
    //svg.append ('text')
    //.attr('x', width/2 +100)
   // .attr('y, 100')
    //.attr('text-anchor', "middle")
    //.style("font-family", "Comic Sans MS").style("font-size", "16px")
    //.text("");