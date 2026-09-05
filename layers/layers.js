var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google (Satellite)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_kenyanewscores_1 = new ol.format.GeoJSON();
var features_kenyanewscores_1 = format_kenyanewscores_1.readFeatures(json_kenyanewscores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenyanewscores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenyanewscores_1.addFeatures(features_kenyanewscores_1);
var lyr_kenyanewscores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenyanewscores_1, 
                style: style_kenyanewscores_1,
                popuplayertitle: 'kenya-new-scores',
                interactive: true,
    title: 'kenya-new-scores<br />\
    <img src="styles/legend/kenyanewscores_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/kenyanewscores_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/kenyanewscores_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/kenyanewscores_1_3.png" /> 3 - 4<br />\
    <img src="styles/legend/kenyanewscores_1_4.png" /> 4 - 5<br />' });
var format_kenyaadmin_2 = new ol.format.GeoJSON();
var features_kenyaadmin_2 = format_kenyaadmin_2.readFeatures(json_kenyaadmin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenyaadmin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenyaadmin_2.addFeatures(features_kenyaadmin_2);
var lyr_kenyaadmin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenyaadmin_2, 
                style: style_kenyaadmin_2,
                popuplayertitle: 'kenya - admin',
                interactive: true,
                title: '<img src="styles/legend/kenyaadmin_2.png" /> kenya - admin'
            });
var format_MegaStations58_3 = new ol.format.GeoJSON();
var features_MegaStations58_3 = format_MegaStations58_3.readFeatures(json_MegaStations58_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MegaStations58_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MegaStations58_3.addFeatures(features_MegaStations58_3);
var lyr_MegaStations58_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MegaStations58_3, 
                style: style_MegaStations58_3,
                popuplayertitle: 'Mega Stations (58)',
                interactive: true,
                title: '<img src="styles/legend/MegaStations58_3.png" /> Mega Stations (58)'
            });
var format_FastChargers95_4 = new ol.format.GeoJSON();
var features_FastChargers95_4 = format_FastChargers95_4.readFeatures(json_FastChargers95_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FastChargers95_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FastChargers95_4.addFeatures(features_FastChargers95_4);
var lyr_FastChargers95_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FastChargers95_4, 
                style: style_FastChargers95_4,
                popuplayertitle: 'Fast Chargers (95)',
                interactive: true,
                title: '<img src="styles/legend/FastChargers95_4.png" /> Fast Chargers (95)'
            });
var format_PetrolStations406_5 = new ol.format.GeoJSON();
var features_PetrolStations406_5 = format_PetrolStations406_5.readFeatures(json_PetrolStations406_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetrolStations406_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetrolStations406_5.addFeatures(features_PetrolStations406_5);
var lyr_PetrolStations406_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetrolStations406_5, 
                style: style_PetrolStations406_5,
                popuplayertitle: 'Petrol Stations (406)',
                interactive: true,
                title: '<img src="styles/legend/PetrolStations406_5.png" /> Petrol Stations (406)'
            });
