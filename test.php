<?php
session_start();
require_once('pdo.php');
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if(isset($_POST['change'])&&isset($_POST['new'])&&isset($_POST['confirm'])){
   if($_POST['new']!=$_POST['confirm']){
     $_SESSION["error"]="两次密码不一致";
   }else{
     $sql="UPDATE accounts SET password=:pass WHERE user_id=:zip";
     $stmt=$pdo->prepare($sql);
     $stmt->execute(array(
     ':zip'=>$_POST['user_id'],
     ':pass'=>sha1($_POST['new']),));
     $_SESSION["success"]="已更改！";
     }
     unset($_POST['change']);
     unset($_POST['new']);
     unset($_POST['confirm']);
     unset($_POST['user_id']);
     header('Location:test.php');
     return;
 }
 if(isset($_POST['add'])&&isset($_POST['name'])&&isset($_POST['number'])&&isset($_POST['class'])){
     $sql="SELECT * FROM students WHERE number=:number";
     $stmt=$pdo->prepare($sql);
     $stmt->execute(array(
       ':number'=>$_POST['number']
     ));
     if($row=$stmt->fetch(PDO::FETCH_ASSOC)){
      $_SESSION["error"]="学号已存在，请重试";
     }else{
      $sql="INSERT INTO students(name,number,password,English,Programming,class)
             VALUES(:name,:number,:password,0,0,:class)";
      $stmt=$pdo->prepare($sql);
      $stmt->execute(array(
      ':name'=>$_POST['name'],
      ':number'=>$_POST['number'],
      ':password'=>sha1($_POST['password']),
      ':class'=>$_POST['class']));
      $_SESSION["success"]="已添加!";
      }
      header('Location:test.php');
      return;
  }
}
?>
<!DOCTYPE html>
<html lang="en" class="perfect-scrollbar-off"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>
    URP
  </title>
  <link href="assets/black-dashboard.min.css" rel="stylesheet">
  <link rel="manifest" href="manifest.json">
