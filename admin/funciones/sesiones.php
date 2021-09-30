<?php

//Se inicia la sesión, luego el usuario autenticado() llama a la función revisar usuario() que revisa que el usuario esté logueado, en caso de que no , regresa a usuario autenticado() y avisa que no está logueado y lo manda al header que encontrará cómo loguearse ;) 

function usuario_autenticado(){
    if(!revisar_usuario()){
        header("Location:login.php");
        exit();
    }
}

function revisar_usuario(){
    return isset($_SESSION["usuario"]);
}
session_start();
usuario_autenticado();


?>