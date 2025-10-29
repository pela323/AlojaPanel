<?php 
// ← Cierra sesión
//

session_start();
session_destroy();
header("Location: login.html");

?>
