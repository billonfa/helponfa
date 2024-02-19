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
        include_once '../connect.php';
        $sql = "SELECT * FROM withdrawal";
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
    <title>ONFA | Tạo Bill rút tiền</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
    <!-- App favicon -->
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
    <style>
        #loading {
            background-color: #f9fbfe;
            height: 100%;
            width: 100%;
            position: fixed;
            margin-top: 0;
            top: 0;
            left: 0;
            bottom: 0;
            overflow: hidden !important;
            opacity: 0.8;
            right: 0;
            z-index: 999999;
        }

        #loading-center {
            background: url("photo-withdrawal/gif_loaderJ12.png") no-repeat scroll 50%;
            background-size: 100%;
            width: 100%;
            height: 100%;
            position: relative;
        }
    </style>
</head>

<body>
    <!-- Loading -->
    <div id="loading">
        <div id="loading-center"></div>
    </div>
    <?php
        include '../partials/menu.php';
    ?>

    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">

                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0">Tạo Bill Rút tiền</h4>
                        </div>
                    </div>
                </div>
                <!-- end page title -->

                <div class="row">
                    <?php foreach ($data as $key_data => $value) {
                        if ($value['id'] == 4 || $value['id'] == 9 || $value['id'] == 12) continue; ?>

                        <div class="col-md-3 col-sm-6" bis_skin_checked="1">
                            <a href="create-withdrawal.php?id=<?php echo $value['id'] ?>">
                                <div style="background:#000033" class="card text-center" bis_skin_checked="1">
                                    <div class="card-body" bis_skin_checked="1">
                                        <div class="p-50" style="margin-bottom: 1rem">
                                            <img src="../assets/images/logo_onfa.png" alt="" height="50">
                                        </div>
                                        <h4 style="color:white" class="fw-bolder"><?php echo $value['name'] ?></h4>
                                    </div>
                                </div>
                            </a>
                        </div>

                    <?php } ?>
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
    <!-- <script src="../assets/js/app.js"></script> -->
    <script>
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.querySelector('#loading').style.display = 'none'
            }, 1000);
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