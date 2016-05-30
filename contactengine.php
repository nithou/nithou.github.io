<?php

$EmailFrom = "Nithou - Simon Vandereecken";
$EmailTo = "simon@nithou.net";
$Subject = "Message sur le site";
$Name = Trim(stripslashes($_POST['Name']));
$Email = Trim(stripslashes($_POST['Email']));
$Message = Trim(stripslashes($_POST['Message']));

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=http://www.vandereecken.me/success.html\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=http://www.vandereecken.me/success.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=http://www.vandereecken.me/\">";
}
?>