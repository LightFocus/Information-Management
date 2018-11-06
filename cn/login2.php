<?php
session_start();
require_once "pdo.php";
error_reporting(0);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>学生信息管理系统</title>

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/carousel.css" rel="stylesheet">
    <link href="../css/signin.css" rel="stylesheet">
    <link href="../css/dashboard.css" rel="stylesheet">
  </head>
  <body>
    <?php
    $id=$_SESSION['id'];
    require_once('nav2.php');?>
    <div class="container marketing">
      <br>
          <?php
          if ( isset($_SESSION["success"]) ) {
              echo('<h3 style="color:green" align="center">'.$_SESSION["success"]."</h3>\n");
              unset($_SESSION["success"]);
          }else if( isset($_SESSION["error"]) ) {
              echo('<h3 style="color:red" align="center">'.$_SESSION["error"]."</h3>\n");
              unset($_SESSION["error"]);
          }
          if ( ! isset($_SESSION["account"]) ) { ?>
             <h1 align="center">请<a href="index.php">登陆</a>以继续</h1>
          <?php } else {
          echo "<br><h1 align='center'>欢迎，学生 ".$_SESSION["account"]."!</h1>";
          ?>
          <h1 class="sub-header" align="center">你的分数</h1>
          <div class="table-responsive">
            <table class="table table-striped" align="center">
              <thead>
                <tr>
                  <th><h2 align="center">姓名</h2></th>
                  <th><h2 align="center">学号</h2></th>
                  <th><h2 align="center">英语成绩</h2></th>
                  <th><h2 align="center">编程成绩</h2></th>
                </tr>
              </thead>
              <tbody>
          <?php
          $stmt=$pdo->query("SELECT name,number,English,Programming,password,stu_id FROM students WHERE stu_id=".$id);
          while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
             echo("<tr><td>");
             echo("<h3 align='center'>".$row['name']."</h3>");
             echo("</td><td>");
             echo("<h3 align='center'>".$row['number']."</h3>");
             echo("</td><td>");
             echo("<h3 align='center'>".$row['English']."</h3>");
             echo("</td><td>");
             echo("<h3 align='center'>".$row['Programming']."</h3>");
             echo("</td><td>");
           }}?>
           </tbody>
          </table>
        </div>
    <?php require_once('footer.php');?>
 <!-- Bootstrap core JavaScript
 ================================================== -->
 <!-- Placed at the end of the document so the pages load faster -->
 <script src="../js/jquery.min.js"></script>
 <script src="../js/bootstrap.min.js"></script>

 </body>
</html>
