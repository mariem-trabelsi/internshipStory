<?php 
header("Access-Control-Allow-Origin: *");
require 'database.php';
$hrs=[];
$stmt= $bdd->prepare('SELECT *  FROM hrs');
$stmt->execute(array());
$i=0;
while($data=$stmt->fetch()){
$hrs[$i]['Id']=$data['ID_HR'];
$hrs[$i]['fName']=$data['prenom_hr'];
$hrs[$i]['lName']=$data['nom_hr'];
$hrs[$i]['local']=$data['localisation'];
$hrs[$i]['image']=$data['IMAGE_HR'];
$hrs[$i]['email']=$data['EMAIL'];
$hrs[$i]['password']=$data['PSW'];
$hrs[$i]['role']=$data['role'];
$hrs[$i]['compName']=$data['campany_name'];    
$i++;
}
echo json_encode($hrs);
$stmt->closeCursor();
?>