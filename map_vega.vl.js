{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": "container",
    "height": "600",
    "title": "Map of Australia Bushfires and its seriousness",
    "params": [{
        "name": "brightness_above",
        "value": 0,
        "bind": {
            "input": "range",
            "min": 0,
            "max": 400,
            "step": 10,
            "name": "Minimum brightness of space images: "
        }
    }],
    "layer": [{
            "data": {
                "url": "https://raw.githubusercontent.com/lucaszhang99/fit3179/main/STE_2016_AUST.json",
                "format": {
                    "type": "topojson",
                    "feature": "STE_2016_AUST"
                }
            },
            "projection": {
                "type": "equirectangular"
            },
            "mark": {
                "type": "geoshape",
                "fill": "lightgray",
                "stroke": "white"
            }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/lucaszhang99/fit3179/main/fire_archive_M6_96619.csv"
            },
            "projection": {
                "type": "equirectangular"
            },

            "transform": [{
                "filter": "datum.brightness > brightness_above"
            }],
            "mark": "circle",
            "encoding": {
                "longitude": {
                    "field": "longitude",
                    "type": "quantitative"
                },
                "latitude": {
                    "field": "latitude",
                    "type": "quantitative"
                },
                "size": { "value": 4 },
                "color": {
                    "field": "brightness",
                    "type": "quantitative",
                    "scale": {
                        "type": "threshold",
                        "domain": [250, 275, 300, 325, 350],
                        "range": ["#fef0d9",
                            "#fdd49e",
                            "#fdbb84",
                            "#fc8d59",
                            "#e34a33",
                            "#b30000"
                        ]
                    }
                },
                "tooltip": [{
                        "field": "accquired date",
                        "type": "temporal"
                    },
                    {
                        "field": "brightness",
                        "type": "quantitative"
                    },
                    {
                        "field": "longitude",
                        "type": "quantitative"
                    },
                    {
                        "field": "latitude",
                        "type": "quantitative"
                    },
                    {
                        "field": "day or night",
                        "type": "nornimal"
                    }

                ]
            }
        }
    ]

}