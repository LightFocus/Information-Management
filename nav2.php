<div class="navbar-wrapper">
  <div>
    <nav class="navbar navbar-inverse navbar-static-top">
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
          <form action="password1.php" class="nav pull-right" method="post">
            <button style="height:50px;" class="btn btn-lg btn-primary btn-block" type="submit" name="stu_id" value="<?php echo($id);?>">更改密码</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</div>
