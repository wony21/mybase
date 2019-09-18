/**
 * login.js
 */
let fnObj = {};

// Event
fnObj.initEvent = function() {
	
	$('#btn-login').on('click', function(){
		$('#login-form').trigger('submit');
	});
}

$(function() {
	fnObj.initEvent();
});