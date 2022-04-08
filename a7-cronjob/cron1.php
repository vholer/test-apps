<?php

$host = gethostname();
echo "DEBUG: Job started on ${host}\n";

$fp = fopen('index.html', 'a');
fwrite($fp, date('Y-m-d H:i:s') . " on ${host}\n");
fclose($fp);

echo "DEBUG: Job finished on ${host}\n";
