

/*街道数据列表 小走势图，为24h销售额次数走势*/
var dom = document.getElementById("hmb-street_chart");
var data = [
    /*取最近24h的每小时累计播放量*/
    ["01", 116],
    ["02", 129],
    ["03", 135],
    ["04", 86],
    ["05", 73],
    ["06", 85],
    ["07", 73],
    ["08", 68],
    ["09", 92],
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

var dateList = data.map(function (item) {
    return item[0];
});
var valueList = data.map(function (item) {
    return item[1];
});


var street24hPlayList = document.querySelectorAll(".hmb-street_chart");
//获取每一个走势图div

street24hPlayList.forEach(function (item) {
    var street24hPlay = echarts.init(item);

    street24hPlayChart = {


        xAxis: {
            show: false,
            data: dateList
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
            data: valueList,
            itemStyle: {
                color: new echarts.graphic.LinearGradient( //渐变色
                    0, 0, 0, 1,
                    [{
                        offset: 0,
                        color: '#79E25C'
                    },
                    {
                        offset: 1,
                        color: '#00BBCD'
                    }
                    ]
                )
            }
        }
    };

    street24hPlay.setOption(street24hPlayChart);
});




//播放统计堆叠柱状图：近30天播放柱状图
var myChart1 = echarts.init(document.getElementById('chart1'));

var chart1 = {
    grid: {
        top: 12,
        left: '0',
        right: '0',
        bottom: '0',

    },
    tooltip: { //hover提示框
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: [{
        show: false,
        data: (function () {
            var now = new Date();
            var res = [];
            var len = 30; //30天
            while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                now = new Date(now - 30000);
            }
            return res;
        })(),

    }],

    yAxis: [{
        show: false,
        min: 0,
    }],
    series: [{
        name: '线下流量',
        type: 'bar',
        barWidth: 6,
        color: "#4fbb93",
        stack: '30天访问量',
        areaStyle: {
            normal: {}
        },
        data: (function () {
            var res = [];
            var len = 30;
            while (len--) {
                res.push(Math.round(Math.random() * 1500));
            }
            return res;
        })()
    }, {
        name: '线上流量',
        type: 'bar',
        barWidth: 6,
        color: "#4f7dda",
        stack: '30天访问量',
        areaStyle: {
            normal: {}
        },
        data: (function () {
            var res = [];
            var len = 30;
            while (len--) {
                res.push(Math.round(Math.random() * 300));
            }
            return res;
        })()
    }]
}
myChart1.setOption(chart1);


//宣传分类环形图：为宣传分类中包含的文件数目

var myChart2 = echarts.init(document.getElementById('chart2'));

var chart2 = {

    tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'//hover显示百分比
    },
    legend: [{
        orient: 'left',
        top: "center",
        left: 'left',
        itemWidth: 14,
        itemGap: 16,
        data: [ '服装类', '餐饮类', '饰品类','咖啡厅、酒吧'],
        itemStyle: {
            borderWidth: 0,
        },
        textStyle: {
            color: "#fff",
            fontSize: 14,
        }
    },{
        orient: 'right',
        top: "center",
        left: 'right',
        itemWidth: 14,
        itemGap: 16,
        data: [ '综合商超', '电子科技', '文化类','其他'],
        itemStyle: {
            borderWidth: 0,
        },
        textStyle: {
            color: "#fff",
            fontSize: 14,
        }
    }],
    graphic: [

        { //环形图中间添加文字
            type: 'text', //通过不同top值可以设置上下显示
            left: 'center',
            top: '38%',
            style: {
                text: '1234',
                textAlign: 'center',
                fill: '#fff', //文字的颜色
                width: 108,
                height: 30,
                fontSize: 32,
                fontFamily: "din"
            }
        }, {
            type: "text",
            left: 'center',
            top: "56%",
            style: {
                text: "商家总数",
                textAlign: "center",
                fill: "rgba(255,255,255,0.72)",
                fontSize: 14,
            }
        }
    ],
    series: [{
        type: 'pie',
        radius: ['70%', '90%'],
        left: 'center',
        avoidLabelOverlap: false,
        itemStyle: {
            borderColor: '#06080A',
            borderWidth: 1
        },
        label: {
            show: false,
            
        },

        data: [{
            value: 1048,
            name: '服装类'
        },
        {
            value: 735,
            name: '餐饮类'
        },
        {
            value: 580,
            name: '饰品类'
        },
        {
            value: 484,
            name: '咖啡厅、酒吧'
        },
        {
            value: 300,
            name: '综合商超'
        },
        {
            value: 484,
            name: '电子科技'
        },
        {
            value: 300,
            name: '文化类'
        },
        {
            value: 68,
            name: '其他'
        },
        ]
    }]
}
myChart2.setOption(chart2);



