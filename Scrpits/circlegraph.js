var toolsData; 
var truncLength=30; 

$(document).ready(function(){
    Plot();
});


function Plot(){
     TransformChartData( chartData, chartOptions);
     BuildPie( "Chart", chartData, chartOptions);
}

function BuildPie(id, chartData, chartOptions){
    var xvarName;
    var divisionRatio = 2.5;
    var lefendoffset = 0;

    chart = d3.select("#"+ id + ".innerCont" );

     var yVarName = options[0].yaxis;
     width = $(chart[0]).outerWidth(),
     height= $(chart[0]).outerHeight(),
     radius = Math.min(width, height)/ divisionRatio;

     xvarName = options[0].xaxis;

     var rcolor =d3.scale.ordinal().range(runningColors);

     arc = d3.svg.arc()
            .outerRadius(radius)
            .innerRaduis(radius -200);

    chart= chart 
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + (width / divisionRatio) + "," + ((height / divisionRatio) + 30) + ")");


    var pie = d3.layout.pie()
                .sort(null)
                .value(function(d){
                    return d.Total;
                });


    var g = chart.selectAll(".arc")
                .data(pie(runningData))
                .enter().append("g")
                .attr("class", "arc");

    
    var count= 0; 

    var path = g.append("path")
                .attr("d", arc)
                .attr("id", function(d){ return "arc-" +(count++); })
                .style("opacity", function(d){
                    return d.data["op"];
                });


    path.append("svg:title")
            .text(function (d){
                return d.data["title"]+"("+ d.data[yVarName] +")";
            });
}

