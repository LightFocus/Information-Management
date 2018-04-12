<?php
 require_once "pdo.php";
 session_start();
 error_reporting(0);
 $nameErr = $passErr = $radioErr = "";
 $name = $pass = $radio = "";
 function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
 }
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["name"])) {
     $nameErr = " Name is Required";
   }else if (empty($_POST["password"])) {
     $passErr = " Password is Required";
   }else if (empty($_POST["id"])) {
     $radioErr = " ID is Required";
   }else if(isset($_POST['name'])&&isset($_POST['password'])&&$_POST['id']=="admin"){
    unset($_SESSION["account"]);
    $sql="SELECT email FROM accounts WHERE name=:name AND password=:pw";
    $stmt=$pdo->prepare($sql);
    $stmt->execute(array(
    ':name'=>$_POST['name'],
    ':pw'=>$_POST['password'],
    ));
    if($row=$stmt->fetch(PDO::FETCH_ASSOC)){
      $sql1="SELECT name,user_id FROM accounts where name='".$_POST['name']."'";
      $res=$pdo->query($sql1);
      foreach($res as $row){
       $name=$row['name'];
       $user=$row['user_id'];
     }
      $_SESSION["account"]=$name;
      $_SESSION["id"]=$user;
      $_SESSION["success"]="已登入!";
      if($user==1){
        header('Location:login.php');
      }else{
        header('Location:login1.php');
      }

      return;
    }else {
      $_SESSION["error"]="用户名或密码错误";
      header('Location:index.php');
      return;
    }
  }else if(isset($_POST['name'])&&isset($_POST['password'])&&$_POST['id']=="stu"){
    unset($_SESSION["account"]);
    $sql="SELECT number FROM students WHERE name=:name AND password=:pw";
    $stmt=$pdo->prepare($sql);
    $stmt->execute(array(
    ':name'=>$_POST['name'],
    ':pw'=>$_POST['password'],
    ));
    if($row=$stmt->fetch(PDO::FETCH_ASSOC)){
      $sql1="SELECT name,stu_id FROM students where name='".$_POST['name']."'";
      $res=$pdo->query($sql1);
      foreach($res as $row){
       $name=$row['name'];
       $id=$row['stu_id'];
     }
      $_SESSION["account"]=$name;
      $_SESSION["id"]=$id;
      $_SESSION["success"]="已登入!";
        header('Location:login2.php');
      return;
    }else {
      $_SESSION["error"]="用户名或密码错误";
      header('Location:index.php');
      return;
    }
  }
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

    <title>学生信息管理系统</title>

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
  </head>
<!-- NAVBAR
================================================== -->
  <body>
    <?php require_once('nav.php');?>
    <!-- Carousel
    ================================================== -->


    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->
      <div class="container marketing">
             <div class="container">
               <form class="form-signin" method="post">
                 <br>
                 <h1 class="form-signin-heading" align="center">欢迎来到 URP</h1>
                 <h2 class="form-signin-heading" align="center">请登陆</h2>
                 <br>
                 <?php
                 if ( isset($_SESSION["success"]) ) {
                     echo('<h3 style="color:green" align="center">'.$_SESSION["success"]."</h3>\n");
                     unset($_SESSION["success"]);
                 }else if( isset($_SESSION["error"]) ) {
                     echo('<h3 style="color:red" align="center">'.$_SESSION["error"]."</h3>\n");
                     unset($_SESSION["error"]);
                 }
                  ?>
                  <br>
                 <label for="inputEmail" class="sr-only">姓名</label>
                 <input type="text" name="name" id="inputEmail" class="form-control" placeholder="姓名" required autofocus>
                 <?php echo ('<h4 align="center"><font color="red">'.$nameErr.'</font></h4>');?>
                 <label for="inputPassword" class="sr-only">密码</label>
                 <input type="password" name="password" id="inputPassword" class="form-control" placeholder="密码" required>
                 <?php echo ('<h4 align="center"><font color="red">'.$passErr.'</font></h4>');?>
                 <div class="radio">
                   <label>
                     <input type="radio" value="stu" name="id"> 学生  <br>
                     <input type="radio" value="admin" name="id"> 管理员 / 教师
                   </label>
                 </div>
                 <?php echo ('<h4 align="center"><font color="red">'.$radioErr.'</font></h4>');?>
                 <button class="btn btn-lg btn-primary btn-block" type="submit">登陆</button>
               </form>

             </div> <!-- /container -->
             <br><br><br>
    <?php require_once('footer.php');?>
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
 </body>
</html>
