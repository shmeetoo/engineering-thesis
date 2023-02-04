// create empty arrays to store marker data for each type
let forests = [], castles = [], shelters = [];

// loop through the features in the GeoJSON file
for (let i = 0; i < markers_data.features.length; i++) {
    let feature = markers_data.features[i];

    // check the marker type and add the feature to the appropriate array
    if (feature.properties.type === "sacred-forests") {
        forests.push(feature.properties);
    } else if (feature.properties.type === "castle") {
        castles.push(feature.properties);
    } else if (feature.properties.type === "shelter") {
        shelters.push(feature.properties);
    }
}

// create the dropdown lists
let select1 = document.getElementById("forests");
let select2 = document.getElementById("castles");
let select3 = document.getElementById("shelters");

// populate the first dropdown list with options for type1 markers
for (let i = 0; i < forests.length; i++) {
    let option = document.createElement("option");
    option.value = forests[i].name;
    option.text = forests[i].name;
    select1.appendChild(option);
}

// populate the second dropdown list with options for type2 markers
for (let i = 0; i < castles.length; i++) {
    let option = document.createElement("option");
    option.value = castles[i].name;
    option.text = castles[i].name;
    select2.appendChild(option);
}

// populate the third dropdown list with options for type3 markers
for (let i = 0; i < shelters.length; i++) {
    let option = document.createElement("option");
    option.value = shelters[i].name;
    option.text = shelters[i].name;
    select3.appendChild(option);
}

