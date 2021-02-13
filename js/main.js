// 冒泡提示
$('#footer .contact a').tooltip()


// 轮播图移动端触屏
let startX = 0
let endX = 0
$('.carousel-inner').on('touchstart', (e) => {
    startX = e.targetTouches[0].clientX
})

$('.carousel-inner').on('touchend', (e) => {
    endX = e.changedTouches[0].clientX
    if (startX - endX < 0) {
        // 手指是向左滑动
        $('#carouselExampleIndicators').carousel('prev')
    } else {
        $('#carouselExampleIndicators').carousel('next')
    }
})


// 导航滚动处理
$('#header .nav-item').on('click', function () {
    let Hometop = 0
    let hotCourseTop = $('#hot-course').offset().top
    let productTop = $('#product').offset().top
    let aboutTop = $('#about').offset().top
    let linkTop = $('#link').offset().top
    let footerTop = $('#footer').offset().top

    let topList = [Hometop, hotCourseTop, productTop, aboutTop, linkTop, footerTop]
    $('html, body').animate({
        scrollTop: topList[$(this).index()]
    }, 1000)
})