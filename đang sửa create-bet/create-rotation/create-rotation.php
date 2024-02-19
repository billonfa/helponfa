<?php
session_start();
if ($_SESSION['email']) {
    $email = $_SESSION['email'];
    include_once '../connect.php';
    // Truy vấn để lấy thông tin tài khoản
    $sql = "SELECT * FROM users WHERE email = '$email'";

    $result = $conn->query($sql);
    $data = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($data, $row);
        }
        $data = $data[0];
    }
    if ($data['token'] == $_SESSION['token']) {
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            // Câu truy vấn SQL để lấy dữ liệu
            $sql2 = "SELECT * FROM rotation WHERE id = '$id'";
            // Thực hiện câu truy vấn và lấy kết quả
            $result = $conn->query($sql2);
            // Kiểm tra kết quả trả về
            if ($result->num_rows > 0) {
                $data2 = [];
                // Duyệt qua từng bản ghi và lấy dữ liệu
                while ($row = $result->fetch_assoc()) {
                    $data2[] = $row;
                }
            } else {
                echo "Không có bản ghi nào trong cơ sở dữ liệu";
            }
            // Đóng kết nối tới cơ sở dữ liệu
            $conn->close();
            $value = $data2[0];
        }
    } else {
        session_unset();
        session_destroy();
        header("Location: ../login.php");
        exit;
    }
} else {
    session_unset();
    session_destroy();
    header("Location: ../login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/libs/glightbox/css/glightbox.min.css">
    <script src="../assets/js/layout.js"></script>
    <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="../assets/css/custom.min.css" rel="stylesheet" type="text/css" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="../assets/images/favicon.ico">
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="../assets/css/app.min.css" rel="stylesheet" type="text/css" />
    <script async src="../assets/js/html2canvas.min.js"></script>
    <script async src="../assets/js/FileSaver.min.js"></script>

    <link rel="stylesheet" href="styles.css">
    <title>ONFA - <?php echo $value['name'] ?></title>
</head>

<body>


    <!-- <div class="ruler"></div>
    <div class="ruler_doc"></div>
    <div class="ruler_doc2"></div> -->
    <!-- Loading -->
    <div id="loading">
        <div id="loading-center"></div>
    </div>
    <!-- <div class="modal" id="modal">
            <div class="modal-content">
                <h2>Vui lòng nhấn Ctrl + F5 để refresh trang</h2>
                <p>Đã xảy ra lỗi trong quá trình xử lý. Vui lòng nhấn CTRL + F5</p>
            </div>
        </div>
        <script>
            // Lấy ngày hiện tại
            var currentDate = new Date().toLocaleDateString();

            // Kiểm tra xem người dùng đã đăng nhập lần đầu trong ngày hay chưa
            if (localStorage.getItem('lastLoginDate') === currentDate) {
                document.querySelector('#modal').style.display = 'none'
            } else {
                document.querySelector('#modal').style.display = 'block'
                // Lưu thông tin đăng nhập vào localStorage
                localStorage.setItem('lastLoginDate', currentDate);
            }
        </script> -->
    <?php
    include '../partials/menu.php';
    ?>



    <div class="main-content" style='background:#c7c5c5'>
        <div class="page-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0"><?php echo $value['name'] ?> <i style='color:red'>(Lưu ý: Phải để toàn màn hình để không bị lỗi)</i></h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="container_box" bis_skin_checked="1">
                        <div class="col-md-6 col-lg-6 col-xl-3" style="width:600px">
                            <div class="card" style="margin-top:10px">
                                <div class="card-body p-4">
                                    <div class="p-2 mt-4">
                                        <?php
                                        $cate = ($value['id'] == 1) ? 'bv'
                                            : 'mg'
                                        ?>
                                        <div style="margin-top:10px">
                                            <label class="form-label">Điện thoại<span class="data_auto">(*)</span></label>
                                            <select id="input_cate_phone_<?php echo $cate ?>" class="select">
                                                <option value=1>Iphone</option>
                                                <!-- <option value=2>Adroid</option> -->
                                            </select>
                                        </div>
                                        <div class="cate_iphone_<?php echo $cate ?>">
                                            <div>
                                                <label class="form-label">Đồng hồ <span class="data_auto">(*)</span></label>
                                                <input type="text" class="form-control" id="input_clock_ip" value="<?php echo date('H:i') ?>">
                                            </div>
                                            <div>
                                                <label class="form-label">Phần trăm pin <span class="data_auto">(*)</span></label>
                                                <input type="number" class="form-control" id="input_battery_level_ip" value="<?php echo rand(15, 95) ?>" style="background-color: rgb(196, 205, 209);">
                                            </div>
                                            <div>
                                                <label class="form-label">Số vạch sóng điện thoại <span class="data_auto">(*)</span></label>
                                                <select id="input_sim_waves_ip" class="select">
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="2">2</option>
                                                    <option value="1">1</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label class="form-label">Sóng wifi <span class="data_auto">(*)</span></label>
                                                <select id="input_wifi_ip" class="select">
                                                    <option value="3">Wifi</option>
                                                    <option value="1">LTE</option>
                                                    <option value="2">4G</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="p-2">
                                        <label class="form-label">Số tiền <span class="data_auto">(*)</span></label>
                                        <select id="input_price_<?php echo $cate ?>" class="select">
                                            <option value=1000>1.000.000</option>
                                            <option value=2000>2.000.000</option>
                                            <option value=5000>5.000.000</option>
                                            <option value=400>400.000</option>
                                            <option value=500>500.000</option>
                                        </select>
                                    </div>
                                    <div class="mt-4">
                                        <button class="btn btn-success w-100" id="create_ip">Tạo ảnh vòng quay mới</button>
                                    </div>
                                    <div style="color:red; text-align:center">
                                        <i>Những mục đánh dấu (*) là dữ liệu tạo tự động, có thể chỉnh sửa nếu cần thiết</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="create-image-container" id="new_rotation">
                                <div class="cate_iphone_<?php echo $cate ?>">
                                    <?php $name_photo = ($id == 1) ? 'bongvip' : 'mg';
                                    ?>
                                    <img id="photo_export" class="photo_style" src="photo-rotation/iphone/<?php echo $name_photo; ?>_1m.jpg" />
                                    <?php $rand_icon = rand(1, 3); ?>
                                    <div class="cate_iphone_bv">
                                        <div id="output_clock_ip" class="time-bet1">20:40</div>
                                        <span <?php echo ($rand_icon == 3) ? "style=display:none" : '' ?> id="custom-icon_ip" class="custom-icon2"><img style="width:100%" src='../photo/<?php echo ($rand_icon == 1) ? 'location_white.png' : 'clock_white.png' ?>' /></span>
                                        <div id="output_signal_invi_ip" class="signal">
                                            <div class="bar background_invi"></div>
                                            <div class="bar background_invi"></div>
                                            <div class="bar background_invi"></div>
                                            <div class="bar background_invi"></div>
                                        </div>
                                        <div id="output_signal_ip" class="signal">
                                            <div class="bar background_white"></div>
                                            <div class="bar background_white"></div>
                                            <div class="bar background_white"></div>
                                            <div class="bar background_white"></div>
                                        </div>
                                        <div id="output_wifi_ip" class="wifi">
                                            <img class="img_wifi" src="../photo/icon_wifi_white.jpg" />
                                        </div>
                                        <div id="output_battery_level_ip" class="background_white battery-level"></div>
                                    </div>
                                </div>
                                
                            </div>
                            <button class="button_to_img_acb btn btn-warning w-100" style="margin-top:10px" id="create_to_img">Xuất ảnh vòng quay</button>
                        </div>
                        <div class="box" style="display:none">
                            <div class="">
                                <img id="photo_export" class="photo_style" src="photo-rotation/iphone/iphone_demo.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="container-fluid">
                <div class="row">

                </div>
            </div>
        </footer>
    </div>
    <button onclick="topFunction()" class="btn btn-danger btn-icon" id="back-to-top">
        <i class="ri-arrow-up-line"></i>
    </button>

    <!-- JAVASCRIPT -->
    <script src="../assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../assets/libs/simplebar/simplebar.min.js"></script>
    <script src="../assets/libs/node-waves/waves.min.js"></script>
    <script src="../assets/libs/feather-icons/feather.min.js"></script>
    <script src="../assets/js/pages/plugins/lord-icon-2.1.0.js"></script>
    <script src="../assets/js/plugins.js"></script>
    <script src="../assets/libs/glightbox/js/glightbox.min.js"></script>
    <script src="../assets/libs/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="../assets/js/pages/gallery.init.js"></script>
    <script src="index.js"></script>

</body>









</html>