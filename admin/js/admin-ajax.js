$(document).ready(function() {
    $("#guardar-registro").on('submit', function(e) {
        e.preventDefault();
        var datos = $(this).serializeArray()
        $.ajax({
            type: $(this).attr('method'),
            data: datos,
            url: $(this).attr('action'),
            dataType: 'json',
            success: function(data) {
                var resultado = data
                if (resultado.respuesta == 'exito') {
                    Swal.fire(
                        'Correcto!',
                        'Se guardó correctamente',
                        'success')
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Hubo un error!'

                    })
                }

            }
        })

    });

    //Eliminar un registro

    $(".borrar_registro").on("click", function(e){
        e.preventDefault();

        var id = $(this).attr("data-id");
        var tipo = $(this).attr("data-tipo");

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un registro eliminado no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then(function() {

            $.ajax({
                type:"post",
                data:{
                    "id": id,
                    "registro": "eliminar"
                },
                url: "modelo-" +tipo+ ".php",
                success:function(data){
                    var resultado = JSON.parse(data);
                    if(resultado.respuesta == "exito"){
                        Swal.fire(
                            'Eliminado!',
                            'Registro eliminado.',
                            'success'
                          )
                          jQuery('[data-id="'+resultado.id_eliminado+'"]').parents("tr").remove();
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'No se pudo eliminar!'
                          })
                    }
                }
            })
          });
    });









})