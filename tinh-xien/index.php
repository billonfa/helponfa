<?php
// header("Location: create-withdrawal");
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
        include_once '../connect.php';
        $sql = "SELECT * FROM bank";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        } else {
            echo "Không có bản ghi nào trong cơ sở dữ liệu";
        }
        $conn->close();
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
<!doctype html>
<html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg" data-sidebar-image="none" data-preloader="disable">

<head>

    <meta charset="utf-8" />
    <title>ONFA | Ghép hình vào khung điện thoại</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../assets/images/favicon.ico">

    <!-- glightbox css -->
    <link rel="stylesheet" href="../assets/libs/glightbox/css/glightbox.min.css">

    <!-- Layout config Js -->
    <script src="../assets/js/layout.js"></script>
    <!-- Bootstrap Css -->
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- Icons Css -->
    <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="../assets/css/app.min.css" rel="stylesheet" type="text/css" />
    <!-- custom Css-->
    <link href="../assets/css/custom.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <!-- Loading -->

    <div class="spinner" id="loading">
        <div class="blob blob-0"></div>
    </div>
    <?php
        include '../partials/menu.php';
    ?>

    <div class="main-content" style="background: #c7c5c5;">
        <div class="page-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0">Tính tiền xiên</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="container_box" bis_skin_checked="1">
                        <div style="width: 100%;">
                            <div class="card">
                                <div class="card-body" id="form"></div>
                                <div class="div_button">
                                    <button class="btn btn-success w-100" id="tinh_tien">Tính tiền xiên</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="container-fluid">
                <div class="row"></div>
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
    <script async src="../assets/js/html2canvas.min.js"></script>
    <script src="app.js"></script>
    <script>
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.querySelector('#loading').style.display = 'none'
            }, 500);

            const links = document.querySelectorAll('a');
            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener('click', function(event) {
                    document.querySelector('#loading').style.display = 'flex'
                    setTimeout(function() {
                        document.querySelector('#loading').style.display = 'none'
                    }, 500);
                });
            }
        })
    </script>
</body>

</html>