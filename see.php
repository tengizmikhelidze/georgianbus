<?php
    if(isset($_POST['see'])){
        $server = "localhost";
        $usernm = "root";
        $passwd = "";
        $db = "phplogin";
        $con = mysqli_connect($server, $usernm, $passwd, $db);
        $query = "SELECT * FROM accounts";
 
        if ($result = mysqli_query($con,$query)) {
         
            /* fetch associative array */
            while ($row = $result->fetch_assoc()) {
                $field1name = $row["username"];
                $field2name = $row["password"];
                $field3name = $row["email"];
            }
         
            /* free result set */
            $result->free();  
    }
}
?>