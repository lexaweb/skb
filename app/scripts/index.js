
import $ from "jquery";

$(document).ready(function() {


  $(function(){
    $('.top-helpers-mb-button').click(function(){
        $('.top-helpers-mb-button').toggleClass('active');
        $('.top-helpers-mb-wrapper').toggleClass('active');
    });
});

$(function(){
  $('.dropdown-block').click(function(){
      $('.dropdown').toggleClass('active');
  });
});

$(document).click( function(e){
  if ( $(e.target).closest('.dropdown-block').length ) {
      // клик внутри элемента 
      return;
  }
  // клик снаружи элемента 
  $('.dropdown').removeClass('active');
});

 
});

