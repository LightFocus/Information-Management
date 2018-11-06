<?php
 session_start();
 require_once "pdo.php";
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if(isset($_POST['cancel'])){
     $_SESSION["error"]="已取消!";
     header('Location:login2.php');
     return;
   }else if(isset($_POST['change'])&&isset($_POST['old'])&&isset($_POST['new'])&&isset($_POST['confirm'])){
    $id=$_POST['stu_id'];
    $sql="SELECT password FROM students WHERE stu_id=".$id;
    $stmt=$pdo->query($sql);
    foreach($stmt as $row){
     $pass=$row['password'];
   }
    if($_POST['new']!=$_POST['confirm']){
      $_SESSION["error"]="两次密码不一致";
    }else if($_POST['old']!=$pass){
      $_SESSION["error"]="原密码不正确";
    }else{
      $sql="UPDATE students SET password=:pass WHERE stu_id=:zip";
      $stmt=$pdo->prepare($sql);
      $stmt->execute(array(
      ':zip'=>$_POST['stu_id'],
      ':pass'=>$_POST['new'],));
      $_SESSION["success"]="密码已更改!";
      header('Location:login2.php');
      return;
    }
  }}
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
     <?php require_once('nav1.php');?>
     <div class="container marketing">
       <div class="container">
         <?php
         if ( ! isset($_SESSION["account"])||($_SESSION["account"]!="eng"&&$_SESSION["account"]!="pro")) { ?>
            <h1 align="center">请<a href="index.php">登陆</a>以继续</h1>
         <?php } else {?>
         <form class="form-signin" method="post">
           <h2 class="form-signin-heading" align="center">更改密码</h2>
           <?php
           if ( isset($_SESSION["success"]) ) {
               echo('<h3 style="color:green" align="center">'.$_SESSION["success"]."</h3>\n");
               unset($_SESSION["success"]);
           }else if( isset($_SESSION["error"]) ) {
               echo('<h3 style="color:red" align="center">'.$_SESSION["error"]."</h3>\n");
               unset($_SESSION["error"]);
           }
            ?>
            <label for="inputEmail" class="sr-only">Old</label>
            <input type="text" name="old" id="inputEmail" class="form-control" placeholder="原密码" required autofocus>
            <br>
            <label for="inputEmail" class="sr-only">New</label>
            <input type="text" name="new" id="inputEmail" class="form-control" placeholder="新密码" required autofocus>
            <br>
            <label for="inputEmail" class="sr-only">Confirm</label>
            <input type="text" name="confirm" id="inputEmail" class="form-control" placeholder="确认密码" required autofocus>
           <?php
           $id=$_POST['stu_id'];
           echo('<br><input type="hidden"');
           echo('name="stu_id" value="'.$id.'">'."\n");
           ?>
           <button class="btn btn-lg btn-primary btn-block" type="sumbit" value="Change" name="change">更改</button>
         </form>
         <form class="form-signin" method="post">
           <input type="hidden" name="cancel" value="1">
           <button class="btn btn-lg btn-primary btn-block" type="submit">取消</button>
         </form>
       </div> <!-- /container -->
     <?php }require_once('footer.php');?>
     </div>
          <!-- Bootstrap core JavaScript
          ================================================== -->
          <!-- Placed at the end of the document so the pages load faster -->
          <script src="../js/jquery.min.js"></script>
          <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
          <script src="../js/bootstrap.min.js"></script>

 </body>
 </html>
