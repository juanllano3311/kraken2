<?php

class BaseDatos{

    public $usuarioBD="root";
    public $passwordBD="";


    public function __constructor(){}




        //conectar Base de Datos.
        public function conectarBD(){



            $infoBD="mysql:host=localhost;dbname=bdkraken";



            try{

                $conexionBD=new PDO($infoBD, $this->usuarioBD, $this->passwordBD);
               
                return($conexionBD);

            }catch(PDOException $error){
                echo($error->getMessege());
            }

        }


        //agregar Productos
        public function agregarDatos($consultaSQL){

           
            

            $conexionBD=$this->conectarBD();

            $consultaInsertarDatos=$conexionBD->prepare($consultaSQL);

            $resultado=$consultaInsertarDatos->execute();

            if($resultado){
                echo("Se registro el producto correctamenre");
            }else{
                echo("Error");
         }
        
        
        





}


        //buscar Productos
        public function consultarDatos($consultaSQL){
            $conexionBD = $this->conectarBD();

            $consultaBuscarDatos=$conexionBD->prepare($consultaSQL);

            $consultaBuscarDatos->setFetchMode(PDO::FETCH_ASSOC);

            $resultado=$consultaBuscarDatos->execute();

            return ($consultaBuscarDatos->fetchAll());
        }


        //eliminar Productos
        public function eliminarDatos($consultaSQL){
            $conexionBD = $this->conectarBD();

            $consultaEliminarDatos=$conexionBD->prepare($consultaSQL);

            $resultado = $consultaEliminarDatos->execute();

            if($resultado){
                echo("Se eliminó correctamente");
            }else{
                echo("Error al eliminar");
            }


        }

        public function editarDatos($consultaSQL){


            $conexionBD=$this->conectarBD();

            $consultaEditarDatos=$conexionBD->prepare($consultaSQL);

            $resultado=$consultaEditarDatos->execute();

            if($resultado){
                echo("Se Editó el producto correctamenre");
            }else{
                echo("Error");
         }
        


        }

}

?>