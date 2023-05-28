<?php
$file = $_FILES['files'];

$filePath   = '../uploads/' . basename($file['name']);
$fileSizeMB = $file['size'] / 1024 / 1024;

if (isset($file) && !is_null($file)) {
    // if file size is bigger than 128MB:
    if ($file['size'] > 128217728) {
        echo "Sorry, your file is too large. Max. file size: 128MiB. Your file size: {$fileSizeMB}MB";
        exit;
    }

    if (file_exists($filePath)) {
        header('Location: /?message=fileExists');
    } else {
        move_uploaded_file($file['tmp_name'], $filePath);
        header('Location: /?message=uploaded');
        exit;
    }
}