<?php
foreach ($_POST['formData'] as $key => $value) {
	$$value['name'] = $value['value'];
}
$to      = [
	'grigoriev.ua@gmail.com',
	'webgrig@mail.ru'
];
$message = "Заявка: \r\nИмя:".$name."\r\nНомер:".$phone;
$CcStr = "";
$Cc = array_walk($to, function($item, $key) use ($CcStr){
	if ($key) {
		$CcStr .= ";" . $item;
	}
});
$subject = "Заявка";
$headers = 'Content-type: text/plain; charset=windows-1251' . "\r\n" . "From: <{$_SERVER['HTTP_HOST']}>\r\n" . 'Cc: ' .$CcStr.  "\r\n" . 'X-Mailer: PHP/' . phpversion();

if(mail($to[0], $subject, $message, $headers))
	echo "OK";