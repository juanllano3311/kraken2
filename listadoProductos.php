<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Listado</title>
    <link rel="icon" type="image/jpg" href="img/logo.jpg">
    <link rel="stylesheet" href="style.css">
</head>
<body class="oscuro">
    
<?php

include("BaseDatos.php");

$transaccion = new BaseDatos();

$consultaSQL="SELECT * FROM producto";

$productos=$transaccion->consultarDatos($consultaSQL);





?>

<header class="colornav">


<h1>Lista De Productos:</h1>
      <nav class="menu">
        <ul class="nav nav-tabs ">
            <li class="nav-item">
              <a class="nav-link  " href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="historia.html">Historia</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="prieralbum.html">Biografias</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="krakenllylll.html">Albumes Conocidos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="registro.html ">Registro</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="registroArt.php">Regis.Articulos</a>
              </li>
              <li class="nav-item">
              <a class="nav-link active" href="listadoProductos.php">Lista.Articulos</a>
              </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
            </li>
        </ul>   
</nav>

</header>

<main class="secun">

<div class="container oscuro">
    <div class="row row-cols-1 row-cols-md-3">

    <?php foreach($productos as $producto): ?>

             <div class="col mb-4">

                 <div class="card h-100">
                 <h2 class="card-title"><?php echo($producto["Nombre"]);?></h2>
                    <img src="<?php echo($producto["Imagen"]); ?>" class="card-img-top" alt="...">
                    <div class="card-body dark">
                    <h6 class="card-text"><?php echo($producto["Descripcion"]);?></h6>
                        <h6 class="card-text">Marca: <?php echo($producto["Marca"]);?></h6>
                        <h6 class="card-text">Valor: <?php echo($producto["Valor"]);?></h6>
                        <br>
                        <a href="eliminarProducto.php?id=<?php echo($producto["id_Prod"]);?>" class="btn btn-danger">Eliminar</a>
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#editar<?php echo($producto["id_Prod"]) ?>">
                        Editar
                        </button>
                        
                      
     
                     </div>

                </div>
                
<div class="modal fade" id="editar<?php echo($producto["id_Prod"]) ?>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edición</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>






      <div class="modal-body">
      <form action="editarProducto.php?id=<?php echo($producto["id_Prod"])?>" method="POST">
      <div class="form-group w-100">
      <label>Descripción</label>
           <label  class="letra">Descripción</label>
            <textarea class="form-control"  rows="3" name="desEditar"><?php echo($producto["Descripcion"]);?></textarea>
      </div>
  <div class="form-group">

    <label>Valor</label>
    <input type="number" class="form-control" name="valorEditar" value="<?php echo($producto["Valor"]);?>">

  </div>
  <div class="form-group">

    <label>Marca</label>
    <input type="text" class="form-control" name="marcaEditar" value="<?php echo($producto["Marca"]);?>">

  </div>
  
  <button type="submit" class="btn btn-primary" name="botonEditar">Confirmar</button>
</form>
      </div>





    </div>
  </div>
</div>
            </div>


    <?php endforeach ?>


    </div>
</div>





</main>


<footer class="centro">
      <br>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <p>Juan Sebastian Llano Taborda &copy;</p>
            <p>llanotaborda@gmail.com</p>
            <p>Núm.contacto: 3007166045</p>
            <p>2020, Colombia</p>
          </div>

          <div class="col-12 col-md-2">
           <a href="https://www.facebook.com/juansebastian.llanotabordascout.5"><img src="img/facebook.png" alt="facebook" class="botones"></a>
            
          </div>
          <div class="col-12 col-md-2">
            <a href="https://www.instagram.com/j_u_a_n__s_e_b_a_s_t_i_a_n/?hl=es-la"><img src="img/instagram.png" alt="insta" class="botones"></a>
        </div>
        <div class="col-12 col-md-2">
          <a href="https://www.youtube.com/channel/UC8LRTl5zBvs76E34bw4VQug?view_as=subscriber"><img src="img/youtube.png" alt="you" class="botones"></a>
      </div>

        </div>
      </div>
    
    </footer>



<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>
</html>