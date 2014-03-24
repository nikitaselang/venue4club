var registration = {};

registration.sendData = function(){
	     var form = $(this);
		$('.error', form).html('');
        $(":submit", form).button("Отправка...");

        $.ajax({
            url: "/registration",
            method: "POST",
            data: form.serialize()
			})
			.always(function () {
                $(":submit", form).button("reset");
            })
			.done(function(jqXHR){
				form.html("Информация сохранена. Проверьте почту и подтвердите регистрацию.").addClass('alert-success');
                    //window.location.href = "/personalinfo";
			})
			.fail(function(jqXHR){
				var error = JSON.parse(jqXHR.responseText);
				$('.error').html(error.message).addClass('alert-danger');;
			});
			
			
			/*,
            complete: function () {
                $(":submit", form).button("reset");
            },
            statusCode: {
                200: function () {
                    form.html("Информация сохранена. Проверьте почту и подтвердите регистрацию.").addClass('alert-success');
                    //window.location.href = "/personalinfo";
                },
                403: function(jqXHR){
					var error = JSON.parse(jqXHR.responseText);
					$('.error', form).html(error.message);
				},
				400: function(jqXHR){
					var error = JSON.parse(jqXHR.responseText);
					$('.error', form).html(error.message);
				}
            }
		});*/

		return false;

}

registration.init = function(){
	$('#reg-form').submit(registration.sendData);	
};
