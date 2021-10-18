{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 400,
    "height": 400,
    "title": "How accurate is all bushfire space imageing, measured in confidence level",
    "layer": [{
            "data": {
                "url": "https://raw.githubusercontent.com/lucaszhang99/fit3179/main/STE_2016_AUST.json",
                "format": { "type": "topojson", "feature": "STE_2016_AUST" }
            },
            "projection": { "type": "equirectangular" },
            "mark": { "type": "geoshape", "fill": "lightgray", "stroke": "white" }
        },
        {
            "data": {
                "url": "https://raw.githubusercontent.com/lucaszhang99/fit3179/main/fire_archive_M6_96619.csv"
            },
            "projection": { "type": "equirectangular" },
            "mark": "point",
            "encoding": {
                "longitude": { "field": "longitude", "type": "quantitative" },
                "latitude": { "field": "latitude", "type": "quantitative" },
                "size": { "value": 1 },
                "color": { "field": "confidence", "type": "quantitative" },
                "tooltip": [
                    { "field": "accquired date", "type": "temporal" },
                    { "field": "confidence", "type": "quantitative" },
                    { "field": "frp", "type": "quantitative" },
                    { "field": "longitude", "type": "quantitative" },
                    { "field": "latitude", "type": "quantitative" },
                    { "field": "day or night", "type": "nornimal" }

                ]
            }
        }
    ]

}