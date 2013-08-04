<?php   
$name = trim($_GET['uname']); 
$pswd = trim($_GET['password']);    
if(($name=="guest") && ($pswd=="jquery"))
  echo "Welcome ".  $name;
else
  echo "Sorry you are not authorized";
?>  