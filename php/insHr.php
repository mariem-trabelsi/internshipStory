<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';

$stmt= $bdd->prepare('INSERT INTO HRS (nom_hr,prenom_hr,localisation,IMAGE_HR,EMAIL,PSW,campany_name) VALUES (?,?,?,?,?,?,?)');
$stmt->execute(array($_GET['nom'],$_GET['prenom'],$_GET['region'],$_GET['image'],$_GET['email'],$_GET['psw'],$_GET['loca']));
$stmt->closeCursor();

?>