var format_ActiveStations496_6 = new ol.format.GeoJSON();
var features_ActiveStations496_6 = format_ActiveStations496_6.readFeatures(json_ActiveStations496_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActiveStations496_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActiveStations496_6.addFeatures(features_ActiveStations496_6);
var lyr_ActiveStations496_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActiveStations496_6, 
                style: style_ActiveStations496_6,
                popuplayertitle: 'Active Stations (496)',
                interactive: true,
                title: '<img src="styles/legend/ActiveStations496_6.png" /> Active Stations (496)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_kenyanewscores_1.setVisible(true);lyr_kenyaadmin_2.setVisible(true);lyr_MegaStations58_3.setVisible(true);lyr_FastChargers95_4.setVisible(true);lyr_PetrolStations406_5.setVisible(true);lyr_ActiveStations496_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_kenyanewscores_1,lyr_kenyaadmin_2,lyr_MegaStations58_3,lyr_FastChargers95_4,lyr_PetrolStations406_5,lyr_ActiveStations496_6];
lyr_kenyanewscores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_kenyaadmin_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_pcode': 'adm1_pcode', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Hub_Count': 'Hub_Count', 'Swap Site_count': 'Swap Site_count', 'Active': 'Active', 'Active-Zero Swaps': 'Active-Zero Swaps', 'Not Started': 'Not Started', 'WIP ': 'WIP ', 'Drop_Count': 'Drop_Count', });
lyr_MegaStations58_3.set('fieldAliases', {'Station ID': 'Station ID', 'Station Name': 'Station Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Region': 'Region', 'County': 'County', 'Station type v2': 'Station type v2', 'Status': 'Status', 'Business Model': 'Business Model', 'Rack Capacity': 'Rack Capacity', });
lyr_FastChargers95_4.set('fieldAliases', {'Station ID': 'Station ID', 'Station Name': 'Station Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Region': 'Region', 'County': 'County', 'Station type v2': 'Station type v2', 'Status': 'Status', 'Business Model': 'Business Model', 'Rack Capacity': 'Rack Capacity', });
lyr_PetrolStations406_5.set('fieldAliases', {'Station ID': 'Station ID', 'Station Name': 'Station Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Region': 'Region', 'County': 'County', 'Station type v2': 'Station type v2', 'Status': 'Status', 'Business Model': 'Business Model', 'Rack Capacity': 'Rack Capacity', });
lyr_ActiveStations496_6.set('fieldAliases', {'Station ID': 'Station ID', 'Station Name': 'Station Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Planned Racks': 'Planned Racks', 'Plan': 'Plan', 'Status': 'Status', 'Business Model': 'Business Model', });
lyr_kenyanewscores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_kenyaadmin_2.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_pcode': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Hub_Count': 'Range', 'Swap Site_count': 'Range', 'Active': 'Range', 'Active-Zero Swaps': 'Range', 'Not Started': 'Range', 'WIP ': 'Range', 'Drop_Count': 'Range', });
lyr_MegaStations58_3.set('fieldImages', {'Station ID': 'TextEdit', 'Station Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Region': 'TextEdit', 'County': 'TextEdit', 'Station type v2': 'TextEdit', 'Status': 'TextEdit', 'Business Model': 'TextEdit', 'Rack Capacity': 'Range', });
lyr_FastChargers95_4.set('fieldImages', {'Station ID': 'TextEdit', 'Station Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Region': 'TextEdit', 'County': 'TextEdit', 'Station type v2': 'TextEdit', 'Status': 'TextEdit', 'Business Model': 'TextEdit', 'Rack Capacity': 'Range', });
lyr_PetrolStations406_5.set('fieldImages', {'Station ID': 'TextEdit', 'Station Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Region': 'TextEdit', 'County': 'TextEdit', 'Station type v2': 'TextEdit', 'Status': 'TextEdit', 'Business Model': 'TextEdit', 'Rack Capacity': 'Range', });
lyr_ActiveStations496_6.set('fieldImages', {'Station ID': 'TextEdit', 'Station Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Planned Racks': 'TextEdit', 'Plan': 'TextEdit', 'Status': 'TextEdit', 'Business Model': 'TextEdit', });
lyr_kenyanewscores_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_kenyaadmin_2.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_pcode': 'no label', 'area_sqkm': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', 'Hub_Count': 'no label', 'Swap Site_count': 'no label', 'Active': 'no label', 'Active-Zero Swaps': 'no label', 'Not Started': 'no label', 'WIP ': 'no label', 'Drop_Count': 'no label', });
lyr_MegaStations58_3.set('fieldLabels', {'Station ID': 'no label', 'Station Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Region': 'no label', 'County': 'no label', 'Station type v2': 'no label', 'Status': 'no label', 'Business Model': 'no label', 'Rack Capacity': 'no label', });
lyr_FastChargers95_4.set('fieldLabels', {'Station ID': 'no label', 'Station Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Region': 'no label', 'County': 'no label', 'Station type v2': 'no label', 'Status': 'no label', 'Business Model': 'no label', 'Rack Capacity': 'no label', });
lyr_PetrolStations406_5.set('fieldLabels', {'Station ID': 'no label', 'Station Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Region': 'no label', 'County': 'no label', 'Station type v2': 'no label', 'Status': 'no label', 'Business Model': 'no label', 'Rack Capacity': 'no label', });
lyr_ActiveStations496_6.set('fieldLabels', {'Station ID': 'no label', 'Station Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Planned Racks': 'no label', 'Plan': 'no label', 'Status': 'no label', 'Business Model': 'no label', });
lyr_ActiveStations496_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});