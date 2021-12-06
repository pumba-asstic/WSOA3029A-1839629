const InteractiveData=[
    {id:'d1', platform: 'facebook', value: 25},
    {id:'d2', platform: 'Twitter', value: 50},
    {id:'d3', platform: 'Instagram', value: 150},
    {id:'d4', platform: 'Pinterest', value: 100},
    {id:'d5', platform: 'Whatsapp', value: 180},
];
const CHART_WIDTH = 600;
const CHART_HIEGHT = 400;

;



const chartSpace = d3.select('svg') 
                    .attr('width', CHART_WIDTH)
                    .attr('height', CHART_HIEGHT);

const chart= chartSpace.append('g');

chart
.selectAll('.bar')
.data(InteractiveData)
.enter()
.append('rect')
.classed('bar', true)
.attr('width')
.attr('height');

const xScale=d3.scaleBand()
                .domain(InteractiveData.map((datatPoint)=> datatPoint.platform))
                .rangeRound([0, 250])
                .padding(0.1);

const yScale = d3.scaleLinear()
                .domain([0,15])
                .range([200, 0]);

const container =d3.seclect('svg'). classed('container', true);

const bars = container
            .selectAll('.bar')
            .data(InteractiveData)
            .enter()
            .append('rect')
            .classed('bar', true)
            .attr('width',xScale.bandwidth())
            .attr('height', (data)=>200 -yScale(data.value))
            .attr('x',data => xScale(data.platform))
            .attr('y',data =>yScale(data.platform));

setTimeout(()=>{
    bars.data(InteractiveData.slice(0,2)).exit().remove();
}, 2000);


