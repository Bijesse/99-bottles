$( document ).ready(function() 
{
   $(function() {
  var MAX_IMAGES = 100;
  var oneImage = $('img');
  var i, clone;
  for (i = 0; i < MAX_IMAGES; i++) {
    $('body').append(oneImage.clone());
  }
});
});
