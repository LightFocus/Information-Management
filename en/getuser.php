<?php
session_start();
require_once "pdo.php";
if(!isset($_GET["sid"])){
  unset($_SESSION["name"]);
}
if(isset($_GET["c"])){
  $_SESSION["rank"]=$_GET["c"];
}
if(isset($_GET["n"])){
  $_SESSION["name"]=$_GET["n"];
}
$search="";
$search1="";
if(isset($_SESSION["rank"])){
  if($_SESSION["rank"]=="default"){
    $search="";
  }else if($_SESSION["rank"]=="name"){
    $search=" ORDER BY convert(name USING gbk)";
  }else if($_SESSION["rank"]=="number"){
    $search=" ORDER BY number";
  }
}
if(isset($_SESSION["name"])){
  $search1=" WHERE name like '".$_SESSION["name"]."%'";
}
$stmt=$pdo->query("SELECT name,number,English,Programming,password,stu_id FROM students".$search1.$search);
$count=0;
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
   echo("<h3 align='center'>".$row['password']."</h3>");
   echo("</td><td>");
   echo ('<form method=“post”>');
   echo ('<input type="hidden" name="stu_id" value="' . $row['stu_id'] . '">' . "\n");?>
   <div class="btn1" id="<?php echo($count)?>" onmousemove="var btn1=document.getElementById('<?php echo($count)?>');
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

     btn1.setAttribute( 'data-direction', directions.shift().id );
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
       <p>Are you sure you want to do that?</p>
       <button class="yes" value="yes<?php echo($row['stu_id']);?>" name="choice" onclick="deleteUser(this.value)">Yes</button>
       <button class="no">No</button>
     </div>
     <div class="btn1-front" style="width:220px;">Delete</div>
   </div>
   <?php
   echo ("\n</form>\n<h6></h6>");
   echo('<form action="change.php" method="post"><input type="hidden"');
   echo('name="stu_id" value="'.$row['stu_id'].'">'."\n");
   echo('<input type="hidden" value="'.$row['name'].'" name="name">');
   echo('<input type="hidden" value="'.$row['number'].'" name="number">');
   echo('<input type="hidden" value="'.$row['English'].'" name="e_score">');
   echo('<input type="hidden" value="'.$row['Programming'].'" name="p_score">');
   echo('<input type="hidden" value="'.$row['password'].'" name="password">');
   echo('<button class="btn btn-lg btn-primary btn-block" type="submit" value="Change" name="change1">Change</button>');
   echo("\n</form>\n");
   echo("</td></tr>");
 $count++;}?>
