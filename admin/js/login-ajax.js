$(document).ready(function(){


$("#login-admin").on('submit', function(e) {
        e.preventDefault();
        var datos = $(this).serializeArray()
        $.ajax({
            type: $(this).attr('method'),
            data: datos,
            url: $(this).attr('action'),
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var resultado = data
                if (resultado.respuesta == 'exitoso') {
                    Swal.fire(
                        'Login Correcto!',
                        'Bienvenid@ '+resultado.usuario+' !! ',
                        'success')
                        setTimeout(function(){ //va a esperar 2 segundos antes de ejecutarse
                            window.location.href = "admin-area.php";

                        }, 2000);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Usuario o Password incorrectos',
                        text: 'Hubo un error!'

                    })
                }

            }
        });

    });

});