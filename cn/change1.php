<?php
 session_start();
 error_reporting(0);
 if($_SESSION["id"]==2){
   $sub="English";
   $sub1="英语";
 }else if($_SESSION["id"]==3){
   $sub="Programming";
   $sub1="编程";
 }
 $score="";
 $scoreErr="";
 require_once "pdo.php";
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if(isset($_POST['cancel'])){
     $_SESSION["error"]="已取消!";
     header('Location:login1.php');
   }else if(isset($_POST['change'])&&isset($_POST['name'])&&isset($_POST['number'])&&isset($_POST['score'])){
    $sql="UPDATE students SET name=:name,number=:number,".$sub."=:score WHERE stu_id=:zip";
    $stmt=$pdo->prepare($sql);
    $stmt->execute(array(
    ':zip'=>$_POST['stu_id'],
    ':name'=>$_POST['name'],
    ':number'=>$_POST['number'],
    ':score'=>$_POST['score']));
    $_SESSION["success"]="已更改!";
    header('Location: login1.php');
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
  </head>
  <body>
    <?php require_once('nav1.php');?>
    <div class="container marketing">
      <div class="container">
        <?php
        if (! isset($_SESSION["account"])||($_SESSION["account"]!="eng"&&$_SESSION["account"]!="pro") ) { ?>
           <h1 align="center">请<a href="index.php">登陆</a>以继续</h1>
        <?php } else {?>
        <form class="form-signin" method="post">
          <h2 class="form-signin-heading" align="center">修改信息</h2>
          <label for="inputEmail" class="sr-only">Name</label>
          <h3>姓名:</h3>
          <?php echo($_POST['name']);?>
          <label for="inputEmail" class="sr-only">Number</label>
          <h3>学号:</h3>
          <?php echo($_POST['number']);?>
          <label for="inputPassword" class="sr-only">分数</label>
          <?php echo("<h3>".$sub1."分数:</h3>");
          echo('<input type="text" name="score" value="'.$_POST['score'].'" required>'."<br>");
          $id=$_POST['stu_id'];
          $name=$_POST['name'];
          $number=$_POST['number'];
          echo('<br><input type="hidden"');
          echo('name="stu_id" value="'.$id.'">'."\n");
          echo('<input type="hidden"');
          echo('name="name" value="'.$name.'">'."\n");
          echo('<input type="hidden"');
          echo('name="number" value="'.$number.'">'."\n");?>
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
         <script src="../js/bootstrap.min.js"></script>
</body>
</html>
