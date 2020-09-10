<?php

    if(isset($_POST["logout"])){
        setcookie("username","",time()-10000000);
    }

    header("refresh:1; url=index.html");

?>