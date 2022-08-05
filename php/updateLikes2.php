<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$stmt= $bdd->prepare('UPDATE stories set nbreLike=nbreLike-1, icon="far fa-heart" WHERE id =? and icon="fas fa-heart";');
$stmt->execute(array($_GET['idStory']));
$stmt->closeCursor();
?>