//场景分类横向柱状图：不同场景的商家数量

var myChart3 = echarts.init(document.getElementById('chart3'));

var chart3 = {
    grid: {
        top: '0',
        left: '0',
        right: '16',
        bottom: '0',
        containLabel: true
    },
    tooltip: { //hover提示框
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        show: false,
        type: 'value',

        axisLabel: {
            textStyle: {
                color: "#ffffff",
            }
        }
    },
    yAxis: {
        //show:false,
        type: 'category',
        data: ['美团', '饿了么', '淘宝', '大众点评', '拼多多'],
        axisLine: {
            show: false //隐藏坐标轴线
        },
        axisTick: {
            show: false //隐藏坐标刻度
        },
        axisLabel: {
            textStyle: {
                color: "#ffffff", //坐标文字颜色
            }
        },
    },
    series: [{
        barWidth: 12,
        label: { //柱状图尽头数字
            show: true,
            position: 'right',
            color: "#69E9FF",
            borderWidth: 0,
        },
        data: [{
            value: 120,
            itemStyle: {
                color: '#FF5656'
            }
        },
        {
            value: 160,
            itemStyle: {
                color: '#FFB12B'
            }
        },
        {
            value: 180,
            itemStyle: {
                color: '#007BE9'
            }
        },
        {
            value: 210,
            itemStyle: {
                color: '#5FADCD'
            }
        },
        {
            value: 240,
            itemStyle: {
                color: '#4EBA8F'
            }
        },


        ],
        type: 'bar'
    }]
};
myChart3.setOption(chart3);

//苏州市弹出层走势图
var shuzouChart = echarts.init(document.getElementById('dialog-shuzou-chart1'));
var shuzouChartOption = {
    grid: {
        top: 32,
        left: 64,
        right: 32,
        bottom: 40,

    },
    legend: {
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: { //hover提示框
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            textStyle: {
                color: "#ffffff", //坐标文字颜色
            }
        },

    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,.08)',
            }
        },
        axisLabel: {
            textStyle: {
                color: "#ffffff", //坐标文字颜色
            }
        },
    },
    dataset: {
        dimensions: ['product', '今日人流量', '商家数量', '24h销售额'],
        source: [{
            product: '西南商贸城',
            '今日人流量': 43728,
            '商家数量': 858,
            '24h销售额': 937083
        },
        {
            product: '富森美家居',
            '今日人流量': 83128,
            '商家数量': 734,
            '24h销售额': 551924
        },
        {
            product: '泸州万达广场',
            '今日人流量': 86403,
            '商家数量': 652,
            '24h销售额': 825335
        },
        {
            product: '华升宝龙广场',
            '今日人流量': 72442,
            '商家数量': 539,
            '24h销售额': 393464
        },
        {
            product: '科维商城',
            '今日人流量': 43728,
            '商家数量': 858,
            '24h销售额': 937025
        },
        {
            product: '洪达购物中心',
            '今日人流量': 83128,
            '商家数量': 734,
            '24h销售额': 551975
        },
        {
            product: '中茂购物中心',
            '今日人流量': 86403,
            '商家数量': 652,
            '24h销售额': 825335
        },
        {
            product: '龙马广场',
            '今日人流量': 72442,
            '商家数量': 339,
            '24h销售额': 393474
        }
        ,
        {
            product: '步步高广场',
            '今日人流量': 52442,
            '商家数量': 639,
            '24h销售额': 243434
        }
        ,
        {
            product: '宝龙广场',
            '今日人流量': 42442,
            '商家数量': 539,
            '24h销售额': 523423
        }
        ]
    },
    series: [{
        type: 'bar',
        barMaxWidth: 24,
    },
    {
        type: 'bar',
        barMaxWidth: 24,
    },
    {
        type: 'bar',
        barMaxWidth: 24,
    }
    ]
}
shuzouChart.setOption(shuzouChartOption);

