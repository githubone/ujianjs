<?php   
$errors = null;
$name = $_POST['userid']; 
if (!eregi("^[a-z0-9_]+$", $name)) 
{
$errors .= "user|Invalid User id\n";
}
else
{
$errors .= "user|\n";
}
$emid = $_POST['emailadd']; 
if (!eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $emid)) 
{
$errors .= "email|Invalid email address\n";
}
else
{
$errors .= "email|\n";
}
echo $errors;
?>  