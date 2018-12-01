<?php
  session_start();
  require_once "pdo.php";
    if(isset($_SESSION['number'])){
      $num=$_SESSION['number'];
      $sql="DELETE FROM students WHERE number =:zip";
      $stmt=$pdo->prepare($sql);
      $stmt->execute(array(':zip'=>$num));
      $_SESSION["success"]="已删除！";
      unset($_SESSION['number']);
      header('Location:login.php');
      return;
    }else if(!isset($_SESSION["number"])){
       header('Location:login.php');
       return;
     }
 ?>
