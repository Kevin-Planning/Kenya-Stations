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
var format_KenyaFinalPlan_3 = new ol.format.GeoJSON();
var features_KenyaFinalPlan_3 = format_KenyaFinalPlan_3.readFeatures(json_KenyaFinalPlan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KenyaFinalPlan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KenyaFinalPlan_3.addFeatures(features_KenyaFinalPlan_3);
var lyr_KenyaFinalPlan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KenyaFinalPlan_3, 
                style: style_KenyaFinalPlan_3,
                popuplayertitle: 'Kenya Final Plan',
                interactive: true,
    title: 'Kenya Final Plan<br />\
    <img src="styles/legend/KenyaFinalPlan_3_0.png" /> Petrol Station(196)<br />\
    <img src="styles/legend/KenyaFinalPlan_3_1.png" /> Active 6 Racks(125)<br />\
    <img src="styles/legend/KenyaFinalPlan_3_2.png" /> Mega Sation(58)<br />\
    <img src="styles/legend/KenyaFinalPlan_3_3.png" /> Fast Charger(58)<br />\
    <img src="styles/legend/KenyaFinalPlan_3_4.png" /> FOFO(40)<br />\
    <img src="styles/legend/KenyaFinalPlan_3_5.png" /> Rubis(39)<br />\
    <img src="styles/legend/KenyaFinalPlan_3_6.png" /> Active-Fast Charger(37)<br />\
    <img src="styles/legend/KenyaFinalPlan_3_7.png" /> Transfomer(6)<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_kenyanewscores_1.setVisible(true);lyr_kenyaadmin_2.setVisible(true);lyr_KenyaFinalPlan_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_kenyanewscores_1,lyr_kenyaadmin_2,lyr_KenyaFinalPlan_3];
lyr_kenyanewscores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_kenyaadmin_2.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_pcode': 'adm1_pcode', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Hub_Count': 'Hub_Count', 'Swap Site_count': 'Swap Site_count', 'Active': 'Active', 'Active-Zero Swaps': 'Active-Zero Swaps', 'Not Started': 'Not Started', 'WIP ': 'WIP ', 'Drop_Count': 'Drop_Count', });
lyr_KenyaFinalPlan_3.set('fieldAliases', {'Station ID': 'Station ID', 'Station Name': 'Station Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Region': 'Region', 'County': 'County', 'Station type v2': 'Station type v2', 'Status': 'Status', 'Business Model': 'Business Model', 'Rack Capacity': 'Rack Capacity', });
lyr_kenyanewscores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_kenyaadmin_2.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_pcode': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Hub_Count': 'Range', 'Swap Site_count': 'Range', 'Active': 'Range', 'Active-Zero Swaps': 'Range', 'Not Started': 'Range', 'WIP ': 'Range', 'Drop_Count': 'Range', });
lyr_KenyaFinalPlan_3.set('fieldImages', {'Station ID': 'TextEdit', 'Station Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Region': 'TextEdit', 'County': 'TextEdit', 'Station type v2': 'TextEdit', 'Status': 'TextEdit', 'Business Model': 'TextEdit', 'Rack Capacity': 'Range', });
lyr_kenyanewscores_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'no label', });
lyr_kenyaadmin_2.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_pcode': 'no label', 'area_sqkm': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', 'Hub_Count': 'no label', 'Swap Site_count': 'no label', 'Active': 'no label', 'Active-Zero Swaps': 'no label', 'Not Started': 'no label', 'WIP ': 'no label', 'Drop_Count': 'no label', });
lyr_KenyaFinalPlan_3.set('fieldLabels', {'Station ID': 'no label', 'Station Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Region': 'no label', 'County': 'no label', 'Station type v2': 'no label', 'Status': 'no label', 'Business Model': 'no label', 'Rack Capacity': 'no label', });
lyr_KenyaFinalPlan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});