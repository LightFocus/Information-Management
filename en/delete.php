<?php
  session_start();
  require_once "pdo.php";
  if(isset($_GET['choice'])){
    $url=$_GET['choice'];
    $choice="";
    $stu_id="";
    for($i=0;$i<3;$i++){
      $choice[$i]=$url[$i];
    }
    for($i=3;$i<strlen($url);$i++){
      $stu_id[$i]=$url[$i];
    }
    if($choice=="yes"){
      $sql="DELETE FROM students WHERE stu_id =:zip";
      $stmt=$pdo->prepare($sql);
      $stmt->execute(array(':zip'=>$stu_id));
      $_SESSION["success"]="Deleted!";
      header('Location: login.php');
      return;
    }else if($choice=="no "){
       $_SESSION["error"]="Canceled!";
       header('Location:login.php');
       return;
     }
   }
 ?>