</head>
<style>
.collapse.drop{
  display: inline;
}
#topcontrol{
  position: fixed;
  bottom: -3px;
  right: 1px;
  cursor: pointer;
  z-index: 4;
  opacity: .5;
  transition-property:opacity;
  transition-duration:0.5s;
  transition-timing-function: ease;
}
#topcontrol:hover{
  opacity:1;
}
input{
  color:white;
  font-size: 10px;
}
p{
  font-size:20px;
}
</style>
<body class="sidebar-mini">
  <?php
   $id = $_SESSION["id"];
   if (!isset($_SESSION["account"])||$_SESSION["account"]!="admin") {
     ?>
     <br>
    <h1 align="center">请<a href="index.php">登陆</a>以继续</h1>
  <?php
   } else {
    ?>
  <div class="wrapper">
    <div class="navbar-minimize-fixed" style="opacity: 0;">
      <button class="minimize-sidebar btn btn-link btn-just-icon">
        <i class="tim-icons icon-align-center visible-on-sidebar-regular text-muted"></i>
        <i class="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted"></i>
      </button>
    </div>
    <div class="sidebar">
      <div class="sidebar-wrapper">
        <div class="logo">
          <a href="javascript:void(0)" class="simple-text logo-mini">
            菜单
          </a>
          <a href="javascript:void(0)" class="simple-text logo-normal">

          </a>
        </div>
        <ul class="nav">
          <li class="active">
            <a href="#">
              <i class="tim-icons icon-chart-pie-36"></i>
              <p>成绩表</p>
            </a>
          </li>
          <li class="active">
            <a onclick="drop1()" data-toggle="collapse">
              <i class="tim-icons icon-puzzle-10"></i>
              <p>
                搜索
                <b class="caret"></b>
              </p>
            </a>
            <div class="collapse" id="tablesExamples1">
              <form class="form-signin" method="post">
               <h2 class="form-signin-heading" align="center">搜索姓名</h2>
               <label for="inputEmail" class="sr-only">Name</label>
               <input type="text" name="search" id="inputEmail" class="form-control" placeholder="姓名" required autofocus onkeyup="showResult(this.value)">
             </form>
            </div>
          </li>
          <li class="active">
            <a onclick="drop2()" data-toggle="collapse">
              <i class="tim-icons icon-puzzle-10"></i>
              <p>
                排序
                <b class="caret"></b>
              </p>
            </a>
            <div class="collapse" id="tablesExamples2">
              <form class="form-signin" method="post">
               <div style="position:relative;left:38%;">
               <select name="users" onchange="showUser(this.value)"  style="background-color:rgb(196,89,210)"autofocus required>
                    <option value="default">默认</option>
                    <option value="name">姓名</option>
                    <option value="number">学号</option>
               </select>
             </div>
             </form>
            </div>
          </li>
          <li class="active">
            <a onclick="drop3()" data-toggle="collapse">
              <i class="tim-icons icon-puzzle-10"></i>
              <p>
                添加
                <b class="caret"></b>
              </p>
            </a>
            <div class="collapse" id="tablesExamples3">
              <form class="form-signin" method="post">
                <label for="inputEmail" class="sr-only">姓名</label>
                <input type="text" name="name" id="inputEmail" class="form-control" placeholder="姓名" required autofocus>
                <br>
                <label for="inputEmail" class="sr-only">学号</label>
                <input type="text" name="number" id="inputEmail" class="form-control" placeholder="学号" required autofocus>
                <br>
                <label for="inputPassword" class="sr-only">密码</label>
                <input type="password" name="password" id="inputPassword" class="form-control" placeholder="密码" required>
                <br>
                <label for="inputPassword" class="sr-only">班级</label>
                <input type="text" name="class" id="inputPassword" class="form-control" placeholder="班级" required>
                <br>
                <button class="btn btn-lg btn-primary btn-block" name="add" value="add" type="submit">添加</button>
              </form>
            </div>
          </li>
          <li class="active">
            <a onclick="drop4()" data-toggle="collapse">
              <i class="tim-icons icon-puzzle-10"></i>
              <p>
                修改密码
                <b class="caret"></b>
              </p>
            </a>
            <div class="collapse" id="tablesExamples4">
              <form class="form-signin" method="post">
                <label for="inputEmail" class="sr-only">New</label>
                <input type="password" name="new" id="inputEmail" class="form-control" placeholder="新密码" required autofocus>
                <br>
                <label for="inputEmail" class="sr-only">Confirm</label>
                <input type="password" name="confirm" id="inputEmail" class="form-control" placeholder="确认密码" required autofocus>
                <?php
                echo('<br><input type="hidden"');
                echo('name="user_id" value="'.$id.'">'."\n");
                ?>
                <button class="btn btn-lg btn-primary btn-block" type="sumbit" value="Change" name="change">更改</button>
              </form>
            </div>
          </li>
          <li class="active">
            <a onclick="drop5()" data-toggle="collapse">
              <i class="tim-icons icon-puzzle-10"></i>
              <p>
                退出
                <b class="caret"></b>
              </p>
            </a>
            <div class="collapse" id="tablesExamples5">
              <form action="logout.php" class="form-signin" method="get">
               <button class="btn btn-lg btn-primary btn-block" type="submit" name="add">退出</button>
             </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="main-panel">
      <nav class="navbar navbar-expand-lg navbar-absolute navbar-transparent" style="top: 0px;">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <div class="navbar-minimize d-inline">
              <button class="minimize-sidebar btn btn-link btn-just-icon" rel="tooltip" data-original-title="Sidebar toggle" data-placement="right">
                <p>缩放边栏</p>
              </button>
            </div>
            <div class="navbar-toggle d-inline">
              <button type="button" class="navbar-toggler">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a class="navbar-brand" href="javascript:void(0)">成绩表</a>
          </div>
          <div>
            <?php
          if (isset($_SESSION["success"])) {
              echo ('<h3 style="color:green; margin:0;" align="center">' . $_SESSION["success"] . "</h3>\n");
              unset($_SESSION["success"]);
          } else if (isset($_SESSION["error"])) {
              echo ('<h3 style="color:red; margin:0;" align="center">' . $_SESSION["error"] . "</h3>\n");
              unset($_SESSION["error"]);
          }?>
          </div>
        </div>
      </nav>
      <div class="modal modal-search fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <i class="tim-icons icon-simple-remove"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div id="zan-bodyer">
        <div class="row">
          <div class="col-12">
            <div class="card card-chart">
              <div class="card-header">
                <div class="row">
                  <div class="col-sm-6 text-left">
                    <h5 class="card-category">本次考试</h5>
                    <h2 class="card-title">平均成绩</h2>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="chart-area"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                  <canvas id="chartBig1" width="2426" height="440" class="chartjs-render-monitor" style="display: block; height: 220px; width: 1213px;"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">个人信息及成绩</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="table-responsive">
                      <table class="table table-striped" align="center">
                        <thead>
                          <tr>
                            <th><h2 align="center">姓名</h2></th>
                            <th><h2 align="center">学号</h2></th>
                            <th><h2 align="center">英语成绩</h2></th>
                            <th><h2 align="center">编程成绩</h2></th>
                            <th><h2 align="center">操作</h2></th>
                          </tr>
                        </thead>
                        <tbody id="tbody">
                    <?php
              $stmt = $pdo->query("SELECT name,number,English,Programming,password,stu_id FROM students");
              $count=0;
              while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                  echo ("<tr><td>");
                  echo ("<h3 align='center'>" . $row['name'] . "</h3>");
                  echo ("</td><td>");
                  echo ("<h3 align='center'>" . $row['number'] . "</h3>");
                  echo ("</td><td>");
                  echo ("<h3 align='center'>" . $row['English'] . "</h3>");
                  echo ("</td><td>");
                  echo ("<h3 align='center'>" . $row['Programming'] . "</h3>");
                  echo ("</td><td>");
                  echo ('<form action="change.php" method="post"><input type="hidden"');
                  echo ('name="stu_id" value="' . $row['stu_id'] . '">' . "\n");
                  echo ('<input type="hidden" value="' . $row['name'] . '" name="name">');
                  echo ('<input type="hidden" value="' . $row['number'] . '" name="number">');
                  echo ('<input type="hidden" value="' . $row['English'] . '" name="e_score">');
                  echo ('<input type="hidden" value="' . $row['Programming'] . '" name="p_score">');
                  echo ('<button class="btn btn-lg btn-primary btn-block" type="submit" value="Change" name="change1">更改</button>');
                  echo ("\n</form>\n");
                  echo ("</td></tr>");
                  $count++;
              }
          ?>
                    </tbody>
                    </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="fixed-plugin">
    <div class="dropdown show-dropdown">
      <a href="https://demos.creative-tim.com/marketplace/black-dashboard-pro/examples/dashboard.html#" data-toggle="dropdown">
        <p>源码</p>
      </a>
      <ul class="dropdown-menu">
        <li class="header-title">Find It On</li>
        <li class="header-title">
          <a href="https://github.com/LightFocus/Information-Management"><p>Github</p></a>
        </li>
      </ul>
    </div>
  </div>
  <?php
}
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理1'");
     $l1 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理2'");
     $l2 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理3'");
     $l3 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理4'");
     $l4 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理5'");
     $l5 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理6'");
     $l6 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理7'");
     $l7 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理8'");
     $l8 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理9'");
     $l9 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理10'");
     $l10 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理11'");
     $l11 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理12'");
     $l12 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理13'");
     $l13= $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='理14'");
     $l14 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='文1'");
     $w1 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='文2'");
     $w2 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='文3'");
     $w3 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='文4'");
     $w4 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students where class='文5'");
     $w5 = $stmt->fetch(PDO::FETCH_ASSOC);
     $stmt = $pdo->query("SELECT AVG((English+Programming)/2) as avg FROM students");
     $all = $stmt->fetch(PDO::FETCH_ASSOC);
   ?>
  <script src="assets/jquery.min(1).js"></script>
  <script src="assets/popper.min(1).js"></script>
  <script src="assets/bootstrap.min(1).js"></script>
  <script src="assets/perfect-scrollbar.jquery.min.js"></script>
  <script src="assets/moment.min.js"></script>
  <script src="assets/js(1)"></script>
  <script src="assets/chartjs.min.js"></script>
  <script src="assets/bootstrap-notify.js"></script>
  <script src="assets/black-dashboard.min.js"></script>
  <?php require_once('assets/demo.php');?>
  <script src="assets/jquery.sharrre.js"></script>
  <script async="" src="assets/js(2)"></script>
  <script type="text/javascript">
   var toTop = document.createElement('div')
   toTop.id = 'topcontrol'
   var jQtoTop = jQuery('#topcontrol')
   var topimg = new Image()
   var page = document.querySelector('#zan-bodyer')
   topimg.src = 'https://lightfocus-1256547063.cos.ap-hongkong.myqcloud.com/1.png'
   topimg.style="width:100px;"
   toTop.appendChild(topimg)
   jQuery(window).on('scroll', function addChild() {
       page.appendChild(toTop)
       jQuery(window).off('scroll', addChild)
   })
   function gotoTop (minHeight) {
     jQuery(window).on('scroll', function addChild() {
       page.appendChild(toTop)
       jQuery(window).off('scroll', addChild)
     })
     toTop.addEventListener('click',
       function test () {
         jQuery('html,body').animate({ scrollTop: 0 }, 700)
       })
     minHeight ? minHeight = minHeight : minHeight = 600
     jQuery(window).on('scroll', function () {
       var s = jQuery(window).scrollTop()
       if (s > minHeight) {
         jQuery('#topcontrol').fadeIn(100)
       } else {
         jQuery('#topcontrol').fadeOut(200)
       }
     })
   }
   gotoTop()
