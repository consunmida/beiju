<?php 
$name = $_POST['name']?:'';
$email = $_POST['email']?:'';
$tel = $_POST['tel']?:'';
$con = $_POST['con']?:'';
// 拼接数据
$str = "姓名:{$name}；邮件:{$email}；手机号:{$tel}；需求说明:{$con}";
$key = "bju!pro2019";

function encryptDecrypt($key, $str, $decrypt=0){   
	//加密
    if(!$decrypt){   
        $data = openssl_encrypt($str, 'AES-128-ECB', $key, OPENSSL_RAW_DATA);
        $decrypted = base64_encode($data);
        return $decrypted;
    //解密   
    }else{   
        $encrypted = openssl_decrypt(base64_decode($str), 'AES-128-ECB', $key, OPENSSL_RAW_DATA); 
        return $encrypted;   
    }   
}
$return = '';
if ($tel || $name) {
	$str = encryptDecrypt($key,$str);
	$str_final = date('Y-m-d H:i:s',time()).' : '.$str;
	$return = file_put_contents("userData.txt", $str_final.PHP_EOL,FILE_APPEND);
}
if ($return) {
	echo 1;
}else{
	echo 0;
}
 ?>