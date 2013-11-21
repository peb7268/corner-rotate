$('document').ready(function(){
    $('#servicesGrid li a').on('click', function(e){
        e.preventDefault();
        var selector    =  $(this).attr('href');
        $(selector).addClass('active').fadeIn(100);
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
                    console.log('step');
                    $(this).css("transform", "rotate(" + now +"deg)");
                    $(this).css("-webkit-transform", "rotate(" + now +"deg)");
                    $(this).css("-moz-transform", "rotate(" + now +"deg)");
                    $(this).css("-ms-transform", "rotate(" + now +"deg)");
                },
                complete: function(){
                    $(this).removeAttr('class').removeAttr('style');
                }
              }, 'linear');            
    }
});