</script>
  <script>
  function drop1(){
    if($("#tablesExamples1").hasClass("drop")){
      document.getElementById("tablesExamples1").classList.remove('drop');
    }else
      document.getElementById("tablesExamples1").classList.add('drop');
  }
  function drop2(){
    if($("#tablesExamples2").hasClass("drop")){
      document.getElementById("tablesExamples2").classList.remove('drop');
    }else
      document.getElementById("tablesExamples2").classList.add('drop');
  }
  function drop3(){
    if($("#tablesExamples3").hasClass("drop")){
      document.getElementById("tablesExamples3").classList.remove('drop');
    }else
      document.getElementById("tablesExamples3").classList.add('drop');
  }
  function drop4(){
    if($("#tablesExamples4").hasClass("drop")){
      document.getElementById("tablesExamples4").classList.remove('drop');
    }else
      document.getElementById("tablesExamples4").classList.add('drop');
  }
  function drop5(){
    if($("#tablesExamples5").hasClass("drop")){
      document.getElementById("tablesExamples5").classList.remove('drop');
    }else
      document.getElementById("tablesExamples5").classList.add('drop');
  }
  </script>
  <script>
  window.onbeforeunload = function(){
    var scrollPos;
    if (typeof window.pageYOffset != 'undefined') {
        scrollPos = window.pageYOffset;
    }
    else if (typeof document.compatMode != 'undefined' &&
        document.compatMode != 'BackCompat') {
        scrollPos = document.documentElement.scrollTop;
    }
    else if (typeof document.body != 'undefined') {
        scrollPos = document.body.scrollTop;
    }
    document.cookie="scrollTop="+scrollPos; //存储滚动条位置到cookies中
}

