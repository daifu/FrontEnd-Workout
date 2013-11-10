$(function() {

  $.speoko = {};

  // global extended jquey function
  //
  $.fn.extend({
    isShown: function() {
      return this.is(':visible');
    },
    isHidden: function() {
      return !this.is(':visible');
    }
  })

  $.speoko.menu = function() {
    var _toggleDropdown = function(cls) {
      $(cls).on('click', function() {
        var that = this; // save the object
        // show the dropdown menu
        $('.js-dropdown-menu').toggle(200, function() {
          if ($('.js-dropdown-menu').isShown()) {
            $(that).removeClass('down_arrow_icon').addClass('up_arrow_icon');
          } else {
            $(that).removeClass('up_arrow_icon').addClass('down_arrow_icon');
          }
        });
      });
    };

    var _toggleDropdownMobile = function(cls) {
      $(cls).on('click', function(){
        if ($('.js-dropdown-menu-mobile').isShown()) {
          // push down the whole menu
          $('.main-wrapper').animate({
            top: '0px'
          });
          $('.divider').animate({
            top: '50px'
          });
        } else {
          // push down the whole menu
          $('.main-wrapper').animate({
            top: '156px' // 156: height of top menu
          });
          $('.divider').animate({
            top: '206px' //156 + 50
          });
        }
        $('.js-dropdown-menu-mobile').toggle(400);
      });
    };

    var _hightlightSearchOnFocus = function() {
      var $search_input = $('#search');
      $search_input.focusin(function(){
        $('.search-form-wrapper').css('border-color', '#4282c4'); //darkblue
      });
      $search_input.focusout(function(){
        $('.search-form-wrapper').css('border-color', '#a1aab3'); //gray
      });
      $search_input.on('click', function(){
        $(this).select();
      });
    };

    return {
      init: function() {
        _toggleDropdown('.js-dropdown');
        _toggleDropdownMobile('.js-dropdown-mobile');
        _hightlightSearchOnFocus();
      }
    }
  }();

});
