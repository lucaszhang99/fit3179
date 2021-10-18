{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data": {
        "url": "https://raw.githubusercontent.com/lucaszhang99/fit3179/main/fire_archive_M6_96619.csv"
    },
    "vconcat": [{
            "height": 500,
            "width": 800,
            "title": "A geographic representation of Australian fires from space",
            "projection": { "type": "equirectangular" },
            "layer": [{
                    "data": {
                        "url": "https://raw.githubusercontent.com/lucaszhang99/fit3179/main/STE_2016_AUST.json",
                        "format": { "type": "topojson", "feature": "STE_2016_AUST" }
                    },
                    "mark": { "type": "geoshape", "fill": "lightgray", "stroke": "white" }
                },
                {
                    "transform": [{ "filter": { "param": "time_brush" } }],
                    "encoding": {
                        "longitude": { "field": "longitude", "type": "quantitative" },
                        "latitude": { "field": "latitude", "type": "quantitative" },
                        "color": {
                            "field": "frp",
                            "type": "quantitative",
                            "scale": {
                                "type": "threshold",
                                "domain": [5, 10, 20, 30, 50, 100, 200, 300, 500, 1000],
                                "range": [
                                    "#fff7ec",
                                    "#fee8c8",
                                    "#fdd49e",
                                    "#fdbb84",
                                    "#fc8d59",
                                    "#ef6548",
                                    "#d7301f",
                                    "#b30000",
                                    "#7f0000"
                                ]
                            }
                        },
                        "tooltip": [
                            { "field": "accquired date", "type": "temporal" },
                            { "field": "frp", "type": "quantitative" },
                            { "field": "satellite", "type": "nominal" }
                        ]
                    },
                    "layer": [
                        { "mark": { "type": "circle", "opacity": 0.3, "size": 15 } },
                        {
                            "transform": [{
                                    "window": [{ "op": "rank", "as": "ranking" }],
                                    "sort": [{ "field": "frp", "order": "descending" }]
                                },
                                { "filter": "datum.ranking == 1" },
                                {
                                    "calculate": "'The worst fire of given period: ' + datum['frp']",
                                    "as": "text_annotation"
                                }
                            ],
                            "mark": { "type": "text", "align": "left", "dx": 4 },
                            "encoding": { "text": { "field": "text_annotation" } }
                        }
                    ]
                }
            ]
        },
        {
            "width": 800,
            "height": 60,
            "mark": "line",
            "title": "Use this line chart to filter out the data based on time",
            "params": [{
                "name": "time_brush",
                "select": { "type": "interval", "encodings": ["x"] }
            }],
            "encoding": {
                "x": {
                    "field": "acq_date",
                    "timeUnit": "yearmonthdate",
                    "axis": { "title": "", "format": "%x" }
                },
                "y": {
                    "aggregate": "count",
                    "axis": { "tickCount": 10, "grid": false },
                    "title": "Count"
                }
            }
        }
    ]
}