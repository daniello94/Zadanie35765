$(document).ready(function() {
    $('.list').click(function() {

        if ($(this).hasClass('open')) {

            $(this).removeClass(' open');
            $(this).find('.paragtapth').slideUp();

        } else {
            $(this).addClass(' open');
            $(this).find('.paragtapth').slideDown();
        }



        console.log("działą funkcja");
    })
})