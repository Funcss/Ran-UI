//全屏和关闭全屏
function fullScreen() {
    var el = document.documentElement;
    var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
    };
    return;
}
//退出全屏
function exitScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
    else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
    else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    if (typeof cfs != "undefined" && cfs) {
        cfs.call(el);
    }
}

//节拍器在resize事件时候调用用于优化性能
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};



function MUIinput() {
    var MUIinput = document.getElementsByClassName('MUIinput');
    for (var i = 0; i < MUIinput.length; i++) {
        MUIinput[i].onfocus = function () {
            this.closest('.input-MUITitle').classList.add('focus');
        };
        MUIinput[i].onblur = function () {
            if (!this.value) {
                this.closest('.input-MUITitle').classList.remove('focus');
            }
        }
    }
}


//阻止点击冒泡
function stop(a) {//a为数组参数
    a.forEach(function (item) {
        const list = document.querySelectorAll(item);
        list.forEach(function (el) {
            el.onclick = function (event) {//阻止点击气泡冒泡
                event.stopPropagation();
            }
        })
    })
}
//stop(['.switch','input[type=checkbox]','input[type=radio]']);

// tabs，不包含时间选择器
function tabs() {
    var tabs = document.querySelectorAll('.tabs');
    tabs.forEach(function (tab) {

        var items = tab.querySelectorAll('a');
        items.forEach(function (item) {
            if (item.matches('.active')) {
                item.parentElement.style.setProperty('--target-width', item.clientWidth);
                item.parentElement.style.setProperty('--target-height', item.clientHeight);
                item.parentElement.style.setProperty('--target-left', item.offsetLeft);
                item.parentElement.style.setProperty('--target-top', item.offsetTop);
            };
            item.onclick = function () {
                if (tab.querySelector('.active')) {
                    tab.querySelector('.active').classList.remove('active');
                }
                this.classList.add('active');
                this.parentElement.style.setProperty('--target-width', this.clientWidth);
                this.parentElement.style.setProperty('--target-height', this.clientHeight);
                this.parentElement.style.setProperty('--target-left', this.offsetLeft);
                this.parentElement.style.setProperty('--target-top', this.offsetTop);

            }
        });

    })
}



// range拖动进度条 未完成

function range() {
    var ranges = document.querySelectorAll('.range');
    ranges.forEach(function (item) {
        var rangeDrap = item.querySelector('.range-drap');
        var startX;
        var width;
        rangeDrap.onmousedown = function (event) {
            width = item.clientWidth;
            startX = event.clientX;
        }
        rangeDrap.onmouseout = function () {
            return false;
        }
        rangeDrap.onmousemove = function (event) {
            var moveX = event.clientX;
            item.style.setProperty('--range', (moveX - startX) / width * 100);
            if (event.preventDefault) {
                event.preventDefault();
            }
            return false;

        }

    })
}

//range()//未完成


/*拖动10px后自动滑动滚动条，幻灯片查看器和时间轴选择器有引用*/
function dragMove(el, width) {//滚动对象和每次滑动距离
    var leftStart;
    var leftMove;

    el.onmousedown = function () {
        this.classList.add('dragMove');
        leftStart = this.scrollLeft;

        el.onmousemove = function () {
            leftMove = this.scrollLeft;
        }

        el.onmouseup = function () {
            this.classList.remove('dragMove');

            if ((leftMove - leftStart) > 10 && (leftMove - leftStart) < width) {
                this.scrollLeft = leftStart + width;
            }
            if ((leftMove - leftStart) > 10 && (leftMove - leftStart) >= width) {
                this.scrollLeft = leftMove;
            }

            if ((leftMove - leftStart) <= 10 && (leftMove - leftStart) >= -10) {
                this.scrollLeft = leftStart;
            }

            if ((leftMove - leftStart) < -10 && (leftMove - leftStart) > -(width)) {
                this.scrollLeft = leftStart - width;
            }
            if ((leftMove - leftStart) < -10 && (leftMove - leftStart) < -(width)) {
                this.scrollLeft = leftMove;
            }


        }

    }

}



/*列表展开*/
function listShow() {
    var list_down = document.getElementsByClassName('list-father');
    for (let i = 0; i < list_down.length; i++) {
        list_down[i].onclick = function () {
            this.classList.toggle('list-father-show');
            var childList = this.nextElementSibling.querySelectorAll('.list-link');

            //listShow(childList);
            anime({
                targets: childList,
                duration: 400,
                easing: "cubicBezier(0, 0, 0.2, 1)",
                translateX: [-10, 0],
                opacity: [0, 1],
                delay: anime.stagger(56) // increase delay by 100ms for each elements.
            });
        }
    }
}

/*抽屉展开*/

function drawerRightStack(el) {
    var drawerRight = document.querySelector('.drawer-right-show');

    if (drawerRight && drawerRight != el) {
        anime({
            targets: drawerRight,
            scale: 0.92,
            opacity: 0,
            zIndex: [1, 1],
            easing: "cubicBezier(0, 0, 0.2, 1)",
            duration: 300,

            begin: function () {
                drawerRight.style.willChange = 'transform, opacity';
                el.style.willChange = 'transform, opacity';
                el.classList.add('drawer-right-show');
            },
            complete: function () {
                el.style.willChange = 'auto';
                drawerRight.setAttribute('style', 'bar');
                drawerRight.classList.remove('drawer-right-show');
            }
        })
    } else {
        el.classList.add('drawer-right-show');
    }
}

function drawerLeftStack(el) {
    var drawerLeft = document.querySelector('.drawer-left-show');

    if (drawerLeft && drawerLeft != el) {
        anime({
            targets: drawerLeft,
            scale: 0.92,
            opacity: 0,
            zIndex: [1, 1],
            easing: "cubicBezier(0, 0, 0.2, 1)",
            duration: 300,
            begin: function () {
                drawerLeft.style.willChange = 'transform, opacity';
                el.style.willChange = 'transform, opacity';
                el.classList.add('drawer-left-show');
            },
            complete: function () {
                el.style.willChange = 'auto';
                drawerLeft.removeAttribute('style');
                drawerLeft.classList.remove('drawer-left-show');
            }
        })
    } else {
        el.classList.add('drawer-left-show');
    }

}