//弹出层 - 盒子详情页 近一年播放走势图
var myChart4 = echarts.init(document.getElementById('chart4'));

var chart4 = {
    title: {
        left: 'center',
        text: '每日流量统计',
        textStyle: {
            color: '#fff',
            fontSize: '16'
        }
    },
    grid: {
        top: 16,
        left: 24,
        right: 24,
        bottom: 40,
    },
    toolbox: {
        show: true,
        feature: {
            magicType: {
                show: true,
                type: ['line', 'bar'],
            },
        },
        right: 24,
        iconStyle: {
            borderColor: '#fff'
        }
    },
    dataZoom: { //数据范围选择器
        show: true,
        start: 70,
        end: 100,
    },
    tooltip: { //hover提示框
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['线下流量', '线上流量'],
        left: 24,
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: [{
        show: false,
        data: (function () {
            var now = new Date();
            var res = [];
            var len = 365; //365天
            while (len--) {
                res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                now = new Date(now - 30000);
            }
            return res;
        })(),

    }],

    yAxis: [{
        show: false,
        min: 0,
    }],
    series: [{
        name: '线下流量',
        type: 'bar',
        barWidth: 'auto',
        barMaxWidth: 24,
        color: "#4fbb93",
        stack: '消息数量',
        areaStyle: {
            normal: {}
        },
        data: (function () {
            var res = [];
            var len = 365;
            while (len--) {
                res.push(Math.round(Math.random() * 1500));
            }
            return res;
        })()
    }, {
        name: '线上流量',
        type: 'bar',
        barWidth: 'auto',
        color: "#4f7dda",
        stack: '消息数量',
        areaStyle: {
            normal: {}
        },
        data: (function () {
            var res = [];
            var len = 365;
            while (len--) {
                res.push(Math.round(Math.random() * 300));
            }
            return res;
        })()
    }]
};
myChart4.setOption(chart4);

var dialogPlayChart1 = echarts.init(document.getElementById('dialog-play-chart1'));
dialogPlayChart1.setOption(chart4);

var dialogStreetChart1 = echarts.init(document.getElementById('dialog-bar1'));
dialogStreetChart1.setOption(chart4);

//播放统计弹出层一周播放时间分布

var hours = ['0点', '1点', '2点', '3点', '4点', '5点', '6点',
    '7点', '8点', '9点', '10点', '11点',
    '12点', '13点', '14点', '15点', '16点', '17点',
    '18点', '19点', '20点', '21点', '22点', '23点'
];
var days = ['周一', '周二', '周三',
    '周四', '周五', '周六', '周日'
];

var data = [
    [0, 0, 5],
    [0, 1, 1],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 0],
    [0, 5, 0],
    [0, 6, 0],
    [0, 7, 0],
    [0, 8, 0],
    [0, 9, 0],
    [0, 10, 0],
    [0, 11, 2],
    [0, 12, 4],
    [0, 13, 1],
    [0, 14, 1],
    [0, 15, 3],
    [0, 16, 4],
    [0, 17, 6],
    [0, 18, 4],
    [0, 19, 4],
    [0, 20, 3],
    [0, 21, 3],
    [0, 22, 2],
    [0, 23, 5],
    [1, 0, 7],
    [1, 1, 0],
    [1, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [1, 5, 0],
    [1, 6, 0],
    [1, 7, 0],
    [1, 8, 0],
    [1, 9, 0],
    [1, 10, 5],
    [1, 11, 2],
    [1, 12, 2],
    [1, 13, 6],
    [1, 14, 9],
    [1, 15, 11],
    [1, 16, 6],
    [1, 17, 7],
    [1, 18, 8],
    [1, 19, 12],
    [1, 20, 5],
    [1, 21, 5],
    [1, 22, 7],
    [1, 23, 2],
    [2, 0, 1],
    [2, 1, 1],
    [2, 2, 0],
    [2, 3, 0],
    [2, 4, 0],
    [2, 5, 0],
    [2, 6, 0],
    [2, 7, 0],
    [2, 8, 0],
    [2, 9, 0],
    [2, 10, 3],
    [2, 11, 2],
    [2, 12, 1],
    [2, 13, 9],
    [2, 14, 8],
    [2, 15, 10],
    [2, 16, 6],
    [2, 17, 5],
    [2, 18, 5],
    [2, 19, 5],
    [2, 20, 7],
    [2, 21, 4],
    [2, 22, 2],
    [2, 23, 4],
    [3, 0, 7],
    [3, 1, 3],
    [3, 2, 0],
    [3, 3, 0],
    [3, 4, 0],
    [3, 5, 0],
    [3, 6, 0],
    [3, 7, 0],
    [3, 8, 1],
    [3, 9, 0],
    [3, 10, 5],
    [3, 11, 4],
    [3, 12, 7],
    [3, 13, 14],
    [3, 14, 13],
    [3, 15, 12],
    [3, 16, 9],
    [3, 17, 5],
    [3, 18, 5],
    [3, 19, 10],
    [3, 20, 6],
    [3, 21, 4],
    [3, 22, 4],
    [3, 23, 1],
    [4, 0, 1],
    [4, 1, 3],
    [4, 2, 0],
    [4, 3, 0],
    [4, 4, 0],
    [4, 5, 1],
    [4, 6, 0],
    [4, 7, 0],
    [4, 8, 0],
    [4, 9, 2],
    [4, 10, 4],
    [4, 11, 4],
    [4, 12, 2],
    [4, 13, 4],
    [4, 14, 4],
    [4, 15, 14],
    [4, 16, 12],
    [4, 17, 1],
    [4, 18, 8],
    [4, 19, 5],
    [4, 20, 3],
    [4, 21, 7],
    [4, 22, 3],
    [4, 23, 0],
    [5, 0, 2],
    [5, 1, 1],
    [5, 2, 0],
    [5, 3, 3],
    [5, 4, 0],
    [5, 5, 0],
    [5, 6, 0],
    [5, 7, 0],
    [5, 8, 2],
    [5, 9, 0],
    [5, 10, 4],
    [5, 11, 1],
    [5, 12, 5],
    [5, 13, 10],
    [5, 14, 5],
    [5, 15, 7],
    [5, 16, 11],
    [5, 17, 6],
    [5, 18, 0],
    [5, 19, 5],
    [5, 20, 3],
    [5, 21, 4],
    [5, 22, 2],
    [5, 23, 0],
    [6, 0, 1],
    [6, 1, 0],
    [6, 2, 0],
    [6, 3, 0],
    [6, 4, 0],
    [6, 5, 0],
    [6, 6, 0],
    [6, 7, 0],
    [6, 8, 0],
    [6, 9, 0],
    [6, 10, 1],
    [6, 11, 0],
    [6, 12, 2],
    [6, 13, 1],
    [6, 14, 3],
    [6, 15, 4],
    [6, 16, 0],
    [6, 17, 0],
    [6, 18, 0],
    [6, 19, 0],
    [6, 20, 1],
    [6, 21, 2],
    [6, 22, 2],
    [6, 23, 6]
];
data = data.map(function (item) {
    return [item[1], item[0], item[2]];
});

option = {

    title: {
        left: 'center',
        text: '一周人流量时间分布',
        textStyle: {
            color: '#fff',
            fontSize: '16'
        }
    },
    tooltip: {
        position: 'top',
        formatter: function (params) {
            return params.value[2] + ' 次播放 于 ' + hours[params.value[0]] + ' of ' +
                days[params.value[1]];
        }
    },
    grid: {
        top: 32,
        left: 24,
        right: 24,
        bottom: 8,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,.08)',

            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false //隐藏坐标刻度
        },
        axisLabel: {
            textStyle: {
                color: "#ffffff", //坐标文字颜色
            }
        },

    },
    yAxis: {
        type: 'category',
        data: days,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false //隐藏坐标刻度
        },
        axisLabel: {
            textStyle: {
                color: "#ffffff", //坐标文字颜色
            }
        },
    },
    series: [{
        name: '播放',
        type: 'scatter',
        symbolSize: function (val) {
            return val[2] * 2;
        },
        data: data,
        animationDelay: function (idx) {
            return idx * 5;
        }
    }]
};


