<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
echo $_GET['image'];
$stmt= $bdd->prepare('INSERT INTO INTERNS (NOM_INTERN,PRENOM_INTERN,REGION_INTERN,IMAGE_INTERN,INTERNMAIL,INTERNPSS) VALUES (?,?,?,?,?,?)');
$stmt->execute(array($_GET['nom'],$_GET['prenom'],$_GET['region'],$_GET['image'],$_GET['email'],$_GET['psw']));
$stmt->closeCursor();

?>