<?php
session_start();
require_once('pdo.php');
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if(isset($_POST['change'])&&isset($_POST['new'])&&isset($_POST['confirm'])){
   if($_POST['new']!=$_POST['confirm']){
     $_SESSION["error"]="两次密码不一致";
   }else{
     $sql="UPDATE students SET password=:pass WHERE stu_id=:zip";
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
     header('Location:test2.php');
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
p{
  font-size:20px;
}
</style>
<body class="sidebar-mini">
  <?php
  $id=$_SESSION['id'];
   if (! isset($_SESSION["account"]) ) {
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
                            <th><h2 align="center">班级英语平均</h2></th>
                            <th><h2 align="center">班级编程平均</h2></th>
                            <th><h2 align="center">年级英语平均</h2></th>
                            <th><h2 align="center">年级编程平均</h2></th>
                          </tr>
                        </thead>
                        <tbody>
                        <?php
                        $stmt=$pdo->query("SELECT name,number,English,Programming,stu_id,class FROM students WHERE stu_id=".$id);
                        while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
                           echo("<tr><td>");
                           echo("<h3 align='center'>".$row['name']."</h3>");
                           echo("</td><td>");
                           echo("<h3 align='center'>".$row['number']."</h3>");
                           echo("</td><td>");
                           echo("<h3 align='center'>".$row['English']."</h3>");
                           echo("</td><td>");
                           echo("<h3 align='center'>".$row['Programming']."</h3>");
                           echo("</td><td>");
                           $class=$row['class'];
                           $stmt = $pdo->query("SELECT AVG(English) as avg FROM students where class='".$class."';");
                           $ceng = $stmt->fetch(PDO::FETCH_ASSOC);
                           echo("<h3 align='center'>".substr($ceng['avg'],0,5)."</h3>");
                           echo("</td><td>");
                           $stmt = $pdo->query("SELECT AVG(Programming) as avg FROM students where class='".$class."';");
                           $cpro = $stmt->fetch(PDO::FETCH_ASSOC);
                           echo("<h3 align='center'>".substr($cpro['avg'],0,5)."</h3>");
                           echo("</td><td>");
                           $stmt = $pdo->query("SELECT AVG(English) as avg FROM students");
                           $aeng = $stmt->fetch(PDO::FETCH_ASSOC);
                           echo("<h3 align='center'>".substr($aeng['avg'],0,5)."</h3>");
                           echo("</td><td>");
                           $stmt = $pdo->query("SELECT AVG(Programming) as avg FROM students");
                           $apro = $stmt->fetch(PDO::FETCH_ASSOC);
                           echo("<h3 align='center'>".substr($apro['avg'],0,5)."</h3>");
                           echo("</td></tr>");
                         }?>
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
  toTop.addEventListener('click', // 定义返回顶部点击向上滚动的动画
    function test () {
      jQuery('html,body').animate({ scrollTop: 0 }, 700)
    })
  minHeight ? minHeight = minHeight : minHeight = 600 // 获取页面的最小高度，无传入值则默认为600像素
  jQuery(window).on('scroll', function () { // 为窗口的scroll事件绑定处理函数
    var s = jQuery(window).scrollTop() // 获取窗口的滚动条的垂直位置
    if (s > minHeight) { // 当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
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
