<?php
$servername = "localhost";
$username = "root";
$password = "";
$db_name = "feeback";

$conn = mysqli_connect($servername, $username, $password, $db_name);

if(!$conn){
    die("Can not connect" . mysqli_connect_error());
}

$user = $_POST["username"];
$email = $_POST["email"];
$message = $_POST["message"];

$sql = "INSERT INTO greetings (username, email, message) VALUES ('$user', '$email', '$message')";

if(mysqli_query($conn, $sql)){
    echo ("Data added Successfully");
}
else {
    echo "Something went wrong";
}


?>