<?php
// Test email functionality
$to = "nuwanm.info@gmail.com";  // Replace with your email
$subject = "Test Email";
$message = "This is a test email sent from PHP's mail function.";
$headers = "From: sender@example.com";

if (mail($to, $subject, $message, $headers)) {
    echo "Mail sent successfully!";
} else {
    echo "Mail sending failed.";
}
?>
