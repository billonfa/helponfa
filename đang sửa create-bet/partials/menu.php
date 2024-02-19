<div id="layout-wrapper">
    <header id="page-topbar">
        <div class="layout-width">
            <div class="navbar-header">
                <div class="d-flex align-items-center">
                    <div class="dropdown ms-sm-3 header-item topbar-user">
                        <button type="button" class="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="d-flex align-items-center">
                                <img class="rounded-circle header-profile-user" src="../assets/images/avatar_default.png" alt="Header Avatar" />
                                <span class="text-start ms-xl-2">
                                    <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text"><?php echo $email ?></span>
                                    <span class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Customer</span>
                                </span>
                            </span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end">
                            <!-- item-->
                            <h6 class="dropdown-header">Welcome <?php echo $email ?></h6>
                            <a class="dropdown-item" href="../reset_password.php"><i class="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span class="align-middle">Đổi mật khẩu</span></a>
                            <a class="dropdown-item" href="../logout.php"><i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i> <span class="align-middle" data-key="t-logout">Đăng xuất</span></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    <div class="app-menu navbar-menu" style="background: #000033;">
        <!-- LOGO -->
        <div class="navbar-brand-box">
            <!-- Dark Logo-->
            <a href="../" class="logo logo-dark">
                <span class="logo-sm">
                    <img src="../assets/images/logo_onfa.png" alt="" height="60" />
                </span>
                <span class="logo-lg">
                    <img src="../assets/images/logo_onfa.png" alt="" height="60" />
                </span>
            </a>
            <!-- Light Logo-->
            <a href="../" class="logo logo-light">
                <span class="logo-sm">
                    <img src="../assets/images/logo_onfa.png" alt="" height="60" />
                </span>
                <span class="logo-lg">
                    <img src="../assets/images/logo_onfa.png" alt="" height="60" />
                </span>
            </a>
            <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                <i class="ri-record-circle-line"></i>
            </button>
        </div>

        <div id="scrollbar">
            <div class="container-fluid">

                <div id="two-column-menu">
                </div>
                <ul class="navbar-nav" id="navbar-nav">
                    <li class="menu-title"><span data-key="t-menu">Menu</span></li>
                    <li class="nav-item">
                        <a class="nav-link menu-link" href="../">
                            <i class="ri-honour-line"></i> <span data-key="t-widgets">Bill chuyển khoản</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-link" href="../create-withdrawal">
                            <i class="ri-honour-line"></i> <span data-key="t-widgets">Bill rút tiền</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-link" href="../create-bet">
                            <i class="ri-honour-line"></i> <span data-key="t-widgets">Bill đơn cược</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link menu-link" href="../create-rotation">
                            <i class="ri-honour-line"></i> <span data-key="t-widgets">Ảnh Vòng Quay</span>
                        </a>
                    </li>
            </div>
            </ul>
        </div>
    </div>
</div>