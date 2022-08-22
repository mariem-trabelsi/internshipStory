<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';


$stmt= $bdd->prepare('UPDATE INTERNS set NOM_INTERN =?,PRENOM_INTERN =?,REGION_INTERN =?,IMAGE_INTERN =?,INTERNMAIL =?,INTERNPSS =? where INTERNMAIL= ?');
$stmt->execute(array($_GET['nom'],$_GET['prenom'],$_GET['region'],$_GET['image'],$_GET['email'],$_GET['psw'],$_GET['emailp']));
$stmt->closeCursor();
// }
?>