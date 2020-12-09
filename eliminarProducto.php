<?php


include("BaseDatos.php");

$id=$_GET["id"];

$transaccion=new BaseDatos();

$consultaSQL="DELETE FROM producto WHERE id_Prod='$id'";

$transaccion->eliminarDatos($consultaSQL);

header("location:listadoProductos.php");

?>