var dialogPlayChart2 = echarts.init(document.getElementById('dialog-play-chart2'), 'walden');

dialogPlayChart2.setOption(option);


//弹出层环形图示例 街道数据-顶部tab-数据报表
var dialogPie1 = echarts.init(document.getElementById('dialog-pie1'));

var dialogPieChart1 = {

    tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'//hover显示百分比
    },
    title: {
        text: '商家业态分布',
        left: 'center',
        bottom: 0,
        textStyle: {
            color: 'rgba(255,255,255,.48)',
            fontSize: 12
        }
    },

    series: [{
        type: 'pie',
        radius: ['60%', '90%'],
        left: 'center',
        bottom: 20,
        avoidLabelOverlap: false,

        label: {
            show: false,
        },

        data: [{
            value: 1048,
            name: '服装类'
        },
        {
            value: 735,
            name: '餐饮类'
        },
        {
            value: 580,
            name: '饰品类'
        },
        {
            value: 484,
            name: '咖啡厅、酒吧'
        },
        {
            value: 300,
            name: '综合商超'
        },
        {
            value: 484,
            name: '电子科技'
        },
        {
            value: 300,
            name: '文化类'
        },
        {
            value: 68,
            name: '其他'
        }
        ]
    }]
}


dialogPie1.setOption(dialogPieChart1);


