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
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Students Information Management System</title>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap-3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="bootstrap-3.3.7/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="bootstrap-3.3.7/assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Custom styles for this template -->
    <link href="css/carousel.css" rel="stylesheet">
    <link href="css/signin.css" rel="stylesheet">
    <link href="css/dashboard.css" rel="stylesheet">
  </head>
  <body>
    <?php require_once('nav1.php');?>
    <div class="container marketing">
      <br>
          <?php
          $id=$_SESSION['id'];
          if ( isset($_SESSION["success"]) ) {
              echo('<h3 style="color:green" align="center">'.$_SESSION["success"]."</h3>\n");
              unset($_SESSION["success"]);
          }else if( isset($_SESSION["error"]) ) {
              echo('<h3 style="color:red" align="center">'.$_SESSION["error"]."</h3>\n");
              unset($_SESSION["error"]);
          }
          if ( ! isset($_SESSION["account"]) ) { ?>
             <h1 align="center">Please <a href="index.php">Log In</a> to start.</h1>
          <?php } else {
          echo "<br><h1 align='center'>Welcome, Student ".$_SESSION["account"]."!</h1>";
          ?>
          <h1 class="sub-header" align="center">Your Scores</h1>
          <div class="table-responsive">
            <table class="table table-striped" align="center">
              <thead>
                <tr>
                  <th><h2 align="center">Name</h2></th>
                  <th><h2 align="center">Number</h2></th>
                  <th><h2 align="center">English Score</h2></th>
                  <th><h2 align="center">Programming Score</h2></th>
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
 <script src="js/jquery.min.js"></script>
 <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
 <script src="bootstrap-3.3.7/dist/js/bootstrap.min.js"></script>
 <!-- Just to make our placeholder images work. Don't actually copy the next line! -->
 <script src="bootstrap-3.3.7/assets/js/vendor/holder.min.js"></script>
 <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
 <script src="bootstrap-3.3.7/assets/js/ie10-viewport-bug-workaround.js"></script>
 </body>
</html>
