// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization
let svg = d3.select('#vis')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', 'white')
  .style('border', 'solid')
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))

// Add a square
let rect = svg.append('rect')
  .attr('x', '100')
  .attr('y', '200')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', '#a6cee3')
  .call(d3.drag()
    .on("drag", dragrect));
// Add a circle
let circle = svg.append('circle')
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')
  .call(d3.drag()
    .on("drag", dragcircle));
// Add color change function to circle
  circle.on("click", function(d) {
  d3.select("rect")
    .style("fill" , "blue")
  })

  rect.on("click", function(d) {
  d3.select("circle")
    .style("fill" , "red")
  })

// Add mouseover function to square
  rect.on("mouseover", function(d) {
  d3.select(this)
    .style("stroke" , "black")
    .style("stroke-width",'5')
})

  rect.on("mouseout", function(d) {
  d3.select(this)
    .style("stroke" , "transparent")
})

// Add mouseover function to circle
circle.on("mouseover", function(d) {
d3.select(this)
.style("stroke" , "black")
.style("stroke-width",'5')
})

circle.on("mouseout", function(d) {
d3.select(this)
.style("stroke" , "transparent")
})

//Add double click functions
  rect.on("dblclick", function(d) {
  d3.select("rect")
    .style("fill","orange")
  d3.select("circle")
    .style("fill","orange")
})

circle.on("dblclick", function(d) {
d3.select("rect")
  .style("fill","orange")
d3.select("circle")
  .style("fill","orange")
})

//Add dragable functionality
function dragcircle(event, d) {
  d3.select(this)
    .attr("cx", event.x)
    .attr("cy", event.y)
    .raise();
}

function dragrect(event, d) {
  d3.select(this)
    .attr("x", event.x)
    .attr("y", event.y)
    .raise();
}
