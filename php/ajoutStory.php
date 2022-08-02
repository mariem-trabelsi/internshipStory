<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';

$stmt= $bdd->prepare('INSERT INTO stories (nameS,content,CompName,imageS,emailS) VALUES (?,?,?,?,?)');
$stmt->execute(array($_GET['nom'],$_GET['contenu'],$_GET['comp'],$_GET['image'],$_GET['email']));
$stmt->closeCursor();

?>