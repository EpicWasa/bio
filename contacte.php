<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
$email = trim($_POST['email']);
$name = htmlspecialchars($_POST['name']);



$error = '';

if(!$name)
{
$error .= 'Пожалуйста введите ваше имя<br />';
}




$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

$subject =" Запрос прайса на сайте bioposud.com.ua";
$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";

$message ="Имя: " .$name."\n\nE-mail: ".$email."\n\n";
/* 
$message1 ="\n\nИмя: ".$name."\n\nE-mail: " .$tel."\n\nСообщение: ".$message."\n\n";	 */


$header = "Content-Type: text/plain; charset=utf-8\n";

$header .= "From:  Запрос прайса на сайте <bioposud.com.ua>\n\n";	
$mail = mail("sales@bioposud.com.ua", $subject1,  $message,  $header);

if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}


?>