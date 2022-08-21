<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$clickerS=[];
$stmt= $bdd->prepare('SELECT *  FROM clickStory where idStory = ?');
$stmt->execute(array($_GET['id']));
$i=0;
while($data=$stmt->fetch()){
$clickerS[$i]['email']=$data['emailClicker'];   
$i++;
}
echo json_encode($clickerS);
$stmt->closeCursor();
?>