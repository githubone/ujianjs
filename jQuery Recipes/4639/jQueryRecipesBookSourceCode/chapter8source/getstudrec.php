<?php   
$connect = mysql_connect("localhost", "root", "mce") or die("Please, check your server connection.");
mysql_select_db("college");
$query = "SELECT roll, name, marks from student";
$results = mysql_query($query) or die(mysql_error());
if($results)
{
echo '<table border="1">';
echo '<thead>';
echo '<tr><th>Roll</th><th>Name</th><th>Marks</th></tr>';
echo '</thead>';
echo '<tbody>';
while ($row = mysql_fetch_array($results)) {
extract($row);
echo '<tr><td>' . $roll . '</td><td>' . $name . '</td><td>' . $marks . '</td></tr>';
}
echo '</tbody>';
echo '</table>';
}
?>  