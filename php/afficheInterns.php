<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$interns=[];
$stmt= $bdd->prepare('SELECT *  FROM INTERNS');
$stmt->execute(array());
$i=0;
while($data=$stmt->fetch()){
$interns[$i]['Id']=$data['ID_INTERN'];
$interns[$i]['fName']=$data['PRENOM_INTERN'];
$interns[$i]['lName']=$data['NOM_INTERN'];
$interns[$i]['region']=$data['REGION_INTERN'];
$interns[$i]['image']=$data['IMAGE_INTERN'];
$interns[$i]['email']=$data['INTERNMAIL'];
$interns[$i]['password']=$data['INTERNPSS'];
$interns[$i]['role']=$data['role'];
$i++;
}
echo json_encode($interns);
$stmt->closeCursor();
?>