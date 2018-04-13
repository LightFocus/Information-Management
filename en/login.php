<?php
session_start();
require_once "pdo.php";
if(isset($_POST["cancels"])){
  unset($_SESSION["name"]);
}
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
    <link href="../bootstrap-3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="../bootstrap-3.3.7/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../bootstrap-3.3.7/assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Custom styles for this template -->
    <link href="../css/carousel.css" rel="stylesheet">
    <link href="../css/signin.css" rel="stylesheet">
    <link href="../css/dashboard.css" rel="stylesheet">
  </head>
<!-- NAVBAR
================================================== -->
  <body>
    <?php
     $id = $_SESSION["id"];
     require_once('nav1.php');?>
    <div class="container marketing">
    <br>
    <?php if (!isset($_SESSION["account"])||$_SESSION["account"]!="admin") {?>
      <h1 align="center">Please <a href="index.php">Log In</a> to start.</h1>
    <?php
     } else {
      ?>

      <?php
    if (isset($_SESSION["success"])) {
        echo ('<h3 style="color:green" align="center">' . $_SESSION["success"] . "</h3>\n");
        unset($_SESSION["success"]);
    } else if (isset($_SESSION["error"])) {
        echo ('<h3 style="color:red" align="center">' . $_SESSION["error"] . "</h3>\n");
        unset($_SESSION["error"]);
    }
    echo "<br><h1 align='center'>Welcome, administrator " . $_SESSION["account"] . "!</h1>";
?>
         <div class="row featurette">
           <div class="col-lg-4">
             <form class="form-signin" method="post">
               <h2 class="form-signin-heading" align="center">Search Name</h2>
               <br>
               <br>
               <label for="inputEmail" class="sr-only">Name</label>
               <input type="text" name="search" id="inputEmail" class="form-control" placeholder="Name" required autofocus onkeyup="showResult(this.value)">
             </form>
           </div><!-- /.col-lg-4 -->
           <div class="col-lg-4">
             <form class="form-signin" method="post">
               <h2 class="form-signin-heading" align="center">Rank By</h2>
               <br><br>
               <select name="users" onchange="showUser(this.value)" style="font-size:30px" autofocus required>
                    <option value="default">Default</option>
                    <option value="name">Name</option>
                    <option value="number">Number</option>
               </select>
               <br><br><br>
             </form>
           </div><!-- /.col-lg-4 -->
           <div class="col-lg-4">
             <form action="add.php" class="form-signin" method="get">
               <h2 class="form-signin-heading" align="center">Add A New Student</h2>
               <br><br>
               <button class="btn btn-lg btn-primary btn-block" type="submit" name="add">Add Now</button>
               <br><br><br><br>
             </form>
           </div><!-- /.col-lg-4 -->
          </div>
          <h1 class="sub-header" align="center">Information</h1>
          <div class="table-responsive">
            <table class="table table-striped" align="center">
              <thead>
                <tr>
                  <th><h2 align="center">Name</h2></th>
                  <th><h2 align="center">Number</h2></th>
                  <th><h2 align="center">English Score</h2></th>
                  <th><h2 align="center">Programming Score</h2></th>
                  <th><h2 align="center">Password</h2></th>
                  <th><h2 align="center">Operation</h2></th>
                </tr>
              </thead>
              <tbody id="tbody">
          <?php
    $stmt = $pdo->query("SELECT name,number,English,Programming,password,stu_id FROM students");
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo ("<tr><td>");
        echo ("<h3 align='center'>" . $row['name'] . "</h3>");
        echo ("</td><td>");
        echo ("<h3 align='center'>" . $row['number'] . "</h3>");
        echo ("</td><td>");
        echo ("<h3 align='center'>" . $row['English'] . "</h3>");
        echo ("</td><td>");
        echo ("<h3 align='center'>" . $row['Programming'] . "</h3>");
        echo ("</td><td>");
        echo ("<h3 align='center'>" . $row['password'] . "</h3>");
        echo ("</td><td>");
        echo ('<form action="delete.php" method="post"><input type="hidden"');
        echo ('name="stu_id" value="' . $row['stu_id'] . '">' . "\n");
        echo ('<button class="btn btn-lg btn-primary btn-block" type="submit" value="Delete" name="delete1">Delete</button>');
        echo ("\n</form>\n<h6></h6>");
        echo ('<form action="change.php" method="post"><input type="hidden"');
        echo ('name="stu_id" value="' . $row['stu_id'] . '">' . "\n");
        echo ('<input type="hidden" value="' . $row['name'] . '" name="name">');
        echo ('<input type="hidden" value="' . $row['number'] . '" name="number">');
        echo ('<input type="hidden" value="' . $row['English'] . '" name="e_score">');
        echo ('<input type="hidden" value="' . $row['Programming'] . '" name="p_score">');
        echo ('<input type="hidden" value="' . $row['password'] . '" name="password">');
        echo ('<button class="btn btn-lg btn-primary btn-block" type="submit" value="Change" name="change1">Change</button>');
        echo ("\n</form>\n");
        echo ("</td></tr>");
    }
?>
          </tbody>
          </table>
        </div>
   <?php
}
require_once('footer.php');
?>
 <!-- Bootstrap core JavaScript
  ================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script src="../js/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
  <script src="../bootstrap-3.3.7/dist/js/bootstrap.min.js"></script>
  <!-- Just to make our placeholder images work. Don't actually copy the next line! -->
  <script src="../bootstrap-3.3.7/assets/js/vendor/holder.min.js"></script>
  <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
  <script src="../bootstrap-3.3.7/assets/js/ie10-viewport-bug-workaround.js"></script>
  <script>
  var xmlHttp;
  function showUser(str) {
      xmlHttp = GetXmlHttpObject()
      if (xmlHttp == null) {
          alert("Browser does not support HTTP Request")
          return
      }
      var url = "getuser.php"
      url = url + "?c=" + str
      url = url + "&sid=" + Math.random()
      xmlHttp.onreadystatechange = stateChanged
      xmlHttp.open("GET", url, true)
      xmlHttp.send(null)
  }
  function stateChanged() {
      if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
          document.getElementById("tbody").innerHTML = xmlHttp.responseText
      }
  }
  function GetXmlHttpObject() {
      var xmlHttp = null;
      try {
          // Firefox, Opera 8.0+, Safari
          xmlHttp = new XMLHttpRequest();
      } catch (e) {
          //Internet Explorer
          try {
              xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
          } catch (e) {
              xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
          }
      }
      return xmlHttp;
  }
  function showResult(str) {
      xmlHttp = GetXmlHttpObject()
      if (xmlHttp == null) {
          alert("Browser does not support HTTP Request")
          return
      }
      var url = "getuser.php"
      if (str != "") {
          url = url + "?n=" + str
          url = url + "&sid=" + Math.random()
      }
      xmlHttp.onreadystatechange = stateChanged
      xmlHttp.open("GET", url, true)
      xmlHttp.send(null)
  }
  function stateChanged() {
      if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
          document.getElementById("tbody").innerHTML = xmlHttp.responseText
      }
  }
  function GetXmlHttpObject() {
      var xmlHttp = null;
      try {
          // Firefox, Opera 8.0+, Safari
          xmlHttp = new XMLHttpRequest();
      } catch (e) {
          //Internet Explorer
          try {
              xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
          } catch (e) {
              xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
          }
      }
      return xmlHttp;
  }
  </script>
 </body>
</html>
