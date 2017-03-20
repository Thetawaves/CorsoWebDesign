$(document).ready(function () {
    var $grid = $('.grid').isotope({
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    // button is-checked
    $('#prodotti .button-group button').click(function () {
        $('#prodotti .button-group button').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
    // navbar on scroll
    var scrollo;
    $(window).scroll(function ( ) {
        scrollo=$(window).scrollTop();
        if(scrollo>300){
            $('#menu').addClass('scrollmenu');
            $('#logo').addClass('scrolllogo');
            $('#menu a').addClass('scrolla');
        }
        
        else{
            $('#menu').removeClass('scrollmenu');
            $('#logo').removeClass('scrolllogo');
            $('#menu a').removeClass('scrolla');
        }
    });
    //scrollTo section
    var position;
    $('#menu a').click(function(event){
        event.preventDefault();
        position=$(this).attr("href");
        $.scrollTo(position,500);
    });
    
    $('#carousel a').click(function(event){
        event.preventDefault();
        position=$(this).attr("href");
        $.scrollTo(position,500);
    });
    //Ajax
    $('.grid-item').click(function () {
        $('#spacing').slideUp(500);
        $('#spacing').load('product-slide.html');
        $('#spacing').slideDown(500);
    });
    
})