const paths = [
    { id: "path1", start: "Aldobereherdi Castle", end: "Virmalahka Forest" },
    { id: "path2", start: "Combleux Forest", end: "Ouletvillant Forest" },
    { id: "path3", start: "Vegodets Shelter", end: "Horovy Forest" },
    { id: "path4", start: "Horvaoeira Forest", end: "Rybchkin Castle" },
    { id: "path5", start: "Aldobereherdi Castle", end: "Vinnse Forest" },
    { id: "path6", start: "Chillepieds Forest", end: "Migran Forest" },
    { id: "path7", start: "Delyitin Forest", end: "Winheimbach Forest" },
    { id: "path8", start: "Vogtster Castle", end: "Afesp Castle" },
    { id: "path9", start: "Migran Forest", end: "Vinnse Forest" }
];

const pathSets = [
    {
        paths: [paths[0], paths[1], paths[2]],
        view: function() {
            paths.forEach(path =>{
                if(path.id !== "path1" && path.id !== "path2" && path.id !== "path3"){
                    if(document.getElementById(path.id).classList.contains("disp"))
                        document.getElementById(path.id).classList.remove("disp");
                }
            })

            this.paths.forEach(path => {
                document.getElementById(path.id).innerHTML = `<b>Start: </b> ${path.start}<br><b>End: </b>${path.end}`;
                document.getElementById(path.id).classList.toggle("disp");
            });
        }
    },
    {
        paths: [paths[3], paths[4], paths[5]],
        view: function() {
            paths.forEach(path =>{
                if(path.id !== "path4" && path.id !== "path5" && path.id !== "path6"){
                    if(document.getElementById(path.id).classList.contains("disp"))
                        document.getElementById(path.id).classList.remove("disp");
                }
            })

            this.paths.forEach(path => {
                document.getElementById(path.id).innerHTML = `<b>Start: </b> ${path.start}<br><b>End: </b>${path.end}`;
                document.getElementById(path.id).classList.toggle("disp");
            });
        }
    },
    {
        paths: [paths[6], paths[7], paths[8]],
        view: function() {
            paths.forEach(path =>{
                if(path.id !== "path7" && path.id !== "path8" && path.id !== "path9"){
                    if(document.getElementById(path.id).classList.contains("disp"))
                        document.getElementById(path.id).classList.remove("disp");
                }
            })

            this.paths.forEach(path => {
                document.getElementById(path.id).innerHTML = `<b>Start: </b> ${path.start}<br><b>End: </b>${path.end}`;
                document.getElementById(path.id).classList.toggle("disp");
            });
        }
    }
];

function viewEasy() {
    pathSets[0].view();
}

function viewMedium() {
    pathSets[1].view();
}

function viewHard() {
    pathSets[2].view();
}

const p1 = [[-2.561,41.1291],[-4.1424,41.1369],[-3.821,43.4948],[-2.2745,42.3304]];
const p2 = [[-11.0481,39.9371],[-12.108478919525488,40.201267722026294],[-12.2134,39.6029],[-12.7704,40.1455],[-13.0091,41.0709]];
const p3 = [[8.5773,38.2027],[8.261,38.3369],[8.9419,39.1233],[8.5005,39.4282],[8.0334,39.4825],[7.505,38.5835]];
const p4 = [[11.4008,43.2434],[12.575556548330358,42.18734189712481],[9.9862,39.3094],[7.3607,37.4311],[7.069,38.6771],[7.3467,39.8495],[8.1284,42.5019]];
const p5 = [[-2.561,41.1291],[-4.1424,41.1369],[-4.1345,42.2612],[-3.821,43.4948],[-4.4413,43.8709],[-4.8826,43.3738],[-6.1255,44.2592],[-7.1606,44.9835]];
const p6 = [[-12.7521,38.3337],[-12.2851,38.1643],[-11.2434,38.5216],[-11.0452,37.7353],[-11.302727311315069,36.42509075473971],[-11.2733,35.4049],[-9.7058,35.6903],[-10.3007,34.0714]];
const p7 = [[9.5732,42.1621],[9.4347,43.6592],[8.3541,44.401],[7.104,44.6578],[5.5179,44.3971],[5.121619927407833,43.65158211235702],[4.7274,42.714],[3.209585652996353,41.33310753749727],[3.2612,40.3483],[2.3056,39.5384],[1.6585,38.6592],[1.2854,36.7739],[1.7537,36.0337],[2.753,35.0495]];
const p8 = [[-3.245,35.2158],[-3.4794,35.5641],[-2.690227751871982,37.38375185119267],[-5.3101,36.1102],[-6.8281,35.566],[-8.031262589027893,36.313933709381715],[-5.1142,37.3641],[-6.42418032257661,38.594401674777906],[-5.0409,39.0379],[-6.9192,40.1311]];
const p9 = [[-10.3007,34.0714],[-8.36749162916128,38.27933142391727],[-9.7969,41.2689],[-9.3537,40.3619],[-7.7707,40.7928],[-4.0118,39.566],[-6.7648,41.7039],[-6.3265,43.3146],[-7.1606,44.9835]];

