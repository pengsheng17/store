<?php
include('../config.php');

$sql = "select * from shop";

// $res时一个资源类型
$res = mysql_query($sql);

$list = array();//$list里面是对象
// 通过循环去资源里抓取数据，每取一行，都是一个$row对象，取完了循环也就结束了
while ($row = mysql_fetch_assoc($res)) {
  array_push($list, $row);
}

// 按照接口文档返回对应的数据格式
echo json_encode(array(
  "code" => 200,
  "body" => array(
    "list" => $list
  )
));

?>