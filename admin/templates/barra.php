<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper">
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="../index.php" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      

      
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Hola <?php echo$_SESSION["nombre"]; ?>
                  <span><i class="far fa-star"></i></span>
                </h3>
                <li class="navbar-nav">
                  <div class="nav-item">
                    <a href="editar-admin.php?id=<?php echo$_SESSION["id"]; ?>" class="btn btn-success btn-flat">Ajustes</a>
                  </div>
                  <div class="nav-item">
                    <a href="login.php?cerrar_sesion=true" class="btn btn-success btn-flat">Cerrar Sesión</a>

                  </div>

                </li>

                
              </div>
            </div>
            <!-- Message End -->
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->