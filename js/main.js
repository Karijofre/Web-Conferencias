(function(){
    /* "use strict"; */

    var regalo = document.getElementById("regalo");

    document.addEventListener("DOMContentLoaded", function(){
        
        //Campos datos usuarios
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        var email = document.getElementById("email");
        
        //Campos pases
        var pase_dia = document.getElementById("pase_dia");
        var pase_dosdias = document.getElementById("pase_dosdias");
        var pase_completo = document.getElementById("pase_completo");

        //Botones y divs

        var calcular = document.getElementById("calcular");
        var errorDiv = document.getElementById("error");
        var botonRegistro = document.getElementById("btnRegistro");
        var lista_productos = document.getElementById("lista-productos");
        var suma = document.getElementById("suma-total");

        //Extras

        var etiquetas = document.getElementById("etiquetas");
        var camisas = document.getElementById("camisa_evento");


        if(document.getElementById("calcular")){

        

        calcular.addEventListener("click", calcularMontos);

        pase_dia.addEventListener("blur", mostrarDias); /* muestra solamente los días disponibles según el paquete que elija el usuario. Importante, blur retorna el value que ingresa el usuario una vez que hace clic fuera del input */
        pase_dosdias.addEventListener("blur", mostrarDias);
        pase_completo.addEventListener("blur", mostrarDias);

        nombre.addEventListener("blur", validarCampos);
        apellido.addEventListener("blur", validarCampos);
        email.addEventListener("blur", validarCampos);
        email.addEventListener("blur", validarMail);
        
        function validarCampos(){
            if(this.value == ""){
                errorDiv.style.display = "block";
                errorDiv.innerHTML = "*Este campo es obligatorio";
                this.style.border = "1px solid red";
                errorDiv.style.border = "1px solid red";
            }else{
                errorDiv.style.display = "none";
                this.style.border = "1px solid #cccccc";
            }
        }

        function validarMail(){
            if(this.value.indexOf("@") > -1){    /* indexOf busca el @ en el arreglo  sino retorna -1; en este caso si el dato que retorna es mayor a -1 va a pasar la validación */
                errorDiv.style.display = "none";
                this.style.border = "1px solid #cccccc";
            }else{
                errorDiv.style.display = "block";
                errorDiv.innerHTML = "*Debe tener al menos un @";
                this.style.border = "1px solid red";
                errorDiv.style.border = "1px solid red";
            }
        }

        

        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value === ""){
                alert("Debes elegir un regalo");
                regalo.focus();
            }else{
                /* console.log(pase_dia.value);
                console.log(pase_dosdias.value);
                console.log(pase_completo.value); */
                var boletosDia = parseInt( pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt( pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt( pase_completo.value, 10) || 0,
                    cantCamisas = parseInt( camisas.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10)  || 0;

                   /*  console.log("Boletos Dia: " + boletosDia);
                    console.log("Boletos 2 Dias:" + boletos2Dias);
                    console.log("Boletos Completos" + boletoCompleto); */
                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);
                 // console.log(totalPagar);  
                var listadoProductos = [];
                if(boletosDia >= 1){
                    listadoProductos.push(boletosDia + "Pases por día");
                };

                if(boletos2Dias >= 1){
                    listadoProductos.push(boletos2Dias + "Pases por 2 dias");
                };

                if(boletoCompleto >= 1){
                    listadoProductos.push(boletoCompleto + "Pases Completos");
                };

                if(cantCamisas >= 1){
                    listadoProductos.push(cantCamisas + "Camisas");
                }

                if(cantEtiquetas >= 1){
                    listadoProductos.push(cantEtiquetas + "Etiquetas");
                }

                //console.log(listadoProductos);

                lista_productos.style.display = "block"; /* Con CSS lo oculto y con js lo imprimo cuando doy click a calcular */
                lista_productos.innerHTML = "";
                for(var i = 0; i < listadoProductos.length ; i ++)  {
                    lista_productos.innerHTML += listadoProductos[i] + "<br/>";
                }
                suma.innerHTML = "$" + totalPagar.toFixed(2); /* toFixed retornará (2) decimales luego de la coma en el total a pagar y no más */
                     }

        }

        function mostrarDias(){
            var boletosDia = parseInt( pase_dia.value, 10) || 0,
            boletos2Dias = parseInt( pase_dosdias.value, 10) || 0,
            boletoCompleto = parseInt( pase_completo.value, 10) || 0,

            diasElegidos = [];
            if(boletosDia > 0){
                diasElegidos.push("viernes");
            }
            if(boletos2Dias > 0){
                diasElegidos.push("viernes", "sabado");
            }
            if(boletoCompleto > 0){
                diasElegidos.push("viernes", "sabado", "domingo"); /* viernes, sabado y domingo son los id del html de los talleres por días */
            }

            for(var i = 0; i < diasElegidos.length; i ++){
                document.getElementById(diasElegidos[i]).style.display = "block"; /* basado en el evento blur */
            }
        }
        
        }  

    }); //DOM CONTENT LOADED
})();

    $(function(){

        //Lettering provisto de: http://letteringjs.com/

        $(".nombre-sitio").lettering();

        //Agregar clase al menú
        $("body.conferencia .navegacion-principal a:contains('Conferencia')").addClass("activo");
        $("body.calendario .navegacion-principal a:contains('Calendario')").addClass("activo");
        $("body.invitados .navegacion-principal a:contains('Invitados')").addClass("activo");

        //Menú fijo

        var windowHeight = $(window).height(); //La medición en píxeles de mi página web
        var barraAltura = $(".barra").innerHeight();

    

        $(window).scroll(function(){
            var scroll = $(window).scrollTop();  //línea importante para detectar el scroll
            if(scroll > windowHeight){
                $(".barra").addClass("fixed");
                $("body").css({"margin-top": barraAltura + "px"});
            }else{
                $(".barra").removeClass("fixed");
                $("body").css({"margin-top": "0px"});
            }
        
        });

        //Menú responsive

        $(".menu-movil").on("click", function(){
            $(".navegacion-principal").slideToggle();
        })


        //Programa de Conferencias

        $("div.ocultar").hide();

        $(".programa-evento .info-curso:first").show();

        $(".menu-programa a:first").addClass("activo");

        $(".menu-programa a").on("click", function(){
            $(".menu-programa a").removeClass("activo");
            $(this).addClass("activo");
            $(".ocultar").hide();
            var enlace = $(this).attr("href");
            $(enlace).fadeIn(1000);
            return false; //Para que no de el salto de cada sección al aparecer
        });


        //Animaciones para los números

        $(".resumen-evento li:nth-child(1) p").animateNumber({number:6}, 1200);
        $(".resumen-evento li:nth-child(2) p").animateNumber({number:15}, 1200);
        $(".resumen-evento li:nth-child(3) p").animateNumber({number:3}, 1500);
        $(".resumen-evento li:nth-child(4) p").animateNumber({number:9}, 1500);


        //Cuenta regresiva provisto de: http://hilios.github.io/jQuery.countdown/

        $(".cuenta-regresiva").countdown("2021/11/04 09:00:00", function(event){
            $("#dias").html(event.strftime("%D"));  //strftime es una función del countdown para psar las fechas a un string, las formatea
            $("#horas").html(event.strftime("%H"));
            $("#minutos").html(event.strftime("%M"));
            $("#segundos").html(event.strftime("%S"));

             //Colorbox

            $(".invitado-info").colorbox({inline:true, width:"50%"});

           
        });
       

        
         

        
        

        //Mapa,

        //- Agrego mis coordenadas entre los [] y luego de la coma está el zoom del mapa, cuán más grande sea el número mas cerca será el zoom. ------  var map
        //- Agrego mis coordenadas entre los [] -------  L.marker
        //- Descripción del globo de ubicación exacta -------  .bindPopup
       
         $(function(){
            var map = L.map('mapa').setView([38.890711, 1.396095], 16);

           L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

           L.marker([38.890711, 1.396095]).addTo(map)
           .bindPopup('GDLWebCamp 2021<br> Boletos ya disponibles.')
           .openPopup();
        })
        
       

    });
     

   

