function drawerRightClose() {
    const drawerRight = document.querySelector('.drawer-right-show');
    anime({
        targets: drawerRight,
        easing: "cubicBezier(0, 0, 0.2, 1)",
        duration: 200,
        scale: 0.92,
        opacity: 0,
        begin: function () {
            drawerRight.style.willChange = 'transform, opacity';
        },
        complete: function () {
            drawerRight.removeAttribute('style');
            drawerRight.classList.remove('drawer-right-show');
        }
    })
}
function drawerLeftClose() {
    const drawerLeft = document.querySelector('.drawer-left-show');
    anime({
        targets: drawerLeft,
        easing: "cubicBezier(0, 0, 0.2, 1)",
        duration: 200,
        scale: 0.92,
        opacity: 0,
        begin: function () {
            drawerLeft.style.willChange = 'transform, opacity';
        },
        complete: function () {
            drawerLeft.removeAttribute('style');
            drawerLeft.classList.remove('drawer-left-show');
        }
    })
}


/*遮罩loading*/

function backdropLoadingShow(id) {
    anime({
        targets: id,
        opacity: 1,
        duration: 220,
        easing: "cubicBezier(0, 0, 0.2, 1)",
        begin: function () {
            document.querySelector(id).style.visibility = 'visible';
            document.documentElement.style.overflow = 'hidden';
        }
    })
}

function backdropLoadingHide(id) {
    anime({
        targets: id,
        opacity: 0,
        duration: 220,
        easing: "cubicBezier(0, 0, 0.2, 1)",
        begin: function () {
            document.documentElement.removeAttribute('style');
        },
        complete: function () {
            document.querySelector(id).style.visibility = 'hidden';

        }
    })
}

/*toast*/
function toast(content, className, location, hide) {
    className = className || 'toastBar';
    location = location;
    hide = hide || true;

    const toastItem = document.createElement("div");
    toastItem.classList.add('toast', className);
    toastItem.innerHTML = content;


    if (location == 'leftBottom') {

        if (document.getElementById('toast-leftBottom')) {
            document.getElementById('toast-leftBottom').appendChild(toastItem);

        }
        else {
            var toastBox = document.createElement("div");
            toastBox.classList.add('toastBox');
            document.body.appendChild(toastBox);
            toastBox.id = 'toast-' + 'leftBottom';
            toastBox.appendChild(toastItem);
        }
    }
    if (location == 'leftTop') {
        console.log(this)
        if (document.getElementById('toast-leftTop')) {
            document.getElementById('toast-leftTop').appendChild(toastItem);
        }
        else {
            const toastBox = document.createElement("div");
            toastBox.classList.add('toastBox');
            document.body.appendChild(toastBox);
            toastBox.id = 'toast-' + 'leftTop';
            toastBox.appendChild(toastItem);
        }
    }
    if (location == 'rightTop') {

        if (document.getElementById('toast-rightTop')) {
            document.getElementById('toast-rightTop').appendChild(toastItem);

        }
        else {
            const toastBox = document.createElement("div");
            toastBox.classList.add('toastBox');
            document.body.appendChild(toastBox);
            toastBox.id = 'toast-' + 'rightTop';
            toastBox.appendChild(toastItem);
        }
    }
    if (location == 'rightBottom') {


        if (document.getElementById('toast-rightBottom')) {
            document.getElementById('toast-rightBottom').appendChild(toastItem);

        }
        else {
            const toastBox = document.createElement("div");
            toastBox.classList.add('toastBox');
            document.body.appendChild(toastBox);
            toastBox.id = 'toast-' + 'rightBottom';
            toastBox.appendChild(toastItem);
        }
    }
    if (location == 'topCenter' || location == '') {

        if (document.getElementById('toast-topCenter')) {
            document.getElementById('toast-topCenter').appendChild(toastItem);

        }
        else {
            const toastBox = document.createElement("div");
            toastBox.classList.add('toastBox');
            document.body.appendChild(toastBox);
            toastBox.id = 'toast-' + 'topCenter';
            toastBox.style.transform = 'translateX(-50%)';
            toastBox.appendChild(toastItem);
        }
    }
    if (location == 'bottomCenter') {

        if (document.getElementById('toast-bottomCenter')) {

            document.getElementById('toast-bottomCenter').appendChild(toastItem);
        }
        else {
            const toastBox = document.createElement("div");
            toastBox.classList.add('toastBox');
            document.body.appendChild(toastBox);
            toastBox.id = 'toast-' + 'bottomCenter';
            toastBox.style.transform = 'translateX(-50%)';
            toastBox.appendChild(toastItem);
        }
    }




    if (hide) {
        toastAuto(toastItem);
    }
    else {
        toastShow(toastItem);
    }

}




function toastShow(el) {
    anime({
        targets: el,
        easing: 'easeOutBack',
        duration: 300,
        opacity: 1,
        scale: [0.8, 1],
        begin: function () {
            el.style.display = 'flex';
        }
    })
}
function toastAuto(el) {
    anime({
        targets: el,
        easing: 'easeOutBack',
        duration: 300,
        opacity: 1,
        scale: [0.8, 1],
        endDelay: 1000,
        direction: 'alternate',
        begin: function () {
            el.style.display = 'flex';
        },
        complete: function () {
            el.remove()
        }
    })
}


function toastHide(el) {
    anime({
        targets: el,
        easing: 'easeOutBack',
        duration: 300,
        opacity: 0,
        scale: 0.8,
        complete: function () {
            el.style.display = 'none';
        }
    })
}

/*弹出层*/
function dialogShow(el) {
    const dialog = el.querySelector('.dialog')
    anime({
        targets: el,
        duration: 220,
        easing: 'cubicBezier(0.4, 0, 0.2, 1)',
        opacity: 1,
        begin: function () {
            el.style.visibility = 'visible';
            document.documentElement.style.overflow = 'hidden';
            dialog.classList.add('dialogShow')
        }
    })

}


function dialogHide(el) {
    anime({
        targets: el,
        easing: 'cubicBezier(0.4, 0, 0.2, 1)',
        duration: 220,
        opacity: 0,
        complete: function () {
            el.style.visibility = 'hidden';
            el.querySelectorAll('.dialog').forEach(
                function (item) {
                    item.removeAttribute('style');
                    item.setAttribute('class', 'dialog')
                }
            )
            document.documentElement.removeAttribute('style');
        }
    });


}

