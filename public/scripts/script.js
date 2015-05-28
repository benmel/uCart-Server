$(document).ready(function() {
  $('#product-coupon').on('change', function() {
  	$('#coupon-form').attr('action', this.value);
  });
});
