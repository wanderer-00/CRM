// длина стрелок
var distance = 100;

var nodesData = [
  { id: 1, color: 'transparent', label: "заказчик" },
  { id: 2, color: 'transparent', label: "отдел продаж" },
  { id: 3, color: 'transparent', label: "отдел закупки" },
  { id: 4, color: 'transparent', label: "траффик-менеджер" },
  { id: 6, color: 'transparent', label: "DTF" },
  { id: 7, color: 'transparent', label: "шёлкография" },
  { id: 8, color: 'transparent', label: "тампопечать" },
  { id: 9, color: 'transparent', label: "гравировка" },
  { id: 10, color: 'transparent', label: "UV" },
  { id: 11, color: 'transparent', label: "постпечать" },
  { id: 12, color: 'transparent', label: "упаковка" },
  { id: 13, color: 'transparent', label: "склад" },
  { id: 14, color: 'transparent', label: "доставка" },
  { id: 14, color: 'transparent', label: "доставка" },
  { id: 15, color: 'transparent', label: "получатель" },

// синтаксис
//  { id: 7, label: "Note 7", color: 'yellow', icon: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg" }
];

var linksData = [
  // основные
  { source: 1, target: 2 },
  { source: 2, target: 3 },
  { source: 3, target: 4 },
  { source: 4, target: 6 },
  { source: 4, target: 7 },
  { source: 4, target: 8 },
  { source: 4, target: 9 },
  { source: 4, target: 10 },
  { source: 6, target: 11 },
  { source: 7, target: 11 },
  { source: 8, target: 12 },
  { source: 9, target: 12 },
  { source: 12, target: 13 },
  { source: 10, target: 12 },
  { source: 11, target: 12 },
  { source: 13, target: 14 },
  { source: 14, target: 15 },
];

// Calculate the degree (number of links) for each node
nodesData.forEach(node => {
  node.degree = linksData.filter(link => link.source === node.id || link.target === node.id).length;
});

// Create a scale for node size
var sizeScale = d3.scaleLinear()
  .domain(d3.extent(nodesData, d => d.degree))
  .range([15, 16]);  // Adjust the range as per your needs

var svg = d3.select("svg"),
  width = +d3.select(".container").node().clientWidth,
  height = +d3.select(".container").node().clientHeight;

// Define arrow marker
svg.append("defs").append("marker")
  .attr("id", "arrow")
  .attr("viewBox", "0 -5 10 10")
  .attr("refX", 10)
  .attr("refY", 0)
  .attr("markerWidth", 7)
  .attr("markerHeight", 7)
  .attr("orient", "auto")
  .append("path")
  .attr("d", "M0,-5L10,0L0,5");

var simulation = d3.forceSimulation()
  .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(distance))
  .force("charge", d3.forceManyBody().strength(-800))
  .force("center", d3.forceCenter(width / 2, height / 2));

var link = svg.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(linksData)
  .enter().append("line")
  .attr("class", "link")
  .attr("marker-end", "url(#arrow)"); // Add marker-end to each link

var node = svg.append("g")
  .attr("class", "nodes")
  .selectAll("g")
  .data(nodesData)
  .enter().append("g")
  .attr("class", "node")
  .attr("style", function(d) { return `--color: ${d.color || '#1E90FF'}` })
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));

node.append("circle")
  .attr("r", function(d) { return sizeScale(d.degree); });

node.append("image")
  .attr("xlink:href", function(d) { return d.icon ? d.icon : ''; })
  .attr("x", function(d) { return -sizeScale(d.degree) / 2; }) // Centering the image
  .attr("y", function(d) { return -sizeScale(d.degree) / 2; }) // Centering the image
  .attr("height", function(d) { return sizeScale(d.degree); })
  .attr("width", function(d) { return sizeScale(d.degree); })
  // .style("clip-path", "circle()"); // Clipping the image to make it round

node.append("text")
  .attr("dx", function(d) { return sizeScale(d.degree + 2); })
  .attr("dy", ".35em")
  .text(function(d) { return d.label });

simulation
  .nodes(nodesData)
  .on("tick", ticked);

simulation.force("link")
  .links(linksData);

function ticked() {
  link.attr("x1", function(d) {
          var sourcePosition = adjustedPosition(d.source, d.target);
          return sourcePosition.x;
      })
      .attr("y1", function(d) {
          var sourcePosition = adjustedPosition(d.source, d.target);
          return sourcePosition.y;
      })
      .attr("x2", function(d) {
          var targetPosition = adjustedPosition(d.target, d.source);
          return targetPosition.x;
      })
      .attr("y2", function(d) {
          var targetPosition = adjustedPosition(d.target, d.source);
          return targetPosition.y;
      });

  node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
}

function adjustedPosition(nodeA, nodeB) {
    var dx = nodeB.x - nodeA.x;
    var dy = nodeB.y - nodeA.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    var radiusA = sizeScale(nodeA.degree);
    
    return {
        x: nodeA.x + (dx * radiusA) / distance,
        y: nodeA.y + (dy * radiusA) / distance
    };
}

// Functions to handle drag events
function dragstarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(event, d) {
  d.fx = event.x;
  d.fy = event.y;
}

function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

// Highlighting linked nodes
node.on("mouseover", function(event, d) {
  link.style('opacity', function(l) {
      return l.source === d || l.target === d ? 1 : 0.1;
  });

  node.style('opacity', function(n) {
      return n === d || linked(d, n) ? 1 : 0.1;
  });
});

node.on("mouseout", function() {
  link.style('opacity', 1);
  node.style('opacity', 1);
});

function linked(a, b) {
  return linksData.some(function(l) {
      return (l.source === a && l.target === b) || (l.source === b && l.target === a);
  });
}