/* common */
$(function () {
    $('.header .btn-menu').on('click', (e) => {
        const target = $(e.target);
        const header = target.parents('.header');
        
        $('html').css('overflow', 'hidden');
        header.addClass('open');
    });

    $('.header .btn-close').on('click', (e) => {
        const target = $(e.target);
        const header = target.parents('.header');

        $('html').css('overflow', '');
        header.removeClass('open');
    });

    setFullHeight();

    $(window).on('resize orientationchange', function () {
        setFullHeight();
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
			$('header').addClass('active');
		} else {
			$('header').removeClass('active');
		}
    });
});

function setFullHeight() {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    
    if(innerWidth < 751){
        $('.header .nav-wrap').css('height', innerHeight + 'px');
    }
}