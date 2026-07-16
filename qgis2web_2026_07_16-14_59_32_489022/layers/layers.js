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
var format_OperationalStations_2 = new ol.format.GeoJSON();
var features_OperationalStations_2 = format_OperationalStations_2.readFeatures(json_OperationalStations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OperationalStations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OperationalStations_2.addFeatures(features_OperationalStations_2);
var lyr_OperationalStations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OperationalStations_2, 
                style: style_OperationalStations_2,
                popuplayertitle: 'Operational Stations',
                interactive: true,
                title: '<img src="styles/legend/OperationalStations_2.png" /> Operational Stations'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_kenyaadmin_1.setVisible(true);lyr_OperationalStations_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_kenyaadmin_1,lyr_OperationalStations_2];
lyr_kenyaadmin_1.set('fieldAliases', {'fid': 'fid', 'adm2_name': 'adm2_name', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_pcode': 'adm1_pcode', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Hub_Count': 'Hub_Count', 'Swap Site_count': 'Swap Site_count', 'Active': 'Active', 'Active-Zero Swaps': 'Active-Zero Swaps', 'Not Started': 'Not Started', 'WIP ': 'WIP ', 'Drop_Count': 'Drop_Count', });
lyr_OperationalStations_2.set('fieldAliases', {'Station ID': 'Station ID', 'Station Name': 'Station Name', 'Country': 'Country', 'State': 'State', 'City': 'City', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Status': 'Status', 'Business Model': 'Business Model', });
lyr_kenyaadmin_1.set('fieldImages', {'fid': 'TextEdit', 'adm2_name': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_pcode': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Hub_Count': 'Range', 'Swap Site_count': 'Range', 'Active': 'Range', 'Active-Zero Swaps': 'Range', 'Not Started': 'Range', 'WIP ': 'Range', 'Drop_Count': 'Range', });
lyr_OperationalStations_2.set('fieldImages', {'Station ID': 'TextEdit', 'Station Name': 'TextEdit', 'Country': 'TextEdit', 'State': 'TextEdit', 'City': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Status': 'TextEdit', 'Business Model': 'TextEdit', });
lyr_kenyaadmin_1.set('fieldLabels', {'fid': 'no label', 'adm2_name': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_pcode': 'no label', 'area_sqkm': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', 'Hub_Count': 'no label', 'Swap Site_count': 'no label', 'Active': 'no label', 'Active-Zero Swaps': 'no label', 'Not Started': 'no label', 'WIP ': 'no label', 'Drop_Count': 'no label', });
lyr_OperationalStations_2.set('fieldLabels', {'Station ID': 'no label', 'Station Name': 'no label', 'Country': 'no label', 'State': 'no label', 'City': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Status': 'inline label - always visible', 'Business Model': 'no label', });
lyr_OperationalStations_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});