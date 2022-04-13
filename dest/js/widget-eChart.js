//拖动drop:https://sortablejs.github.io/sortablejs/
const widgetBox = document.querySelectorAll('.widget-group');

widgetBox.forEach(function(item){
    new Sortable(item, {
        animation: 150,
        ghostClass: 'sortabling'
        });
})


/*资源消耗*/
var gasData = [
    ["01", 116],
    ["02", 129],
    ["03", 135],
    ["04", 186],
    ["05", 173],
    ["06", 185],
    ["07", 173],
    ["08", 168],
    ["09", 192],
    ["10", 130],
    ["11", 245],
    ["12", 139],
    ["13", 115],
    ["14", 111],
    ["15", 309],
    ["16", 206],
    ["17", 137],
    ["18", 128],
    ["19", 85],
    ["20", 94],
    ["21", 71],
    ["22", 106],
    ["23", 84],
    ["24", 93],

];

var gasDataList = gasData.map(function (item) {
    return item[0];
});
var gasValueList = gasData.map(function (item) {
    return item[1];
});


var waterData = [
    ["01", 129],
    ["02", 138],
    ["03", 127],
    ["04", 110],
    ["05", 147],
    ["06", 156],
    ["07", 166],
    ["08", 178],
    ["09", 170],
    ["10", 156],
    ["11", 142],
    ["12", 158],
    ["13", 189],
    ["14", 129],
    ["15", 209],
    ["16", 206],
    ["17", 237],
    ["18", 190],
    ["19", 185],
    ["20", 194],
    ["21", 171],
    ["22", 106],
    ["23", 184],
    ["24", 193],

];

var waterDataList = waterData.map(function (item) {
    return item[0];
});
var waterValueList = waterData.map(function (item) {
    return item[1];
});

var electricData = [
    ["01", 109],
    ["02", 128],
    ["03", 127],
    ["04", 100],
    ["05", 137],
    ["06", 156],
    ["07", 186],
    ["08", 218],
    ["09", 240],
    ["10", 186],
    ["11", 142],
    ["12", 178],
    ["13", 139],
    ["14", 169],
    ["15", 239],
    ["16", 106],
    ["17", 137],
    ["18", 120],
    ["19", 145],
    ["20", 234],
    ["21", 201],
    ["22", 206],
    ["23", 184],
    ["24", 193],

];

var electricDataList = electricData.map(function (item) {
    return item[0];
});
var electricValueList = electricData.map(function (item) {
    return item[1];
});

if (document.getElementById('natural-gas')) {
    var naturalGas = echarts.init(document.getElementById('natural-gas'), 'dark');
}
if (document.getElementById('tap-water')) {
    var tapWater = echarts.init(document.getElementById('tap-water'), 'dark');
}
if (document.getElementById('electric-power')) {
    var electricPower = echarts.init(document.getElementById('electric-power'), 'dark');
}



gasListTrend = {
    xAxis: {
        show: false,
        data: gasDataList
    },
    yAxis: {
        show: false,
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        containLabel: false
    },
    series: {
        type: 'line',
        showSymbol: false,
        data: gasValueList,
        lineStyle: {
            width: 1, //设置线条粗细
            color: '#FF4545'
        },
        areaStyle: {
            color: {
                //线性渐变
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(255, 109, 94, 0.48)', // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(255, 109, 94, 0)', // 100% 处的颜色
                }],
                global: false, // 缺省为 false
            },
        },
    }
};

waterListTrend = {
    xAxis: {
        show: false,
        data: waterDataList
    },
    yAxis: {
        show: false,
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        containLabel: false
    },
    series: {
        type: 'line',
        showSymbol: false,
        data: waterValueList,
        lineStyle: {
            width: 1, //设置线条粗细
            color: '#006DFF'
        },
        areaStyle: {
            color: {
                //线性渐变
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(60, 171, 245, 0.48)', // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(60, 171, 245, 0)', // 100% 处的颜色
                }],
                global: false, // 缺省为 false
            },
        },
    }
};


