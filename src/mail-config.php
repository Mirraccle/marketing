<?php

return [
    'smtp' => (object) [
        'host' => 'web2.webspace.uz',
        'port' => 25,
        'username' => 'noreply@marketingconcept.uz',
        'password' => 'w3xw3x'
    ],

    'send_to' => (object) [
        'marketing2concept@gmail.com',
        'info@marketingconcept.uz' => 'MarketingConcept'
    ],

    'subject' => 'У вас новое сообщение',

    'from' => (object) [
        'noreply@marketingconcept.uz' => 'MarketingConcept'
    ],

    'body' => "
        Имя пользователя: {name}
        Номер телефона: {number}
    "
];
