{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "url": "https://raw.githubusercontent.com/lucaszhang99/fit3179/main/fire_archive_M6_96619.csv"
    },


    "vconcat": [{
            "width": 1000,
            "height": "180",
            "mark": {
                "type": "bar",
                "tooltip": true
            },
            "encoding": {
                "x": {
                    "field": "acq_date",
                    "type": "temporal",
                    "axis": {
                        "title": "Aggregate Frp"
                    }

                },
                "y": {
                    "aggregate": "sum",
                    "field": "frp",
                    "type": "quantitative"

                },
                "color": { "value": "firebrick" }

            }
        },
        {
            "width": 1000,
            "height": "180",
            "mark": {
                "type": "line",
                "tooltip": true
            },
            "encoding": {
                "x": {
                    "field": "acq_date",
                    "type": "temporal",

                    "axis": {
                        "title": "Mean Frp"
                    }

                },
                "y": {
                    "aggregate": "mean",
                    "field": "frp",
                    "type": "quantitative"




                },
                "color": { "value": "firebrick" }

            }
        }, {
            "data": {
                "url": "https://raw.githubusercontent.com/lucaszhang99/fit3179/main/weather.csv"
            },
            "width": 1000,
            "height": "180",
            "mark": {
                "type": "line",
                "tooltip": true
            },
            "encoding": {
                "x": {
                    "field": "date",
                    "type": "temporal",

                    "axis": {
                        "title": "Maximum Temperture"
                    }

                },
                "y": {
                    "field": "temp",
                    "type": "quantitative"




                },
                "color": { "value": "firebrick" }

            }
        }
    ]

}