electricListTrend = {
    xAxis: {
        show: false,
        data: electricDataList
    },
    yAxis: {
        show: false,
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        containLabel: false
    },
    series: {
        type: 'line',
        showSymbol: false,
        data: electricValueList,
        lineStyle: {
            width: 1, //设置线条粗细
            color: '#00D2DE'
        },
        areaStyle: {
            color: {
                //线性渐变
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(0, 216, 222, 0.48)', // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(0, 216, 222, 0)', // 100% 处的颜色
                }],
                global: false, // 缺省为 false
            },
        },
    }
};

if(naturalGas){
    naturalGas.setOption(gasListTrend);
}
if(tapWater){
    tapWater.setOption(waterListTrend);
}
if(electricPower){
    electricPower.setOption(electricListTrend);
}




/*产值统计*/
if (document.getElementById('histogram-box')) {
    var histogram = echarts.init(document.getElementById('histogram-box'), 'dark');
}


histogramOption = {
    legend: {
        show: false
    },
    tooltip: {
        showDelay: '200ms',
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '8px',
        top: '8px',
        containLabel: true
    },
    dataset: {
        source: [
            ['product', '投资', '产值', '税收'],
            ['7月', 43.3, 85.8, 93.7],
            ['8月', 83.1, 73.4, 55.1],
            ['9月', 86.4, 65.2, 82.5],
            ['10月', 72.4, 53.9, 39.1],
            ['11月', 66.4, 45.2, 42.5],
            ['12月', 82.4, 63.9, 79.1],
        ]
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: "rgba(255, 255, 255, 0.08)", //x轴颜色和尺寸
                width: 1
            }
        }

    },
    yAxis: {

        axisLine: {
            lineStyle: {
                color: "rgba(255, 255, 255, 0.08)", //y轴颜色和尺寸
                width: 1
            }
        }
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {
            name: '投资',
            type: 'bar',
            barWidth: 8/*柱子宽度*/,
            barGap: "50%",/*柱子之间间距*/
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: "rgba(45,127,255,1)" // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: "rgba(45,127,255,0.24)" // 100% 处的颜色
                    }], false)
                }
            },

        },
        {
            name: '产值',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: "rgba(0,234,86,1)" // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: "rgba(0,234,86,0.24)" // 100% 处的颜色
                    }], false)
                }
            },
        },
        {
            name: '税收',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: "rgba(255,148,0,1)" // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: "rgba(255,148,0,0.24)" // 100% 处的颜色
                    }], false)
                }
            },
        },]
};

if(histogram){
    histogram.setOption(histogramOption);
}



/*产业分布*/
if (document.getElementById('Doughnut-chart')) {
    var Doughnut = echarts.init(document.getElementById('Doughnut-chart'), 'dark');
}


var doughnutOption = {

    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} {d}%' //hover显示百分比,{b}我标题，{c}为数据，{d}为百分比
    },
    legend: {
        show: false
    },

    graphic: [

        { //环形图中间添加文字
            type: 'text', //通过不同top值可以设置上下显示
            left: 'center',
            top: '38%',
            style: {
                text: '567',
                textAlign: 'center',
                fill: '#fff', //文字的颜色
                // width: 108,
                // height: 30,
                fontSize: 24,
                fontFamily: "din"
            }
        }, {
            type: "text",
            left: 'center',
            top: "56%",
            style: {
                text: "关联企业",
                textAlign: "center",
                fill: "rgba(255,255,255,0.72)",
                fontSize: 14,
            }
        }
    ],
    series: [{
        type: 'pie',
        radius: ['75%', '95%'], //设置环形中心
        avoidLabelOverlap: false,
        itemStyle: {
            borderColor: 'rgba(0,0,0,0.4)',
            borderWidth: 1
        },
        label: {
            show: false,

        },

        data: [{
            value: 8,
            name: '新能源汽车'
        },
        {
            value: 24,
            name: '医疗健康'
        },
        {
            value: 13,
            name: '芯片制造'
        },
        {
            value: 46,
            name: '电子信息技术'
        },
        {
            value: 21,
            name: '石油化工'
        },
        ]
    }]
}
if(Doughnut){
    Doughnut.setOption(doughnutOption);
}


