var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/page/:pagenum', function (req, res) {

    var pagenum = req.params.pagenum;

    if (pagenum >= planetsArr.length) {
        res.status(404).send('404 Not found');
    } else {
        res.send(planetsArr[pagenum]);
    }
});

var planetsArr = [{
        "page": "1",
        "items": [{
            "name": "Mercury",
            "image_url": "http://users.aber.ac.uk/atc/dems/globe180.jpg",
            "description": "Planet"
        }, {
            "name": "Venus",
            "image_url": "http://www.creativebloq.com/web-design/best-404-pages-812505.png",
            "description": "Planet"
        }, {
            "name": null,
            "image_url": "http://earthobservatory.nasa.gov/resources/blogs/earthday_day_lrg.jpg",
            "description": "Planet"
        }, {
            "name": "Mars",
            "image_url": "http://mars.nasa.gov/images/mars-globe-valles-marineris-enhanced.jpg",
            "description": "Planet"
        }, {
            "name": "Jupiter",
            "image_url": "https://img-new.cgtrader.com/items/175928/jupiter_8k_3d_model_obj_3ds_blend_dae_1b3b02e7-68eb-4c79-84fc-6992be901f20.jpg"
        }, {
            "name": "Saturn",
            "image_url": "http://apod.nasa.gov/apod/image/0412/saturn_malmerCassini_5m.jpg",
            "description": "Planet"
        }, {
            "name": "Uranus",
            "image_url": "http://photojournal.jpl.nasa.gov/jpeg/PIA07800.jpg",
            "description": "Planet"
        }, {
            "name": "Neptune",
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
            "description": "Planet"
        }]
    },

    {
        "page": "2",
        "items": [{
            "name": "Callisto",
            "image_url": "http://www.lpi.usra.edu/galileoAnniv/img/hiRes/call-hemi.jpg",
            "description": "Jupiter moon"
        }, {
            "name": "Enceladus",
            "image_url": "http://www.nasa.gov/sites/default/files/enceladus_fractures_0.jpg",
            "description": "Saturn moon. May have oceans beneath the surface."
        }, {
            "name": "Milkey Way",
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Wide_Field_Imager_view_of_a_Milky_Way_look-alike_NGC_6744.jpg",
            "description": "Milkey Way galaxy"
        }, {
            "name": "Andromeda",
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Andromeda_galaxy_2.jpg",
            "description": "Andromeda galaxy"
        }]
    },

    {
        "page": "3",
        "items": [{
            "name": "Supernova",
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Keplers_supernova.jpg",
            "description": "Supernova explosion illustration, meassured by Kepler."
        }, {
            "name": "Black hole",
            "image_url": "https://blog.sciencemuseum.org.uk/wp-content/uploads/2015/11/Interstellar-%c2%a9-Warner-Bros.-Entertainment-Inc.-and-Paramount-Pictures-Corporation.jpeg",
            "description": "Interstellar's black hole, Gargantua"
        }, {
            "name": "Wormhole",
            "image_url": "http://orig14.deviantart.net/4ad6/f/2012/181/5/c/pen_in_a_wormhole_by_keytokill-d55gtn6.jpg",
            "description": "Wormhole illustration"
        }]
    }
];

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});