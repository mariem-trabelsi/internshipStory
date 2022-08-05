<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$stmt= $bdd->prepare('INSERT INTO hiring (nameH,contenu,CompName,imageH,emailH,localH) VALUES (?,?,?,?,?,?)');
$stmt->execute(array($_GET['nom'],$_GET['contenu'],$_GET['comp'],$_GET['image'],$_GET['email'],$_GET['local']));
$stmt->closeCursor();

?>