window.onload = function()
{
    if(document.cookie.match(/scrollTop=([^;]+)(;|$)/)!=null){
        var arr=document.cookie.match(/scrollTop=([^;]+)(;|$)/); //cookies中不为空，则读取滚动条位置
        document.documentElement.scrollTop=parseInt(arr[1]);
        document.body.scrollTop=parseInt(arr[1]);
    }
}
  var xmlHttp;
  function showUser(str) {
    console.log(str);
      xmlHttp = GetXmlHttpObject()
      if (xmlHttp == null) {
          alert("Browser does not support HTTP Request")
          return
      }
      var url = "getuser.php"
      url = url + "?c=" + str
      url = url + "&sid=" + Math.random()
      xmlHttp.onreadystatechange = stateChanged
      xmlHttp.open("GET", url, true)
      xmlHttp.send(null)
  }
  function deleteUser(str) {
      xmlHttp = GetXmlHttpObject()
      if (xmlHttp == null) {
          alert("Browser does not support HTTP Request")
          return
      }
      var url = "delete.php"
      url = url + "?choice=" + str
      url = url + "&sid=" + Math.random()
      xmlHttp.onreadystatechange = stateChanged
      xmlHttp.open("GET", url, true)
      xmlHttp.send(null)
  }
  function stateChanged() {
      if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
          document.getElementById("tbody").innerHTML = xmlHttp.responseText
      }
  }
  function GetXmlHttpObject() {
      var xmlHttp = null;
      try {
          // Firefox, Opera 8.0+, Safari
          xmlHttp = new XMLHttpRequest();
      } catch (e) {
          //Internet Explorer
          try {
              xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
          } catch (e) {
              xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
          }
      }
      return xmlHttp;
  }
  function showResult(str) {
      xmlHttp = GetXmlHttpObject()
      if (xmlHttp == null) {
          alert("Browser does not support HTTP Request")
          return
      }
      var url = "getuser.php"
      if (str != "") {
          url = url + "?n=" + str
          url = url + "&sid=" + Math.random()
      }
      xmlHttp.onreadystatechange = stateChanged
      xmlHttp.open("GET", url, true)
      xmlHttp.send(null)
  }
  function stateChanged() {
      if (xmlHttp.readyState == 4 || xmlHttp.readyState == "complete") {
          document.getElementById("tbody").innerHTML = xmlHttp.responseText
      }
  }
  function GetXmlHttpObject() {
      var xmlHttp = null;
      try {
          // Firefox, Opera 8.0+, Safari
          xmlHttp = new XMLHttpRequest();
      } catch (e) {
          //Internet Explorer
          try {
              xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
          } catch (e) {
              xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
          }
      }
      return xmlHttp;
  }
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-46172202-12');
  </script>
  <script>
    $(document).ready(function() {
      $().ready(function() {
        $sidebar = $('.sidebar');
        $primary = $('.btn-primary');
        $navbar = $('.navbar');
        $main_panel = $('.main-panel');

        $full_page = $('.full-page');

        $sidebar_responsive = $('body > .navbar-collapse');
        sidebar_mini_active = true;
        white_color = false;

        window_width = $(window).width();

        fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();
        $('.fixed-plugin a').click(function(event) {
          if ($(this).hasClass('switch-trigger')) {
            if (event.stopPropagation) {
              event.stopPropagation();
            } else if (window.event) {
              window.event.cancelBubble = true;
            }
          }
        });

        $('.fixed-plugin .background-color span').click(function() {
          $(this).siblings().removeClass('active');
          $(this).addClass('active');
          $primary = $('.btn-primary');
          var new_color = $(this).data('color');

          if ($sidebar.length != 0) {
            $sidebar.attr('data', new_color);
          }

          if ($primary.length != 0) {
            $primary.attr('style', 'background:'+new_color);
          }

          if ($main_panel.length != 0) {
            $main_panel.attr('data', new_color);
          }

          if ($full_page.length != 0) {
            $full_page.attr('filter-color', new_color);
          }

          if ($sidebar_responsive.length != 0) {
            $sidebar_responsive.attr('data', new_color);
          }
        });

        $('.switch-sidebar-mini input').on("switchChange.bootstrapSwitch", function() {
          var $btn = $(this);

          if (sidebar_mini_active == true) {
            $('body').removeClass('sidebar-mini');
            sidebar_mini_active = false;
            blackDashboard.showSidebarMessage('迷你边栏取消');
          } else {
            $('body').addClass('sidebar-mini');
            sidebar_mini_active = true;
            blackDashboard.showSidebarMessage('迷你边栏启动');
          }

          // we simulate the window Resize so the charts will get updated in realtime.
          var simulateWindowResize = setInterval(function() {
            window.dispatchEvent(new Event('resize'));
          }, 180);

          // we stop the simulation of Window Resize after the animations are completed
          setTimeout(function() {
            clearInterval(simulateWindowResize);
          }, 1000);
        });

        $('.switch-change-color input').on("switchChange.bootstrapSwitch", function() {
          var $btn = $(this);

          if (white_color == true) {

            $('body').addClass('change-background');
            setTimeout(function() {
              $('body').removeClass('change-background');
              $('body').removeClass('white-content');
            }, 900);
            white_color = false;
          } else {

            $('body').addClass('change-background');
            setTimeout(function() {
              $('body').removeClass('change-background');
              $('body').addClass('white-content');
            }, 900);

            white_color = true;
          }


        });

        $('.light-badge').click(function() {
          $('body').addClass('white-content');
        });

        $('.dark-badge').click(function() {
          $('body').removeClass('white-content');
        });
      });
    });
    $(document).ready(function(){
    if(sidebar_mini_active == true){
    $(".sidebar-wrapper").mouseleave(function(){
      if($("#tablesExamples1").hasClass("drop")){
        document.getElementById("tablesExamples1").classList.remove('drop');
      }
      if($("#tablesExamples2").hasClass("drop")){
        document.getElementById("tablesExamples2").classList.remove('drop');
      }
      if($("#tablesExamples3").hasClass("drop")){
        document.getElementById("tablesExamples3").classList.remove('drop');
      }
      if($("#tablesExamples4").hasClass("drop")){
        document.getElementById("tablesExamples4").classList.remove('drop');
      }
      if($("#tablesExamples5").hasClass("drop")){
        document.getElementById("tablesExamples5").classList.remove('drop');
      }
    });
  }
  });
  </script>
  <script>
    $(document).ready(function() {
      // Javascript method's body can be found in assets/js/demos.js
      demo.initDashboardPageCharts();

      demo.initVectorMap();

    });
  </script>
