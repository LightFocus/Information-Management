<?php
 $pdo=new PDO('mysql:host=yourip;port=yourport;dbname=yourdatabase','youraccount','yourpassword');
 $pdo->query("SET NAMES utf8");
 $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
