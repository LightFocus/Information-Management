<?php
 $pdo=new PDO('mysql:host=120.78.160.128;port=3306;dbname=accounts','root','dafuweng7');
 $pdo->query("SET NAMES utf8");
 $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