/*空气质量*/
if (document.getElementById("gauge-chart")) {
    var Gauge = echarts.init(document.getElementById("gauge-chart"), 'dark');
}

var gaugeOption = {
    graphic: [

        { //环形图中间添加文字
            type: 'text', //通过不同top值可以设置上下显示
            left: 'center',
            top: '64%',
            style: {
                text: '100～200',
                textAlign: 'center',
                fill: '#fff', //文字的颜色
                // width: 108,
                // height: 30,
                fontSize: 12,
                fontFamily: "din"
            }
        }, {
            type: "text",
            left: 'center',
            top: "82%",
            style: {
                text: "中度污染",
                textAlign: "center",
                fill: '#fff', //文字的颜色
                fontSize: 12,
                textPadding: [3, 4],

                backgroundColor: '#D13C1F',
                borderRadius: 3,
            }
        }
    ],
    series: [{
        type: 'gauge',
        min: 0,
        max: 500,//取值范围，默认为0-100
        radius: '100%', //圆环大小
        pointer: {
            show: false //不显示指针
        },

        itemStyle: {
            color: new echarts.graphic.LinearGradient( //渐变色
                0, 0, 0, 1,
                [{
                    offset: 1,
                    color: '#0ADE00'
                },
                {
                    offset: 0,
                    color: '#D13C1F'
                }
                ]
            ),

        },
        progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,

        },
        axisLine: {
            roundCap: true,//底环圆角
            lineStyle: {
                width: 10,
                color: [
                    [1, '#fff']
                ],
                opacity: 0.08, //底环白色
            }
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        },
        data: [{
            value: 186,
            name: 'AQI',
            title: {
                offsetCenter: ['0%', '10px'],
                color: "rgba(255,255,255,.6)",
                fontSize: 12,
            },
            detail: {
                offsetCenter: ['0%', '-14px'],
                color: "#fff",
                fontSize: 40,
                fontFamily: "din",
                formatter: '{value}'
            }
        },],



    }]
};
if (Gauge) {
    Gauge.setOption(gaugeOption, true);
}



/*产值统计*/
if (document.getElementById('bar-chart')) {
    var bar = echarts.init(document.getElementById('bar-chart'), 'dark');
}
barOption = {
    legend: {
        show: false
    },
    tooltip: {
        showDelay: '200ms',
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '8px',
        top: '8px',
        containLabel: true
    },
    dataset: {
        source: [
            ['product', '状态'],
            ['遴选', 51],
            ['签约', 31],
            ['指标', 18],
            ['供地', 12],
            ['开工', 16],
            ['竣工', 18],
            ['投产', 24],
            ['达产', 29],
        ]
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: "rgba(255, 255, 255, 0.08)", //x轴颜色和尺寸
                width: 1
            }
        }

    },
    yAxis: {
        //网格样式
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0)",
                width: 1,
                type: 'solid'
            }
        },

        axisLine: {
            lineStyle: {
                color: "rgba(255, 255, 255, 0.08)", //y轴颜色和尺寸
                width: 1
            }
        }
    },

    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {
            name: '状态',
            type: 'bar',
            barWidth: 20/*柱子宽度*/,
            barGap: "100%",/*柱子之间间距*/
            label: {
                show: true,
                position: 'top',
                textBorderWidth: 0,
                color: '#fff'
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: "rgba(0,216,222,1)" // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: "rgba(0,216,222,0.24)" // 100% 处的颜色
                    }], false)
                }
            },

        }]
};

if (bar) { bar.setOption(barOption); }



/*雷达图*/

