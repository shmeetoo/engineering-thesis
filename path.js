// Helper function to find the Euclidean distance between two markers
function euclideanDistance(coord1, coord2) {
    const x1 = coord1[0];
    const y1 = coord1[1];
    const x2 = coord2[0];
    const y2 = coord2[1];
    const xDiff = x2 - x1;
    const yDiff = y2 - y1;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

function dijkstra(graph, start, end) {
    let totalDistance = 0;
    const distances = {};
    const visited = new Set();
    const previous = {};
    const heap = new Heap();

    // initialize all distances as infinity
    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;

    // initialize the heap
    heap.push(start, 0);

    while (!heap.empty()) {
        const current = heap.pop();
        visited.add(current);

        // check distance
        for (const neighbor in graph[current]) {
            if (distances[neighbor] > distances[current] + graph[current][neighbor]) {
                distances[neighbor] = distances[current] + graph[current][neighbor];
                previous[neighbor] = current;

                if (!visited.has(neighbor)) {
                    heap.push(neighbor, distances[neighbor]);
                }
            }
        }
    }

    // retrace the path
    let path = [end];
    let current = end;
    while (current in previous) {
        current = previous[current];

        if(typeof current === 'string'){
            let tmp = current.split(",");
            let c = [parseFloat(tmp[0]), parseFloat(tmp[1])];
            path.unshift(c);
        } else {
            path.unshift(current);
        }
    }

    // Add the total distance calculation
    for (let i = 0; i < path.length - 1; i++) {
        let currentNode = path[i];
        let nextNode = path[i + 1];
        let edgeDistance = graph[currentNode][nextNode];
        totalDistance += edgeDistance;
    }

    return [path, totalDistance];
}

function drawPath(shortestPath) {
    // Create a new feature collection
    const path = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": shortestPath
            }
        }]
    };

    // Add the path to the map
    map.addLayer({
        "id": "shortest-path",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": path
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round",
        },
        "paint": {
            "line-color": "red",
            "line-width": 3,
        }
    });
}

function findPath(points, graph) {
    let totalPath = [];
    let totalDistance = 0;

    for (let i = 0; i < points.length - 1; i++) {
        let start = points[i];
        let end = points[i + 1];
        let path = dijkstra(graph, start, end);

        totalDistance += path[1];
        totalPath = totalPath.concat(path[0]);
    }
    return [totalPath, totalDistance];
}

function createGraph(geojson) {
    const graph = {};
    const coords = geojson.features[0].geometry.coordinates;

    //iterate over all line strings
    coords.forEach(lineString => {
        //iterate over all coords of current line string
        lineString.forEach((coord, index) => {
            //get current and previous coord
            const current = coord;
            const previous = lineString[index - 1];

            if (index > 0) {
                // add the current coord as a key in the graph object
                if (!graph[current]) {
                    graph[current] = {};
                }
                // add the previous coord as a key in the graph object and calculate the euclidean distance
                if (!graph[previous]) {
                    graph[previous] = {};
                }
                graph[previous][current] = euclideanDistance(previous, current);
                graph[current][previous] = euclideanDistance(previous, current);
            }
        });
    });
    return graph;
}

let graph;

fetch('routes8.geojson')
    .then(response => response.json())
    .then(geojson => {
        graph = createGraph(geojson);

        drawPaths(graph);

    })
    .catch(error => console.error(error));