//堆叠弹出层new
function dialogStackNext(showEl) {
    var backEl = document.querySelector('.dialogBack');
    var thisEl = document.querySelector('.dialogShow');

    if (backEl) {
        anime.timeline({
            // easing: 'linear',
            // duration: 240,
        })
            .add({
                targets: backEl,
                // translateZ: '-3.2rem',
                // opacity: 0,
                begin: function () {
                    // hideEl.style.willChange = 'transform, opacity';
                    backEl.classList.add('dialogBackHide');
                    backEl.classList.remove('dialogBack');

                },
                complete: function () {
                    //backEl.classList.remove('dialogHide');
                }
            }, 0)
            .add({
                targets: thisEl,
                // translateZ: '-1.6rem',

                begin: function () {
                    //selfEl.style.willChange = 'transform, opacity';
                    thisEl.classList.add('dialogBack');
                    thisEl.classList.remove('dialogShow');
                },
                complete: function () {

                    //selfEl.style.willChange = 'auto';
                }
            }, 160)
            .add({
                targets: showEl,
                // translateZ: ['1.6rem', 0],
                // opacity: 1,
                begin: function () {
                    //showEl.style.willChange = 'transform, opacity';
                    // showEl.style.visibility = 'visible';
                    showEl.classList.remove('dialogPrevHide');
                    showEl.classList.add('dialogShow');
                },
                complete: function () {

                    //showEl.style.willChange = 'auto';
                }
            }, 320)


    } else {

        anime.timeline({
            // easing: 'linear',
            // duration: 240,
        })
            .add({
                targets: thisEl,
                // translateZ: '-1.6rem',

                begin: function () {
                    //selfEl.style.willChange = 'transform, opacity';
                    thisEl.classList.add('dialogBack');
                    thisEl.classList.remove('dialogShow');
                },
                complete: function () {
                    // selfEl.style.willChange = 'auto';

                }
            }, 0)
            .add({
                targets: showEl,
                // translateZ: ['1.6rem', 0],
                // opacity: 1,
                begin: function () {
                    //showEl.style.visibility = 'visible';
                    //showEl.style.willChange = 'transform, opacity';
                    showEl.classList.remove('dialogPrevHide');
                    showEl.classList.add('dialogShow');
                },
                complete: function () {

                    // showEl.style.willChange = 'auto';
                }

            }, 160)

    }
}


function dialogStackPrev(hideEl) {

    var backEl = document.querySelector('.dialogBack');
    var thisEl = document.querySelector('.dialogShow');

    if (hideEl) {
        anime.timeline({
            // easing: 'linear',
            // duration: 240,
        })
            .add({
                targets: thisEl,
                // translateZ: '1.6rem',
                // opacity: 0,
                begin: function () {
                    //selfEl.style.willChange = 'transform, opacity';
                    //backEl.style.visibility = 'visible';
                    thisEl.classList.remove('dialogShow');

                },
            }, 0)
            .add({
                targets: backEl,
                //translateZ: 0,
                begin: function () {
                    //  showEl.style.willChange = 'transform, opacity';
                    backEl.classList.add('dialogShow');
                    backEl.classList.remove('dialogBack');
                },
            }, 160)
            .add({
                targets: hideEl,
                begin: function () {
                    hideEl.classList.add('dialogBack');
                    hideEl.classList.remove('dialogBackHide');
                }
            }, 320)

    } else {
        anime.timeline({
            // easing: 'linear',
            // duration: 240,
        })
            .add({
                targets: thisEl,
                // translateZ: '1.6rem',
                // opacity: 0,
                begin: function () {
                    // selfEl.style.willChange = 'transform, opacity';
                    thisEl.classList.remove('dialogShow');
                }
            }, 0)
            .add({
                targets: backEl,
                //translateZ: 0,

                begin: function () {
                    // showEl.style.willChange = 'transform, opacity';
                    backEl.classList.add('dialogShow');
                    backEl.classList.remove('dialogBack');
                }
            }, 160)
    }
}



/*定位*/

function getViewport() {
    return {
        //网页部分：
        width: document.documentElement.clientWidth,//窗口可视区域的宽度，不含滚动条和border
        height: document.documentElement.clientHeight,//窗口可视区域的高度，不含滚动条和border
        scrollWidth: Math.max(document.documentElement.scrollWidth,
            document.documentElement.clientWidth),//网页内容的宽度，包括滚动条
        scrollHeight: Math.max(document.documentElement.scrollHeight,
            document.documentElement.clientHeight),//网页内容的高度，包括滚动条
    }
}
//元素部分
function getElementInfo(el) {
    const box = el.getBoundingClientRect();//它返回一个对象，其中包含了left、right、top、bottom四个属性，分别对应了该元素的左上角和右下角相对于浏览器窗口（viewport）左上角的距离。

    const viewTop = box.top;//元素距离浏览器窗口上边距离
    const viewLeft = box.left;//元素距离浏览器窗口左边距离
    const viewBottom = getViewport().height - box.bottom;//元素距离浏览器窗口下边距离
    const viewRight = getViewport().width - box.right;//元素距离浏览器窗口右边距离

    const top = box.top + window.pageYOffset - document.documentElement.clientTop;//元素相对文档的偏移位置
    const left = box.left + window.pageXOffset - document.documentElement.clientLeft;//元素相对文档的偏移位置
    const width = box.width;//元素的宽度，包含border
    const height = box.height;//元素的高度，包含border

    const centerX = left + (width / 2);//元素中心点相对文档的X坐标
    const centerY = top + (height / 2);//元素中心点相对文档的Y坐标
    return {
        top: top,
        left: left,
        width: width,
        height: height,
        centerX: centerX,
        centerY: centerY,
        viewTop: viewTop,
        viewLeft: viewLeft,
        viewBottom: viewBottom,
        viewRight: viewRight,
    }
}

/*tooltips*/

function tipsShow(el) {
    anime({
        targets: el,
        duration: 300,
        easing: 'easeOutBack',
        scale: [0.5, 1],
        opacity: [0, 1],

    })
}

function tipsHide(el) {
    anime({
        targets: el,
        duration: 300,
        easing: 'easeOutBack',
        scale: [1, 0.5],
        opacity: [1, 0],
        complete: function () {
            el.remove();
        }
    })
}

