$(function() {
    


    // NON-MAP FUNCTIONS
    // insert starter content
    //$('#tooltips').html('<p class="message">' + emptyTooltip + '</p>');
    
    $('a[href="#download"]').click(function(e){
        e.preventDefault();
        $('#backdrop').fadeIn(200);
        $('#download').show(200);
        $('#close').show(200);
    });
    $('a[href="#howto"]').click(function(e){
        e.preventDefault();
        $('#backdrop').fadeIn(200);
        $('#howto').show(200);
        $('#close').show(200);
    });
    $('#close').click(function(e){
        e.preventDefault();
        $('#backdrop').fadeOut(200);
        $('#download').hide(200);
        $('#howto').hide(200);
        $('#close').hide(200);
    });
    $('#backdrop').click(function(e){
        e.preventDefault();
        $('#backdrop').fadeOut(200);
        $('#download').hide(200);
        $('#howto').hide(200);
        $('#close').hide(200);
    });

});
