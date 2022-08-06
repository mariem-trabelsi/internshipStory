<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$stmt= $bdd->prepare('INSERT INTO comments (content,nameC,imageC,idHiring) VALUES (?,?,?,?) ;');
$stmt->execute(array($_GET['contenu1'],$_GET['nom1'],$_GET['image1'],$_GET['id1']));
$stmt->closeCursor();
?>