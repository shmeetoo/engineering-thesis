const parentElement2 = document.getElementById("list");
const pathDiv = document.getElementById("path");
let details = document.getElementById("details");
let markerIndex = 1;
let points = [];

const checkboxList = document.createElement("div");
checkboxList.style.height = "295px";
checkboxList.style.overflowY = "scroll";
checkboxList.style.border = "1px solid black";
checkboxList.style.padding = "5px";

parentElement2.appendChild(checkboxList);

markersData.forEach(marker => {
    const markerName = Object.keys(marker)[0];
    const markerCoords = marker[markerName];

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = markerName;
    checkbox.id = markerName;

    checkbox.addEventListener("change", event => {
        if (event.target.checked) {
            pathDiv.innerHTML += `${markerIndex}. ${markerName}<br>`;
            document.getElementById(markerName).classList.add("highlight");
            markerIndex++;

            if(!points.includes(markerCoords))
                points.push(markerCoords);

            if(points.length > 1){
                drawManualPath();
                details.style.display = "block";
            }

        } else {
            pathDiv.innerHTML = pathDiv.innerHTML.replace(`${markerIndex}. ${markerName}<br>`, "");
            document.getElementById(markerName).classList.remove("highlight");
            updateMarkerIndex();

            let index = points.indexOf(markerCoords);
            points.splice(index, 1);

            if(points.length > 1){
                drawManualPath();
            } else{
                if(map.getLayer("shortest-path"))
                    map.removeLayer("shortest-path");
                if(map.getSource("shortest-path"))
                    map.removeSource("shortest-path");

                details.style.display = "none";
            }
        }
    });

    const label = document.createElement("label");
    label.htmlFor = markerName;
    label.innerText = markerName;

    checkboxList.appendChild(checkbox);
    checkboxList.appendChild(label);
    checkboxList.appendChild(document.createElement("br"));
});

function updateMarkerIndex() {
    markerIndex = 1;
    const checkedMarkers = Array.from(checkboxList.querySelectorAll("input[type=checkbox]:checked"))
        .map(checkbox => checkbox.value);

    pathDiv.innerHTML = "";
    checkedMarkers.forEach(markerName => {
        pathDiv.innerHTML += `${markerIndex}. ${markerName}<br>`;
        markerIndex++;
    });
}


let min0, min1, max0, max1;

function minMax(path){
    min0 = path.reduce((min, subArr) =>{
        return subArr[0] < min ? subArr[0] : min;
    }, path[0][0]);

    min1 = path.reduce((min, subArr) =>{
        return subArr[1] < min ? subArr[1] : min;
    }, path[0][1]);

    max0 = path.reduce((max, subArr) =>{
        return subArr[0] > max ? subArr[0] : max;
    }, path[0][0]);

    max1 = path.reduce((max, subArr) =>{
        return subArr[1] > max ? subArr[1] : max;
    }, path[0][1]);

    return [min0, min1, max0, max1];
}


function drawManualPath(){

    let path = findPath(points, graph);
    details.innerHTML = `<b>Distance:</b> ${timeDist(path[1])[0]} km<br><b>Time:</b> ${timeDist(path[1])[1]}:${timeDist(path[1])[2]} h`;

    if(map.getLayer("shortest-path"))
        map.removeLayer("shortest-path");
    if(map.getSource("shortest-path"))
        map.removeSource("shortest-path");

    drawPath(path[0]);
    map.fitBounds([[minMax(path[0])[0] - 2, minMax(path[0])[1] - 2], [minMax(path[0])[2] + 2, minMax(path[0])[3] + 2]]);

}

const markers = document.querySelectorAll(".marker");

document.getElementById("clearBtn").addEventListener("click", ()=>{
    while(pathDiv.firstChild){
        pathDiv.removeChild(pathDiv.lastChild);
        points = [];
    }

    if(map.getLayer("shortest-path"))
        map.removeLayer("shortest-path");
    if(map.getSource("shortest-path"))
        map.removeSource("shortest-path");

    map.fitBounds(baseBounds);
    drawn = false;

    pathIds.forEach((id) =>{
        const div = document.getElementById(id);

        if(div.childNodes.length > 5)
            div.removeChild(div.lastChild);
    });


    [].forEach.call(markers, function(el){
        el.classList.remove("highlight");
    });


    Array.from(checkboxList.querySelectorAll("input[type=checkbox]")).forEach(checkbox => {
        checkbox.checked = false;
    });
    updateMarkerIndex();

    details.style.display = "none";
});

const info2 = document.getElementById("info2");

[].forEach.call(markers, function(m){
    m.addEventListener('mouseenter', ()=>{
        info2.innerHTML = `<b>${m.id}</b>`;
        info2.style.display = "block";
    });

    m.addEventListener('mouseleave', ()=>{
        info2.style.display = "none";
    });
});