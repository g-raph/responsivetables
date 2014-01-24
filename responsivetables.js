// responsive tables function
(function( $ ){
   $.fn.responsivetable = function() {
      
      // first count the table-rows 
      var rowcount = $($(this).find('tbody > tr')).length;
      // insert a blank div before the table (and show/hide it with css in your mediaqueries)
      $('<div class="mobiletable"></div>').insertBefore($(this));
      // function for every row seperately
      for (var i = 1;i <= rowcount;i++) {
      // create a left and a right div within a row and append it to the created main div
        $('<div class="row row-'+i+'"><div class="left"></div><div class="right"></div></div>').appendTo($(this).parent().find('.mobiletable'));
        // clone the thead th's into the just created left div
        $($(this).find('thead > tr')).clone().appendTo($(this).parent().find('.mobiletable .row-'+i+' .left'));
        // clone the tbody td's into the just created right div
        $($(this).find('tbody > tr:nth-child('+i+')')).clone().appendTo($(this).parent().find('.mobiletable .row-'+i+' .right'));
      }

   };
})( jQuery );