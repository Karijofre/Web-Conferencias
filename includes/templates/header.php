<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Oswald:wght@200&family=PT+Sans&display=swap" rel="stylesheet">
  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->
  <link rel="stylesheet" href="css/normalize.css">

  <?php

    $archivo = basename($_SERVER["PHP_SELF"]);
    $pagina = str_replace(".php", "", $archivo);
    if($pagina == "invitados" || $pagina == "index"){
      echo '<link rel="stylesheet" href="css/colorbox.css">';
    }else if($pagina == "conferencia"){
      echo '<link rel="stylesheet" href="css/lightbox.css">';
    }
  ?>

  <link rel="stylesheet" href="css/main.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
  <meta name="theme-color" content="#fafafa">
</head>

<body class=" <?php echo $pagina; ?> ">
  


  <!-- Add your site or application content here -->
  <header class="site-header">
    <div class="hero">
      <div class="contenido-header">
        <nav class="redes-sociales">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter-square"></i></a>
          <a href="#"><i class="fab fa-pinterest"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </nav>
        <div class="informaci??n-evento">
          <div class="clearfix">
            <p class="fecha"><i class="fas fa-calendar-alt"></i> 04-11 Nov</p>
            <p class="ciudad"><i class="fas fa-map-marker-alt"></i> Eivissa, Spain</p>
          </div>
          <h1 class="nombre-sitio">GDLWEBCAMP</h1>
          <p class="slogan">La mejor conferencia de <span>dise??o web</span></p>

        </div><!--informaci??n-evento-->

      </div>
    </div> <!--hero-->
  </header>

 <div class="barra">
  <div class="contenedor contenido-barra clearfix">
    <div class="logo">
        <a href="index.php">
        <img src="img/logo.svg" alt="logo web-conferencias">
        </a>
    </div>
    <div class="menu-movil">
     
      <span></span>
      <span></span>
      <span></span>

    </div>
    <nav class="navegacion-principal clearfix">
      <a href="conferencia.php">Conferencia</a>
      <a href="calendario.php">Calendario</a>
      <a href="invitados.php">Invitados</a>
      <a href="registro.php">Reservaciones</a>

    </nav>

   </div><!--Contenedor-->

 </div><!--Barra-->
</body>