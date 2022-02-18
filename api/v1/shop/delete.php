<?php
include('../config.php');
$id=$_GET['id'];
$sql = "delete from shop where id=$id";
$res = mysql_query($sql);
if ($res) {
    echo json_encode(array(
      "code" => 200,
      "body" => array(
        "msg" => "删除商品成功，你好棒棒"
      )
    ));
  } else {
    echo json_encode(array(
      "code" => 201,
      "body" => array(
        "msg" => "网络错误，别试了"
      )
    ));
  }
?>