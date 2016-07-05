<?php
$resArr = [];
foreach ($_POST['formData'] as $value) {
	if ($value['value'] !== "") {
		$resArr[$value['name']] = $value['value'];
		//$$value['name'] = $value['value'];
	}
}
// print_r($resArr);
// exit;
$resErr = [];
if (!isset($resArr['name'])) {
	array_push($resErr, "name");
}
if (!isset($resArr['phone'])) {
	array_push($resErr, "phone");
}
if ($resArr['formNumber'] == 1 || $resArr['formNumber'] == 2) {
	if (!isset($resArr['amount'])) {
		array_push($resErr, "amount");
	}
}
if ($resArr['formNumber'] == 1) {
	if ($resArr['delivery'] == 1) {
		if (!isset($resArr['address'])) {
			array_push($resErr, "address");
		}
	}
}
if ($resArr['formNumber'] == 2) {
	if (!isset($resArr['address'])) {
		array_push($resErr, "address");
	}
}
if (!empty($resErr)) {
	echo json_encode($resErr);
	exit;
}
$to = [
	'grigoriev.ua@gmail.com',
	'webgrig@mail.ru'
];
$message = "Заявка: \r\nИмя:".$resArr['name']."\r\nНомер:".$resArr['phone'];
$CcArr = [];
$Cc = array_walk($to, function($item, $key) use (&$CcArr){
	if ($key) {
		$CcArr[] = $item;
	}
});
$CcStr = implode(";", $CcArr);
$subject = "Заявка";
$headers = 'Content-type: text/plain; charset=utf-8' . "\r\n" . "From: <{$_SERVER['HTTP_HOST']}>\r\n" . 'Cc: ' .$CcStr.  "\r\n" . 'X-Mailer: PHP/' . phpversion();
//echo $headers;exit;
if(mail($to[0], $subject, $message, $headers)){
	echo "OK";
	exit;
}
