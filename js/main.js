$(document).ready(function () {

    $nav = $('.nav');
    $toggleColapse = $('.toggle-collapse');

    /*----click event on toggle menu---- */
    $toggleColapse.click(function () {
        $nav.toggleClass('collapse');
    })

});