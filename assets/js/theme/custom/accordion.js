export default function showAccordion() {
    $('ul.yt-accordion li').each(function toggleInnerVisiblity() {
        if ($(this).index() > 0) {
            $('.yt-accordion-inner').hide();
            $('.enable+.yt-accordion-inner').show();
            $('.enable+.yt-accordion-inner').addClass('active');
        } else {
            $('.enable').addClass('active');
        }

        const ua = navigator.userAgent;
        const event = ua.match(/iPad/i) ? 'touchstart' : 'click';

        $(this)
            .children('.accordion-heading')
            .bind(event, function toggleHeadingState() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).siblings('.yt-accordion-inner').removeClass('active');
                    $(this).siblings('.yt-accordion-inner').slideUp(350);
                } else {
                    $(this).addClass('active');
                    $(this).siblings('.yt-accordion-inner').addClass('active');
                    $(this).siblings('.yt-accordion-inner').slideDown(350);
                }

                $(this)
                    .parent()
                    .siblings('li')
                    .children('.yt-accordion-inner')
                    .slideUp(350);
                $(this).parent().siblings('li').find('.active').removeClass('active');
            });
    });
}
