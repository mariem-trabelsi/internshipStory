<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$stmt= $bdd->prepare('DELETE FROM stories WHERE id = ?');
$stmt->execute(array($_GET['num']));
$stmt->closeCursor();
?>