var APP_DATA = {
  "scenes": [
    {
      "id": "0-dishwashing-trailer-back",
      "name": "Dishwashing Trailer Back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.48953913229448887,
          "pitch": -0.03373719056508406,
          "rotation": 0,
          "target": "1-dishwashing-trailer-front"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.21109326402320683,
          "pitch": 0.433371736079156,
          "title": "Four 24' x 72' Stainless Work Tables",
          "text": ""
        }
      ]
    },
    {
      "id": "1-dishwashing-trailer-front",
      "name": "Dishwashing Trailer Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5141264731801591,
          "pitch": -0.03132302589619407,
          "rotation": 0,
          "target": "0-dishwashing-trailer-back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.032085129205217555,
          "pitch": -0.3964940189806345,
          "title": "2017 Hobart Flight Type Dish Machine, Full Size",
          "text": "Hobart FT1000S+Base"
        },
        {
          "yaw": 2.8397378079081363,
          "pitch": 0.3591452198036933,
          "title": "3 Compartment Pot &amp; Pan Sink",
          "text": ""
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
