(function(){
    "use strict";

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
                var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) * (cantEtiquetas * 2);
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

        //Mapa
        var map = L.map('mapa').setView([38.890711, 1.396095], 16);   /* Agrego mis coordenadas entre los [] y luego de la coma está el zoom del mapa, cuán más grande sea el número mas cerca será el zoom */

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([38.890711, 1.396095]).addTo(map)  /* Agrego mis coordenadas entre los [] */
           .bindPopup('GDLWebCamp 2021<br> Boletos ya disponibles.') /* Descripción del globo de ubicación exacta */
           .openPopup();

    }); //DOM CONTENT LOADED
})();



$(function(){
    alert("funciona")
});











