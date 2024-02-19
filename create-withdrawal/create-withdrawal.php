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
            $sql2 = "SELECT * FROM withdrawal WHERE id = '$id'";
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
            if($id == 1) {
                $code = 'bv';
            } elseif ($id == 2){
                $code = 'mg';
            }
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

    <link rel="stylesheet" href="<?php echo $code ?>/styles.css">
    <title>ONFA - <?php echo $value['name'] ?></title>
</head>

<body>


    <!-- <div class="ruler"></div>
    <div class="ruler_doc"></div>
    <div class="ruler_doc2"></div> -->
    <!-- Loading -->
    <!-- <div id="loading">
        <div id="loading-center"></div>
    </div>
    <div class="modal" id="modal">
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
                            <h4 class="mb-sm-0"><?php echo $value['name'] ?></h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="container_box" bis_skin_checked="1">
                        <div style="width: 100%">
                            <div class="card">
                                <div class="card-body" id="form_<?php echo $id ?>">
                            
                                </div>
                            </div>

                            <div id="new-bet-ball" style="width:800px">
                                <?php if($id == 1) {?>
                                <img style="width:800px" id="photo_show" src="photo-withdrawal/bongvip_1don.png"/>
                                <!-- <img style="width:800px" src="photo-withdrawal/demo-bet-1.png" alt="Demo bill" /> -->
                                <?php } elseif($id == 2) { ?>
                                    <img style="width:800px" id="photo_show" src="photo-withdrawal/mg_1don.png"/>
                                    <!-- <img style="width:800px" src="photo-withdrawal/demo_mg_1.jpg" alt="Demo bill" /> -->
                                <?php } ?>
                            </div>
                            <div style = "width: 50%; margin-top: 10px">
                                <button class="btn btn-warning" style="width:100%" id="create_bill<?php echo $id ?>">Xuất ảnh đơn rút tiền</button>
                            </div>
                            <div id="convert_photo" bis_skin_checked="1">
                                
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
    <script src="<?php echo $code ?>/index.js"></script>
    

</body>

</html>