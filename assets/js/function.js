$( document ).ready(function(){

  $('#hexGrid .hex').each(function(i){

    setTimeout(function() {

      $('#hexGrid .hex').eq(i).addClass('is-showing');

    }, 150 * i+1);

  });

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if (wScroll > $('#portfolio').offset().top ){



    }

  });

//

});
