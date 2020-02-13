$('#year').text(new Date().getFullYear());


(() => {
    $('.na-rate').hide;

    $('#toggle').click(function () {
        $('.change').slideToggle('slow');
        $('.na-rate').slideToggle('slow');
    })
})();