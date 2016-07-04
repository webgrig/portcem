<?php
foreach ($_POST['formData'] as $key => $value) {
	$$value['name'] = $value['value'];
}
$to      = [
	'grigoriev.ua@gmail.com',
	'webgrig@mail.ru'
];
$message = "Заявка: \r\nИмя:".$name."\r\nНомер:".$phone;
$CcArr = [];
$Cc = array_walk($to, function($item, $key) use (&$CcArr){
	if ($key) {
		$CcArr[] = $item;
	}
});
$CcStr = implode(";", $CcArr);
$subject = "Заявка";
$headers = 'Content-type: text/plain; charset=utf-8' . "\r\n" . "From: <{$_SERVER['HTTP_HOST']}>\r\n" . 'Cc: ' .$CcStr.  "\r\n" . 'X-Mailer: PHP/' . phpversion();
echo $headers;exit;
if(mail($to[0], $subject, $message, $headers))
	echo "OK";