<?php
  session_start();
  require_once "pdo.php";
  error_reporting(0);
  if(isset($_POST['delete'])&&isset($_POST['stu_id'])){
     $sql="DELETE FROM students WHERE stu_id =:zip";
     $stmt=$pdo->prepare($sql);
     $stmt->execute(array(':zip'=>$_POST['stu_id']));
     $_SESSION["success"]="Deleted!";
     header('Location: login.php');}

     if(isset($_POST['cancel'])){
       $_SESSION["error"]="Canceled!";
       header('Location:login.php');
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
  <body>
    <?php require_once('nav1.php');?>
    <div class="container marketing">
      <?php
      if ( ! isset($_SESSION["account"])||$_SESSION["account"]!="admin" ) { ?>
         <h1 align="center">Please <a href="index.php">Log In</a> to start.</h1>
      <?php } else {?>
   <h1 class="sub-header" align="center">Are You Sure?</h1>
   <div class="table-responsive">
     <table class="table table-striped">
       <thead>
         <tr>
           <th><h2 align="center">Name</h2></th>
           <th><h2 align="center">Number</h2></th>
         </tr>
       </thead>
       <tbody>
   <?php
   $id=$_POST['stu_id'];
   $stmt=$pdo->query("SELECT name,number,English,Programming,stu_id FROM students WHERE stu_id=".$id);
   while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
   echo("<tr><td>");
   echo("<h3 align='center'>".$row['name']."</h3>");
   echo("</td><td>");
   echo("<h3 align='center'>".$row['number']."</h3>");
   echo("</td></tr>");}?>
   </table>
 </div>
   <div class="row featurette">
    <div class="col-lg-4">
     <form class="form-signin" action="delete.php" method="post">
       <input type="hidden" name="stu_id" value="<?php echo($id)?>">
       <button style="background:red" class="btn btn-lg btn-primary btn-block" type="submit" value="Delete" name="delete">Delete</button>
     </form>
   </div>
   <div class="col-lg-4">
   </div>
   <div class="col-lg-4">
     <form class="form-signin" method="post">
       <input type="hidden" name="stu_id">
       <button class="btn btn-lg btn-primary btn-block" type="submit" value="Cancel" name="cancel">Cancel</button>
     </form>
   </div>
 </div>
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
