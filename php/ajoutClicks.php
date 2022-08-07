<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$stmt= $bdd->prepare('INSERT INTO click (id,email) VALUES (?,?) ;');
$stmt->execute(array($_GET['id'],$_GET['email']));
$stmt->closeCursor();
?>