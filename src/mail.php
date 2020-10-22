<?php

require 'vendor/autoload.php';
$config = (object) require 'mail-config.php';


class CurlyVariables {

    private static $_matchable = array();
    private static $_caseInsensitive = true;

    private static function var_match($matches)
    {
        $match = $matches[1];

        if (self::$_caseInsensitive) {
            $match = strtolower($match);
        }

        if (isset(self::$_matchable[$match]) && !is_array(self::$_matchable[$match])) {
            return self::$_matchable[$match];
        }

        return '';
    }

    public static function Replace($needles, $haystack, $caseInsensitive = true) {
        if (is_array($needles)) {
            self::$_matchable = $needles;
        }

        if ($caseInsensitive) {
            self::$_caseInsensitive = true;
            self::$_matchable = array_change_key_case(self::$_matchable);
        }
        else {
            self::$_caseInsensitive = false;
        }

        $out = preg_replace_callback("/{(\w+)}/", array(__CLASS__, 'var_match'), $haystack);

        self::$_matchable = array();

        return $out;
    }
}



// Create the Transport
$transport = (new Swift_SmtpTransport($config->smtp->host, $config->smtp->port))
  ->setUsername($config->smtp->username)
  ->setPassword($config->smtp->password)
;

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Create a message
$message = (new Swift_Message($config->subject))
  ->setFrom($config->from)
  ->setTo($config->send_to)
  ->setBody(CurlyVariables::Replace($_POST, $config->body, true))
  ;

// Send the message
$result = $mailer->send($message);


?>