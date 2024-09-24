<?php

// Set headers for CORS
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

$uploadDir = __DIR__ . '/uploads/fonts/';

if (!is_dir($uploadDir)) {
    if (!mkdir($uploadDir, 0755, true)) {
        echo json_encode(['message' => 'Failed to create uploads directory.']);
        exit;
    }
}

$response = ['message' => []];

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['files'])) {
    foreach ($_FILES['files']['name'] as $key => $name) {
        $tmpName = $_FILES['files']['tmp_name'][$key];
        $error = $_FILES['files']['error'][$key];

        if ($error === UPLOAD_ERR_OK) {
            $destination = $uploadDir . basename($name);
            if (move_uploaded_file($tmpName, $destination)) {
                $response['message'][] = "File uploaded successfully: " . htmlspecialchars($name);
            } else {
                $response['message'][] = "Failed to upload file: " . htmlspecialchars($name);
            }
        } else {
            $response['message'][] = "Error uploading file: " . htmlspecialchars($name) . " - Error Code: " . $error;
        }
    }
} else {
    $response['message'][] = "No files uploaded.";
}
echo json_encode($response);
?>
