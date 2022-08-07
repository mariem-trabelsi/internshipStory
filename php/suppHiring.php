<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$stmt= $bdd->prepare('DELETE FROM hiring WHERE id = ?');
$stmt->execute(array($_GET['id']));
$stmt->closeCursor();
?>