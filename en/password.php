<?php
 session_start();
 require_once "pdo.php";
 $id=$_SESSION['id'];
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if(isset($_POST['cancel'])){
     $_SESSION["error"]="Canceled!";
     if($id==1){
       header('Location:login.php');
       return;
     }else{
       header('Location:login1.php');
       return;
     }
   }else if(isset($_POST['change'])&&isset($_POST['old'])&&isset($_POST['new'])&&isset($_POST['confirm'])){
    $sql="SELECT password FROM accounts WHERE user_id=".$id;
    $stmt=$pdo->query($sql);
    foreach($stmt as $row){
     $pass=$row['password'];
   }
    if($_POST['new']!=$_POST['confirm']){
      $_SESSION["error"]="Password is not the same.";
    }else if($_POST['old']!=$pass){
      $_SESSION["error"]="Old password is wrong!";
    }else{
      $sql="UPDATE accounts SET password=:pass WHERE user_id=:zip";
      $stmt=$pdo->prepare($sql);
      $stmt->execute(array(
      ':zip'=>$_POST['user_id'],
      ':pass'=>$_POST['new'],));
      $_SESSION["success"]="Password Changed!";
      if($id==1){
        header('Location:login.php');
        return;
      }else{
        header('Location:login1.php');
        return;
      }
    }
  }}
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
     <link href="../css/dashboard.css" rel="stylesheet">
   </head>
   <body>
     <?php require_once('nav1.php');?>
     <div class="container marketing">
       <div class="container">
         <?php
         if ( ! isset($_SESSION["account"])||$_SESSION["account"]!="admin" ) { ?>
            <h1 align="center">Please <a href="index.php">Log In</a> to start.</h1>
         <?php } else {?>
         <form class="form-signin" method="post">
           <h2 class="form-signin-heading" align="center">Change Password</h2>
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
           <input type="text" name="old" id="inputEmail" class="form-control" placeholder="Old Password" required autofocus>
           <br>
           <label for="inputEmail" class="sr-only">New</label>
           <input type="text" name="new" id="inputEmail" class="form-control" placeholder="New Password" required autofocus>
           <br>
           <label for="inputEmail" class="sr-only">Confirm</label>
           <input type="text" name="confirm" id="inputEmail" class="form-control" placeholder="Confirm Password" required autofocus>
           <?php
           echo('<br><input type="hidden"');
           echo('name="user_id" value="'.$id.'">'."\n");
           ?>
           <button class="btn btn-lg btn-primary btn-block" type="sumbit" value="Change" name="change">Change</button>
         </form>
         <form class="form-signin" method="post">
           <input type="hidden" name="cancel" value="1">
           <input type="hidden" name="user_id" value="<?php echo($id);?>">
           <button class="btn btn-lg btn-primary btn-block" type="submit">Cancel</button>
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
