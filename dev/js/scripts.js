$(function () {
    /**
     * Show modal
     */
    $('#show-modal').on('click', function () {
        $('.overlay, .notice').show();
    });
    /*
     * hide modal
     */
    $('.overlay, .close').on('click', function () {
        $('.overlay, .notice').hide();
    });
    /*
     * form
     * @param {type} $
     * @returns {undefined}
     */
    jQuery(function ($) {
        $('section').on('click', 'a', function (e) {
            $('.card').toggleClass('flipped');
        });
    });
});