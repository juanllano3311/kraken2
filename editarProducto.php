<?php

include("BaseDatos.php");



if(isset($_POST["botonEditar"])){

    $valore=$_POST["valorEditar"];
    $marcae=$_POST["marcaEditar"];
    $dese=$_POST["desEditar"];
    $id=$_GET["id"];


    $transaccion=new BaseDatos();
    $transaccion->conectarBD();

    $consultaSQL="UPDATE producto SET Marca='$marcae',Valor='$valore',Descripcion='$dese' WHERE id_Prod='$id'";

    $transaccion->editarDatos($consultaSQL);

    header("location:listadoProductos.php");

}

?>