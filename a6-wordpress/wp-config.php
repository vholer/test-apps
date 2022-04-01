<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

define('DB_NAME',      getenv('MYSQL_DATABASE')      ?: 'your-local-db-name');
define('DB_USER',      getenv('MYSQL_USER')          ?: 'your-local-db-user');
define('DB_PASSWORD',  getenv('MYSQL_PASSWORD')      ?: 'your-local-db-password');
define('DB_HOST',      getenv('MYSQL_HOST')          ?: 'localhost');
define('DB_CHARSET',  'utf8');
define('DB_COLLATE',  '');

/* we don't care now ... */
define('AUTH_KEY',         'D0^v7?Qss0=V:T!<ywi0x!M&$EZA7bt&!6gd*&PSiq&-!QAS_nEX~iNJ>IxLJyN5');
define('SECURE_AUTH_KEY',  '6fHZ.px*_4dY+WO|fD6KDMpV.M7UR7u+UQa#-g{9luA$;z~ijPfIh^V1v)>LK+-]');
define('LOGGED_IN_KEY',    'Bzj-,9 Laxutb$a.#!6LmvGOs3#xB[$|G1k tth*:{CVl+v_#(m6~g1Qn:#[kHp%');
define('NONCE_KEY',        'IrDH}l-TO`+z1FD+iyn7#!nB+;8{$.t^uodh+ih;bY*i:@?,[]#K$f$5n~i*m;Gc');
define('AUTH_SALT',        'HoQNlg>]QMtf(oPJZjpF]As^eS<+|Qg!k?tKY%bnEcVYloS%WC3$Z|tNo2Ee&kq!');
define('SECURE_AUTH_SALT', 'UB ^@oOwGwkeWq-Cgo0_zcaoe|t`MG:F@UcU2R,qHrjYBs@oG?x-v!dTdCnkrsQl');
define('LOGGED_IN_SALT',   '_P;b7>22*ZCM+w1ltsli4VXN]|XM}+bwO`LOPy$@SOL@(HC__WdizNN;vvn!]Z@N');
define('NONCE_SALT',       '}uztYM*kAA[v?b=cL#Hi_Y@v=JBwinY_`}|o}%[)DM~`XQCEn]HB<c|Bo;2.Y!DT');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
