<?php 
    if(isset($_POST["sign-in-submit"])){
        $server = "localhost";
        $usernm = "root";
        $passwd = "";
        $db = "phplogin";
        $finame = $_POST['sign-in-username'];
        $pswd = $_POST['sign-in-pass'];
        if($finame == "admin" && $pswd == "admin"){
            header("location:admin.html");
        } else {
        $con = mysqli_connect($server, $usernm, $passwd, $db);
        $result = mysqli_query($con,"SELECT username, email FROM accounts WHERE username = '".$finame."' AND  password = '".$pswd."'");
        if(mysqli_num_rows($result) > 0 )
        {            
            setcookie("username", $finame, time() + (86400*2));
            header("location:signedinge.html");
        }
        else
        {
            echo("you are not registered");
            
        }
    }

    
    }
?>