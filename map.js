mapboxgl.accessToken = 'pk.eyJ1Ijoic2htZWV0b28iLCJhIjoiY2xia3V3ZmhlMDFkZzQwbXhpNDkzOG84ZiJ9.YbX8Ssvsl5gMf_60lJEBtA';

const map = new mapboxgl.Map({
    container: 'map',
    center: [-1.157, 39.644],
    zoom: 5.42,
    minZoom: 5.42,
    maxZoom: 8,
    maxBounds: [[-17, 30.4],[16.5, 51.4]],
    style: 'mapbox://styles/shmeetoo/clbkyfh0i004014mo4u23gu7d',
    hash: true,

});

map.dragRotate.disable();
map.touchZoomRotate.disableRotation();
map.keyboard.disableRotation();
map.doubleClickZoom.disable();

map.on('load', () => {
    map.addSource('routes-data', {
        type: 'geojson',
        data: 'routes8.geojson'
    });

    map.addLayer({
        id: 'routes',
        source: 'routes-data',
        type: 'line',
        paint:{
            'line-color': 'black',
            'line-width': 1.5,
            'line-dasharray': [2, 2],
        },
    });
});

const markers_data =
    {
        "type": "FeatureCollection",
        "name": "markers4",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": [
            { "type": "Feature", "properties": { "id": "marker14", "type": "sacred-forests", "icon": "🌳", "name": "Traconataqu Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ 2.6936, 45.1874 ] } },
            { "type": "Feature", "properties": { "id": "marker15", "type": "sacred-forests", "icon": "🌳", "name": "Ripbachberg Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -1.1499, 36.434 ] } },
            { "type": "Feature", "properties": { "id": "marker16", "type": "sacred-forests", "icon": "🌳", "name": "Snovslav Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 4.0531, 45.2254 ] } },
            { "type": "Feature", "properties": { "id": "marker17", "type": "sacred-forests", "icon": "🌳", "name": "Fluornmuns Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -0.9045, 35.8398 ] } },
            { "type": "Feature", "properties": { "id": "marker18", "type": "sacred-forests", "icon": "🌳", "name": "Buhtengen Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -0.1821, 35.8883 ] } },
            { "type": "Feature", "properties": { "id": "marker19", "type": "sacred-forests", "icon": "🌳", "name": "Harebach Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -0.4076, 35.3228 ] } },
            { "type": "Feature", "properties": { "id": "marker20", "type": "sacred-forests", "icon": "🌳", "name": "Schonaberg Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 0.2236, 35.4767 ] } },
            { "type": "Feature", "properties": { "id": "marker21", "type": "sacred-forests", "icon": "🌳", "name": "Lenzgradegen Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -0.0277, 34.8806 ] } },
            { "type": "Feature", "properties": { "id": "marker22", "type": "sacred-forests", "icon": "🌳", "name": "Schom Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -0.6927, 34.6825 ] } },
            { "type": "Feature", "properties": { "id": "marker23", "type": "sacred-forests", "icon": "🌳", "name": "Malsckengen Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 0.2083, 34.0795 ] } },
            { "type": "Feature", "properties": { "id": "marker24", "type": "sacred-forests", "icon": "🌳", "name": "Dofengengen Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 1.2686, 34.6689 ] } },
            { "type": "Feature", "properties": { "id": "marker25", "type": "sacred-forests", "icon": "🌳", "name": "Birtalrech Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 2.852, 35.5544 ] } },
            { "type": "Feature", "properties": { "id": "marker26", "type": "sacred-forests", "icon": "🌳", "name": "Winheimbach Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 2.753, 35.0495 ] } },
            { "type": "Feature", "properties": { "id": "marker27", "type": "sacred-forests", "icon": "🌳", "name": "Steilern Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 1.6467, 36.7641 ] } },
            { "type": "Feature", "properties": { "id": "marker28", "type": "sacred-forests", "icon": "🌳", "name": "Sulzheim Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -2.1929, 35.9544 ] } },
            { "type": "Feature", "properties": { "id": "marker29", "type": "sacred-forests", "icon": "🌳", "name": "Inzheimberg Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -1.3399, 34.6146 ] } },
            { "type": "Feature", "properties": { "id": "marker30", "type": "sacred-forests", "icon": "🌳", "name": "Hardttinbach Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -2.1573, 34.999 ] } },
            { "type": "Feature", "properties": { "id": "marker31", "type": "sacred-forests", "icon": "🌳", "name": "Malschren Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -1.3854, 36.9311 ] } },
            { "type": "Feature", "properties": { "id": "marker32", "type": "sacred-forests", "icon": "🌳", "name": "Hocheierken Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -3.9148, 36.4456 ] } },
            { "type": "Feature", "properties": { "id": "marker33", "type": "sacred-forests", "icon": "🌳", "name": "Vogtster Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -3.4794, 35.5641 ] } },
            { "type": "Feature", "properties": { "id": "marker34", "type": "sacred-forests", "icon": "🌳", "name": "Inverallegyn Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -4.7975, 35.6223 ] } },
            { "type": "Feature", "properties": { "id": "marker35", "type": "sacred-forests", "icon": "🌳", "name": "Ebrogh Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -4.0256, 35.2709 ] } },
            { "type": "Feature", "properties": { "id": "marker36", "type": "sacred-forests", "icon": "🌳", "name": "Pheof Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -4.6629, 36.0515 ] } },
            { "type": "Feature", "properties": { "id": "marker37", "type": "sacred-forests", "icon": "🌳", "name": "Kurli Forest", "legend": "A forest sacred to local Turchian Pantheon." }, "geometry": { "type": "Point", "coordinates": [ -5.3101, 36.1102 ] } },
            { "type": "Feature", "properties": { "id": "marker38", "type": "sacred-forests", "icon": "🌳", "name": "Desun Forest", "legend": "A forest sacred to local Turchian Pantheon." }, "geometry": { "type": "Point", "coordinates": [ -6.8281, 35.566 ] } },
            { "type": "Feature", "properties": { "id": "marker39", "type": "sacred-forests", "icon": "🌳", "name": "Arremurmanthi Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -8.8463, 34.2011 ] } },
            { "type": "Feature", "properties": { "id": "marker40", "type": "sacred-forests", "icon": "🌳", "name": "Samurlusur Forest", "legend": "A forest sacred to local Turchian Pantheon." }, "geometry": { "type": "Point", "coordinates": [ -7.2874, 35.1762 ] } },
            { "type": "Feature", "properties": { "id": "marker41", "type": "sacred-forests", "icon": "🌳", "name": "Dulan Forest", "legend": "A forest sacred to local Turchian Pantheon." }, "geometry": { "type": "Point", "coordinates": [ -7.9404, 34.6126 ] } },
            { "type": "Feature", "properties": { "id": "marker42", "type": "sacred-forests", "icon": "🌳", "name": "Courvillemou Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -9.023, 35.1563 ] } },
            { "type": "Feature", "properties": { "id": "marker43", "type": "sacred-forests", "icon": "🌳", "name": "Fermont Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -8.6272, 36.201 ] } },
            { "type": "Feature", "properties": { "id": "marker44", "type": "sacred-forests", "icon": "🌳", "name": "Beres Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -9.7058, 35.6903 ] } },
            { "type": "Feature", "properties": { "id": "marker45", "type": "sacred-forests", "icon": "🌳", "name": "Paksvarcaba Forest", "legend": "A forest sacred to local Vengrian Deities." }, "geometry": { "type": "Point", "coordinates": [ 0.1069, 37.7019 ] } },
            { "type": "Feature", "properties": { "id": "marker46", "type": "sacred-forests", "icon": "🌳", "name": "Etten Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 0.7897, 37.0359 ] } },
            { "type": "Feature", "properties": { "id": "marker47", "type": "sacred-forests", "icon": "🌳", "name": "Fluorwihl Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -1.994, 37.7493 ] } },
            { "type": "Feature", "properties": { "id": "marker48", "type": "sacred-forests", "icon": "🌳", "name": "Turiedsauten Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -1.239, 37.5272 ] } },
            { "type": "Feature", "properties": { "id": "marker49", "type": "sacred-forests", "icon": "🌳", "name": "Gernsbach Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -2.9114, 38.467 ] } },
            { "type": "Feature", "properties": { "id": "marker50", "type": "sacred-forests", "icon": "🌳", "name": "Inverarth Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -3.7822, 38.3874 ] } },
            { "type": "Feature", "properties": { "id": "marker51", "type": "sacred-forests", "icon": "🌳", "name": "Alitovio Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -4.8608, 38.034 ] } },
            { "type": "Feature", "properties": { "id": "marker52", "type": "sacred-forests", "icon": "🌳", "name": "Gwydebomaber Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -5.1142, 37.3641 ] } },
            { "type": "Feature", "properties": { "id": "marker53", "type": "sacred-forests", "icon": "🌳", "name": "Turnak Forest", "legend": "A forest sacred to local Turchian Pantheon." }, "geometry": { "type": "Point", "coordinates": [ -5.6921, 37.234 ] } },
            { "type": "Feature", "properties": { "id": "marker54", "type": "sacred-forests", "icon": "🌳", "name": "Bemircish Forest", "legend": "A forest sacred to local Turchian Pantheon." }, "geometry": { "type": "Point", "coordinates": [ -6.3848, 37.2184 ] } },
            { "type": "Feature", "properties": { "id": "marker55", "type": "sacred-forests", "icon": "🌳", "name": "Aber Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -7.9246, 36.6379 ] } },
            { "type": "Feature", "properties": { "id": "marker56", "type": "sacred-forests", "icon": "🌳", "name": "Migran Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -10.3007, 34.0714 ] } },
            { "type": "Feature", "properties": { "id": "marker57", "type": "sacred-forests", "icon": "🌳", "name": "Malethiver Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -11.2733, 35.4049 ] } },
            { "type": "Feature", "properties": { "id": "marker58", "type": "sacred-forests", "icon": "🌳", "name": "Briarieville Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -11.7701, 35.3447 ] } },
            { "type": "Feature", "properties": { "id": "marker59", "type": "sacred-forests", "icon": "🌳", "name": "Nancres Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -12.8689, 36.4765 ] } },
            { "type": "Feature", "properties": { "id": "marker60", "type": "sacred-forests", "icon": "🌳", "name": "Lougengercel Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -12.9249, 37.2931 ] } },
            { "type": "Feature", "properties": { "id": "marker61", "type": "sacred-forests", "icon": "🌳", "name": "Chillepieds Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -12.7521, 38.3337 ] } },
            { "type": "Feature", "properties": { "id": "marker62", "type": "sacred-forests", "icon": "🌳", "name": "Souvilles Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -11.2434, 38.5216 ] } },
            { "type": "Feature", "properties": { "id": "marker64", "type": "sacred-forests", "icon": "🌳", "name": "Vigran Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -12.0907, 37.6165 ] } },
            { "type": "Feature", "properties": { "id": "marker65", "type": "sacred-forests", "icon": "🌳", "name": "Thoulontigran Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -11.0452, 37.7353 ] } },
            { "type": "Feature", "properties": { "id": "marker66", "type": "sacred-forests", "icon": "🌳", "name": "Vatilliers Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -11.2318, 36.7641 ] } },
            { "type": "Feature", "properties": { "id": "marker67", "type": "sacred-forests", "icon": "🌳", "name": "Sanze Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -10.4698, 37.8146 ] } },
            { "type": "Feature", "properties": { "id": "marker68", "type": "sacred-forests", "icon": "🌳", "name": "Courdisevanne Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -9.4466, 36.7621 ] } },
            { "type": "Feature", "properties": { "id": "marker69", "type": "sacred-forests", "icon": "🌳", "name": "Tiszajoszeg Forest", "legend": "A forest sacred to local Vengrian Deities." }, "geometry": { "type": "Point", "coordinates": [ -4.4413, 38.799 ] } },
            { "type": "Feature", "properties": { "id": "marker70", "type": "sacred-forests", "icon": "🌳", "name": "Llan Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -5.0409, 39.0379 ] } },
            { "type": "Feature", "properties": { "id": "marker71", "type": "sacred-forests", "icon": "🌳", "name": "Nodubinver Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -7.3467, 38.1796 ] } },
            { "type": "Feature", "properties": { "id": "marker72", "type": "sacred-forests", "icon": "🌳", "name": "Laberow Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -7.8593, 38.1563 ] } },
            { "type": "Feature", "properties": { "id": "marker73", "type": "sacred-forests", "icon": "🌳", "name": "Alain Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -9.1279, 38.5272 ] } },
            { "type": "Feature", "properties": { "id": "marker74", "type": "sacred-forests", "icon": "🌳", "name": "Treranver Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -9.1115, 37.9148 ] } },
            { "type": "Feature", "properties": { "id": "marker75", "type": "sacred-forests", "icon": "🌳", "name": "Ingne Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -10.4183, 38.4709 ] } },
            { "type": "Feature", "properties": { "id": "marker76", "type": "sacred-forests", "icon": "🌳", "name": "Nyeklos Forest", "legend": "A forest sacred to local Vengrian Deities." }, "geometry": { "type": "Point", "coordinates": [ -4.0118, 39.566 ] } },
            { "type": "Feature", "properties": { "id": "marker77", "type": "sacred-forests", "icon": "🌳", "name": "Lochilorlech Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -6.0859, 39.7369 ] } },
            { "type": "Feature", "properties": { "id": "marker78", "type": "sacred-forests", "icon": "🌳", "name": "Afesp Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -7.695, 39.6437 ] } },
            { "type": "Feature", "properties": { "id": "marker79", "type": "sacred-forests", "icon": "🌳", "name": "Indyrdaug Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -9.3537, 40.3619 ] } },
            { "type": "Feature", "properties": { "id": "marker80", "type": "sacred-forests", "icon": "🌳", "name": "Combleux Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -11.0481, 39.9371 ] } },
            { "type": "Feature", "properties": { "id": "marker81", "type": "sacred-forests", "icon": "🌳", "name": "Treabermor Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -10.396, 40.1507 ] } },
            { "type": "Feature", "properties": { "id": "marker82", "type": "sacred-forests", "icon": "🌳", "name": "Douche Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -12.2134, 39.6029 ] } },
            { "type": "Feature", "properties": { "id": "marker83", "type": "sacred-forests", "icon": "🌳", "name": "Bertosketa Forest", "legend": "A forest sacred to local Vengrian Deities." }, "geometry": { "type": "Point", "coordinates": [ -1.7601, 38.8937 ] } },
            { "type": "Feature", "properties": { "id": "marker85", "type": "sacred-forests", "icon": "🌳", "name": "Tabrad Forest", "legend": "A forest sacred to local Vengrian Deities." }, "geometry": { "type": "Point", "coordinates": [ 1.6585, 38.6592 ] } },
            { "type": "Feature", "properties": { "id": "marker86", "type": "sacred-forests", "icon": "🌳", "name": "Enbachringen Forest", "legend": "A forest sacred to local Shwazen Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 2.1685, 38.3454 ] } },
            { "type": "Feature", "properties": { "id": "marker87", "type": "sacred-forests", "icon": "🌳", "name": "Szemecsed Forest", "legend": "A forest sacred to local Vengrian Deities." }, "geometry": { "type": "Point", "coordinates": [ 2.8025, 38.4864 ] } },
            { "type": "Feature", "properties": { "id": "marker88", "type": "sacred-forests", "icon": "🌳", "name": "Tarida Forest", "legend": "A forest sacred to local Vengrian Deities." }, "geometry": { "type": "Point", "coordinates": [ 2.0682, 39.3214 ] } },
            { "type": "Feature", "properties": { "id": "marker89", "type": "sacred-forests", "icon": "🌳", "name": "Losaaki Forest", "legend": "A forest sacred to local Soumi Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 2.9578, 39.3821 ] } },
            { "type": "Feature", "properties": { "id": "marker90", "type": "sacred-forests", "icon": "🌳", "name": "Palvina Forest", "legend": "A forest sacred to local Soumi Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 1.7971, 40.2087 ] } },
            { "type": "Feature", "properties": { "id": "marker91", "type": "sacred-forests", "icon": "🌳", "name": "Viohlai Forest", "legend": "A forest sacred to local Soumi Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 3.2612, 40.3483 ] } },
            { "type": "Feature", "properties": { "id": "marker92", "type": "sacred-forests", "icon": "🌳", "name": "Antsa Forest", "legend": "A forest sacred to local Soumi Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 1.3063, 43.366 ] } },
            { "type": "Feature", "properties": { "id": "marker93", "type": "sacred-forests", "icon": "🌳", "name": "Ourila Forest", "legend": "A forest sacred to local Soumi Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 0.9005, 41.933 ] } },
            { "type": "Feature", "properties": { "id": "marker94", "type": "sacred-forests", "icon": "🌳", "name": "Rutio Forest", "legend": "A forest sacred to local Soumi Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 0.6025, 40.8913 ] } },
            { "type": "Feature", "properties": { "id": "marker95", "type": "sacred-forests", "icon": "🌳", "name": "Vehmaskog Forest", "legend": "A forest sacred to local Soumi Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 2.6283, 42.7408 ] } },
            { "type": "Feature", "properties": { "id": "marker96", "type": "sacred-forests", "icon": "🌳", "name": "Aldobereherdi Forest", "legend": "A forest sacred to local Vengrian Deities." }, "geometry": { "type": "Point", "coordinates": [ -4.1424, 41.1369 ] } },
            { "type": "Feature", "properties": { "id": "marker97", "type": "sacred-forests", "icon": "🌳", "name": "Virmalahka Forest", "legend": "A forest sacred to local Soumi Shamanism." }, "geometry": { "type": "Point", "coordinates": [ -2.2745, 42.3304 ] } },
            { "type": "Feature", "properties": { "id": "marker98", "type": "sacred-forests", "icon": "🌳", "name": "Lannvebodu Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -5.7693, 42.0456 ] } },
            { "type": "Feature", "properties": { "id": "marker99", "type": "sacred-forests", "icon": "🌳", "name": "Treabergeal Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -5.5349, 41.3027 ] } },
            { "type": "Feature", "properties": { "id": "marker100", "type": "sacred-forests", "icon": "🌳", "name": "Indyrhonddu Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -6.7648, 41.7039 ] } },
            { "type": "Feature", "properties": { "id": "marker101", "type": "sacred-forests", "icon": "🌳", "name": "Aberfha Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -8.5627, 41.2874 ] } },
            { "type": "Feature", "properties": { "id": "marker102", "type": "sacred-forests", "icon": "🌳", "name": "Noduron Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -8.1502, 42.8748 ] } },
            { "type": "Feature", "properties": { "id": "marker104", "type": "sacred-forests", "icon": "🌳", "name": "Inveroviobo Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -10.968383210405907, 41.983573551117829 ] } },
            { "type": "Feature", "properties": { "id": "marker105", "type": "sacred-forests", "icon": "🌳", "name": "Inbrigefenny Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -10.6459, 43.4301 ] } },
            { "type": "Feature", "properties": { "id": "marker106", "type": "sacred-forests", "icon": "🌳", "name": "Inverkip Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -11.0058, 42.7734 ] } },
            { "type": "Feature", "properties": { "id": "marker107", "type": "sacred-forests", "icon": "🌳", "name": "Broshige Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -9.6326, 41.8922 ] } },
            { "type": "Feature", "properties": { "id": "marker108", "type": "sacred-forests", "icon": "🌳", "name": "Ouletvillant Forest", "legend": "A forest sacred to local Luari Deities." }, "geometry": { "type": "Point", "coordinates": [ -13.0091, 41.0709 ] } },
            { "type": "Feature", "properties": { "id": "marker109", "type": "sacred-forests", "icon": "🌳", "name": "Aberporthney Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -9.7969, 41.2689 ] } },
            { "type": "Feature", "properties": { "id": "marker110", "type": "sacred-forests", "icon": "🌳", "name": "Invernogwe Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -9.432135738731652, 43.380829981564496 ] } },
            { "type": "Feature", "properties": { "id": "marker111", "type": "sacred-forests", "icon": "🌳", "name": "Chorkeinnse Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -7.3229, 43.9621 ] } },
            { "type": "Feature", "properties": { "id": "marker112", "type": "sacred-forests", "icon": "🌳", "name": "Vinnse Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -7.1606, 44.9835 ] } },
            { "type": "Feature", "properties": { "id": "marker113", "type": "sacred-forests", "icon": "🌳", "name": "Inver Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -7.216, 43.3641 ] } },
            { "type": "Feature", "properties": { "id": "marker114", "type": "sacred-forests", "icon": "🌳", "name": "Heart Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -6.1255, 44.2592 ] } },
            { "type": "Feature", "properties": { "id": "marker115", "type": "sacred-forests", "icon": "🌳", "name": "Inverskuno Forest", "legend": "A forest sacred to local Keltan Spirits." }, "geometry": { "type": "Point", "coordinates": [ -6.4224, 42.665 ] } },
            { "type": "Feature", "properties": { "id": "marker116", "type": "sacred-forests", "icon": "🌳", "name": "Noduri Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ -4.8826, 43.3738 ] } },
            { "type": "Feature", "properties": { "id": "marker117", "type": "sacred-forests", "icon": "🌳", "name": "Seiaquintia Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ -5.5714, 44.133 ] } },
            { "type": "Feature", "properties": { "id": "marker118", "type": "sacred-forests", "icon": "🌳", "name": "Tiszal Forest", "legend": "A forest sacred to local Vengrian Deities." }, "geometry": { "type": "Point", "coordinates": [ -4.1345, 42.2612 ] } },
            { "type": "Feature", "properties": { "id": "marker119", "type": "sacred-forests", "icon": "🌳", "name": "Cavimita Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ -4.3937, 44.4806 ] } },
            { "type": "Feature", "properties": { "id": "marker120", "type": "sacred-forests", "icon": "🌳", "name": "Agrandeme Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ -2.8965, 43.9767 ] } },
            { "type": "Feature", "properties": { "id": "marker121", "type": "sacred-forests", "icon": "🌳", "name": "Auririnavum Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ -2.3531, 45.464 ] } },
            { "type": "Feature", "properties": { "id": "marker122", "type": "sacred-forests", "icon": "🌳", "name": "Raurum Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ -3.7565, 45.3971 ] } },
            { "type": "Feature", "properties": { "id": "marker123", "type": "sacred-forests", "icon": "🌳", "name": "Aegorum Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ -1.8208, 45.1971 ] } },
            { "type": "Feature", "properties": { "id": "marker124", "type": "sacred-forests", "icon": "🌳", "name": "Glelonanori Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ -0.9678, 45.5602 ] } },
            { "type": "Feature", "properties": { "id": "marker125", "type": "sacred-forests", "icon": "🌳", "name": "Adfluenna Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ -0.4374, 45.4864 ] } },
            { "type": "Feature", "properties": { "id": "marker126", "type": "sacred-forests", "icon": "🌳", "name": "Velonia Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ -0.998, 44.6326 ] } },
            { "type": "Feature", "properties": { "id": "marker132", "type": "sacred-forests", "icon": "🌳", "name": "Comugus Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ 2.987, 44.6889 ] } },
            { "type": "Feature", "properties": { "id": "marker133", "type": "sacred-forests", "icon": "🌳", "name": "Jorinopio Forest", "legend": "A forest sacred to local Soumi Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 3.1941, 44.2402 ] } },
            { "type": "Feature", "properties": { "id": "marker134", "type": "sacred-forests", "icon": "🌳", "name": "Novernum Forest", "legend": "A forest sacred to local Romian Beliefs." }, "geometry": { "type": "Point", "coordinates": [ 3.226, 45.4495 ] } },
            { "type": "Feature", "properties": { "id": "marker135", "type": "sacred-forests", "icon": "🌳", "name": "Kagorod Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 3.7505, 45.4631 ] } },
            { "type": "Feature", "properties": { "id": "marker136", "type": "sacred-forests", "icon": "🌳", "name": "Vorod Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 4.8688, 44.8748 ] } },
            { "type": "Feature", "properties": { "id": "marker137", "type": "sacred-forests", "icon": "🌳", "name": "Korninetsk Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 5.5179, 44.3971 ] } },
            { "type": "Feature", "properties": { "id": "marker138", "type": "sacred-forests", "icon": "🌳", "name": "Verdepan Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 4.275, 43.8282 ] } },
            { "type": "Feature", "properties": { "id": "marker139", "type": "sacred-forests", "icon": "🌳", "name": "Belyilos Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 4.284, 41.5452 ] } },
            { "type": "Feature", "properties": { "id": "marker140", "type": "sacred-forests", "icon": "🌳", "name": "Jyliainivi Forest", "legend": "A forest sacred to local Soumi Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 3.4556, 43.1466 ] } },
            { "type": "Feature", "properties": { "id": "marker141", "type": "sacred-forests", "icon": "🌳", "name": "Tridychere Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 4.4479, 41.0259 ] } },
            { "type": "Feature", "properties": { "id": "marker142", "type": "sacred-forests", "icon": "🌳", "name": "Yubechi Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 4.2968, 40.6359 ] } },
            { "type": "Feature", "properties": { "id": "marker143", "type": "sacred-forests", "icon": "🌳", "name": "Prorod Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 4.182, 39.5466 ] } },
            { "type": "Feature", "properties": { "id": "marker145", "type": "sacred-forests", "icon": "🌳", "name": "Skagolyn Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 9.4347, 43.6592 ] } },
            { "type": "Feature", "properties": { "id": "marker147", "type": "sacred-forests", "icon": "🌳", "name": "Rybchkin Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 6.9498, 42.1346 ] } },
            { "type": "Feature", "properties": { "id": "marker148", "type": "sacred-forests", "icon": "🌳", "name": "Roslari Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 6.9627, 40.2262 ] } },
            { "type": "Feature", "properties": { "id": "marker149", "type": "sacred-forests", "icon": "🌳", "name": "Stasilnik Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 5.4011, 40.3563 ] } },
            { "type": "Feature", "properties": { "id": "marker150", "type": "sacred-forests", "icon": "🌳", "name": "Kobuzhi Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 5.1399, 40.1155 ] } },
            { "type": "Feature", "properties": { "id": "marker151", "type": "sacred-forests", "icon": "🌳", "name": "Slorod Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 4.8272, 38.7312 ] } },
            { "type": "Feature", "properties": { "id": "marker152", "type": "sacred-forests", "icon": "🌳", "name": "Samborno Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 5.6819, 39.1274 ] } },
            { "type": "Feature", "properties": { "id": "marker154", "type": "sacred-forests", "icon": "🌳", "name": "Bryns Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 5.7495, 37.7816 ] } },
            { "type": "Feature", "properties": { "id": "marker155", "type": "sacred-forests", "icon": "🌳", "name": "Metka Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 7.0161, 37.6029 ] } },
            { "type": "Feature", "properties": { "id": "marker156", "type": "sacred-forests", "icon": "🌳", "name": "Chech Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 7.3607, 37.4311 ] } },
            { "type": "Feature", "properties": { "id": "marker157", "type": "sacred-forests", "icon": "🌳", "name": "Kutesh Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 7.069, 38.6771 ] } },
            { "type": "Feature", "properties": { "id": "marker158", "type": "sacred-forests", "icon": "🌳", "name": "Mopolchesk Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 7.424, 39.3945 ] } },
            { "type": "Feature", "properties": { "id": "marker159", "type": "sacred-forests", "icon": "🌳", "name": "Holmny Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 8.5005, 39.4282 ] } },
            { "type": "Feature", "properties": { "id": "marker160", "type": "sacred-forests", "icon": "🌳", "name": "Vegodets Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 8.261, 38.3369 ] } },
            { "type": "Feature", "properties": { "id": "marker161", "type": "sacred-forests", "icon": "🌳", "name": "Shigobe Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 8.8152, 37.7641 ] } },
            { "type": "Feature", "properties": { "id": "marker162", "type": "sacred-forests", "icon": "🌳", "name": "Nolotsk Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 9.9473, 37.3971 ] } },
            { "type": "Feature", "properties": { "id": "marker163", "type": "sacred-forests", "icon": "🌳", "name": "Orodnobo Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 5.1552, 37.9212 ] } },
            { "type": "Feature", "properties": { "id": "marker164", "type": "sacred-forests", "icon": "🌳", "name": "Horovy Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 7.505, 38.5835 ] } },
            { "type": "Feature", "properties": { "id": "marker165", "type": "sacred-forests", "icon": "🌳", "name": "Mosch Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 8.9419, 39.1233 ] } },
            { "type": "Feature", "properties": { "id": "marker166", "type": "sacred-forests", "icon": "🌳", "name": "Zubkov Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 9.4466, 38.7291 ] } },
            { "type": "Feature", "properties": { "id": "marker167", "type": "sacred-forests", "icon": "🌳", "name": "Ganov Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 9.9862, 39.3094 ] } },
            { "type": "Feature", "properties": { "id": "marker168", "type": "sacred-forests", "icon": "🌳", "name": "Shinech Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 9.971, 38.232 ] } },
            { "type": "Feature", "properties": { "id": "marker169", "type": "sacred-forests", "icon": "🌳", "name": "Pronshesk Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 10.956, 38.6807 ] } },
            { "type": "Feature", "properties": { "id": "marker170", "type": "sacred-forests", "icon": "🌳", "name": "Hotrognia Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 10.5418, 38.3715 ] } },
            { "type": "Feature", "properties": { "id": "marker171", "type": "sacred-forests", "icon": "🌳", "name": "Golomiy Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 10.5127, 40.1023 ] } },
            { "type": "Feature", "properties": { "id": "marker172", "type": "sacred-forests", "icon": "🌳", "name": "Cachoga Forest", "legend": "A forest sacred to local Portuzian Faith." }, "geometry": { "type": "Point", "coordinates": [ 12.8349, 40.2082 ] } },
            { "type": "Feature", "properties": { "id": "marker173", "type": "sacred-forests", "icon": "🌳", "name": "Coentrarel Forest", "legend": "A forest sacred to local Portuzian Faith." }, "geometry": { "type": "Point", "coordinates": [ 13.4088, 40.5109 ] } },
            { "type": "Feature", "properties": { "id": "marker174", "type": "sacred-forests", "icon": "🌳", "name": "Moueira Forest", "legend": "A forest sacred to local Portuzian Faith." }, "geometry": { "type": "Point", "coordinates": [ 13.2415, 41.2409 ] } },
            { "type": "Feature", "properties": { "id": "marker175", "type": "sacred-forests", "icon": "🌳", "name": "Pedoqueixo Forest", "legend": "A forest sacred to local Portuzian Faith." }, "geometry": { "type": "Point", "coordinates": [ 13.4161, 42.1228 ] } },
            { "type": "Feature", "properties": { "id": "marker176", "type": "sacred-forests", "icon": "🌳", "name": "Seiranharin Forest", "legend": "A forest sacred to local Portuzian Faith." }, "geometry": { "type": "Point", "coordinates": [ 12.8169, 42.7825 ] } },
            { "type": "Feature", "properties": { "id": "marker177", "type": "sacred-forests", "icon": "🌳", "name": "Horvaoeira Forest", "legend": "A forest sacred to local Portuzian Faith." }, "geometry": { "type": "Point", "coordinates": [ 11.4008, 43.2434 ] } },
            { "type": "Feature", "properties": { "id": "marker178", "type": "sacred-forests", "icon": "🌳", "name": "Delyitin Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 9.5732, 42.1621 ] } },
            { "type": "Feature", "properties": { "id": "marker179", "type": "sacred-forests", "icon": "🌳", "name": "Obololo Forest", "legend": "A forest sacred to local Slovan Spirits." }, "geometry": { "type": "Point", "coordinates": [ 7.104, 44.6578 ] } },
            { "type": "Feature", "properties": { "id": "marker180", "type": "shelter", "icon": "🏡", "name": "Gernsbach Shelter", "legend": "<p>A Gernsbach Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -2.690227751871982, 37.38375185119267 ] } },
            { "type": "Feature", "properties": { "id": "marker182", "type": "shelter", "icon": "🏡", "name": "Dofengengen Shelter", "legend": "<p>A Dofengengen Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 1.1064, 35.0748 ] } },
            { "type": "Feature", "properties": { "id": "marker183", "type": "shelter", "icon": "🏡", "name": "Steilern Shelter", "legend": "<p>A Steilern Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 1.2854, 36.7739 ] } },
            { "type": "Feature", "properties": { "id": "marker184", "type": "shelter", "icon": "🏡", "name": "Tarida Shelter", "legend": "<p>A Tarida Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 2.3056, 39.5384 ] } },
            { "type": "Feature", "properties": { "id": "marker185", "type": "shelter", "icon": "🏡", "name": "Tridychere Shelter", "legend": "<p>A Tridychere Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 3.209585652996353, 41.33310753749727 ] } },
            { "type": "Feature", "properties": { "id": "marker186", "type": "shelter", "icon": "🏡", "name": "Verdepan Shelter", "legend": "<p>A Verdepan Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 5.121619927407833, 43.651582112357019 ] } },
            { "type": "Feature", "properties": { "id": "marker187", "type": "shelter", "icon": "🏡", "name": "Traconataqu Shelter", "legend": "<p>A Traconataqu Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 2.9747, 45.3039 ] } },
            { "type": "Feature", "properties": { "id": "marker188", "type": "shelter", "icon": "🏡", "name": "Obololo Shelter", "legend": "<p>A Obololo Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 8.3541, 44.401 ] } },
            { "type": "Feature", "properties": { "id": "marker189", "type": "shelter", "icon": "🏡", "name": "Bryns Shelter", "legend": "<p>A Bryns Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 6.025372170994446, 38.32692204999578 ] } },
            { "type": "Feature", "properties": { "id": "marker190", "type": "shelter", "icon": "🏡", "name": "Vegodets Shelter", "legend": "<p>A Vegodets Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 8.5773, 38.2027 ] } },
            { "type": "Feature", "properties": { "id": "marker191", "type": "shelter", "icon": "🏡", "name": "Cachoga Shelter", "legend": "<p>A Cachoga Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 11.675058032582337, 39.929313249289827 ] } },
            { "type": "Feature", "properties": { "id": "marker192", "type": "shelter", "icon": "🏡", "name": "Seiranharin Shelter", "legend": "<p>A Seiranharin Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 12.575556548330358, 42.18734189712481 ] } },
            { "type": "Feature", "properties": { "id": "marker193", "type": "shelter", "icon": "🏡", "name": "Mopolchesk Shelter", "legend": "<p>A Mopolchesk Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 7.3467, 39.8495 ] } },
            { "type": "Feature", "properties": { "id": "marker194", "type": "shelter", "icon": "🏡", "name": "Prorod Shelter", "legend": "<p>A Prorod Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ 4.670587838013853, 39.732213972828646 ] } },
            { "type": "Feature", "properties": { "id": "marker195", "type": "shelter", "icon": "🏡", "name": "Aber Shelter", "legend": "<p>A Aber Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -8.031262589027893, 36.313933709381715 ] } },
            { "type": "Feature", "properties": { "id": "marker196", "type": "shelter", "icon": "🏡", "name": "Vatilliers Shelter", "legend": "<p>A Vatilliers Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -11.302727311315069, 36.425090754739713 ] } },
            { "type": "Feature", "properties": { "id": "marker197", "type": "shelter", "icon": "🏡", "name": "Chillepieds Shelter", "legend": "<p>A Chillepieds Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -12.2851, 38.1643 ] } },
            { "type": "Feature", "properties": { "id": "marker198", "type": "shelter", "icon": "🏡", "name": "Douche Shelter", "legend": "<p>A Douche Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -12.108478919525488, 40.201267722026294 ] } },
            { "type": "Feature", "properties": { "id": "marker199", "type": "shelter", "icon": "🏡", "name": "Laberow Shelter", "legend": "<p>A Laberow Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -8.367491629161281, 38.27933142391727 ] } },
            { "type": "Feature", "properties": { "id": "marker200", "type": "shelter", "icon": "🏡", "name": "Aberfha Shelter", "legend": "<p>A Aberfha Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -7.7707, 40.7928 ] } },
            { "type": "Feature", "properties": { "id": "marker201", "type": "shelter", "icon": "🏡", "name": "Nodubinver Shelter", "legend": "<p>A Nodubinver Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -6.42418032257661, 38.594401674777906 ] } },
            { "type": "Feature", "properties": { "id": "marker202", "type": "shelter", "icon": "🏡", "name": "Invernogwe Shelter", "legend": "<p>A Invernogwe Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -9.08634218586888, 42.79511606684904 ] } },
            { "type": "Feature", "properties": { "id": "marker203", "type": "shelter", "icon": "🏡", "name": "Inverskuno Shelter", "legend": "<p>A Inverskuno Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -6.3265, 43.3146 ] } },
            { "type": "Feature", "properties": { "id": "marker204", "type": "shelter", "icon": "🏡", "name": "Raurum Shelter", "legend": "<p>A Raurum Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -3.202549490806715, 45.065104013068712 ] } },
            { "type": "Feature", "properties": { "id": "marker205", "type": "shelter", "icon": "🏡", "name": "Glelonanori Shelter", "legend": "<p>A Glelonanori Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -0.876767144853052, 45.171697941680186 ] } },
            { "type": "Feature", "properties": { "id": "marker206", "type": "shelter", "icon": "🏡", "name": "Cavimita Shelter", "legend": "<p>A Cavimita Shelter with food and drinks.</p>" }, "geometry": { "type": "Point", "coordinates": [ -3.821, 43.4948 ] } },
            { "type": "Feature", "properties": { "id": "marker207", "type": "castle", "icon": "🏰", "name": "Beres Castle", "legend": "<p>Remains of an old Beres Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ -9.9275, 35.0592 ] } },
            { "type": "Feature", "properties": { "id": "marker208", "type": "castle", "icon": "🏰", "name": "Douche Castle", "legend": "<p>Remains of an old Douche Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ -12.7704, 40.1455 ] } },
            { "type": "Feature", "properties": { "id": "marker209", "type": "castle", "icon": "🏰", "name": "Afesp Castle", "legend": "<p>Remains of an old Afesp Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ -6.9192, 40.1311 ] } },
            { "type": "Feature", "properties": { "id": "marker210", "type": "castle", "icon": "🏰", "name": "Chorkeinnse Castle", "legend": "<p>Remains of an old Chorkeinnse Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ -8.6846, 43.9427 ] } },
            { "type": "Feature", "properties": { "id": "marker211", "type": "castle", "icon": "🏰", "name": "Cavimita Castle", "legend": "<p>Remains of an old Cavimita Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ -4.4413, 43.8709 ] } },
            { "type": "Feature", "properties": { "id": "marker213", "type": "castle", "icon": "🏰", "name": "Traconataqu Castle", "legend": "<p>Remains of an old Traconataqu Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ 2.2582, 45.0146 ] } },
            { "type": "Feature", "properties": { "id": "marker214", "type": "castle", "icon": "🏰", "name": "Verdepan Castle", "legend": "<p>Remains of an old Verdepan Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ 4.7274, 42.714 ] } },
            { "type": "Feature", "properties": { "id": "marker215", "type": "castle", "icon": "🏰", "name": "Rybchkin Castle", "legend": "<p>Remains of an old Rybchkin Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ 8.1284, 42.5019 ] } },
            { "type": "Feature", "properties": { "id": "marker216", "type": "castle", "icon": "🏰", "name": "Golomiy Castle", "legend": "<p>Remains of an old Golomiy Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ 9.8735, 40.654 ] } },
            { "type": "Feature", "properties": { "id": "marker217", "type": "castle", "icon": "🏰", "name": "Cachoga Castle", "legend": "<p>Remains of an old Cachoga Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ 12.067, 39.1252 ] } },
            { "type": "Feature", "properties": { "id": "marker218", "type": "castle", "icon": "🏰", "name": "Holmny Castle", "legend": "<p>Remains of an old Holmny Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ 8.0334, 39.4825 ] } },
            { "type": "Feature", "properties": { "id": "marker219", "type": "castle", "icon": "🏰", "name": "Bertosketa Castle", "legend": "<p>Remains of an old Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ 0.4967, 39.573 ] } },
            { "type": "Feature", "properties": { "id": "marker220", "type": "castle", "icon": "🏰", "name": "Steilern Castle", "legend": "<p>Remains of an old Steilern Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ 1.7537, 36.0337 ] } },
            { "type": "Feature", "properties": { "id": "marker221", "type": "castle", "icon": "🏰", "name": "Vogtster Castle", "legend": "<p>Remains of an old Vogtster Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ -3.245, 35.2158 ] } },
            { "type": "Feature", "properties": { "id": "marker222", "type": "castle", "icon": "🏰", "name": "Aldobereherdi Castle", "legend": "<p>Remains of an old Aldobereherdi Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ -2.561, 41.1291 ] } },
            { "type": "Feature", "properties": { "id": "marker223", "type": "castle", "icon": "🏰", "name": "Jiorivi Castle", "legend": "<p>Remains of an old Jiorivi Castle.</p>" }, "geometry": { "type": "Point", "coordinates": [ 0.0065, 42.6793 ] } },
            { "type": "Feature", "properties": { "id": "marker224", "type": "sacred-forests", "icon": "🌳", "name": "Jiorivi Forest", "legend": "A forest sacred to local Soumi Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 0.1364, 42.2909 ] } },
            { "type": "Feature", "properties": { "id": "marker225", "type": "sacred-forests", "icon": "🌳", "name": "Karkka Forest", "legend": "A forest sacred to local Soumi Shamanism." }, "geometry": { "type": "Point", "coordinates": [ 0.9441, 42.8068 ] } }
        ]
    }

const markersData = [];
markers_data.features.forEach(feature =>{
    markersData.push({
        [feature.properties.name]: feature.geometry.coordinates
    });
});

markersData.sort((a,b) =>{
    let nameA = Object.keys(a)[0].toUpperCase();
    let nameB = Object.keys(b)[0].toUpperCase();

    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
});

for(const marker of markers_data.features){
    const el = document.createElement('div');
    el.className = 'marker';
    el.id = marker.properties.name;
    el.style.backgroundColor = 'white';
    el.style.width = '20px';
    el.style.height = '20px';
    el.style.backgroundSize = '100%';
    el.style.textAlign = 'center';

    if(marker.properties.type === 'sacred-forests'){
        el.innerText = marker.properties.icon;
    } else if(marker.properties.type === 'castle'){
        el.innerText = marker.properties.icon;
    } else {
        el.innerText = marker.properties.icon;
    }

    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

}



