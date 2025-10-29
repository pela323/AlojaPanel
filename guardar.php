<?php
// ← Guarda precios en JSON
//
session_start();
if (!isset($_SESSION['admin'])) {
  http_response_code(403);
  echo "Acceso denegado.";
  exit;
}

$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
  echo "Datos inválidos.";
  exit;
}

file_put_contents("precios.json", json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
echo "✅ Precios actualizados correctamente";
?>
