
window.onload = function () {
    //切换横向滚动，引用方式class=”horwheel“
    const horwheels = document.querySelectorAll('.horwheel');
    horwheels.forEach(function (item) {
        horwheel(item);
    });
    MUIinput();//谷歌风格input框

    

    //拖动drop，引用方式父盒子class=dropBox，demojs


    //textare高度自适应
    autosize(document.querySelectorAll('textarea'));

    tabs();

    listShow()//列表展开

    cardStack()//堆叠卡片翻页

    accordion()//折叠面板

    numberShow()//数字滚动加载

    accordion()//折叠面板
    // mediaMatrix(document.getElementById('media-matrix1'));//图片查看器demo
    //gridResize(document.getElementById('grid1'));//grid拖动尺寸变化demo

    //stop(['.switch','input[type=checkbox]','input[type=radio]']);//阻止点击冒泡

    compass()//地图指北针

    rollerSelectOld();//ios风格时间选择器老版本
    rollerSelect()//ios风格时间选择器

    //拖动drop demo
    const dragbox = document.getElementById('grid1');
    new Sortable(dragbox, {
        animation: 150,
        ghostClass: 'sortabling'
    });

 
    new Sortable(document.querySelector('.drag-demo-left'), {
        group: 'shared', // set both lists to same group
        animation: 150
    });

    new Sortable(document.querySelector('.drag-demo-right'), {
        group: 'shared',
        animation: 150
    });


    //水波纹
    Waves.attach('.btn, .accordion-btn, .list-link, .select_value, .menu-item');
    Waves.init();

    accordionBtn()//手风琴按钮
}



// 添加resize的回调函数，但是只允许它每400毫秒执行一次
window.addEventListener('resize', debounce(function (event) {
    tabs();
    accordion()//折叠面板
    //mediaMatrix('#media-matrix1');//图片查看器demo
    //gridResize(document.getElementById('grid1'));//grid拖动尺寸变化demo
}, 400));