if (document.getElementById('Radar-chart')) {
    var Radar = echarts.init(document.getElementById('Radar-chart'), 'dark');
}
var RadarOption = {
    title: {
        text: 'Basic Radar Chart',
        show: false
    },
    legend: {
        show: false,

    },
    tooltip: { //hover显示提示
        trigger: 'item',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    radar: {
        //shape: 'circle', //圆形蛛网
        center: ['50%', '50%'],
        radius: 68,//尺寸，解决文字显示不全的问题
        nameGap: 5,//文字与雷达图的间距
        axisName: {
            formatter: '{value}',
            color: '#fff', //文字颜色
            fontSize: '11',
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(255, 255, 255, 0.04)', 'rgba(255, 255, 255, 0.08)',
                    'rgba(255, 255, 255, 0.04)', 'rgba(255, 255, 255, 0.08)'
                ], //圆圈填充颜色
                //shadowColor: 'rgba(0, 0, 0, 0.2)',
                //shadowBlur: 10
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.08)' //中间网线颜色
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.08)' //环行线颜色
            }
        },
        indicator: [{
            name: '维度1',
            max: 6500
        },
        {
            name: '维度2',
            max: 16000
        },
        {
            name: '维度3',
            max: 30000
        },
        {
            name: '维度4',
            max: 38000
        },
        {
            name: '维度5',
            max: 52000
        },

        ]
    },
    series: [{
        name: '统计1 vs 统计2',
        type: 'radar',

        // label: {
        //     show: true,
        //     formatter: function (params) {
        //         return params.value;//数字显示
        //     }
        // },
        // areaStyle: {
        //     color: '#fff'//填充色
        // },
        data: [{
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: '统计1',
            lineStyle: {
                //type: 'dashed',
                width: 1
            },
            areaStyle: {
                opacity: 0.1 //填充色透明度
            }
        },
        {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: '统计2',
            lineStyle: {
                //type: 'dashed',
                width: 1
            },
            areaStyle: {
                opacity: 0.1
            }
        }
        ]
    }]
};
if (Radar) {
    Radar.setOption(RadarOption);
}


/*实时趋势*/
if (document.getElementById('Dynamic-chart')) {
    var Dynamic = echarts.init(document.getElementById('Dynamic-chart'), 'dark');
}
var DynamicOption;


//假数据
function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    };
}
let data = [];
let now = new Date(1997, 9, 3);
let oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}

//配置项
DynamicOption = {
    title: {
        show: false,
    },
    tooltip: {
        show: false,
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
                date.getDate() +
                '/' +
                (date.getMonth() + 1) +
                '/' +
                date.getFullYear() +
                ' : ' +
                params.value[1]
            );
        },
        axisPointer: {
            animation: false
        }
    },

    graphic: [//自定义内容

        { //添加文字
            type: 'text', //通过不同top值可以设置上下显示
            left: 'center',
            top: '0%',
            left: '20px',
            style: {
                textAlign: 'center',
                fill: '#fff', //文字的颜色
                // width: 108,
                // height: 30,
                fontSize: 28,
                fontFamily: "din"
            }
        }, {
            type: "text",
            left: 'center',
            top: "28px",
            left: '20px',
            style: {
                text: "实时统计",
                textAlign: "center",
                fill: 'rgba(255,255,255,0.64)', //文字的颜色
                fontSize: 12,
            }
        }
    ],

    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top: '50px',
        containLabel: false
    },
    xAxis: {
        show: false,
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        show: false,
    },
    series: {
        type: 'line',
        showSymbol: false,
        data: gasValueList,
        lineStyle: {
            width: 1, //设置线条粗细
            color: '#FF4545'
        },
        areaStyle: {
            color: {
                //线性渐变
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(255, 109, 94, 0.48)', // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(255, 109, 94, 0)', // 100% 处的颜色
                }],
                global: false, // 缺省为 false
            },
        },
    }
};
setInterval(function () {
    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
    }
    if (Dynamic) {
        Dynamic.setOption({
            graphic: [//自定义内容

                { //添加文字
                    type: 'text', //通过不同top值可以设置上下显示
                    style: {
                        text: Math.round(value),
                    }
                }
            ],
            series: [
                {
                    data: data
                }
            ]
        });
    }
}, 1000);

if (Dynamic) {
    Dynamic.setOption(DynamicOption);
}