function tooltips(el, content, direction) {//el元素对象；content为tips内容，可以为html；direction为方向，包括top、left、right、bottom，默认为top
    if (!direction) {
        direction = 'top'
    }
    /*对象坐标和尺寸*/
    const top = getElementInfo(el).top;//元素上方相对文档的偏移位置
    const left = getElementInfo(el).left;//元素左方相对文档的偏移位置
    const width = el.clientWidth;//元素尺寸
    const height = el.clientHeight;//元素尺寸
    const centerX = getElementInfo(el).centerX;//元素中心点相对文档的X坐标
    const centerY = getElementInfo(el).centerY;//元素中心点相对文档的Y坐标
    const vTop = getElementInfo(el).viewTop;//元素上边相对于浏览器可视边距离
    const vLeft = getElementInfo(el).viewLeft;//元素左边相对于浏览器可视边距离
    const vBottom = getElementInfo(el).viewBottom;//元素下边相对于浏览器可视边距离
    const vRight = getElementInfo(el).viewRight;//元素右边相对于浏览器可视边距离

    const tooltip = document.createElement("div");
    const tooltipInfo = document.createElement("div");
    tooltip.classList.add('tooltip');
    tooltip.classList.add('tooltip-' + direction);
    tooltipInfo.classList.add('tooltip-info');
    tooltipInfo.innerHTML += content;
    tooltip.appendChild(tooltipInfo);

    const tipsArr = document.getElementsByClassName('tooltip');


    for (var i = 0; i < tipsArr.length; i++) {
        tipsHide(tipsArr[i]);//添加tips之前先把已经存在的tips删除
    }
    document.body.appendChild(tooltip);

    const tipWidth = tooltip.getBoundingClientRect().width + 12;//生成tip的宽度，加上尖角的尺寸
    const tipHeight = tooltip.getBoundingClientRect().height + 12;//生成tip的高度，加上尖角的尺寸


    if (direction == 'top' && vTop > tipHeight) {
        tooltip.style.left = centerX + 'px';
        tooltip.style.top = top - tipHeight + 'px';
        tooltip.style.transform = 'translateX(-50%)';
        tipsShow(tooltip);

    }
    if (direction == 'top' && vTop <= tipHeight) {
        tooltip.classList.remove('tooltip-' + direction);
        tooltip.classList.add('tooltip-' + 'bottom');
        tooltip.style.left = centerX + 'px';
        tooltip.style.top = top + height + 12 + 'px';
        tooltip.style.transform = 'translateX(-50%)';
        tipsShow(tooltip);
    }
    if (direction == 'bottom' && vBottom > tipHeight) {
        tooltip.style.left = centerX + 'px';
        tooltip.style.top = top + height + 12 + 'px';
        tooltip.style.transform = 'translateX(-50%)';
        tipsShow(tooltip);
    }
    if (direction == 'bottom' && vBottom <= tipHeight) {
        tooltip.classList.remove('tooltip-' + direction);
        tooltip.classList.add('tooltip-' + 'bottom');
        tooltip.style.left = centerX + 'px';
        tooltip.style.top = top - tipHeight + 'px';
        tooltip.style.transform = 'translateX(-50%)';
        tipsShow(tooltip);
    }
    if (direction == 'left' && vLeft > tipWidth) {
        tooltip.style.left = left - tipWidth + 'px';
        tooltip.style.top = centerY + 'px';
        tooltip.style.transform = 'translateY(-50%)';
        tipsShow(tooltip);
    }
    if (direction == 'left' && vLeft <= tipWidth) {
        tooltip.classList.remove('tooltip-' + direction);
        tooltip.classList.add('tooltip-' + 'right');
        tooltip.style.left = left + width + 12 + 'px';
        tooltip.style.top = centerY + 'px';
        tooltip.style.transform = 'translateY(-50%)';
        tipsShow(tooltip);
    }
    if (direction == 'right' && vRight > tipWidth) {
        tooltip.style.left = left + width + 12 + 'px';
        tooltip.style.top = centerY + 'px';
        tooltip.style.transform = 'translateY(-50%)';
        tipsShow(tooltip);
    }
    if (direction == 'right' && vRight <= tipWidth) {
        tooltip.classList.remove('tooltip-' + direction);
        tooltip.classList.add('tooltip-' + 'right');
        tooltip.style.left = left - tipWidth + 'px';
        tooltip.style.top = centerY + 'px';
        tooltip.style.transform = 'translateY(-50%)';
        tipsShow(tooltip);
    }

    // if(force == 'click'){
    //     el.onclick = function(){
    //         tipsShow(tooltip,);
    //     }
    // }




    // document.onclick = function () {
    //     for (var i = 0; i < tipsArr.length; i++) {
    //         tipsHide(tipsArr[i]);//添加tips之前先把已经存在的tips删除
    //     }
    // }

    document.onclick = fun;
    // document.onwheel = fun;

    function fun(e) {
        switch (e.type) {
            case "click":
                for (var i = 0; i < tipsArr.length; i++) {
                    tipsHide(tipsArr[i]);//添加tips之前先把已经存在的tips删除
                }
                break;
            // case "wheel":
            //     for (var i = 0; i < tipsArr.length; i++) {
            //         tipsHide(tipsArr[i]);//添加tips之前先把已经存在的tips删除
            //     }
            //     break;

        }
    }

    event.stopPropagation();//阻止点击本身冒泡

    tooltip.onclick = function (event) {//阻止点击气泡冒泡
        event.stopPropagation();
    }
}



/*menu*/


function menuShow(el) {
    const menuArr = document.getElementsByClassName('menu');
    anime({
        targets: el,
        duration: 100,
        easing: "cubicBezier(0, 0, 0.2, 1)",
        scale: [0.8, 1],
        opacity: [0, 1],
        begin: function () {
            el.style.display = 'flex';
            el.style.visibility = 'visible';
        }
    })
}

function menuHide(el, time) {
    time = time || 0;
    anime({
        targets: el,
        duration: 100,
        delay: time,
        easing: 'cubicBezier(0.4, 0, 0.2, 1)',
        opacity: [1, 0],
        complete: function () {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.classList.remove('menuShow');
        }
    })
}


