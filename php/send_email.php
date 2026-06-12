<?php 
$name =  $_POST['cust_name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$phone = $_POST['phone'];

$to      = 'amitbalaksingh947@gmail.com';
$subject = $subject;
$message = $message ."<br>Mobile No:".$phone;
$headers = 'From: '.$email;
mail($to, $subject, $message, $headers);    



?>
<html>
    <title></title>
    <body>

    <a href="../">Back</a>
    </body>
</html>
