{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "url": "https://raw.githubusercontent.com/lucaszhang99/fit3179/main/fire_archive_M6_96619.csv"
    },


    "vconcat": [{
            "width": "container",
            "height": "300",
            "mark": {
                "type": "bar",
                "tooltip": true
            },
            "encoding": {
                "x": {
                    "field": "acq_date",
                    "type": "temporal",
                    "axis": {
                        "title": ""
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
            "width": "container",
            "height": "120",
            "mark": {
                "type": "line",
                "tooltip": true
            },
            "encoding": {
                "x": {
                    "field": "acq_date",
                    "type": "temporal",

                    "axis": {
                        "title": ""
                    }

                },
                "y": {
                    "aggregate": "mean",
                    "field": "frp",
                    "type": "quantitative"

                },
                "color": { "value": "firebrick" }

            }
        }
    ]

}