/*漏斗图*/
if (document.getElementById('Funnel-chart')) {
    var Funnel = echarts.init(document.getElementById('Funnel-chart'), 'dark');
}
FunnelOption = {
    title: {
        show: false,
        text: 'Funnel'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        show: false,
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },

    legend: {
        show: false,

    },
    series: [
        {
            name: 'Funnel',
            type: 'funnel',
            left: 'center',
            top: 20,//位置
            bottom: 20,
            width: '90%',
            min: 0,
            // max: 100,
            minSize: '0%',
            //maxSize: '100%',
            sort: 'none',//排序方式
            gap: 1,
            label: {
                //show: true,
                position: 'inside',
                //position: 'left',
                formatter: '{b}\n{c}'

            },
            labelLine: {
                length: 16,//指示线
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {

            },
            emphasis: {
                label: {
                    fontSize: 20,

                }
            },
            data: [
                { value: 80, name: '遴选' },
                { value: 60, name: '签约' },
                { value: 40, name: '指标' },
                { value: 23, name: '供地' },
                { value: 14, name: '开工' }
            ]
        }
    ]
};

if(Funnel){
    Funnel.setOption(FunnelOption);
}



/*产业产值，直方图，矩阵图*/



if (document.getElementById('treemap-chart')) {
    var treemap = echarts.init(document.getElementById('treemap-chart'), 'dark');
}
var treemapOption;

treemapOption = {

    series: [
        {
            type: 'treemap',

            leafDepth: 3,//呈现层级，若为1加载时仅展开一层，接下来的每一层通过单击进入，如上面的效果图所示，
            //每一层级呈现的样式
            levels: [
                {
                    itemStyle: {
                        normal: {
                            borderColor: 'transparent',
                            borderWidth: 4,
                            gapWidth: 4
                        }
                    }
                }],
            data: [
                {
                    name: 'nodeA',
                    value: 10,
                    children: [
                        {
                            name: 'nodeAa',
                            value: 4
                        },
                        {
                            name: 'nodeAb',
                            value: 6
                        }
                    ]
                },
                {
                    name: 'nodeB',
                    value: 20,
                    children: [
                        {
                            name: 'nodeBa',
                            value: 20,
                            children: [
                                {
                                    name: 'nodeBa1',
                                    value: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'nodeC',
                    value: 20,
                    children: [
                        {
                            name: 'nodeCa',
                            value: 20,
                            children: [
                                {
                                    name: 'nodeCa1',
                                    value: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'nodeD',
                    value: 20,
                    children: [
                        {
                            name: 'nodeDa',
                            value: 20,
                            children: [
                                {
                                    name: 'nodeDa1',
                                    value: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'nodeE',
                    value: 23,
                    children: [
                        {
                            name: 'nodeDa',
                            value: 18,
                            children: [
                                {
                                    name: 'nodeDa1',
                                    value: 20
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    ]
};

if(treemap){
    treemap.setOption(treemapOption);
}



/*开工项目，小环形图*/
//环形图：

if (document.querySelectorAll('.smallDoughnut-chart')) {
    var smallDoughnut = document.querySelectorAll('.smallDoughnut-chart');
}

smallDoughnut.forEach(function (item) {
    echarts.init(item, 'dark').setOption({
        series: [{
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            radius: '100%', //圆环大小
            pointer: {
                show: false //不显示指针
            },
            itemStyle: {
                color: '#00B0BA',

            },
            progress: {
                show: true,
                overlap: false,
                roundCap: true,
                clip: false,

            },
            axisLine: {
                lineStyle: {
                    width: 6,
                    color: [
                        [1, '#fff']
                    ],
                    opacity: 0.08, //底环白色
                }
            },
            splitLine: {
                show: false,

            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            },
            data: [{
                value: Math.ceil(Math.random() * 100),//0 到 100随机数
                name: '已交地',
                title: {
                    show: false,
                },
                detail: {
                    offsetCenter: ['0%', '2'],
                    color: '#00B0BA',
                    fontSize: 12,
                    fontFamily: "din",
                    formatter: '{value}%'
                }
            },],


        }]

    });
})

