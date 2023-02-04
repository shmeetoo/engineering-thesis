const divPath = document.getElementById("path")
const sheltersBtn = document.getElementById("sheltersBtn");
const forestsBtn = document.getElementById("forestsBtn");
const castlesBtn = document.getElementById("castlesBtn");
const pathBtn = document.getElementById("pathBtn");
let pointsTmp = [];
let points = [];
let min0, min1, max0, max1;


function highlightElement(objectType) {
    let select = document.getElementById(objectType);
    let selected = select.options[select.selectedIndex];
    let btn = document.getElementById(`${objectType}Btn`);

    for (let object of select.options) {
        let el = document.getElementById(object.value);

        if (object.value === selected.value && object.value){
            el.classList.toggle("highlight");
            // const div = document.createElement("div");
            const div = document.getElementById(object.value + '1');

            if(div){
                divPath.removeChild(div);

                let index = pointsTmp.indexOf(object.value);
                pointsTmp.splice(index, 1);
                points.splice(index, 1);
                // btn.textContent = "Add";
            } else{
                const newDiv = document.createElement("div");
                newDiv.id = object.value + '1';
                newDiv.textContent = object.value;
                divPath.appendChild(newDiv);
                pointsTmp.push(object.value);

                for(let p of pointsTmp){
                    for(let m of markers_data.features){
                        if(p === m.properties.name){
                            if(!points.includes(m.geometry.coordinates))
                                points.push(m.geometry.coordinates);
                        }
                    }
                }

                // btn.textContent = "Remove";
            }
        }
    }
}

sheltersBtn.addEventListener("click", function(){
    highlightElement("shelters");
})

forestsBtn.addEventListener("click", function(){
    highlightElement("forests");
})

castlesBtn.addEventListener("click", function(){
    highlightElement("castles");
})

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

function drawManualPath(graph){
    let drawn = false;

    pathBtn.addEventListener('click', ()=>{
        let path = findPath(points, graph);
        let details = document.createElement("div");
        details.innerHTML = `<strong>Distance:</strong> ${timeDist(path[1])[0]} km<br><strong>Time:</strong> ${timeDist(path[1])[1]}:${timeDist(path[1])[2]} h`;

        if(!drawn){
            drawPath(path[0]);
            divPath.appendChild(details);
            map.fitBounds([[minMax(path[0])[0]-2,minMax(path[0])[1]-2],[minMax(path[0])[2]+2,minMax(path[0])[3]+2]]);
            drawn = true;
        } else{
            map.removeLayer("shortest-path");
            map.removeSource("shortest-path");
            map.fitBounds(baseBounds);
            divPath.removeChild(divPath.lastChild);
            drawn = false;
        }
    })
}

const markers = document.querySelectorAll(".marker");

document.getElementById("clearBtn").addEventListener("click", ()=>{
    while(divPath.firstChild){
        divPath.removeChild(divPath.lastChild);
        points = [];
        pointsTmp = [];
    }

    [].forEach.call(markers, function(el){
        el.classList.remove("highlight");
    })
})