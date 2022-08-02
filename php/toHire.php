<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$hire=[];
$stmt= $bdd->prepare('SELECT *  FROM hiring');
$stmt->execute(array());
$i=0;
while($data=$stmt->fetch()){
    $hire[$i]['Id']=$data['id'];
    $hire[$i]['contenu']=$data['contenu'];
    $hire[$i]['local']=$data['local'];
    $hire[$i]['compName']=$data['compName'];
    $hire[$i]['likes']=$data['likes'];
    $hire[$i]['image']=$data['imageH'];
    $hire[$i]['name']=$data['nameH'];
    $hire[$i]['email']=$data['emailH'];  
    $hire[$i]['dateH']=$data['dateH']; 
$i++;
}
echo json_encode($hire);
$stmt->closeCursor();
?>