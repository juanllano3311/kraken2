<?php

    include("BaseDatos.php");

    if(isset($_POST["registrar"])){
        $nombre=$_POST["nombreP"];
        $marca=$_POST["marca"];
        $imagen=$_POST["imagen"];
        $valor=$_POST["valor"];
        $descripcion=$_POST["desc"];

        $transaccion=new BaseDatos();
        $transaccion->conectarBD();

            
        $consultaSQL="INSERT INTO producto(Nombre, Marca, Valor, Descripcion, Imagen) VALUES ('$nombre','$marca','$valor','$descripcion','$imagen')";

       
        $transaccion->agregarDatos($consultaSQL);


        header("location:registroArt.php");
    }




?>