function menu(el, menu) {
    /*被点击对象坐标和尺寸*/
    const top = getElementInfo(el).top;//元素上方相对文档的偏移位置
    const left = getElementInfo(el).left;//元素左方相对文档的偏移位置
    const width = getElementInfo(el).width;//元素尺寸
    const height = getElementInfo(el).height;//元素尺寸
    const centerX = getElementInfo(el).centerX;//元素中心点相对文档的X坐标
    const centerY = getElementInfo(el).centerY;//元素中心点相对文档的Y坐标
    const vTop = getElementInfo(el).viewTop;//元素上边相对于浏览器可视边距离
    const vLeft = getElementInfo(el).viewLeft;//元素左边相对于浏览器可视边距离
    const vBottom = getElementInfo(el).viewBottom;//元素下边相对于浏览器可视边距离
    const vRight = getElementInfo(el).viewRight;//元素右边相对于浏览器可视边距离

    const menuList = menu.querySelector('.menu-list');


    const menuArr = document.getElementsByClassName('menuShow');
    for (i = 0; i < menuArr.length; i++) {
        if (menu != menuArr[i]) {
            menuHide(menuArr[i]);
        }
    }


    document.body.appendChild(menu);
    menu.style.display = 'flex';
    menu.style.minWidth = width + 'px';



    //menu.style.transform = "translateX(-50%)";
    menu.classList.add('menuShow');
    const selected = menuList.querySelector('.selected');//被选中的元素

    const menuWidth = menu.getBoundingClientRect().width;
    const menuHeight = menu.getBoundingClientRect().height;

    if (selected) {
        const selected_Height = selected.clientHeight;
        const selected_Y = selected.offsetTop;//被选中的那一项距离父元素顶部的距离
        menuList.scrollTop = selected_Y - menuHeight / 2 + selected_Height / 2;
    }


    if (vBottom >= menuHeight || vTop <= menuHeight) {
        menu.style.top = top + height + 'px';
        menu.style.transformOrigin = 'center top';
        menuShow(menu);
    }
    else {
        menu.style.top = top - menuHeight + 'px';
        menu.style.transformOrigin = 'center bottom';
        menuShow(menu);
    }
    if (menuWidth - width + 24 < vRight) {
        menu.style.left = left + 'px';
        menu.style.right = 'auto';
    }
    if (menuWidth - width + 24 > vRight && (menuWidth - width - vRight + 24) < vLeft) {
        menu.style.left = 'auto';
        menu.style.right = 24 + 'px';
    }
    if (menuWidth > getViewport().width - 96) {
        menu.style.left = 24 + 'px';
    }


    window.addEventListener('resize', debounce(function () {
        var vLeft = getElementInfo(el).viewLeft;//元素左边相对于浏览器可视边距离
        var vRight = getElementInfo(el).viewRight;//元素右边相对于浏览器可视边距离
        var top = getElementInfo(el).top;//元素上方相对文档的偏移位置
        var left = getElementInfo(el).left;//元素左方相对文档的偏移位置
        var width = getElementInfo(el).width;//元素尺寸

        if (vBottom >= menuHeight || vTop <= menuHeight) {
            menu.style.top = top + height + 'px';
            menu.style.minWidth = width + 'px';
            menu.style.left = left + width / 2 + 'px';

        }
        else {
            menu.style.top = top - menuHeight + 'px';
            menu.style.minWidth = width + 'px';
            menu.style.left = left + width / 2 + 'px';
        }
        if (menuWidth - width + 24 < vRight) {
            menu.style.left = left + 'px';
            menu.style.right = 'auto';
        }
        if (menuWidth - width + 24 > vRight && (menuWidth - width - vRight + 24) < vLeft) {
            menu.style.left = 'auto';
            menu.style.right = 24 + 'px';
        }
        if (menuWidth > getViewport().width - 96) {
            menu.style.left = 24 + 'px';
        }

    }, 100));




    document.onclick = function () {
        for (i = 0; i < menuArr.length; i++) {
            menuHide(menuArr[i]);
        }
    }
    event.stopPropagation();//阻止点击本身冒泡
    menu.onclick = function (event) {//阻止点击气泡冒泡
        event.stopPropagation();
    }

    if (el.matches('.menu-select')) { //模拟select，选择内容后填充按钮内容
        var menuItems = menu.querySelectorAll('.menu-item');

        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].onclick = function () {
                //el.textContent = this.textContent;
                el.innerHTML = '<div class="selectText">' + this.textContent + '</div>';
                el.value = this.textContent;//如果是input则填入value
                if (menu.querySelector('.selected')) {
                    menu.querySelector('.selected').classList.remove('selected');
                }

                this.classList.add('selected');
                menuHide(menu, 150);
            };

        }
    }

}


/*改变尺寸，有bug暂时不使用*/
function gridResize(el) {
    const win = el.ownerDocument.defaultView;
    // null 的意思是不返回伪类元素
    const gridCols = win.getComputedStyle(el, null).gridTemplateColumns;//获取css样式，返回字符串
    const colsArr = gridCols.trim().split(/\s+/);//将返回的样式字符串分割为数组
    const colsNum = colsArr.length;//grid分割数量
    const elWidth = el.clientWidth;//grid盒子的宽度，包含了gap
    const colWidth = elWidth / colsNum;//grid每一列的宽度，包含了gap
    const item = el.querySelectorAll('.grid-resize');




    var objResizeObserver = new ResizeObserver(function (entries) {//监听dom尺寸
        var entry = entries[0];//获取函数返回值
        var target = entry.target;//dom对象自身
        //var cr = entry.contentRect;//获取函数返回值的尺寸对象
        //var targetWitdh = cr.width;//只能返回content尺寸
        const targetWitdh = target.clientWidth;
        var itemColNum = Math.round(targetWitdh / colWidth);
        target.style.gridColumn = 'span ' + itemColNum;
        target.parentNode.classList.add('has-resize');

        target.onmouseup = function () {
            this.style.width = '';
        }
    })

    for (var i = 0; i < item.length; i++) {
        // var doit;
        objResizeObserver.observe(item[i]);

        // window.onresize = function () {
        //    // objResizeObserver.unobserve(item[i]);
        //     clearTimeout(doit);
        //     doit = setTimeout(objResizeObserver.observe(item[i]), 400);
        // }
    }


}

/*获取小数点位数方法*/
Number.prototype.countDecimals = function () {
    if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0;
};


/*数字动态滚动加载*/
function numberShow(className = '.numberShow') {
    var number = document.querySelectorAll('.numberShow');
    number.forEach(function (item) {
        if (item.dataset.start) {
            var startData = item.dataset.start;
        } else {
            var startData = 0;
        };

        if (item.dataset.end) {
            var endData = item.dataset.end;
        } else {
            var endData = 0;
        };
        var round = parseFloat(endData).countDecimals();//获取最终值小数位数

        anime({
            targets: item,
            duration: 1000,
            easing: 'easeOutSine',
            innerHTML: [startData, endData],
            round: Math.pow(10, round) // 保留小数点后两位
        });
    });
}



