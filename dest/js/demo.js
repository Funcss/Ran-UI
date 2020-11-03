//拖动drop
const dragbox = document.getElementById('grid1');
new Sortable(dragbox, {
    animation: 150,
    ghostClass: 'sortabling'
});
mediaMatrix(document.getElementById('media-matrix1'));//图片查看器demo
//gridResize(document.getElementById('grid1'));//grid拖动尺寸变化demo



new Sortable(document.querySelector('.drag-demo-left'), {
    group: 'shared', // set both lists to same group
    animation: 150
});

new Sortable(document.querySelector('.drag-demo-right'), {
    group: 'shared',
    animation: 150
});


new Sortable(document.querySelector('.pile'), {
    animation: 150,
    ghostClass: 'sortabling',
    onEnd:function(){
        pileScroll();
    }
});

// 添加resize的回调函数，但是只允许它每400毫秒执行一次
window.addEventListener('resize', debounce(function (event) {
    //mediaMatrix(document.getElementById('media-matrix1'));//图片查看器demo
   // gridResize(document.getElementById('grid1'));//grid拖动尺寸变化demo
}, 400));