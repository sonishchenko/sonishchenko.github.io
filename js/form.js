var OPPENED_MODAL = 'modal-is-oppened';

$('.open-window').click(function() {
  $('.main-bg').addClass(OPPENED_MODAL);
  $('.forma-completed, .forma-bg').fadeIn();
})

$('.completed-button, .forma-bg').click(function() {
  $('.main-bg').removeClass(OPPENED_MODAL);
  $('.forma-completed, .forma-bg').fadeOut("slow");
})

$(window).scroll(function(){
    $('.forma-completed').css({'top': $(window).scrollTop() + 150})
}).scroll();