/*图片查看器*/
function mediaMatrix(el) {

    var items = el.querySelectorAll('.media-item');
    var imgItems = el.querySelectorAll('img');
    items.forEach(function (itemList, index) {  //点击图片弹出查看器
        itemList.onclick = function () {
            const mediaView = document.createElement("div"); //创建查看器窗口
            mediaView.classList.add('media-view');
            mediaView.classList.add('dragscroll');
            mediaView.insertAdjacentHTML('beforeend', '<div class="media-view-tools"> <a href="javascript:;" class="media-view-prev">上</a> <a href="javascript:;" class="media-view-next">下</a> <a href="javascript:;" class="media-view-toggle">窗</a> <a href="javascript:;" class="media-view-close">关</a> </div>');
            for (var i = 0; i < imgItems.length; i++) {

                const mediaViewItem = document.createElement("div");
                mediaViewItem.classList.add('media-view-item');
                const mediaViewImg = document.createElement("img");
                mediaViewImg.setAttribute('src', imgItems[i].getAttribute('data-img')); //给查看器内的图片添加链接地址data-img
                mediaViewImg.setAttribute('loading', 'lazy');//原生懒加载
                mediaViewItem.appendChild(mediaViewImg);
                mediaView.appendChild(mediaViewItem);
                if (i == index) {
                    mediaViewItem.classList.add('active');
                }
            }
            document.body.appendChild(mediaView);//在文档内插入查看器html
            mediaView.scrollLeft = mediaView.clientWidth * index;
            //document.documentElement.style.overflow = 'hidden';//开启后浏览器会异常跳动


            var next = mediaView.querySelector('.media-view-next');
            var prev = mediaView.querySelector('.media-view-prev');
            // var toggle = mediaView.querySelector('.media-view-toggle');
            var close = mediaView.querySelector('.media-view-close');

            next.onclick = function () {  //查看器内小工具点击下一页
                mediaView.scrollLeft += mediaView.clientWidth;
                // mediaView.classList.remove('autosize');
            }
            prev.onclick = function () {//查看器内小工具点击上一页
                mediaView.scrollLeft -= mediaView.clientWidth;
                //mediaView.classList.remove('autosize');
            }
            // toggle.onclick = function(){
            //     mediaView.classList.toggle('autosize');
            // }
            close.onclick = function () {
                anime({
                    targets: mediaView,
                    duration: 220,
                    easing: "cubicBezier(0, 0, 0.2, 1)",
                    opacity: [1, 0],
                    complete: function () {
                        document.body.removeChild(mediaView);
                        //document.documentElement.removeAttribute('style');

                    }
                })
            }

            // 定时器，用来检测滚动是否结束
            var timerScrollEndDetect = null;
            // 滚动事件开始
            mediaView.addEventListener('scroll', function () {
                clearTimeout(timerScrollEndDetect);
                timerScrollEndDetect = setTimeout(function () {
                    // 100毫秒内滚动事件没触发，认为停止滚动了
                    // 对列表元素进行位置检测
                    [].slice.call(mediaView.querySelectorAll('.media-view-item')).forEach(function (eleList, i) {
                        i = i || 0;
                        if (Math.abs(eleList.getBoundingClientRect().left - mediaView.getBoundingClientRect().left) < 10) {
                            // 添加标志类名
                            eleList.classList.add('active');

                            if (i == 0) {
                                prev.style.opacity = '30%';

                            } else {
                                prev.style.opacity = '100%';
                            }
                            if (i == mediaView.querySelectorAll('.media-view-item').length - 1) {
                                next.style.opacity = '30%';
                            } else {
                                next.style.opacity = '100%';
                            }

                        } else {
                            eleList.classList.remove('active');
                        }
                    });
                }, 100);
            });

            anime({
                targets: mediaView,
                duration: 300,
                easing: 'cubicBezier(0.4, 0, 0.2, 1)',
                opacity: [0, 1],
                complete: function () {
                    dragscroll.reset();
                    dragMove(mediaView, mediaView.clientWidth);
                    mediaView.style.scrollBehavior = 'smooth';

                }
            })

        }
    })
}




/*时间选择器*/


function bottomHide(el) {
    anime({
        targets: el,
        duration: 400,
        easing: 'easeOutBack',
        translateY: [0, '100%'],
        opacity: [1, 0],
        complete: function () {
            // document.querySelector(id).style.display = 'none';
            el.style.visibility = 'hidden';
        }
    })
}

function timeTool(el) {


    const dragbox = el.querySelector('.maptool-timeline-list');
    // const indicator = el.querySelector('.tabs-indicator');
    const next = el.querySelector('.maptool-timeline-next');
    const prev = el.querySelector('.maptool-timeline-prev');

    anime({
        targets: el,
        duration: 400,
        easing: 'easeOutBack',
        translateY: ['100%', 0],
        opacity: [0, 1],
        begin: function () {
            // document.querySelector(id).style.display = 'block';
            el.style.visibility = 'visible';
        },
        complete: function () {
            dragMove(dragbox, 200);

            const items = dragbox.querySelectorAll('li');
            items.forEach(function (item) {

                if (item.matches('.active')) {
                    item.parentElement.style.setProperty('--target-width', item.clientWidth);
                    item.parentElement.style.setProperty('--target-height', item.clientHeight);
                    item.parentElement.style.setProperty('--target-left', item.offsetLeft);
                    item.parentElement.style.setProperty('--target-top', item.offsetTop);
                    dragbox.scrollLeft = item.offsetLeft - dragbox.clientWidth / 2;
                };

                item.onclick = function () {

                    if (dragbox.querySelector('.active')) {
                        dragbox.querySelector('.active').classList.remove('active');
                    }
                    this.classList.add('active');

                    this.parentElement.style.setProperty('--target-width', this.clientWidth);
                    this.parentElement.style.setProperty('--target-height', this.clientHeight);
                    this.parentElement.style.setProperty('--target-left', this.offsetLeft);
                    this.parentElement.style.setProperty('--target-top', this.offsetTop);

                    dragbox.scrollLeft = this.offsetLeft - dragbox.clientWidth / 2;
                }
            });
            next.onclick = function () {
                dragbox.scrollLeft += dragbox.clientWidth;
            }
            prev.onclick = function () {
                dragbox.scrollLeft -= dragbox.clientWidth;
            }
        }
    });
}



/*抛物线*/

