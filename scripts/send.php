<?php
header("Content-type: text/plain; charset=windows-1251");
$to      = 'info@komp-master67.ru';
$subject = 'Заявка';
$message = $_POST['formname'];
$mail = $_POST['formnumber'];


mail($to, $subject, "Заявка: \nИмя:".$message."\nНомер:".$mail);

?> 