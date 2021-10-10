{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": "container",
    "height": "600",
    "title": "Map of Australia Bushfires and its seriousness",
    "params": [{
        "name": "frp_above",
        "value": 0,
        "bind": {
            "input": "range",
            "min": 0,
            "max": 3000,
            "step": 0.1,
            "name": "Minimum fire radiative power (in Megawatts): "
        }
    }],
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

            "transform": [{ "filter": "datum.frp > frp_above" }],
            "mark": "circle",
            "encoding": {
                "longitude": { "field": "longitude", "type": "quantitative" },
                "latitude": { "field": "latitude", "type": "quantitative" },
                "size": { "field": "frp" },
                "color": { "value": "firebrick", "type": "quantitative" },
                "tooltip": [
                    { "field": "acq_date", "type": "temporal" },
                    { "field": "frp", "type": "quantitative" },
                    { "field": "longitude", "type": "quantitative" },
                    { "field": "latitude", "type": "quantitative" },
                    { "field": "daynight", "type": "nornimal" }

                ]
            }
        }
    ]

}