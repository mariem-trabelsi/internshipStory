<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$stmt= $bdd->prepare('DELETE FROM HRS WHERE EMAIL = ?');
$stmt->execute(array($_GET['EMAIL']));
$stmt->closeCursor();
?>