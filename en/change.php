<?php
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
    $_SESSION["error"]="Canceled!";
    header('Location:login.php');
  }else if(isset($_POST['change'])&&isset($_POST['name'])&&isset($_POST['number'])&&isset($_POST['password'])){
       $sql="UPDATE students SET name=:name,number=:number,password=:password WHERE stu_id=:zip";
       $stmt=$pdo->prepare($sql);
       $stmt->execute(array(
       ':zip'=>$_POST['stu_id'],
       ':name'=>$_POST['name'],
       ':number'=>$_POST['number'],
       ':password'=>$_POST['password']));
       $_SESSION["success"]="Changed!";
       header('Location: login.php');
    }
}
 ?>
 <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="utf-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1">


     <title>Students Information Management System</title>

     <!-- Bootstrap core CSS -->
     <link href="../css/bootstrap.min.css" rel="stylesheet">
     <link href="../css/carousel.css" rel="stylesheet">
     <link href="../css/signin.css" rel="stylesheet">
  </head>
  <body>
    <div class="navbar-wrapper">
      <div class="container">

        <nav class="navbar navbar-inverse navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Change Information</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li> </li>
              </ul>
              <ul class="nav pull-right">
                <li>
                <a href="logout.php">Log Out</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="container marketing">
      <div class="container">
        <?php
        if ( ! isset($_SESSION["account"])||$_SESSION["account"]!="admin" ) { ?>
           <h1 align="center">Please <a href="index.php">Log In</a> to start.</h1>
        <?php } else {?>
        <form class="form-signin" method="post">
          <h2 class="form-signin-heading" align="center">Change Information</h2>
          <br>
          <label for="inputEmail" class="sr-only">Name</label>
          <h3>Name:</h3><input type="text" name="name" id="inputEmail" class="form-control" value="<?php echo($_POST['name']);?>" required autofocus>
          <?php echo ('<h4 align="center"><font color="red">'.$nameErr.'</font></h4>');?>
          <label for="inputEmail" class="sr-only">Number</label>
          <h3>Number:</h3><input type="text" name="number" id="inputEmail" class="form-control" value="<?php echo($_POST['number']);?>" required autofocus>
          <?php echo ('<h4 align="center"><font color="red">'.$numberErr.'</font></h4>');?>
          <label for="inputPassword" class="sr-only">Password</label>
          <h3>Password:</h3><input type="text" name="password" id="inputPassword" class="form-control" value="<?php echo($_POST['password']);?>" required>
          <?php echo ('<h4 align="center"><font color="red">'.$passErr.'</font></h4>');?>
          <input type="hidden" value="<?php echo($_POST['stu_id']);?>" name="stu_id">
          <button class="btn btn-lg btn-primary btn-block" type="submit" name="change">Change</button>
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
         <script src="../js/bootstrap.min.js"></script>

</body>
</html>