//触发类型占比环形图
var dialogPie2 = echarts.init(document.getElementById('dialog-pie2'));

var dialogPieChart2 = {

    tooltip: {
        trigger: 'item',
    },
    title: {
        text: '30天人流量统计',
        left: 'center',
        bottom: 0,
        textStyle: {
            color: 'rgba(255,255,255,.48)',
            fontSize: 12
        }
    },

    series: [{
        type: 'pie',
        radius: ['60%', '90%'],
        left: 'center',
        bottom: 20,
        avoidLabelOverlap: false,

        label: {
            show: false,
        },

        data: [{
            value: 1048,
            name: '线下流量播放：'
        },
        {
            value: 135,
            name: '线上流量播放：'
        },

        ]
    }]
}
dialogPie2.setOption(dialogPieChart2);

//场景占比环形图
var dialogPie3 = echarts.init(document.getElementById('dialog-pie3'));

var dialogPieChart3 = {

    tooltip: {
        trigger: 'item',
    },
    title: {
        text: '电商分布',
        left: 'center',
        bottom: 0,
        textStyle: {
            color: 'rgba(255,255,255,.48)',
            fontSize: 12
        }
    },

    series: [{
        type: 'pie',
        radius: ['60%', '90%'],
        left: 'center',
        bottom: 20,
        avoidLabelOverlap: false,

        label: {
            show: false,
        },

        data: [{
            value: 1048,
            name: '拼多多'
        },
        {
            value: 135,
            name: '大众点评'
        }, {
            value: 1048,
            name: '淘宝'
        },
        {
            value: 135,
            name: '饿了么'
        },
        {
            value: 135,
            name: '美团'
        },

        ]
    }]
}
dialogPie3.setOption(dialogPieChart3);


