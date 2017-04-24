jQuery(document).ready(function($) {
    // Functions
    // Toggles the visibility of the modals
    var toggleVisibility = function toggleVisibility() {
        if(!$('#teaser').hasClass('hidden')) {
            $('.opacity').addClass('hidden');
            $('#teaser').addClass('hidden');            
        }
        if(!$('#synopsis').hasClass('hidden')) {
            $('.opacity').addClass('hidden');
            $('#synopsis').addClass('hidden');            
        }
    }

    // When you click the synopsis button, removes the class hidden of the modal
    $('#btnSynopsis').click(function() {
        $('.opacity').removeClass('hidden');
        $('#synopsis').removeClass('hidden');
    });

    // When you click the teaser button
    $('#btnTeaser').click(function() {
        $('.opacity').removeClass('hidden');
        $('#teaser').removeClass('hidden');
    })

    

    // When you click the arrow, hides the modal
    $('.imgBehind').click(function() {
        toggleVisibility();
    })

    // When you click the opacity the modal hides
    $('.opacity').click(function() {
        toggleVisibility();
    })
});