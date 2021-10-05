console.log("hello im d3",d3);

const BusinessData=[
    {year:'2019', profiles:'60'},
    {year:'2020', profiles:'80'},
    {year:'2021', profiles:'100'}
];

const width= 800;
const height= 950;
const margin={top:50, bottom:50, left:50, right:50 };

const svg= d3.select('#d3-container')
.append('svg')
.attr('height', height- margin.top- margin.bottom)
.attr('width', width -margin.left- margin.right)
.attr('viewbox',[0,0, width, height])
.attr("position", 'center')
 
// the bars 
// the bars placements 
const x= d3.scaleBand()
    .domain(d3.range(BusinessData.length))
    .range([margin.left, width- margin.right])
    .padding(0.1);

const y= d3.scaleLinear()
.domain([0,100])
.range([height- margin.bottom, margin.top]);

// the bar's specifactions 
svg
.append('g')
.attr('fill', 'royalblue')
.selectAll("rect")
.data(BusinessData.sort((a,b) => d3.descending(a.profiles, b.profiles)))
.join("rect")
    .attr("x", (d,i) => x(i))
    .attr("y", (d) => y(d.profiles))
    .attr("height", d => y(0)-y(d.profiles))
    .attr("width", x.bandwidth())
    

//the axis 
 function xAxis(g) {
   g//.attr("transform",`translate(0, ${height -margin.bottom})`)
   .call(d3.axisBottom(x).tickFormat(i => BusinessData[i].year))
   .attr("font-size",'16px')
   .attr("font-family",'Comic Sans MS')
 }

function yAxis(g) {
     g.attr('transform',`translate(${margin.left},0)`)
     .call(d3.axisLeft(y).ticks(null, BusinessData.format))
     .attr("font-size",'16px')
     .attr("font-family",'Comic Sans MS')
 }

 svg.append("g").call(yAxis);
 svg.append("g").call(xAxis);
 svg.node();  


 