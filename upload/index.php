<?php
$file = $_FILES['files'];

$filePath   = '../uploads/' . basename($file['name']);
$fileSizeMB = $file['size'] / 1024 / 1024;

function prettylog($text) {
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo "<p style=\"font-family: sans-serif;\">{$text}</p>";
}

if (isset($file) && !is_null($file)) {
    // if file size is bigger than 128MB:
    if ($file['size'] > 128217728) {
        echo "Sorry, your file is too large. Max. file size: 128MiB. Your file size: {$fileSizeMB}MB";
        exit;
    }

    // using legacy funtions for old PHP versions
    if(strpos($filePath, '.php')) prettylog('PHP files are not allowed to upload!');
    if(strpos($filePath, '.html')) prettylog('HTML files are not allowed to upload!');

    if (file_exists($filePath)) {
        header('Location: /?message=fileExists');
    } else {
        move_uploaded_file($file['tmp_name'], $filePath);
        prettylog("Uploaded {$file['name']}! Download link: <a href=\"/uploads/{$file['name']}\" download=\"\">click here</a>");
        exit;
    }
} else prettylog('Please include `files` request param in POST query. One file per request.');
