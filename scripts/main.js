$(document).ready( function () {
	$("#form-selection").on("change", function() {
	    var id = $(this).val() + "_content";
	    $("#" + id).show().siblings().hide()
	})
});