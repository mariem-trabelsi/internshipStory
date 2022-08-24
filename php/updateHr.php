<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';

$stmt= $bdd->prepare('UPDATE HRS set nom_hr =?,prenom_hr =?,localisation =?,IMAGE_HR=?,PSW =?,campany_name =? where EMAIL = ?');
$stmt->execute(array($_GET['nom'],$_GET['prenom'],$_GET['local'],$_GET['image'],$_GET['psw'],$_GET['comp'],$_GET['emailp']));
$stmt->closeCursor();
// }
?>