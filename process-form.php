<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit'])) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Save form data in session
    $_SESSION['form_data'] = [
        'name' => $name,
        'phone' => $phone,
        'email' => $email,
        'subject' => $subject,
        'message' => $message,
    ];

    require 'PHPMailer/Exception.php';
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'leads@weyfar.com';
        $mail->Password   = 'Contact@Contact1';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        $mail->setFrom('leads@weyfar.com', 'Sender');
        $mail->addAddress('leads@weyfar.com', 'Recipient');

        $mail->isHTML(true);
        $mail->Subject = "$subject";
        $mail->Body    = " Sender Name - $name <br> Mobile Number - $phone <br> Email Address - $email <br> Message - $message";

        $mail->send();

        // Now safe to redirect because no HTML sent yet
        header('Location: index.html');
        exit();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
