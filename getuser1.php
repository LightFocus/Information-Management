<?php
session_start();
require_once "pdo.php";
if(!isset($_GET["sid"])){
  unset($_SESSION["name"]);
}
if(isset($_GET["c"])){
  $_SESSION["rank"]=$_GET["c"];
}
if(isset($_GET["n"])){
  $_SESSION["name"]=$_GET["n"];
}
$search="";
$search1="";
$sub=$_SESSION["sub"];
if(isset($_SESSION["rank"])){
  if($_SESSION["rank"]=="default"){
    $search="";
  }else if($_SESSION["rank"]=="name"){
    $search=" ORDER BY convert(name USING gbk)";
  }else if($_SESSION["rank"]=="number"){
    $search=" ORDER BY number";
  }else if($_SESSION["rank"]=="score"){
    $search=" ORDER BY ".$sub." DESC ";
  }
}
if(isset($_SESSION["name"])){
  $search1=" WHERE name like '".$_SESSION["name"]."%'";
}
$stmt=$pdo->query("SELECT name,number,English,Programming,password,stu_id FROM students".$search1.$search);
while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
echo("<tr><td>");
echo("<h3 align='center'>".$row['name']."</h3>");
echo("</td><td>");
echo("<h3 align='center'>".$row['number']."</h3>");
echo("</td><td>");
echo("<h3 align='center'>".$row[$sub]."</h3>");
echo("</td><td>");
echo('<form action="change1.php" method="post"><input type="hidden"');
echo('name="stu_id" value="'.$row['stu_id'].'">'."\n");
echo('<input type="hidden" value="'.$row['name'].'" name="name">');
echo('<input type="hidden" value="'.$row['number'].'" name="number">');
echo('<input type="hidden" value="'.$row[$sub].'" name="score">');
echo('<button class="btn btn-lg btn-primary btn-block" type="submit" value="Change" name="change1">Change</button>');
echo("\n</form>\n");
echo("</td></tr>");}?>
