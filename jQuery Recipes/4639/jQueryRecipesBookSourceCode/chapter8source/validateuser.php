<?php   
$name = $_POST['uname']; 
if (!eregi("^[a-z0-9_]+$", $name)) 
{
	echo "Invalid User name";
}
?>  