function parabolla(el, target, className) {//元素本身、目标位置元素、抛出元素添加的classname，以便自定义样式
    const top = getElementInfo(el).top;//元素上方相对文档的偏移位置
    const left = getElementInfo(el).left;//元素左方相对文档的偏移位置


    const targetTop = getElementInfo(target).top;//元素上方相对文档的偏移位置
    const targetLeft = getElementInfo(target).left;//元素左方相对文档的偏移位置

    const fly = document.createElement('div');
    fly.style.position = 'absolute';
    fly.style.top = top + 'px';
    fly.style.left = left + 'px';
    fly.style.width = el.clientWidth + 'px';
    fly.style.height = el.clientHeight + 'px';
    fly.classList.add(className);

    document.body.appendChild(fly);

    anime({
        targets: fly,
        left: {
            value: targetLeft,
            duration: 400,
            easing: 'linear'
        },
        top: {
            value: targetTop,
            duration: 400,
            easing: 'cubicBezier(.6,-1.14,.92,.57)'
        },
        // width:{
        //     value:targetWidth,
        //     duration: 400,
        //     easing: 'linear',

        // },
        // height:{
        //     value:targetHeight,
        //     duration: 400,
        //     easing: 'linear',

        // },
        opacity: {
            value: [1, 0.2],
            duration: 400,
            easing: 'linear',
        },
        begin: function () {

        }
    })
}

//ios卡片滚动堆叠效果

function pileScroll(className = '.pile', fade = false) {
    const pile = document.querySelectorAll(className);
    pile.forEach(function (pileItems) {
        const items = pileItems.querySelectorAll('.pile-item');
        var faterStyle = getComputedStyle(pileItems, null);//获取css样式，返回字符串
        var faterPadding = parseInt(faterStyle.paddingTop);//获取元素padding值并取整型

        items.forEach(function (item) {
            const height = item.offsetHeight;//获取每个模块的高度，为固定值
            const top = item.offsetTop;//获取每个模块距离顶部的距离，为固定值
            var next = item.nextElementSibling;

            if (next) {
                var nextTop = next.offsetTop;//当前监听的item的下一个兄弟item上边缘距离顶部距离
            }
            pileItems.addEventListener("scroll", function () {
                const scrollY = this.scrollTop + faterPadding;//滚动条距离顶部的距离，包括padding

                const animeX = (height + top - scrollY) / height;//滚动条持续滚动，scrollY逐步增加，达到 top = scrollY 时（top为固定值），表示模块上方到达顶部，模块即将进入变化，此时animeX = 1，随着向下滚动，scrollY逐步增大，animeX < 1且逐步减小直到height + top = scrollY时，即滚动条滚动到了模块下边缘位置，此时animeX = 0；

                if (scrollY > top && scrollY < nextTop) {//当滚动的位置位于item上边缘与第二个item上边缘之间时
                    if (fade == true) {//表示隐藏过程要开启fade效果，模块逐步透明隐藏
                        item.style.willChange = 'transform, opacity';
                        item.style.opacity = animeX;
                    } else {
                        item.style.willChange = 'transform';
                        item.style.opacity = 1;
                    }

                    item.style.transform = 'scale(' + (animeX * 0.08 + 0.92) + ')';//animeX从 1 逐步减小到 0，当animeX = 1时，animeX * 0.8 / 10 + 0.92 = 1，模块大小不变，随着滚动条向下继续滚动，animeX逐步减小直到 0，animeX * 0.8 / 10 + 0.92 的值也逐步减小为 0.92，整个值 从 1 到 0.92 表示模块等比例缩小的比例值，0.92 可以自定义的模块缩放最小比例，0.08 = 1 - 0.92
                }
                if (scrollY >= nextTop) {//滚动条超过模块下一个兄弟模块上边缘时
                    item.style.opacity = 0;
                    item.style.transform = 'scale(0.92)';
                    item.style.willChange = '';

                }
                if (scrollY <= top) {//滚动条未超过模块上边缘时
                    item.style.opacity = 1;
                    item.style.transform = 'scale(1)';
                    item.style.willChange = '';
                }

            });
        })
    })
}


//ios风格时间选择器
function rollerSelectOld() {
    var roller = document.querySelectorAll('.rollerSelect-old');
    roller.forEach(function (rollerItem) {
        var optionItems = rollerItem.querySelectorAll('.rollerSelect-item');

        optionItems.forEach(function (item) {
            var itemHeight = item.offsetHeight;//item高度
            const itemTop = item.offsetTop;//获取每个模块距离顶部的距离，为固定值
            rollerItem.addEventListener("scroll", function () {
                var scrollY = this.scrollTop;//滚动条距离顶部的距离，变化值
                var animeX = (itemTop - scrollY) / itemHeight;
                if (animeX == 2) {
                    item.style.opacity = 1;
                    item.style.transform = 'rotateX(0) translateZ(0)'

                }
                if (animeX < 2) {
                    item.style.opacity = animeX / 2 + 0.1;
                    item.style.transform = 'rotateX(' + (30 * (2 - animeX)) + 'deg) translateZ(' + (8 * (animeX - 2)) + 'px)';

                }
                if (animeX > 2) {
                    item.style.opacity = (4 - animeX) / 2 + 0.1;
                    item.style.transform = 'rotateX(' + (30 * (2 - animeX)) + 'deg) translateZ(' + (8 * (2 - animeX)) + 'px)';

                }
                if (animeX < 0 || animeX > 4) {
                    item.style.opacity = 0;
                    item.style.transform = 'rotateX(0) translateZ(0)'
                }

            });

            if (rollerItem.querySelector('.selected')) {
                rollerItem.scrollTop = rollerItem.querySelector('.selected').offsetTop - itemHeight * 2;
            } else {
                rollerItem.scrollTop = itemHeight;
            };
            item.onclick = function () {
                rollerItem.scrollTop = this.offsetTop - itemHeight * 2;
                if (rollerItem.querySelector('.selected')) {
                    rollerItem.querySelector('.selected').classList.remove('selected');
                }
                this.classList.add('selected');
            }
        })
    })
}


