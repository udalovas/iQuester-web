const Q = require('q');

function RoutesService() {

    var self = this;

    self.getRoute = function () {
        return Q.fcall(function () {
            return [
                {
                    'id': 1,
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-0.0944819, 51.5114946]
                    },
                    'properties': {
                        'title': 'Guildhall Art Gallery',
                        'marker-size': 'small'
                    }
                },
                {
                    'id': 2,
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-0.0901903, 51.5135912]
                    },
                    'properties': {
                        'title': 'Market'
                    }
                },
                {
                    'id': 3,
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-0.1346576, 51.5110595]
                    },
                    'properties': {
                        'title': 'The National Gallery'
                    }
                },
                {
                    'id': 4,
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-0.1387775, 51.5008021]
                    },
                    'properties': {
                        'title': 'Royal Academy of Arts'
                    }
                }];
        })
    }
}

module.exports = new RoutesService();
