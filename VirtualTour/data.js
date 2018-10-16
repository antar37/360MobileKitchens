var APP_DATA = {
  "scenes": [
    {
      "id": "0-mobile-fleet",
      "name": "Mobile Fleet",
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
          "yaw": -2.6121228416082936,
          "pitch": -0.05151081396415691,
          "rotation": 0,
          "target": "1-relief-station-main-area"
        },
        {
          "yaw": -0.7626710690048064,
          "pitch": 0.034165883126085816,
          "rotation": 0,
          "target": "4-kitchen-front"
        },
        {
          "yaw": 2.0191168907525636,
          "pitch": 0.004254505615429949,
          "rotation": 0,
          "target": "6-dishwasher-front"
        },
        {
          "yaw": -1.5634748845649646,
          "pitch": -0.021306482069478605,
          "rotation": 0,
          "target": "7-shower-main-area"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5405432394228118,
          "pitch": -0.34878040212969985,
          "title": "Mobile Kitchen",
          "text": "An industrial scale asset capable of preparing and serving 10,000 meals every 3 hours, custom-designed for the diverse needs of varied deployment missions."
        },
        {
          "yaw": -1.569004278869464,
          "pitch": -0.3197375707429657,
          "title": "Mobile Shower Trailer",
          "text": "Our shower trailer features 8-private suites each with a changing area, shower and private lock. &nbsp;Powered by tank-less water heaters, the trailer has configuration flexibility for optimized male/female utilization to support varied field missions, and features non-wood seamless wall, floor and ceiling construction that optimizes cleanliness while minimizing mold and mildew."
        },
        {
          "yaw": -2.6162845542448103,
          "pitch": -0.37576634182838475,
          "title": "Mobile Relief Station",
          "text": "Our luxury restroom trailers provide a rich warm environment that offers responders and evacuees a few basic home comforts in the field environment."
        },
        {
          "yaw": 1.8256614330337628,
          "pitch": -0.3691378418962863,
          "title": "Mobile Dishwashing Trailer",
          "text": "an industrial scale asset capable of cleaning 10-14K dishes per hour featuring a new efficient and reliable Hobart FT 1000 Flight Type dish machine."
        }
      ]
    },
    {
      "id": "1-relief-station-main-area",
      "name": "Relief Station Main Area",
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
          "yaw": -1.3779144882557102,
          "pitch": -0.027571459176833457,
          "rotation": 0,
          "target": "2-relief-station-stall"
        },
        {
          "yaw": -0.5262199368153944,
          "pitch": -0.14681462385722455,
          "rotation": 0,
          "target": "0-mobile-fleet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-relief-station-stall",
      "name": "Relief Station Stall",
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
          "yaw": 0.5180475000394118,
          "pitch": -0.24171416082047692,
          "rotation": 0,
          "target": "1-relief-station-main-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen-back",
      "name": "Kitchen Back",
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
        "yaw": 2.1311055592800177,
        "pitch": 0.25938950712190945,
        "fov": 1.7255996872092783
      },
      "linkHotspots": [
        {
          "yaw": 2.626364391369041,
          "pitch": -0.021473522194996875,
          "rotation": 0,
          "target": "4-kitchen-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen-front",
      "name": "Kitchen Front",
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
        "yaw": 2.120759460132195,
        "pitch": 0.4088345200911192,
        "fov": 1.7255996872092783
      },
      "linkHotspots": [
        {
          "yaw": 2.6858283059353427,
          "pitch": 0.026966577878742015,
          "rotation": 0,
          "target": "3-kitchen-back"
        },
        {
          "yaw": 1.8165964821614056,
          "pitch": 0.018249934057706696,
          "rotation": 0,
          "target": "0-mobile-fleet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dishwasher-back",
      "name": "Dishwasher Back",
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
        "yaw": -1.0506364847839187,
        "pitch": 0.1978332985943716,
        "fov": 1.7255996872092783
      },
      "linkHotspots": [
        {
          "yaw": -0.8548719204172848,
          "pitch": 0.11337934721606402,
          "rotation": 0,
          "target": "6-dishwasher-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dishwasher-front",
      "name": "Dishwasher Front",
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
        "yaw": -0.7805099492321244,
        "pitch": 0.01758449607520518,
        "fov": 1.7255996872092783
      },
      "linkHotspots": [
        {
          "yaw": -1.5555373618277528,
          "pitch": -0.10370367112091294,
          "rotation": 0,
          "target": "0-mobile-fleet"
        },
        {
          "yaw": -0.4724535427174388,
          "pitch": -0.03707318940833382,
          "rotation": 0,
          "target": "5-dishwasher-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-shower-main-area",
      "name": "Shower Main Area",
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
        "yaw": -2.4912854878747623,
        "pitch": -0.017761721721846868,
        "fov": 1.7255996872092783
      },
      "linkHotspots": [
        {
          "yaw": 2.958196545134026,
          "pitch": -0.12171305837597401,
          "rotation": 0,
          "target": "0-mobile-fleet"
        },
        {
          "yaw": -2.1061117416252966,
          "pitch": -0.093554891514529,
          "rotation": 0,
          "target": "8-shower-stall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-shower-stall",
      "name": "Shower Stall",
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
        "yaw": -0.6133644151709436,
        "pitch": -1.0331615961634988,
        "fov": 1.7255996872092783
      },
      "linkHotspots": [
        {
          "yaw": -0.11195155286439373,
          "pitch": -0.5183492008927697,
          "rotation": 6.283185307179586,
          "target": "7-shower-main-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
