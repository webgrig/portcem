<?php
$resArr = [];
// print_r($_POST['formData']);
// exit;
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
	'seodrug@gmail.com'
];
///////////////
$date = date("d.m.Y в Hч.iм.sс.");
$message = "Заявка ($date)\r\n";
foreach ($resArr as $key => $value) {
	if ($key == "name") {
		$message .= "Имя: ".$resArr['name']."\r\n";
	}
	if ($key == "phone") {
		$message .= "Номер: ".$resArr['phone']."\r\n";
	}
	if ($key == "marka") {
		$message .= "Марка: М".$resArr['marka']."\r\n";
	}
	if ($key == "upakovka") {
		$message .= "Упаковка: ".$resArr['upakovka']."кг.\r\n";
	}
	if ($key == "amount") {
		$message .= "Количество: ".$resArr['amount']."шт.\r\n";
	}
	if ($key == "delivery") {
		if ($value == 1) {
			$message .= "Доставка: да\r\n";
		}
		if ($value == 0) {
			$message .= "Самовывоз\r\n";
		}
	}
	if ($key == "address") {
		$message .= "Адресс: ".$resArr['address']."\r\n";
	}
}

$CcArr = [];
$Cc = array_walk($to, function($item, $key) use (&$CcArr){
	if ($key) {
		$CcArr[] = $item;
	}
});
$CcStr = implode(";", $CcArr);
$subject = "Заявка ($date)";
$headers = 'Content-type: text/plain; charset=utf-8' . "\r\n" . "From: <{$_SERVER['HTTP_HOST']}>\r\n" . 'Cc: ' .$CcStr.  "\r\n" . 'X-Mailer: PHP/' . phpversion();
//echo $headers;exit;
if(mail($to[0], $subject, $message, $headers)){
	echo "OK";
	exit;
}
