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


    <title>学生信息管理系统</title>

    <!-- Bootstrap core CSS -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/carousel.css" rel="stylesheet">
    <link href="../css/signin.css" rel="stylesheet">
    <link href="../css/dashboard.css" rel="stylesheet">
  </head>
  <body>
    <?php
    $id=$_SESSION["id"];
    require_once('nav1.php');?>
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
          if ( ! isset($_SESSION["account"])||($_SESSION["account"]!="eng"&&$_SESSION["account"]!="pro")) { ?>
             <h1 align="center">请<a href="index.php">登陆</a>以继续</h1>
          <?php } else {
            if($_SESSION["id"]==2){
              $sub="English";
              $sub1="英语";
            }else if($_SESSION["id"]==3){
              $sub="Programming";
              $sub1="编程";
            }
            $_SESSION["sub"]=$sub;
          echo "<br><h1 align='center'>欢迎，".$sub1."老师 ".$_SESSION["account"]."!</h1>";
          ?>
          <div class="row featurette">
            <div class="col-lg-6">
              <form class="form-signin" method="post">
                <h2 class="form-signin-heading" align="center">搜索姓名</h2>
                <br>
                <br>
                <label for="inputEmail" class="sr-only">Name</label>
                <input type="text" name="search" id="inputEmail" class="form-control" placeholder="姓名" required autofocus onkeyup="showResult(this.value)">
              </form>
            </div><!-- /.col-lg-4 -->
              <div class="col-lg-6">
              <form class="form-signin" method="post">
                <h2 class="form-signin-heading" align="center">排序</h2>
                <br><br>
                <div align="center">
                <select name="users" onchange="showUser(this.value)" style="font-size:30px" autofocus required>
                     <option value="default">默认</option>
                     <option value="name">姓名</option>
                     <option value="number">学号</option>
                     <option value="score">分数</option>
                </select>
              </div>
                <br><br><br>
              </form>
            </div><!-- /.col-lg-4 -->
          </div>
          <h1 class="sub-header" align="center">信息</h1>
          <div class="table-responsive">
            <table class="table table-striped" align="center">
              <thead>
                <tr>
                  <th><h2 align="center">姓名</h2></th>
                  <th><h2 align="center">学号</h2></th>
                  <th><h2 align="center"><?php echo($sub1);?>分数</h2></th>
                  <th><h2 align="center">操作</h2></th>
                </tr>
              </thead>
              <tbody id="tbody">
          <?php
          $stmt=$pdo->query("SELECT name,number,English,Programming,password,stu_id FROM students".$search);
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
             echo('<button class="btn btn-lg btn-primary btn-block" type="submit" value="Change" name="change1">更改</button>');
             echo("\n</form>\n");
             echo("</td></tr>");}?>
           </tbody>
          </table>
        </div>
    <?php }require_once('footer.php');?>
 <!-- Bootstrap core JavaScript
 ================================================== -->
 <!-- Placed at the end of the document so the pages load faster -->
 <script src="../js/jquery.min.js"></script>
 <script src="../js/bootstrap.min.js"></script>
 <script>
 var xmlHttp;

 function showUser(str) {
     xmlHttp = GetXmlHttpObject()
     if (xmlHttp == null) {
         alert("Browser does not support HTTP Request")
         return
     }
     var url = "getuser1.php"
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
     var url = "getuser1.php"
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
