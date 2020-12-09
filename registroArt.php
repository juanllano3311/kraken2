<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Registro Articulos</title>
    <link rel="icon" type="image/jpg" href="img/logo.jpg">
    <link rel="stylesheet" href="style.css">
</head>
<body class="oscuro">
    


<header class="colornav">


<h1>Registra Articulos Aquí:</h1>
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
                <a class="nav-link active" href="registroArt.php">Regis.Articulos</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="listadoProductos.php">Lista.Articulos</a>
              </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
            </li>
        </ul>   
</nav>

</header>

<main class="secun">

<div class="container oscuro">
            <div class="row">
                <div class="col-12 col-md-12">
                    <form action="regitrarpro.php" method="POST">
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="nombrecomple" class="letra">Nombre Producto</label>
                            <input type="text" class="form-control" id="nombrepro" name="nombreP">
                          </div>
                          <div class="form-group col-md-6">
                            <label for="numdocumento" class="letra">Marca</label>
                            <input type="text" class="form-control" id="marca" name="marca">
                          </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="usu" class="letra">Imagen</label>
                              <input type="text" class="form-control" id="imagen" name="imagen">
                            </div>
                            <div class="form-group col-md-6">
                              <label for="contra" class="letra">Valor</label>
                              <input type="number" class="form-control" id="valor" name="valor">
                            </div>
                          </div>
                          <div class="form-row">
                          <div class="form-group w-100">
                                <label  class="letra">Descripción</label>
                                <textarea class="form-control"  rows="3" name="desc"></textarea>
                         </div>
                          </div>
                         
                      
                      
                       
                        <button type="submit" class="btn btn-dark" id="registro" name="registrar">Registrar.</button>
                        
                      </form>
                      
                </div>
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