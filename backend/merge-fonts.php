<?php

header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST"); 
header("Access-Control-Allow-Headers: Content-Type"); 


$data = file_get_contents('php://input');

$json = json_decode($data, true);


if (isset($json['fontFiles'])) {
    $fontFiles = $json['fontFiles'];
    $fontFilesString = implode(" ", $fontFiles);
   
    $output = [];
    $returnVar = 0;
    exec("python3 merge_fonts.py $fontFilesString", $output, $returnVar);

    if ($returnVar === 0) {
        echo json_encode([
            'success' => true,
            'output' => $output
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Error executing Python script.'
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid input.'
    ]);
}
?>