//宣传分类弹出层 - 图1

var propagandaChart1 = echarts.init(document.getElementById('dialog-propaganda-chart1'));
var propagandaChartOption1 = {
    grid: {
        top: 32,
        left: 64,
        right: 32,
        bottom: 40,

    },
    legend: {
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: { //hover提示框
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            textStyle: {
                color: "#ffffff", //坐标文字颜色
            }
        },

    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,.08)',
            }
        },
        axisLabel: {
            textStyle: {
                color: "#ffffff", //坐标文字颜色
            }
        },
    },
    dataset: {
        dimensions: ['product','24h销售额(万元)','商家数量'],
        source: [{
            product: '服装类',
            '24h销售额(万元)': 43.728,
            '商家数量': 85,
        },
        {
            product: '餐饮类',
            '24h销售额(万元)': 83.128,
            '商家数量': 125,
            
        },
        {
            product: '饰品类',
            '24h销售额(万元)': 26.403,
            '商家数量': 65,

        },
        {
            product: '咖啡厅、酒吧',
            '24h销售额(万元)': 52.442,
            '商家数量': 53,

        },
        {
            product: '综合商超',
            '24h销售额(万元)': 83.728,
            '商家数量': 18,

        },
        {
            product: '电子科技',
            '24h销售额(万元)': 73.128,
            '商家数量': 73,

        },
        {
            product: '文化类',
            '24h销售额(万元)': 25.323,
            '商家数量': 31,

        },
        {
            product: '其他',
            '24h销售额(万元)': 67.854,
            '商家数量': 73,

        }
        ]
    },
    series: [{
        type: 'bar',
        barMaxWidth: 24,
    },
    {
        type: 'bar',
        barMaxWidth: 24,
    },
 
    ]
}
propagandaChart1.setOption(propagandaChartOption1);




//场景分类弹出层 - 场景分类就是主题分类，统计不同主题下对应的设备数量和播放数量

var themeChart1 = echarts.init(document.getElementById('dialog-theme-chart1'));
var themeChartOption1 = {
    grid: {
        top: 32,
        left: 64,
        right: 32,
        bottom: 40,

    },
    legend: {
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: { //hover提示框
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            textStyle: {
                color: "#ffffff", //坐标文字颜色
            }
        },

    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,.08)',
            }
        },
        axisLabel: {
            textStyle: {
                color: "#ffffff", //坐标文字颜色
            }
        },
    },
    dataset: {
        dimensions: ['product','商家数量','24h销售额（万元）'],
        source: [{
            product: '拼多多',
            '24h销售额（万元）': 23.728,
            '商家数量': 85,
        },
        {
            product: '大众点评',
            '24h销售额（万元）': 43.128,
            '商家数量': 73,
            
        },
        {
            product: '淘宝',
            '24h销售额（万元）': 16.403,
            '商家数量': 65,

        },
        {
            product: '饿了么',
            '24h销售额（万元）': 72.442,
            '商家数量': 53,

        },
        {
            product: '美团',
            '24h销售额（万元）': 43.728,
            '商家数量': 85,

        },
      
        ]
    },
    series: [{
        type: 'bar',
        barMaxWidth: 24,
    },
    {
        type: 'bar',
        barMaxWidth: 24,
    },
 
    ]
}
themeChart1.setOption(themeChartOption1);