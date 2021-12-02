function Plot()
{
    TransformChartData(chartData , opts);
}

// the pie chart 
function BuildPie(id, chartData, options)
{
    var xVarName;
    var diversionRatio = 2.5,
    var lendendoffset= 0;

    chart = d3.select("#" + id + " .innerCont");

    var yVarname = options[0].yaxis;
    width = $(chart[0]). outerWidth(),
    height = $(chart[0]).outerHeight(),
    radius = Math.min(width, height)/ diversionRatio;

    xVarName = options[0].xaxis;

    var rcolor = d3.scale.ordinal().range(runningColors);

    arc = d3.svg.arc()
        .outerRadius(radius - 10 )
        .innerRadius(radius - 200);

    chart = chart 
        .append("svg") // append svg element inside chart 
        .attr("width", width) // set width
        .attr("height", height) // set height 
        .append("g")
        .attr("transform", "translate("+ (width/diversionRatio)+ ","+((height/diversionRatio)+ 30)+ ")");

    var pie = d3.layout.pie()
            .sort(null)
            .value(function(d){
                return d.Total;
            });

     var g = chart.selectAll(".arc")
                    .data(pie(runningData))
                    .enter().append("g")
                    .attr("class", "arc");
    
    var count =0;

    var path = g.append("path")
                .attr("d", arc)
                .attr("id", function(d){return "arc-"+ (count ++);})
                .style("opacity", function(d){
                    return  d.data["op"];
                });
    
    path.append("svg: title")
        .text(function (d){
            return d.data["title"] + "("+ d.data[yVarname] +")";
        });
     path.styel( "fill", function(d){
         return rcolor(d.data[xVarName]);
     })

   // g. append("text")
       //  .attr("transform", function(d)
        // {return "translate("+ arc.centriod(d) +")"; }) 
        // .attr("dy", ".35em")
        // .style("text-anchor", "middle")
        // .style("opactiy", 1)
       //  .text( function(d)
       //  {return d.data[yVarname];});


    //  count = 0; 
     // var legend = chart.selectAll(".legend")
        // .data(runningData).enter()
        // .append("g").attr("class", "legend")
        // .attr("legend -id", function(d)
       //  { return count ++;})
        // .attr("transform", function (d, i)
       //  { return "translate(15," + (parseInt("-"+ runn.length *10)+i *28 + lendendoffset) +")";
// }) 


function TransformChartData(chartData , otps)
{
    var result=[];
    var resultColors =[];
    var counter= 0;
    var hasMatch;
    var xVarName;
    var yVarname =opt[0].yaxis;


    xVarName = opt[0]. xaxis;

    for( var i in chartData)
    {
        hasMatch =false;
            for(var index = 0; index < result.length; ++index)
            {
                var data = result[index];
                
                if ( dara[xVarName]== chartData[i][xVarName0])
                {
                    result[index][yVarname] = results[index][yVarname] + chartData[i][yVarname];
                    hasMatch = true;
                    break;
                }
            }
    }
    if (hasMatch == false)
    {
        ditem= {}
        ditem[xVarName] = chartData[i][xVarName];
        ditem[yVarname] = chartData[i][yVarname];
        ditem["Platform"]= opts[0]. Platform != undefined ? opts[0].Platform[0][chartData[i][xVarName]]: "",
        ditem["Title"]= opts[0]. Platform != undefined ? opts[0].Platform[0][chartData[i][xVarName]]: "",
        result.push(ditem);

        resultcolors[counter] =opts[0].color != undefined ? opts[0].color[0][chartData[i][xVarName]]: "";

        counter +=1; 
    }

    runningData = results;
    runningColor = resultColors;
    return;

}
    // the data plots 
var chartData = [
    // data for facbook 
    {
        "Platform": "Facbook",
        "Tool": "online Ads ",
        "Total": 200,
    },

    {
        "Platform": "Facebook",
        "Tool": "Marketplace ads",
        "Total": 550,
    },

    {
        "Platform": "Facebook",
        "Tool": "Online shopping stores",
        "total": 150,

    },

    {
        "Platform": "Facebook",
        "Tool": "Business website",
        "Total": 220,
    },

    {
        "Platfrom": "Facebook",
        "Tool": "Sale speacials",
        "Total": 600,
    },

  // data for instagram

    {
        "Platform": "Instagram",
        "Tool": "online Ads ",
        "Total": 550,
    },

    {
        "Platform": "Instagram",
        "Tool": "Onilne Shopping site",
        "Total": 250,
    },

    {
        "Platform": "Instagram",
        "Tool": " Business Website",
        "Total": 150,
    },   

    {
        "Platform": "Instagram",
        "Tool": "Sale Speacials ",
        "Total": 600,
    },    

    {
        "Platform": "Instagram",
        "Tool": "Live product reveal video/content",
        "Total": 50,
    },    
    
    

  // data for whatsapp

    {
        "Platform": "Whatsapp",
        "Tool": "online Ads ",
        "Total": 100,
    },   
    
    {
        "Platform": "Whatsapp",
        "Tool": "Sale speaicals ",
        "Total": 125,
    },   

    {
        "Platform": "Whatsapp",
        "Tool": "Whatsapp Satatus",
        "Total": 550,
    }, 
    
    {
        "Platform": "Whatsapp",
        "Tool": "business website",
        "Total": 50,
    },   
    
    {
        "Platform": "Whatsapp",
        "Tool": "Live product reveal video/content",
        "Total": 100,
    },   
    
];

ChartOptions =[{
    "Titles":[{ "Facebook": "Facebook", "Instagram": "Instagram", "Whatsapp": "Whatsapp"}],
    "Color": [{ "Facebook":"#FFA500", "Instgram":"#0070C0", "Whatsapp":"#ff000"}],
    "xaxis": "Platform",
    "yaxis": "Total" 
}];
