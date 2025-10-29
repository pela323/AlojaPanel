<?php
// ← Valida login
//
session_start();

// Credenciales fijas por ahora (puedes cambiarlas)
$usuario = "admin";
$clave = "12345";

if ($_POST['usuario'] === $usuario && $_POST['clave'] === $clave) {
    $_SESSION['admin'] = true;
    header("Location: admin.html");
} else {
    header("Location: login.html?error=1");
}
?>