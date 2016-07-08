/*
  * @package Arena
  * @subpackage Arena HTML
  * 
  * Template Scripts
  * Created by Themeturn

  
*/

$(window).load(function() { // makes sure the whole site is loaded
  "use strict";
    
    // $('.navbar-nav li a').on('click', function(){
    //     if($('.navbar-toggle').css('display') !='none'){
    //         $(".navbar-toggle").trigger( "click" );
    //     }
    // });

    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    // Avoid following the href location when clicking
    event.preventDefault();
    // Avoid having the menu to close when clicking
    event.stopPropagation();
    // Re-add .open to parent sub-menu item
    $(this).parent().addClass('open');
    $(this).parent().find("ul").parent().find("li.dropdown").addClass('open');
});



  /* ==============================================
      Menu toggle
    =============================================== */ 
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 40;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 70
    })
 


});
  



  $(document).ready(function(){
  
  "use strict";
   
    $('#app-carousel').carousel({
        interval: 100000
    })


/* ==============================================
Back To Top Button
=============================================== */  
 
  $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
      // scroll body to 0px on click
      $('#back-top').click(function () {
          $('#back-top a').tooltip('hide');
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
      
      $('#back-top').tooltip('hide');

  

});