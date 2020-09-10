<?php
 
    if(isset($_POST["create"])) {
        $server = "localhost";
        $usernm = "root";
        $passwd = "";
        $db = "phplogin";
        $finame= $_POST["username"];
        $pswd=$_POST["password"];
        $email=$_POST["email"];
        $pswdcheck = $_POST["pass-confirm"];
        $con = mysqli_connect($server, $usernm, $passwd, $db);
        if($pswd != $pswdcheck) die("Passwords do not match");
        $result = mysqli_query($con,"SELECT username FROM accounts WHERE username = '".$finame."' ");
        if(mysqli_num_rows($result) > 0 )
        {
            echo("username exists");            
        }
        else
        {
            if(!$con){
                die("Connecton failed ".mysqli_connect_error());
            }

            $sql= "INSERT INTO accounts(username,email,password) VALUES('".$finame."','".$email."','".$pswd."')";
            if(mysqli_query($con,$sql)){
                echo "inserted";
            } 

            else {
                echo "Not iserted";
            }   
        }
    
    }
?>
