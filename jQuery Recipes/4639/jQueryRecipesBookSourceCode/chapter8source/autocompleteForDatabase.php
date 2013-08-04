<?php   
$name = $_POST['userid']; 
$connect = mysql_connect("localhost", "root", "mce") or die("Please, check your server connection.");
mysql_select_db("autofill");
$query = "SELECT name from info where name like '$name%'";
$results = mysql_query($query) or die(mysql_error());
if($results)
{
while ($row = mysql_fetch_array($results)) {
extract($row);
echo '<li>' . $name. '</li>';
}
}
?>  