const baseBounds = [[-17, 29],[16.5, 50.4]];

const pathIds = ['path1', 'path2', 'path3', 'path4', 'path5', 'path6', 'path7', 'path8', 'path9'];
const pathData = {
    path1: p1,
    path2: p2,
    path3: p3,
    path4: p4,
    path5: p5,
    path6: p6,
    path7: p7,
    path8: p8,
    path9: p9
};

const n1 = ["Aldobereherdi Castle","Aldobereherdi Forest","Cavimita Shelter","Virmalahka Forest"];
const n2 = ["Combleux Forest","Douche Shelter","Douche Forest","Douche Castle", "Ouletvillant Forest"];
const n3 = ["Vegodets Shelter","Vegodets Forest","Mosch Forest","Holmny Forest","Holmny Castle","Horovy Forest"];
const n4 = ["Horvaoeira Forest","Seiranharin Shelter","Cachoga Shelter","Ganov Forest","Vegodets Shelter","Chech Forest","Kutesh Forest","Mopolchesk Shelter","Rybchkin Castle"];
const n5 = ["Aldobereherdi Castle","Aldobereherdi Forest","Tiszal Forest","Cavimita Shelter","Cavimita Castle","Noduri Forest","Heart Forest","Vinnse Forest"];
const n6 = ["Chillepieds Forest","Chillepieds Shelter","Souvilles Forest","Thoulontigran Forest","Vatilliers Shelter","Malethiver Forest","Beres Forest","Migran Forest"];
const n7 = ["Delyitin Forest","Skagolyn Forest","Obololo Shelter","Obololo Forest","Korninetsk Forest","Verdepan Shelter","Verdepan Castle","Tridychere Shelter","Viohlai Forest","Tarida Shelter","Tabrad Forest","Steilern Shelter","Steilern Castle","Winheimbach Forest"];
const n8 = ["Vogtster Castle","Vogtster Forest","Gernsbach Shelter","Kurli Forest","Desun Forest","Aber Shelter","Gwydebomaber Forest","Nodubinver Shelter","Llan Forest","Afesp Castle"];
const n9 = ["Migran Forest","Laberow Shelter","Aberporthney Forest","Indyrdaug Forest","Aberfha Shelter","Nyeklos Forest","Indyrhonddu Forest","Inverskuno Shelter","Vinnse Forest"];

const namesData = {
    path1: n1,
    path2: n2,
    path3: n3,
    path4: n4,
    path5: n5,
    path6: n6,
    path7: n7,
    path8: n8,
    path9: n9
}

function timeDist(path){
    const speed = 3;
    let dist = (path/2).toFixed(2);
    let hours = Math.floor(dist/speed);
    let minutes = Math.floor(dist/speed*60);

    while(minutes > 60){
        minutes -= 60;

        if(minutes < 10)
            minutes = '0' + minutes;
    }

    return [dist, hours, minutes];
}

function drawPaths(graph){
    pathIds.forEach((id) => {
        const div = document.getElementById(id);

        div.addEventListener("click", () => {
            let path = findPath(pathData[id], graph);
            let details = document.createElement("div");
            details.innerHTML = `<b>Distance:</b> ${timeDist(path[1])[0]} km<br><b>Time:</b> ${timeDist(path[1])[1]}:${timeDist(path[1])[2]} h`;

            if(!drawn) {
                drawPath(path[0]);
                div.appendChild(details);
                map.fitBounds([[minMax(path[0])[0]-1,minMax(path[0])[1]-1],[minMax(path[0])[2]+1,minMax(path[0])[3]+1]]);
                drawn = true;

                [].forEach.call(namesData[id], function(el){
                    document.getElementById(el).classList.add("highlight");
                });
            } else {
                map.removeLayer("shortest-path");
                map.removeSource("shortest-path");
                map.fitBounds(baseBounds);
                div.removeChild(div.lastChild);
                drawn = false;

                [].forEach.call(markers, function(el){
                    el.classList.remove("highlight");
                });
            }
        });
    });

}
