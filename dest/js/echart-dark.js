
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('dark', {
        "color": [
            "#1a81fa",
            "#3ade68",
            "#ffa51c",
            "#1dc6de",
            "#dbd30f",
            "#ff4242",
            "#9c4fff",
            "#7eba02",
            "#ef3bff",
            "#38a5ff"
        ],
        "backgroundColor": "transparent",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#ffffff"
            },
            "subtextStyle": {
                "color": "rgba(255,255,255,0.64)"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": "4"
            },
            "lineStyle": {
                "width": "3"
            },
            "symbolSize": "0",
            "symbol": "circle",
            "smooth": true
        },
        "radar": {
            "itemStyle": {
                "borderWidth": "4"
            },
            "lineStyle": {
                "width": "3"
            },
            "symbolSize": "0",
            "symbol": "circle",
            "smooth": true
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": "0",
                "barBorderColor": "rgba(255,0,0,0)"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(255,0,0,0)"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(255,0,0,0)"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(255,0,0,0)"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(255,0,0,0)"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(255,0,0,0)"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(255,0,0,0)"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(255,0,0,0)"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#ff006b",
                "color0": "#00d98a",
                "borderColor": "#ff006b",
                "borderColor0": "#00d98a",
                "borderWidth": "1"
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "rgba(255,0,0,0)"
            },
            "lineStyle": {
                "width": "1",
                "color": "rgba(255,255,255,0.64)"
            },
            "symbolSize": "0",
            "symbol": "circle",
            "smooth": true,
            "color": [
                "#1a81fa",
                "#3ade68",
                "#ffa51c",
                "#1dc6de",
                "#dbd30f",
                "#ff4242",
                "#9c4fff",
                "#7eba02",
                "#ef3bff",
                "#38a5ff"
            ],
            "label": {
                "color": "#ffffff"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#893448"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,178,72,1)",
                    "borderColor": "#eb8146",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(137,52,72)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#893448"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,178,72,1)",
                    "borderColor": "#eb8146",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(137,52,72)"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,0.16)"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,0.16)"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,0.64)"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "rgba(255,255,255,0.16)"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,0.16)"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,0.16)"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,0.64)"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "rgba(255,255,255,0.16)"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,0.16)"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,0.16)"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,0.64)"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "rgba(255,255,255,0.16)"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,0.16)"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(255,255,255,0.16)"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(255,255,255,0.64)"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "rgba(255,255,255,0.16)"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "rgba(255,255,255,0.48)"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "rgba(255,255,255,0.64)"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "rgba(255,255,255,0.64)"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "rgba(255,255,255,0.48)",
                    "width": 1
                },
                "crossStyle": {
                    "color": "rgba(255,255,255,0.48)",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#00b6a1",
                "width": "1"
            },
            "itemStyle": {
                "color": "#00b6a1",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "rgba(255,255,255,0.64)",
                "borderColor": "rgba(37,123,255,0)",
                "borderWidth": "0"
            },
            "checkpointStyle": {
                "color": "#257bff",
                "borderColor": "rgba(37,123,255,0)"
            },
            "label": {
                "color": "#257bff"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#257bff"
                },
                "controlStyle": {
                    "color": "rgba(255,255,255,0.64)",
                    "borderColor": "rgba(37,123,255,0)",
                    "borderWidth": "0"
                },
                "label": {
                    "color": "#257bff"
                }
            }
        },
        "visualMap": {
            "color": [
                "#257bff",
                "rgba(37,123,255,0.16)"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(255,255,255,0)",
            "dataBackgroundColor": "rgba(114,204,255,1)",
            "fillerColor": "rgba(114,204,255,0.2)",
            "handleColor": "#72ccff",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "color": "#ffffff"
            },
            "emphasis": {
                "label": {
                    "color": "#ffffff"
                }
            }
        }
    });
}));
