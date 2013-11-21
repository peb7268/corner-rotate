$('document').ready(function(){
    $('#servicesGrid li a').on('click', function(e){
        e.preventDefault();
        var selector    =  $(this).attr('href');
        var height      =  $('body').outerHeight() + $('#grid-content').outerHeight();
        $('#shade').height(height);
        $(selector + ', #shade, #grid-content').fadeIn(100, function(){
            $(selector).addClass('active');
        }); 
    });
    
    $('a.close').on('click', function(e){
        e.preventDefault();
        var selector    = '#' + $(e.target).parent().attr('id');
        var offset      =  (Number($(selector).css('margin-left').split('px')[0]) - $(selector).outerWidth()) + 'px';
        
        rotateOffScreen(selector, offset);
    });

    function rotateOffScreen(selector, offset){
            $(selector).css('marginLeft', offset);
            //Animate Left
            $(selector).animate({
                transform: -90
            },
            {
                duration: 300,
                step: function(now, fx) {
                    $(this).css("transform", "rotate(" + now +"deg)");
                    $(this).css("-webkit-transform", "rotate(" + now +"deg)");
                    $(this).css("-moz-transform", "rotate(" + now +"deg)");
                    $(this).css("-ms-transform", "rotate(" + now +"deg)");
                },
                complete: function(){
                    $(this).removeAttr('class').removeAttr('style');
                    $('#shade, #grid-content').fadeOut(100);
                }
              }, 'swing');            
    }
});