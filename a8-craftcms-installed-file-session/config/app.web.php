<?php

return [
    'components' => [
            'session' => function() {
                $config = \craft\helpers\App::sessionConfig();
                $config['class'] = \yii\web\Session::class;

                $session =  Craft::createObject($config);
                // store session in storage/runtime/sessions
                $session->setSavePath(\Craft::$app->getPath()->getSessionPath());
                return $session;
            }
    ]
];
