<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Configure email settings
$recipientEmail = "recipient-email@example.com"; // Replace with your email
$subject = "New Contact Form Submission";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Directory to upload files
    $uploadDir = 'uploads/';

    // Handle file upload
    $file = $_FILES['photo'];
    $filePath = null;

    if ($file['error'] === UPLOAD_ERR_OK) {
        // Generate a unique name for the file and move it to the upload directory
        $fileName = basename($file['name']);
        $filePath = $uploadDir . uniqid() . '-' . $fileName;

        // Ensure the upload directory exists
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        // Move uploaded file to the directory
        move_uploaded_file($file['tmp_name'], $filePath);
    }

    // Prepare email content
    $emailMessage = "
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Message:</strong> {$message}</p>
    ";

    // Create boundary
    $boundary = md5("random"); // Boundary for multipart email

    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    $headers .= "From: {$email}" . "\r\n";

    // Prepare the email body
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n";
    $body .= $emailMessage . "\r\n";

    // Attach file if uploaded
    if ($filePath) {
        $fileData = file_get_contents($filePath);
        $fileName = basename($filePath);
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: application/octet-stream; name=\"$fileName\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($fileData)) . "\r\n";
    }

    $body .= "--$boundary--";

    // Send email
    if (mail($recipientEmail, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Form submitted successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }

    // Clean up by removing the uploaded file
    if ($filePath && file_exists($filePath)) {
        unlink($filePath);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}
?>
