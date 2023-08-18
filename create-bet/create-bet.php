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
            include_once '../connect.php';
            // Câu truy vấn SQL để lấy dữ liệu
            $sql2 = "SELECT * FROM bet WHERE id = '$id'";
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
    <?php if ($value['id'] == 1) { ?>
        <link rel="stylesheet" href="styles-ball.css">
    <?php } else { ?>
        <link rel="stylesheet" href="styles.css">
    <?php } ?>
    <title>ONFA - <?php echo $value['name'] ?></title>
</head>

<body>


    <!-- <div class="ruler"></div>
    <div class="ruler_doc"></div>
    <div class="ruler_doc2"></div> -->
    <!-- Loading -->
    <div class="overlay" id="loading">
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
                            <h4 class="mb-sm-0"> <?php echo $value['name'];
                                if ($value['id'] == 1) echo "<i style='color:red'>(Lưu ý: Phải để toàn màn hình để không bị lỗi)</i>";
                                ?>
                            </h4>
                        </div>
                    </div>
                </div>
                <?php
                $photos = json_decode($value['photo']);
                switch ($id) {
                        //------------------------- Dữ liệu đơn cược Bóng -------------------------
                    case 1: { ?>
                            <div class="card">
                                <div class="card-body">
                                    <div class="p-2 row" id="infomation">

                                    </div>
                                </div>
                            </div>

                            <div id="new-bet-ball" style="width: 591px">
                                <img id="photo_show" src="photo-bet/photo_1.jpg" style="position: relative" />
                            </div>

                            <div>
                                <button id="button-to-img" class="btn btn-warning" style="width:591px; margin-top: 10px">Xuất ảnh cược bóng</button>
                            </div>
                        <?php break;
                        } ?>
                        <!-- ------------------------- Dữ liệu đơn casino ------------------------- -->
                        <?php
                    case 2: {
                            $rand_icon = rand(1, 3); ?>
                            <div class="row">
                                <div class="container_box" bis_skin_checked="1">
                                    <div class="col-md-6 col-lg-6 col-xl-3" style='width:500px'>
                                        <div class="card" style="margin-top:10px">
                                            <div class="card-body p-4" style="margin:0; padding:0 !important">
                                                <div class="p-2 mt-4">
                                                    <div>
                                                        <label class="form-label">Đồng hồ <span class="data_auto">(*)</span></label>
                                                        <input type="text" class="form-control" id="input_clock" value="<?php echo date('H:i') ?>">
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Số vạch sóng điện thoại <span class="data_auto">(*)</span></label>
                                                        <select id="input_sim_waves" class="select">
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="2">2</option>
                                                            <option value="1">1</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Sim điện thoại<span class="data_auto">(*)</span></label>
                                                        <select id="total_sim" class="select">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                        </select>
                                                    </div>
                                                    <div style="margin-top:10px">
                                                        <label class="form-label">Sóng wifi <span class="data_auto">(*)</span></label>
                                                        <select id="input_wifi" class="select">
                                                            <option value="3">Wifi</option>
                                                            <option value="1">LTE</option>
                                                            <option value="2">4G</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Phần trăm pin <span class="data_auto">(*)</span></label>
                                                        <input type="number" class="form-control" id="input_battery_level" value="<?php echo rand(15, 95) ?>" style="background-color: rgb(196, 205, 209);">
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Ngày hôm nay<span class="data_auto">(*)</span></label>
                                                        <input type="text" class="form-control" id="input_today" style="background-color: rgb(196, 205, 209);" value="<?php echo date("m/d - m/d") ?>">
                                                    </div>
                                                    <div class="br_game"></div>
                                                    <div>
                                                        <label class="form-label">Tên game 1<span class="data_auto">(*)</span></label>
                                                        <select id="input_name_game_1" class="select">
                                                            <option value="Baccarat">Baccarat</option>
                                                            <option value='Long Hổ'>Long Hổ</option>
                                                            <option value='Con Quay'>Con Quay</option>
                                                            <option value='Xúc Xắc'>Xúc Xắc</option>
                                                            <option value='Đầu Bò'>Đầu Bò</option>
                                                            <option value='Đĩa Màu'>Đĩa Màu</option>
                                                            <option value='Jingmi Baccarat'>Jingmi Baccarat</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Thời gian cược game 1<span class="data_auto">(*)</span></label>
                                                        <input type="text" class="form-control" id="input_detail_date_1" style="background-color: rgb(196, 205, 209);" value="<?php echo date("Y-m-d H:i:s") ?>">
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Số tiền cược game 1<span class="data_auto">(*)</span></label>
                                                        <input type="text" class="form-control" id="input_percent1" style="background-color: rgb(196, 205, 209); width: 15%" value="<?php echo rand(85, 100) . "%" ?>">
                                                        <input type="text" class="form-control" id="input_price_1" style="background-color: rgb(196, 205, 209); width: 40%" value="<?php echo rand(1, 9) * 100 ?>">
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Thắng/ Thua<span class="data_auto">(*)</span></label>
                                                        <select id="input_win_1" class="select" style="color:green">
                                                            <option value=1 style="color:green">Thắng</option>
                                                            <option value=2 style="color:red">Thua</option>
                                                        </select>
                                                    </div>

                                                    <div class="br_game"></div>

                                                    <div>
                                                        <label class="form-label">Tên game 2<span class="data_auto">(*)</span></label>
                                                        <select id="input_name_game_2" class="select">
                                                            <option value="Baccarat">Baccarat</option>
                                                            <option value='Long Hổ'>Long Hổ</option>
                                                            <option value='Con Quay'>Con Quay</option>
                                                            <option value='Xúc Xắc'>Xúc Xắc</option>
                                                            <option value='Đầu Bò'>Đầu Bò</option>
                                                            <option value='Đĩa Màu'>Đĩa Màu</option>
                                                            <option value='Jingmi Baccarat'>Jingmi Baccarat</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Thời gian cược game 2<span class="data_auto">(*)</span></label>
                                                        <input type="text" class="form-control" id="input_detail_date_2" style="background-color: rgb(196, 205, 209);" value="<?php echo date("Y-m-d H:i:s", time() - rand(40, 60)); ?>">
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Số tiền cược game 2<span class="data_auto">(*)</span></label>
                                                        <input type="text" class="form-control" id="input_percent2" style="background-color: rgb(196, 205, 209); width: 15%" value="<?php echo rand(85, 100) . "%" ?>">
                                                        <input type="text" class="form-control" id="input_price_2" style="background-color: rgb(196, 205, 209); width: 40%" value="<?php echo rand(1, 9) * 100 ?>">
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Thắng/ Thua<span class="data_auto">(*)</span></label>
                                                        <select id="input_win_2" class="select" style="color:green">
                                                            <option value=1 style="color:green">Thắng</option>
                                                            <option value=2 style="color:red">Thua</option>
                                                        </select>
                                                    </div>

                                                    <div class="br_game"></div>

                                                    <div>
                                                        <label class="form-label">Tên game 3<span class="data_auto">(*)</span></label>
                                                        <select id="input_name_game_3" class="select">
                                                            <option value="Baccarat">Baccarat</option>
                                                            <option value='Long Hổ'>Long Hổ</option>
                                                            <option value='Con Quay'>Con Quay</option>
                                                            <option value='Xúc Xắc'>Xúc Xắc</option>
                                                            <option value='Đầu Bò'>Đầu Bò</option>
                                                            <option value='Đĩa Màu'>Đĩa Màu</option>
                                                            <option value='Jingmi Baccarat'>Jingmi Baccarat</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Thời gian cược game 3<span class="data_auto">(*)</span></label>
                                                        <input type="text" class="form-control" id="input_detail_date_3" style="background-color: rgb(196, 205, 209);" value="<?php echo date("Y-m-d H:i:s", time() - rand(100, 160)); ?>">
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Số tiền cược game 3<span class="data_auto">(*)</span></label>
                                                        <input type="text" class="form-control" id="input_percent3" style="background-color: rgb(196, 205, 209); width: 15%" value="<?php echo rand(85, 100) . "%" ?>">
                                                        <input type="text" class="form-control" id="input_price_3" style="background-color: rgb(196, 205, 209); width: 40%" value="<?php echo rand(1, 9) * 100 ?>">
                                                    </div>
                                                    <div>
                                                        <label class="form-label">Thắng/ Thua<span class="data_auto">(*)</span></label>
                                                        <select id="input_win_3" class="select" style="color:green">
                                                            <option value=1 style="color:green">Thắng</option>
                                                            <option value=2 style="color:red">Thua</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="mt-4">
                                                    <button class="btn btn-success w-100" id="create_bill<?php echo ($id) ?>">Tạo hóa đơn mới</button>
                                                </div>
                                                <div style="color:red; text-align:center">
                                                    <i>Những mục đánh dấu (*) là dữ liệu tạo tự động, có thể chỉnh sửa nếu cần thiết</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="box">
                                        <div class="create-image-container" id="new_bill<?php echo $id ?>">
                                            <img class="photo_style" src="photo-bet/<?php echo $value['photo'] ?>" alt="Demo bill" />
                                            <div id="output_clock" class="time-bet1">20:40</div>
                                            <span <?php echo ($rand_icon == 3) ? "style=display:none" : '' ?> id="custom-icon" class="custom-icon2"><img style="width:100%" src='../photo/<?php echo ($rand_icon == 1) ? 'location_black.png' : 'clock_black.png' ?>' /></span>

                                            <div id="output_signal_invi" class="signal">
                                                <div class="bar background_invi"></div>
                                                <div class="bar background_invi"></div>
                                                <div class="bar background_invi"></div>
                                                <div class="bar background_invi"></div>
                                            </div>
                                            <div id="output_signal" class="signal">
                                                <div class="bar background_black"></div>
                                                <div class="bar background_black"></div>
                                                <div class="bar background_black"></div>
                                                <div class="bar background_black"></div>
                                            </div>
                                            <div id="output_signal-1" class="signal-1" style="display:none">
                                                <div class="bar-1 background_black"></div>
                                                <div class="bar-1 background_black"></div>
                                                <div class="bar-1 background_black"></div>
                                                <div class="bar-1 background_black"></div>
                                            </div>
                                            <div id="output_signal2" class="signal2" style="display:none">
                                                <div class="bar2 background_black"></div>
                                                <div class="bar2 background_black"></div>
                                                <div class="bar2 background_black"></div>
                                                <div class="bar2 background_black"></div>
                                            </div>
                                            <div id="output_wifi" class="wifi">
                                                <span><img class="img_wifi" src="../photo/icon_wifi_black.jpg" /></span>
                                            </div>
                                            <div id="output_battery_level" class="background_black battery-level<?php if ($id == 2) echo "-3";
                                                                                                                if ($id == 3) echo '-mg' ?> "></div>

                                            <div id="date-b3" class="date-b3">05/07 - 05/07</div>
                                            <div id="sanh-b3" class="sanh-b3">DG</div>

                                            <div class="g1-b3">
                                                <div id="name_g1-b3" class="name_g1-b3">Baccarat</div>
                                                <div id="time_g1-b3" class="time_g1-b3"><?php echo date("Y-m-d H:i:s") ?></div>
                                                <div id="trade_code_g1-b3"><?php $rand = rand(10000000000, 99999999999);
                                                                            echo $rand; ?></div>
                                                <div class="stdc"><span class="out_price_g1-b3">200</span>.00</div>
                                                <div class="dchl"><span class="out_price_g1-b3">200</span>.00</div>
                                                <div class="price_g1-b3"><span class="out_price_g1-b3">200</span>.00</div>
                                                <div class="total_price_g1-b3"><span id="total_price_g1-b3">400</span><span class="togger">.00</span></div>
                                            </div>
                                            <div class="g2-b3">
                                                <div id="name_g2-b3" class="name_g2-b3">Baccarat</div>
                                                <div id="time_g2-b3" class="time_g2-b3"><?php echo date("Y-m-d H:i:s") ?></div>
                                                <div id="trade_code_g2-b3"><?php echo ($rand - rand(500, 1000)) ?></div>
                                                <div class="stdc-2"><span class="out_price_g2-b3">200</span>.00</div>
                                                <div class="dchl-2"><span class="out_price_g2-b3">200</span>.00</div>
                                                <div class="price_g2-b3"><span class="out_price_g2-b3">200</span>.00</div>
                                                <div class="total_price_g2-b3"><span id="total_price_g2-b3">400</span><span class="togger2">.00</span></div>
                                            </div>
                                            <div class="g3-b3">
                                                <div id="name_g3-b3" class="name_g3-b3">Baccarat</div>
                                                <div id="time_g3-b3" class="time_g3-b3"><?php echo date("Y-m-d H:i:s") ?></div>
                                                <div id="trade_code_g3-b3"><?php echo ($rand - rand(3000, 10000)) ?></div>
                                                <div class="stdc-3"><span class="out_price_g3-b3">200</span>.00</div>
                                                <div class="dchl-3"><span class="out_price_g3-b3">200</span>.00</div>
                                                <div class="price_g3-b3"><span class="out_price_g3-b3">200</span>.00</div>
                                                <div class="total_price_g3-b3"><span id="total_price_g3-b3">400</span><span class="togger3">.00</span></div>
                                            </div>
                                        </div>
                                        <button class="button_to_img_acb btn btn-warning w-100" style="margin-top:10px" id="create_to_img-<?php echo $id ?>">Xuất ảnh đơn cược</button>
                                    </div>
                                </div>
                            </div>
                        <?php break;
                        } ?>
                <?php
                    default:
                        break;
                } ?>
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

    <?php
    if ($value['id'] == 1) { ?>
        <script src="bet-ball.js"></script>
    <?php } else { ?>
        <script src="index.js"></script>
    <?php }
    ?>
</body>









</html>