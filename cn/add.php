/<?php
 session_start();
 require_once "pdo.php";
 error_reporting(0);
 $nameErr = $passErr = $numberErr = "";
 $name = $pass = $number = "";

 function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
 }
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if(isset($_POST['cancel'])){
      $_SESSION["error"]="已取消!";
      header('Location:login.php');
 }else if(isset($_POST['add'])&&isset($_POST['name'])&&isset($_POST['number'])){
     $sql="SELECT * FROM students WHERE number=:number";
     $stmt=$pdo->prepare($sql);
     $stmt->execute(array(
       ':number'=>$_POST['number']
     ));
     if($row=$stmt->fetch(PDO::FETCH_ASSOC)){
      $_SESSION["error1"]="学号已存在，请重试";
     }else{
      $sql="INSERT INTO students(name,number,password,English,Programming)
             VALUES(:name,:number,:password,0,0)";
      $stmt=$pdo->prepare($sql);
      $stmt->execute(array(
      ':name'=>$_POST['name'],
      ':number'=>$_POST['number'],
      ':password'=>$_POST['password']));
      $_SESSION["success"]="已添加!";
      header('Location: login.php');
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
   <body>
     <?php require_once('nav1.php');?>
       <div class="container marketing">
         <?php if ( ! isset($_SESSION["account"]) ) { ?>
            <h1 align="center">请<a href="index.php">登陆</a>以继续</h1>
         <?php } else {
            if( isset($_SESSION["error1"]) ) {
               echo('<h3 style="color:red" align="center">'.$_SESSION["error1"]."</h3>\n");
               unset($_SESSION["error1"]);
           }?>
           <div class="container">
             <form class="form-signin" method="post">
               <h2 class="form-signin-heading" align="center">添加新学生</h2>
               <br>
               <label for="inputEmail" class="sr-only">姓名</label>
           <input type="text" name="name" id="inputEmail" class="form-control" placeholder="姓名" required autofocus>
           <?php echo ('<h4 align="center"><font color="red">'.$nameErr.'</font></h4>');?>
           <label for="inputEmail" class="sr-only">学号</label>
           <input type="text" name="number" id="inputEmail" class="form-control" placeholder="学号" required autofocus>
           <?php echo ('<h4 align="center"><font color="red">'.$numErr.'</font></h4>');?>
           <label for="inputPassword" class="sr-only">密码</label>
           <input type="password" name="password" id="inputPassword" class="form-control" placeholder="密码" required>
           <?php echo ('<h4 align="center"><font color="red">'.$passErr.'</font></h4>');?>
           <button class="btn btn-lg btn-primary btn-block" name="add" type="submit">添加</button>
           </form>
           <form class="form-signin" method="post">
             <input type="hidden" name="cancel" value="1">
             <button class="btn btn-lg btn-primary btn-block" name="cancel" type="submit">取消</button>
           </form>
           </div>
           <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <?php }require_once('footer.php');?>
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