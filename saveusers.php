<?php
// Recuperar los valores enviados desde el formulario HTML
$usuario = $_POST['user'];
$correo = $_POST['email'];
$contrasena = $_POST['password'];

// Conectar a la base de datos MySQL (asegúrate de reemplazar los valores con los correctos)
$host = 'localhost';
$nombre_usuario = 'tu_usuario';
$contrasena_usuario = 'tu_contraseña';
$nombre_bd = 'stored_users';

$conexion = mysqli_connect($host, $nombre_usuario, $contrasena_usuario, $nombre_bd);

// Verificar si la conexión fue exitosa
if (!$conexion) {
    die('Error al conectar a la base de datos: ' . mysqli_connect_error());
}

$consulta = "INSERT INTO users (user, email, password) VALUES ('$user', '$email', '$password')";

// Ejecutar la consulta
if (mysqli_query($conexion, $consulta)) {
    echo 'El registro se guardó correctamente.';
} else {
    echo 'Error al guardar el registro: ' . mysqli_error($conexion);
}

mysqli_close($conexion);
?>
