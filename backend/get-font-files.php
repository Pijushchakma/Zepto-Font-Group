<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$uploadDir = __DIR__ . '/uploads/fonts/';

$filesArray = [];

if (is_dir($uploadDir)) {
    $files = scandir($uploadDir);

    foreach ($files as $file) {
        if ($file !== '.' && $file !== '..') {
            $filesArray[] = [
                'name' => $file,
                'url' => 'http://192.168.43.225:8080/' . urlencode($file)  // url for static file
            ];
        }
    }
}

echo json_encode($filesArray);
?>
