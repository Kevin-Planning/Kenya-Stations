var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google (Satellite)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_kenyaadmin_1 = new ol.format.GeoJSON();
var features_kenyaadmin_1 = format_kenyaadmin_1.readFeatures(json_kenyaadmin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenyaadmin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenyaadmin_1.addFeatures(features_kenyaadmin_1);
var lyr_kenyaadmin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenyaadmin_1, 
                style: style_kenyaadmin_1,
                popuplayertitle: 'kenya - admin',
                interactive: true,
                title: '<img src="styles/legend/kenyaadmin_1.png" /> kenya - admin'
            });
var format_MegaStations_2 = new ol.format.GeoJSON();
var features_MegaStations_2 = format_MegaStations_2.readFeatures(json_MegaStations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MegaStations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MegaStations_2.addFeatures(features_MegaStations_2);
var lyr_MegaStations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MegaStations_2, 
                style: style_MegaStations_2,
                popuplayertitle: 'Mega Stations',
                interactive: true,
                title: '<img src="styles/legend/MegaStations_2.png" /> Mega Stations'
            });
var format_NonMegaStations_3 = new ol.format.GeoJSON();
var features_NonMegaStations_3 = format_NonMegaStations_3.readFeatures(json_NonMegaStations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NonMegaStations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NonMegaStations_3.addFeatures(features_NonMegaStations_3);
var lyr_NonMegaStations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NonMegaStations_3, 
                style: style_NonMegaStations_3,
                popuplayertitle: 'Non-Mega Stations',
                interactive: true,
    title: 'Non-Mega Stations<br />\
    <img src="styles/legend/NonMegaStations_3_0.png" /> Active 6 Racks<br />\
    <img src="styles/legend/NonMegaStations_3_1.png" /> Active-Fast Charger<br />\
    <img src="styles/legend/NonMegaStations_3_2.png" /> Fast Charger<br />\
    <img src="styles/legend/NonMegaStations_3_3.png" /> FOFO<br />\
    <img src="styles/legend/NonMegaStations_3_4.png" /> Petrol Station<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_kenyaadmin_1.setVisible(true);lyr_MegaStations_2.setVisible(true);lyr_NonMegaStations_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_kenyaadmin_1,lyr_MegaStations_2,lyr_NonMegaStations_3];
lyr_kenyaadmin_1.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_pcode': 'adm1_pcode', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Hub_Count': 'Hub_Count', 'Swap Site_count': 'Swap Site_count', 'Active': 'Active', 'Active-Zero Swaps': 'Active-Zero Swaps', 'Not Started': 'Not Started', 'WIP ': 'WIP ', 'Drop_Count': 'Drop_Count', });
lyr_MegaStations_2.set('fieldAliases', {'City': 'City', 'Region': 'Region', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Number of Racks': 'Number of Racks', });
lyr_NonMegaStations_3.set('fieldAliases', {'Station ID': 'Station ID', 'Station Name': 'Station Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Planned Racks': 'Planned Racks', 'Plan': 'Plan', 'Status': 'Status', 'Business Model': 'Business Model', 'Matched ID': 'Matched ID', 'Matched Name': 'Matched Name', 'Matched Distance': 'Matched Distance', 'Comments': 'Comments', 'Staion type': 'Staion type', 'Region': 'Region', 'County': 'County', 'Station type v2': 'Station type v2', });
lyr_kenyaadmin_1.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_pcode': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Hub_Count': 'Range', 'Swap Site_count': 'Range', 'Active': 'Range', 'Active-Zero Swaps': 'Range', 'Not Started': 'Range', 'WIP ': 'Range', 'Drop_Count': 'Range', });
lyr_MegaStations_2.set('fieldImages', {'City': 'TextEdit', 'Region': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Number of Racks': 'Range', });
lyr_NonMegaStations_3.set('fieldImages', {'Station ID': 'TextEdit', 'Station Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Planned Racks': 'TextEdit', 'Plan': 'TextEdit', 'Status': 'TextEdit', 'Business Model': 'TextEdit', 'Matched ID': 'TextEdit', 'Matched Name': 'TextEdit', 'Matched Distance': 'TextEdit', 'Comments': 'TextEdit', 'Staion type': 'TextEdit', 'Region': 'TextEdit', 'County': 'TextEdit', 'Station type v2': 'TextEdit', });
lyr_kenyaadmin_1.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_pcode': 'no label', 'area_sqkm': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', 'Hub_Count': 'no label', 'Swap Site_count': 'no label', 'Active': 'no label', 'Active-Zero Swaps': 'no label', 'Not Started': 'no label', 'WIP ': 'no label', 'Drop_Count': 'no label', });
lyr_MegaStations_2.set('fieldLabels', {'City': 'no label', 'Region': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Number of Racks': 'no label', });
lyr_NonMegaStations_3.set('fieldLabels', {'Station ID': 'no label', 'Station Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Planned Racks': 'no label', 'Plan': 'no label', 'Status': 'no label', 'Business Model': 'no label', 'Matched ID': 'no label', 'Matched Name': 'no label', 'Matched Distance': 'no label', 'Comments': 'no label', 'Staion type': 'no label', 'Region': 'no label', 'County': 'no label', 'Station type v2': 'no label', });
lyr_NonMegaStations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});