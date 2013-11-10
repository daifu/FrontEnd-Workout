$(function() {

  $.spokeo = {};

  // global extended jquey function
  //
  $.fn.extend({
    isShown: function() {
      return this.is(':visible');
    },
    isHidden: function() {
      return !this.is(':visible');
    },
    unActiveAll: function() {
      this.find('.active').removeClass('active');
    }
  })

  $.spokeo.menu = function() {
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
          // push up the whole menu
          $('.main-wrapper').animate({
            top: '0'
          });
          $('.divider').animate({
            top: '40px'
          });
        } else {
          // push down the whole menu
          $('.main-wrapper').animate({
            top: '164px' // 164: height of top menu
          });
          $('.divider').animate({
            top: '204px' //164 + 40
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

    // Listen the search tabs, if it click the search tab, it should
    // highlight that link
    var _listenClickSearchTabs = function(){
      $('.nav-menu li a').on('click', function() {
        $(this).parents('ul').unActiveAll();
        $(this).addClass('active');
      });
    };

    return {
      init: function() {
        _toggleDropdown('.js-dropdown');
        _toggleDropdownMobile('.js-dropdown-mobile');
        _hightlightSearchOnFocus();
        _listenClickSearchTabs();
      }
    }
  }();

});
