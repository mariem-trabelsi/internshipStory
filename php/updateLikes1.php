<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$stmt= $bdd->prepare('UPDATE stories set nbreLike =nbreLike+1, icon="fas fa-heart" WHERE id =? and icon="far fa-heart"');
$stmt->execute(array($_GET['idStory']));
$stmt->closeCursor();
?>