<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$stmt= $bdd->prepare('DELETE FROM INTERNS WHERE INTERNMAIL = ?');
$stmt->execute(array($_GET['INTERNMAIL']));
$stmt->closeCursor();
?>