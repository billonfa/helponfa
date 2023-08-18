<?php
    include 'connect.php';
    $botToken = '6041088278:AAFaY9ZUGBJdV-YED0ptcX2jyleteUaDHS8';
    $groupId = '-1001827490491'; // ID Group phản hồi

    // Câu truy vấn SQL
    $sql = "SELECT nhan_vien, COUNT(*) as count
    FROM customers
    WHERE telegram REGEXP '[^0-9]' AND DATE(ngay_tim_ve) = CURDATE() - INTERVAL 1 DAY
    GROUP BY nhan_vien";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $text = "Danh sách những người chưa cập nhât UID của khách ngày hôm qua: \n";
        // In kết quả
        while ($row = $result->fetch_assoc()) {
            $id_nv = $row['nhan_vien'];
            $soluong = $row['count'];
            $sql_name_nv = "SELECT username FROM users_bot WHERE id = '$id_nv'";
            $result_nv = $conn->query($sql_name_nv);

            if ($result_nv->num_rows > 0) {
                // Lấy dữ liệu đầu tiên tìm được
                $row_nv = $result_nv->fetch_assoc();
                $username = $row_nv['username'];
            } else {
                echo "Không có kết quả.";
            }
            $text .= "$username: $soluong khách\n";
        }
        sendMessage($botToken, $groupId, $text);
    }

    // Đóng kết nối
    $conn->close();

    function sendMessage($token, $chatId, $response, $replyToMessageId = null) {
        $apiUrl = "https://api.telegram.org/bot$token/sendMessage";
    
        // Tạo một mảng chứa thông tin tin nhắn cần gửi
        $data = array(
            'chat_id' => $chatId,
            'text' => $response,
            'reply_to_message_id' => $replyToMessageId
        );
    
        // Sử dụng cURL để gửi tin nhắn thông qua API của Telegram
        $options = array(
            'http' => array(
                'method'  => 'POST',
                'header'  => 'Content-type: application/x-www-form-urlencoded',
                'content' => http_build_query($data)
            )
        );
        $context  = stream_context_create($options);
        $result = file_get_contents($apiUrl, false, $context);
    
        // Kiểm tra kết quả gửi tin nhắn
        if ($result === false) {
            $error = 'Lỗi không xác định';
            $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatId . "&text=".urlencode($error);
            file_get_contents($url);
        }
    }
?>