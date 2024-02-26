<?php
    define('MIN_NAME_LENGTH', 3);
    define('MAX_NAME_LENGTH', 64);
    define('MAX_EMAIL_LENGTH', 45);
    define('MIN_PASSWORD_LENGTH', 8);
    define('MAX_PASSWORD_LENGTH', 32);

    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);

    //Перевірка даних введених користувачем
    if (strlen($name) < MIN_NAME_LENGTH || strlen($name) > MAX_NAME_LENGTH) {
        echo "Помилка: Довжина імені недопустима!";
        exit();
    }
    if ($email === false || strlen($email) > MAX_EMAIL_LENGTH) {
        echo "Помилка: Неправильний формат або довжина адреси електронної пошти недопустима!";
        exit();
    }
    if (strlen($password) < MIN_PASSWORD_LENGTH || strlen($password) > MAX_PASSWORD_LENGTH || preg_match('/[A-Za-z]/', $password) === 0) {
        echo "Помилка: Пароль повинен містити від 8 до 32 символів та тільки латинські літери!";
        exit();
    }

    //Хешування пароля (У лапках можна вказати будь-які символи, щоб були ідентичні на сторінках вході та реєстрації)
    $hash_password =md5($password."walpapur.12.06.18.09");

    //Оголошення змінної та з'єднання з базою даних
    $mysql = new mysqli('localhost','root','root','registration');
    $mysql->query("INSERT INTO `users` (`name`, `password`, `email`) VALUES('$name', '$hash_password', '$email')");

    //Закриття бази даних
    $mysql->close();

    //Перехід на сторінку
    header('Location: /registration/message_up.html');
?>



