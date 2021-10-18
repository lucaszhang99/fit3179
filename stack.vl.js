{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "url": "https://raw.githubusercontent.com/lucaszhang99/fit3179/main/fire_archive_M6_96619.csv"
    },
    "vconcat": [{
        "width": 480,
        "height": 160,
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
                "field": "brightness",
                "type": "quantitative"

            },
            "color": {
                "value": "firebrick"
            }

        }
    }, {
        "width": 480,
        "height": 60,
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
                "field": "brightness",
                "type": "quantitative"

            },
            "color": {
                "value": "firebrick"
            }

        }
    }]

}