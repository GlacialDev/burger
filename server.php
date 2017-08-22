<?php 
	
	$name = $_POST['name'];
	$phone = $_POST['phone'];

	$street = $_POST['street'];

	$house = $_POST['house'];
	$corpus = $_POST['corpus'];
	$flat = $_POST['flat'];
	$floor = $_POST['floor'];

	$comment = $_POST['comment'];

	$pay = $_POST['pay'];
	$disturb = $_POST['dont-disturb'];
	$disturb = isset($disturb) ? 'НЕТ' : 'ДА';

	$mail_message = '
	<html>
		<head>
			<title>Заявка</title>
		</head>
		<body>
			<h2>Заказ</h2>
			<ul>
				<li>Имя: ' . $name . '</li>
				<li>Телефон: ' . $phone . '</li>
				<li>Улица: ' . $street . '</li>
				<li>Дом: ' . $house . '</li>
				<li>Корпус: ' . $corpus . '</li>
				<li>Квартира: ' . $flat . '</li>
				<li>Этаж: ' . $floor . '</li>
				<li>Комментарий: ' . $comment . '</li>
				<li>Способ оплаты: ' . $pay . '</li>
				<li>Не перезванивать: ' . $disturb . '</li>
			</ul>
		</body>
	</html>
	';

	$headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    // echo $mail_message;
    // echo $headers;

	$mail = mail('kli-van@yandex.ru', 'Заказ', $mail_message, $headers);
	// echo $mail;

	if ($mail) {
		echo 'done';
	}else{
		echo 'error';
	}

?>