function rollerSelect() {
    var roller = document.querySelectorAll('.rollerSelect');
    roller.forEach(function (rollerItem) {
        var items = rollerItem.querySelectorAll('.rollerSelect-item');
        var box = rollerItem.querySelector('.rollerSelect-box');
        var itemHeight = items[0].offsetHeight;//item高度 
        var itemNumber = items.length;//item数量
        var rollerItemHeight = rollerItem.offsetHeight//滚动范围高度
        var boxHeight;
        if (itemNumber >= 5) {//默认显示5项
            boxHeight = itemHeight * itemNumber;
        } else {
            boxHeight = itemHeight * (4 + itemNumber);//上下预留两个占位，表示至少要5个选项高度
        }
        box.style.height = boxHeight + 'px';//设置滚动高度
        var list = rollerItem.querySelector('.rollerSelect-list');
        var rollerHeight = rollerItem.offsetHeight;
        // var x = (boxHeight - rollerHeight + itemHeight/2 )/(itemNumber - 1);
        var x = (boxHeight - rollerItemHeight) / (itemNumber - 1);

        rollerItem.addEventListener("scroll", function () {
            var scrollY = this.scrollTop;//滚动条距离顶部的距离，变化值
            var scrollNum = (itemNumber - 1) * (scrollY / (boxHeight - rollerHeight));//当前最中间选项滚动位置参数
            var rotate = 30 * scrollNum;
            list.style.transform = 'rotateX(' + rotate + 'deg)';
            var i = parseInt(scrollNum);//滚动到的位置对应item编号,向上取整数

            items.forEach(function (item, index) {
                if (i - 2 == index) {
                    item.classList.add('show1');
                } else {
                    item.classList.remove('show1');
                }
                if (i - 1 == index) {
                    item.classList.add('show2');
                } else {
                    item.classList.remove('show2');
                }
                if (i == index) {
                    item.classList.add('show3');
                } else {
                    item.classList.remove('show3');
                }
                if (i + 1 == index) {
                    item.classList.add('show4');
                } else {
                    item.classList.remove('show4');
                }
                if (i + 2 == index) {
                    item.classList.add('show5');
                } else {
                    item.classList.remove('show5');
                }

                item.onclick = function () {
                    rollerItem.scrollTop = x * index;
                    if (rollerItem.querySelector('.selected')) {
                        rollerItem.querySelector('.selected').classList.remove('selected');
                    }
                    this.classList.add('selected');

                }

            })


        })
        if (rollerItem.querySelector('.selected')) {
            items.forEach(function (item, i) {
                if (item.matches('.selected')) {
                    rollerItem.scrollTop = x * i + 1;
                }
            })
        }
        else {
            rollerItem.scrollTop = 1;
        }





    })
}



//堆叠卡片翻页
function cardNext(el) {
    anime({
        targets: el,
        duration: 220,
        // easing: 'cubicBezier(.4,0,1,1)',
        // translateX: [0, '120%'],
        // rotate: [0, '24deg'],
        // opacity: [1, 0],
        begin: function () {
            el.classList.add('next');
        },
        complete: function () {
            //el.removeAttribute('style');
            el.classList.remove('next');
            el.parentNode.insertBefore(el, el.parentNode.firstChild);//添加dom到顶部
            cardStack()
            //el.remove()//移除

        }
    })
}

function cardPrev(el) {
    anime({
        targets: el,
        duration: 120,
        // easing: 'easeInOutQuad',
        // translateX: ['120%',0],
        // // rotate: [0, '24deg'],
        // opacity: [0,1],
        begin: function () {
            el.classList.add('prev');
            //el.style.transition = 'none';
            el.parentNode.appendChild(el);//将元素插入到末尾
        },
        complete: function () {
            //el.removeAttribute('style');
            el.classList.remove('prev');
            cardStack()
            //el.remove()//移除

        }
    })
}

function cardStack() {
    var stack = document.querySelectorAll('.card-stack');

    stack.forEach(function (item) {
        var firstCard = item.querySelector('.card-stack-item:first-child');
        var lastCard = item.querySelector('.card-stack-item:last-child');
        var next = lastCard.querySelector('.card-next');
        var prev = lastCard.querySelector('.card-prev');

        next.onclick = function () {
            cardNext(lastCard);

        }
        prev.onclick = function () {
            cardPrev(firstCard);

        }
    });

}



//折叠面板

function accordion() {
    const accordionItems = document.querySelectorAll('.accordion-toggle');
    accordionItems.forEach(function (item) {
        const accordionFater = item.closest('.accordion-item');
        const accordionContent = accordionFater.querySelector('.accordion-content');
        const h = accordionContent.querySelector('.accordion-content-info').getBoundingClientRect().height;
        if (accordionContent.matches('.show')) {
            accordionContent.style.height = h + 'px';
            item.checked='checked';
        } 
        item.onclick = function () {
            if (accordionContent.matches('.show')) {
                accordionContent.style.height = 0;
                accordionContent.classList.remove('show');
            } else {
                accordionContent.style.height = h + 'px';
                accordionContent.classList.add('show');
            }
        }
    })
}



//指北针

function compass() {
    const compassItems = document.querySelectorAll('.compass');
    compassItems.forEach(function (item) {
        const compassCenter = [getElementInfo(item).centerX, getElementInfo(item).centerY];
        //onmousedown 鼠标按下触发事件
        //onmousemove 鼠标按下时持续触发事件
        //onmouseup   鼠标抬起触发事件
        var angleLast = 0;
        var rotate = 0;
        var angle;
        var pageDwon = [];
        var pageUp = [];
        item.onmousedown = function (e) {

            pageDwon = [e.pageX, e.pageY];

            var angleNew = Math.atan2(e.pageX - compassCenter[0], - (e.pageY - compassCenter[1])) * (180 / Math.PI);//鼠标down时的角度

            document.onmousemove = function (e) {
                angle = Math.atan2(e.pageX - compassCenter[0], - (e.pageY - compassCenter[1])) * (180 / Math.PI);//鼠标move时角度变化

                rotate = angle - (angleNew - angleLast);//鼠标上次离开时，圆盘的角度与本次角度变化值

                item.style.transform = 'rotate(' + rotate + 'deg)';
            }

            document.onmouseup = function (e) {

                pageUp = [e.pageX, e.pageY];

                if (pageDwon[0] == pageUp[0] && pageDwon[1] == pageUp[1]) {
                    anime({
                        targets: item,
                        duration: 200,
                        easing: "cubicBezier(0, 0, 0.2, 1)",
                        rotate: 0,
                    })
                    angleLast = 0;
                    //清除事件
                    document.onmouseup = null;
                    document.onmousemove = null;


                } else {
                    angleLast = rotate;
                    //清除事件
                    document.onmouseup = null;
                    document.onmousemove = null;

                }


            }

        }
    })
}




//按钮手风琴
function accordionBtn(){
    var accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(function(item){
       var textWidth = item.querySelector('.accordion-btn-text').clientWidth / 10 + 'rem';
       item.style.setProperty('--textWidth', textWidth);
    })
}