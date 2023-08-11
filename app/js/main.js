$(function () {
    $('.menu-btn').on('click', function() {
        $('.menu').toggleClass('menu--open');
        $(this).toggleClass('active');
      })
});
