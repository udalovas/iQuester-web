'use strict';

// introduce dependency injection?
const mapboxgl = require('mapbox-gl/dist/mapbox-gl');
const $ = require('jquery');
const routesService = require('../services/routesService');

/**
 * Responsible for user interaction with map and map life-cycle
 *
 * https://www.mapbox.com/help/markers/
 * https://www.mapbox.com/blog/custom-markers-mapboxgl/
 */
function MapController() {

    var INIT_ZOOM = 12,
        INIT_POINT = [-0.1304877, 51.508929]; // center of London

    var self = this,
        map,
        markers = {};

    self.init = function (config) {

        // init
        mapboxgl.accessToken = config.accessToken;
        map = new mapboxgl.Map({
            container: 'map',
            style: config.style,
            center: INIT_POINT,
            zoom: INIT_ZOOM
        });

        // controls
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(new mapboxgl.GeolocateControl());

        // markers
        map.on('load', function () {
            routesService.getRoute().then(function(route) {
                route.forEach(function (point) {
                    markers[point.id] = new mapboxgl.Marker(createMarkerElement(point))
                        .setLngLat(point.geometry.coordinates)
                        .addTo(map);
                })
            });
        });

        function createMarkerElement(point) {
            var markerElement = document.createElement('div');
            markerElement.className = 'marker';
            $(markerElement).attr('data-text', point.properties.title);
            $(markerElement).attr('data-latlon', point.geometry.coordinates);
            return markerElement;
        }
    }
}

module.exports = new MapController();