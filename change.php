<?php
   session_start();
   require_once "pdo.php";
   if($_POST['name']!=""){
   $_SESSION['number']=$_POST['number'];
   $_SESSION['name']=$_POST['name'];
   }
   if($_POST['choice']=="yes"){
     unset($_SESSION['name']);
     header('Location:delete.php');
   }
   if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_POST['cancel'])){
      $_SESSION["error"]="已取消!";
      unset($_SESSION['name']);
      unset($_SESSION['number']);
      header('Location:test.php');
      return;
    }else if(isset($_POST['change'])&&isset($_POST['name'])&&isset($_POST['number'])&&isset($_POST['password'])&&isset($_POST['class'])){
         $sql="UPDATE students SET name=:name,number=:number,password=:password,class=:class WHERE stu_id=:zip";
         $stmt=$pdo->prepare($sql);
         $stmt->execute(array(
         ':zip'=>$_POST['stu_id'],
         ':name'=>$_POST['name'],
         ':number'=>$_POST['number'],
         ':password'=>sha1($_POST['password']),
         ':class'=>$_POST['class']));
         $_SESSION["success"]="已更改!";
         header('Location:test.php');
         return;
      }
   }
   ?>
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>URP</title>
      <!-- Bootstrap core CSS -->
      <link href="assets/black-dashboard.min.css" rel="stylesheet">
      <link href="assets/style.css" rel="stylesheet" type="text/css" />
      <link rel="manifest" href="manifest.json">
      <style>
      .form-signin {
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
      }
      </style>
   </head>
   <body>
      <div class="navbar-wrapper">
         <div>
            <nav class="navbar navbar-inverse navbar-static-top" style="margin:0px;">
               <div class="container">
                  <div class="navbar-header">
                     <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                     <span class="sr-only">Toggle navigation</span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                     </button>
                     <a class="navbar-brand" href="#">&nbsp;&nbsp;&nbsp;URP</a>
                  </div>
                  <div id="navbar" class="navbar-collapse collapse">
                     <form action="logout.php" class="nav pull-right">
                        <button style="height:50px;" class="btn btn-lg btn-primary btn-block" type="submit">登出</button>
                     </form>
                  </div>
               </div>
            </nav>
         </div>
      </div>
      <div class="container marketing">
         <div class="container">
            <?php
               if ( ! isset($_SESSION["account"])||$_SESSION["account"]!="admin" ) { ?>
            <h1 align="center">请<a href="index.php">登陆</a>以继续</h1>
            <?php } else {?>
            <tbody id="tbody">
               <form class="form-signin" method="post">
                  <h2 class="form-signin-heading" align="center">修改信息</h2>
                  <br>
                  <label for="inputEmail" class="sr-only">姓名</label>
                  <h3>姓名:</h3>
                  <input type="text" name="name" id="inputEmail" class="form-control" value="<?php echo($_SESSION['name']);?>" required autofocus>
                  <label for="inputEmail" class="sr-only">学号</label>
                  <h3>学号:</h3>
                  <input type="text" name="number" id="inputEmail" class="form-control" value="<?php echo($_SESSION['number']);?>" required autofocus>
                  <label for="inputPassword" class="sr-only">密码</label>
                  <h3>密码:</h3>
                  <input type="text" name="password" id="inputPassword" class="form-control" required autofocus>
                  <label for="inputPassword" class="sr-only">班级</label>
                  <h3>班级:</h3>
                  <input type="text" name="class" id="inputPassword" class="form-control" required autofocus>
                  <input type="hidden" value="<?php echo($_POST['stu_id']);?>" name="stu_id">
                  <br>
                  <button class="btn btn-lg btn-primary btn-block" type="submit" name="change">修改</button>
               </form>
               <form class="form-signin" method="post">
                  <div class="btn1" id="delete" style="width:100%;" onmousemove="var btn1=document.getElementById('delete');
                     var btn1Front = btn1.querySelector( '.btn1-front' ),
                     btn1Yes = btn1.querySelector( '.btn1-back .yes' ),
                     btn1No = btn1.querySelector( '.btn1-back .no' );
                     //console.log(btn1);
                     btn1Front.addEventListener( 'click', function( event ) {
                     var mx = event.clientX - btn1.offsetLeft,
                     my = event.clientY - btn1.offsetTop;
                     var w = btn1.offsetWidth,
                     h = btn1.offsetHeight;
                     var directions = [
                     { id: 'top', x: w/2, y: 0 },
                     { id: 'right', x: w, y: h/2 },
                     { id: 'bottom', x: w/2, y: h },
                     { id: 'left', x: 0, y: h/2 }
                     ];
                     directions.sort( function( a, b ) {
                     return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
                     } );
                     btn1.setAttribute( 'data-direction', 'bottom' );
                     btn1.classList.add( 'is-open' );
                     } );
                     btn1Yes.addEventListener( 'click', function( event ) {
                     btn1.classList.remove( 'is-open' );
                     } );
                     btn1No.addEventListener( 'click', function( event ) {
                     btn1.classList.remove( 'is-open' );
                     } );
                     function distance( x1, y1, x2, y2 ) {
                     var dx = x1-x2;
                     var dy = y1-y2;
                     return Math.sqrt( dx*dx + dy*dy );
                     }">
                     <div class="btn1-back">
                        <p>确定要这么做吗？</p>
                        <button class="yes" value="yes" name="choice">是</button>
                        <button class="no" value="no" name="choice" onclick="donothing()">否</button>
                     </div>
                     <div class="btn1-front">删除</div>
                  </div>
               </form>
               <form class="form-signin" method="post">
                  <input type="hidden" name="cancel" value="1">
                  <button class="btn btn-lg btn-primary btn-block" type="submit">取消</button>
               </form>
            </tbody>
         </div>
         <!-- /container -->
         <?php }require_once('footer.php');?>
      </div>
      <!-- Bootstrap core JavaScript
         ================================================== -->
      <!-- Placed at the end of the document so the pages load faster -->
      <script src="../js/jquery.min.js"></script>
      <script src="../js/bootstrap.min.js"></script>
      <script>
         function donothing(){
         }
      </script>
   </body>
</html>
