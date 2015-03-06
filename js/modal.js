// Click the button to open the modal
$('.modal-open-button').on('click', function(event) {
  event.preventDefault();
  // Disable scrolling of the main page content
  $('body').addClass('modal-open');
  // Show the modal
  $(this).next().show();
});

// Close the modal
$('.modal-close-button').on('click', function(event) {
  event.preventDefault();
  // Remove the class that prevents scrolling
  if($('body').hasClass('modal-open')) {
 		$('body').removeClass('modal-open');
	}
  // Modal fades out
  $('.modal-wrapper').fadeOut();

});

// If the user clicks within the modal, don't close it
$('.modal-open-button, .modal-container').on('click', function(event) {
  event.stopPropagation();
  return false;
});

// When the user clicks outside the modal, close the modal
$(window).on('click', function() {
  if($('body').hasClass('modal-open')) {
 		$('body').removeClass('modal-open');
	}
  $('.modal-wrapper').fadeOut();
});
