<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);

    // Хешування пароля (використовуючи md5)
    $hash_password = md5($password . "walpapur.12.06.18.09");

    // Оголошення змінної та з'єднання з базою даних
    $mysql = new mysqli('localhost', 'root', 'root', 'registration');

    // Перевірка на встановлення з'єднання
    if ($mysql->connect_error) {
        die("Помилка з'єднання з базою даних: " . $mysql->connect_error);
    }

    // Використання параметризованого запиту для уникнення SQL ін'єкцій
    $stmt = $mysql->prepare("SELECT * FROM `users` WHERE `email` = ? LIMIT 1");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($result->num_rows == 0) {
        echo "Користувача не знайдено!";
        exit();
    }

    // Перевірка пароля
    if ($hash_password === $user['password']) {
        // Створення cookie
        setcookie('auth_user', $user['name'], time() + 300, "/");
        // Закриття бази даних
        $mysql->close();
        // Перехід на сторінку
        header('Location: /registration/message_in.html');
    } else {
        echo "Пароль або логін невірні!";
    }
}
?>
