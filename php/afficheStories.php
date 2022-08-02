<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$story=[];
$stmt= $bdd->prepare('SELECT *  FROM stories ORDER BY dateStory DESC');
$stmt->execute(array());
$i=0;
while($data=$stmt->fetch()){
$story[$i]['Id']=$data['id'];
$story[$i]['contenu']=$data['content'];
$story[$i]['Sdate']=$data['dateStory'];
$story[$i]['compName']=$data['CompName'];
$story[$i]['likes']=$data['nbreLike'];
$story[$i]['name']= $data['nameS'];
$story[$i]['image']= $data['imageS'];
$story[$i]['email']= $data['emailS'];
$i++;
}
echo json_encode($story);
$stmt->closeCursor();
?>