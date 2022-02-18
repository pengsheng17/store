<?php
// 配置数据库相关信息
$config = array(
  "host" => "localhost",
  "username" => "root",
  "password" => "",
  "dbname" => "pys"
);
// 链接数据库服务器
mysql_connect($config['host'], $config['username'], $config['password']);

// 选择数据库
mysql_select_db($config['dbname']);

// 设置编码，避免乱码
mysql_query("set charset 'utf8'");
mysql_query("set character set 'utf8'");

?>