<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$stmt= $bdd->prepare('UPDATE hiring set likes = likes+1, icon="fas fa-thumbs-up" WHERE id =? and icon="far fa-thumbs-up"');
$stmt->execute(array($_GET['id']));
$stmt->closeCursor();
?>