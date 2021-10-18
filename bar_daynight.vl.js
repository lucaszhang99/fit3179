{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A simple donut chart with embedded data.",
    "height": 200,
    "width": 400,
    "data": {
        "url": "https://raw.githubusercontent.com/lucaszhang99/fit3179/main/fire_archive_M6_96619.csv"

    },
    "mark": {
        "type": "arc",
        "innerRadius": 50,
        "tooltip": true
    },
    "encoding": {
        "theta": { "aggregate": "count", "field": "daynight", "type": "quantitative" },
        "color": { "field": "daynight", "scale": { "domain": ["D", "N"], "range": ["brown", "maroon"] } }
    }
}