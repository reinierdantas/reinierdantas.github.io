<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "reinier.dantas@yahoo.com.br"
    $headers = "De: ".$mailFrom;
    $txt = "Você recebeu um email de".$name.". \n\n".$message;

    mail($mailTo, $subject, $txt, $headers);

    header("Location:index.html?mailsend");
}
