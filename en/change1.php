<?php
 session_start();
 error_reporting(0);
 if($_SESSION["id"]==2){
   $sub="English";
 }else if($_SESSION["id"]==3){
   $sub="Programming";
 }
 $score="";
 $scoreErr="";
 require_once "pdo.php";
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if(isset($_POST['cancel'])){
     $_SESSION["error"]="Canceled!";
     header('Location:login1.php');
   }else if(isset($_POST['change'])&&isset($_POST['name'])&&isset($_POST['number'])&&isset($_POST['score'])){
    $sql="UPDATE students SET name=:name,number=:number,".$sub."=:score WHERE stu_id=:zip";
    $stmt=$pdo->prepare($sql);
    $stmt->execute(array(
    ':zip'=>$_POST['stu_id'],
    ':name'=>$_POST['name'],
    ':number'=>$_POST['number'],
    ':score'=>$_POST['score']));
    $_SESSION["success"]="Changed!";
    header('Location: login1.php');
 }}
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
  </head>
  <body>
    <?php require_once('nav1.php');?>
    <div class="container marketing">
      <div class="container">
        <?php
        if ( ! isset($_SESSION["account"])||($_SESSION["account"]!="eng"&&$_SESSION["account"]!="pro")) { ?>
           <h1 align="center">Please <a href="index.php">Log In</a> to start.</h1>
        <?php } else {?>
        <form class="form-signin" method="post">
          <h2 class="form-signin-heading" align="center">Change Information</h2>
          <label for="inputEmail" class="sr-only">Name</label>
          <h3>Name:</h3>
          <?php echo($_POST['name']);?>
          <label for="inputEmail" class="sr-only">Number</label>
          <h3>Number:</h3>
          <?php echo($_POST['number']);?>
          <label for="inputPassword" class="sr-only">Score</label>
          <?php echo("<h3>".$sub." Score:</h3>");
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
          <button class="btn btn-lg btn-primary btn-block" type="sumbit" value="Change" name="change">Change</button>
        </form>
        <form class="form-signin" method="post">
          <input type="hidden" name="cancel" value="1">
          <button class="btn btn-lg btn-primary btn-block" type="submit">Cancel</button>
        </form>
      </div> <!-- /container -->
    <?php }require_once('footer.php');?>
    </div>
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
