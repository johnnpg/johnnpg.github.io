<?php
$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$email = 'Desde johnnperalta.com';
$mensaje = $_POST['mensaje'];
$para = 'contacto@johnnperalta.com';
$titulo = $_POST['asunto'];
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n De: $email\n Asunto: $asunto\n Mensaje:\n $mensaje";
  
if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Mensaje enviado exitosamente, muchas gracias!!!');
window.location.href = 'http://WWW.JOHNNPERALTA.COM';
</script>";
} else {
echo 'Falló el envio del mensaje, intente nuevamente...';
}
}
?>
