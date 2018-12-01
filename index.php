<?php
 require_once "pdo.php";
 session_start();
 $nameErr = $passErr = $radioErr = "";
 $name = $pass = $radio = "";
 function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
 }
 if(isset($_POST['captcha'])&&$_POST['captcha']!=""){
     $captcha1 = $_POST["captcha"];
     unset($_POST["captcha"]);
     if(strtolower($_SESSION["captchaimg"]) == strtolower($captcha1)){
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["number"])) {
     $nameErr = " 请输入姓名";
   }else if (empty($_POST["password"])) {
     $passErr = " 请输入密码";
   }else if (empty($_POST["id"])) {
     $radioErr = " 请选择ID";
   }else if(isset($_POST['number'])&&isset($_POST['password'])&&$_POST['id']=="admin"){
    unset($_SESSION["account"]);
    $sql="SELECT email FROM accounts WHERE name=:name AND password=:pw";
    $stmt=$pdo->prepare($sql);
    $stmt->execute(array(
    ':name'=>$_POST['number'],
    ':pw'=>sha1($_POST['password']),
    ));
    if($row=$stmt->fetch(PDO::FETCH_ASSOC)){
      $sql1="SELECT name,user_id FROM accounts where name='".$_POST['number']."'";
      $res=$pdo->query($sql1);
      foreach($res as $row){
       $name=$row['name'];
       $user=$row['user_id'];
     }
      $_SESSION["account"]=$name;
      $_SESSION["id"]=$user;
      $_SESSION["success"]="已登入!";
      if($user==1){
        unset($captcha1);
        header('Location:test.php');
      }else{
        unset($captcha1);
        header('Location:test1.php');
      }

      return;
    }else {
      $_SESSION["error"]="用户名或密码错误";
      unset($captcha1);
      unset($_POST['captcha']);
      header('Location:index.php');
      return;
    }
  }else if(isset($_POST['number'])&&isset($_POST['password'])&&$_POST['id']=="stu"){
    unset($_SESSION["account"]);
    $sql="SELECT name FROM students WHERE number=:number AND password=:pw";
    $stmt=$pdo->prepare($sql);
    $stmt->execute(array(
    ':number'=>$_POST['number'],
    ':pw'=>sha1($_POST['password']),
    ));
    if($row=$stmt->fetch(PDO::FETCH_ASSOC)){
      $sql1="SELECT name,stu_id FROM students where number='".$_POST['number']."'";
      $res=$pdo->query($sql1);
      foreach($res as $row){
       $name=$row['name'];
       $id=$row['stu_id'];
     }
      $_SESSION["account"]=$name;
      $_SESSION["id"]=$id;
      $_SESSION["success"]="已登入!";
      unset($captcha1);
      header('Location:test2.php');
      return;
    }else {
      $_SESSION["error"]="用户名或密码错误";
      unset($captcha1);
      header('Location:index.php');
      return;
    }
  }
}}else{
      $_SESSION['error']="验证码错误";
      unset($captcha1);
    }}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="manifest.json">
    <title>URP</title>

    <!-- Bootstrap core CSS -->
    <link href="assets/black-dashboard.min.css" rel="stylesheet">
    <style>
    .form-signin {
      max-width: 330px;
      padding: 15px;
      margin: 0 auto;
    }
    .radio input[type=radio] {
    opacity: 1;
    position: relative;
    visibility: visible;
}
    </style>
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
                 }
                 if( isset($_SESSION["error"]) ) {
                     echo('<h3 style="color:red" align="center">'.$_SESSION["error"]."</h3>\n");
                     unset($_SESSION["error"]);
                 }
                  ?>
                 <br>
                 <label for="inputEmail" class="sr-only">姓名</label>
                 <input type="text" name="number" id="inputEmail" class="form-control" placeholder="学号" required autofocus>
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
                 <div style="position:relative;left:50px">
                 <img id="captcha" src="image_captcha.php"  onclick="this.src='image_captcha.php?'+new Date().getTime();" width="200" height="60">
                 </div>
                 <input type="text" name="captcha" id="inputcaptcha" class="form-control" placeholder="验证码" required autofocus style="margin-top:10px;margin-bottom:10px;">
                 <button class="btn btn-lg btn-primary btn-block" type="submit">登陆</button>
               </form>

             </div> <!-- /container -->
             <br><br><br>
    <?php require_once('footer.php');?>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/jquery.min(1).js"></script>
    <script>
    $(document).ready(function() {
      $("#captcha").trigger("click");
    });
    </script>
 </body>
</html>
