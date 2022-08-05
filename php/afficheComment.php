<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$cmtre=[];
$stmt= $bdd->prepare('SELECT *  FROM comments  ORDER BY dateC DESC');
$stmt->execute(array());
$i=0;
while($data=$stmt->fetch()){
    $cmtre[$i]['Id']      = $data['id'];
    $cmtre[$i]['contenu'] = $data['content'];
    $cmtre[$i]['Sdate']   = $data['dateC'];
    $cmtre[$i]['name']    = $data['nameC'];
    $cmtre[$i]['image']   = $data['imageC'];
    $cmtre[$i]['Id2']     = $data['idHiring'];
$i++;
}
echo json_encode($cmtre);
$stmt->closeCursor();
?>