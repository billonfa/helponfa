window.addEventListener("load", function () {
    // Tạo một đối tượng Date đại diện cho thời gian hiện tại
    var currentTime = new Date();
    // Lấy giờ hiện tại (từ 0 đến 23)
    var currentHour = currentTime.getHours();
    // Lấy phút hiện tại (từ 0 đến 59)
    var currentMinute = currentTime.getMinutes();
    // Để đảm bảo hiển thị số 2 chữ số (ví dụ: 09 thay vì 9), bạn có thể sử dụng hàm padStart:
    var formattedHour = currentHour.toString().padStart(2, "0");
    var formattedMinute = currentMinute.toString().padStart(2, "0");
    var hour_minute = formattedHour + ":" + formattedMinute;

    document.querySelector("#loading").style.display = "flex";
    setTimeout(function () {
        document.querySelector("#loading").style.display = "none";
    }, 1000);

    const inputElements = document.querySelectorAll("input"); // Tìm tất cả các thẻ input trên trang web
    inputElements.forEach((inputElement) => {
        // Lặp qua từng thẻ input
        if (inputElement.value !== "") {
            // Kiểm tra giá trị của từng ô input, nếu nó khác rỗng thì đổi màu nền thành màu xanh
            inputElement.style.backgroundColor = "#c4cdd1";
        }
    });

    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        if (
            buttons[i].id === "page-header-user-dropdown" ||
            buttons[i].id === "back-to-top"
        ) {
            continue;
        }
        buttons[i].addEventListener("click", function (event) {
            event.preventDefault(); // Chặn sự kiện mặc định
            document.querySelector("#loading").style.display = "flex";
            setTimeout(function () {
                document.querySelector("#loading").style.display = "none";
            }, 500);
        });
    }

    const links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (event) {
            document.querySelector("#loading").style.display = "flex";
            setTimeout(function () {
                document.querySelector("#loading").style.display = "none";
            }, 500);
        });
    }

    // Đưa dữ liệu cho đơn tạo bóng
    const infomation = this.document.querySelector("#infomation");
    const card_body = this.document.querySelector(".card-body");

    const data_auto = this.document.createElement("span");
    data_auto.classList.add("data_auto");
    data_auto.textContent = " (*)";

    const duoi_tien = this.document.createElement('span')
    duoi_tien.textContent = '.00'
    duoi_tien.classList.add('duoi-tien')

    // Ô thứ nhất
    const div_1 = this.document.createElement("div");
    div_1.classList.add("col-md-6");
    infomation.appendChild(div_1);

    const div_1_h4 = this.document.createElement("h4");
    div_1_h4.textContent = "Điều chỉnh điện thoại";
    div_1.appendChild(div_1_h4);

    // Đồng hồ
    const div_clock = this.document.createElement("div");
    div_1.appendChild(div_clock);
    const label_clock = this.document.createElement("label");
    label_clock.classList.add("form-label");
    label_clock.textContent = "Đồng Hồ";
    label_clock.appendChild(data_auto.cloneNode(true));
    const input_clock = this.document.createElement("input");
    input_clock.type = "text";
    input_clock.classList.add("form-control");
    input_clock.value = hour_minute;
    div_clock.append(label_clock, input_clock);

    //Vạch sóng điện thoại
    const div_signal = this.document.createElement("div");
    div_1.appendChild(div_signal);
    const label_signal = this.document.createElement("label");
    label_signal.classList.add("form-label");
    label_signal.textContent = "Số vạch sóng điện thoại";
    label_signal.appendChild(data_auto.cloneNode(true));
    const select_signal = this.document.createElement("select");
    select_signal.classList.add("select");
    const option_signal_1 = this.document.createElement("option");
    option_signal_1.textContent = 1;
    option_signal_1.value = 1;
    const option_signal_2 = this.document.createElement("option");
    option_signal_2.textContent = 2;
    option_signal_2.value = 2;
    const option_signal_3 = this.document.createElement("option");
    option_signal_3.textContent = 3;
    option_signal_3.value = 3;
    const option_signal_4 = this.document.createElement("option");
    option_signal_4.textContent = 4;
    option_signal_4.value = 4;
    select_signal.append(
        option_signal_3,
        option_signal_4,
        option_signal_1,
        option_signal_2
    );
    div_signal.append(label_signal, select_signal);

    // Loại wifi
    const div_wifi = this.document.createElement("div");
    div_1.appendChild(div_wifi);
    const label_wifi = this.document.createElement("label");
    label_wifi.classList.add("form-label");
    label_wifi.textContent = "Sóng Wifi";
    label_wifi.appendChild(data_auto.cloneNode(true));
    const select_wifi = this.document.createElement("select");
    select_wifi.classList.add("select");
    const option_wifi_1 = this.document.createElement("option");
    option_wifi_1.textContent = "Wifi";
    option_wifi_1.value = 1;
    const option_wifi_2 = this.document.createElement("option");
    option_wifi_2.textContent = "LTE";
    option_wifi_2.value = 2;
    const option_wifi_3 = this.document.createElement("option");
    option_wifi_3.textContent = "4G";
    option_wifi_3.value = 3;
    select_wifi.append(option_wifi_1, option_wifi_2, option_wifi_3);
    div_wifi.append(label_wifi, select_wifi);

    // Phần trăm pin
    const div_battery = this.document.createElement("div");
    div_1.appendChild(div_battery);
    const label_battery = this.document.createElement("label");
    label_battery.classList.add("form-label");
    label_battery.textContent = "Phần trăm pin";
    label_battery.appendChild(data_auto.cloneNode(true));
    const input_battery = this.document.createElement("input");
    input_battery.classList.add("form-control");
    input_battery.type = "text";
    input_battery.value = Math.floor(Math.random() * 85) + 15;
    div_battery.append(label_battery, input_battery);

    // Pin yếu (Vàng)
    const div_option_battery = this.document.createElement("div");
    div_1.appendChild(div_option_battery);
    const label_option_battery = this.document.createElement("label");
    label_option_battery.classList.add("form-label");
    label_option_battery.textContent = "Pin yếu (Vàng)";
    label_option_battery.appendChild(data_auto.cloneNode(true));
    const select_option_battery = this.document.createElement("select");
    select_option_battery.classList.add("select");
    div_option_battery.append(label_option_battery, select_option_battery);
    const option_battery_1 = this.document.createElement("option");
    option_battery_1.textContent = "Không";
    option_battery_1.value = 1;
    const option_battery_2 = this.document.createElement("option");
    option_battery_2.textContent = "Có";
    option_battery_2.value = 2;
    select_option_battery.append(
        option_battery_1,
        option_battery_2,
    );
    
    // Chọn số lượng đơn cược
    const div_quantity = this.document.createElement("div");
    div_1.appendChild(div_quantity);
    const label_quantity = this.document.createElement("label");
    label_quantity.classList.add("form-label");
    label_quantity.textContent = "Số lượng đơn cược";
    label_quantity.appendChild(data_auto.cloneNode(true));
    const select_quantity = this.document.createElement("select");
    select_quantity.classList.add("select");
    div_quantity.append(label_quantity, select_quantity);
    const option_quantity_1 = this.document.createElement("option");
    option_quantity_1.textContent = "1";
    option_quantity_1.value = 1;
    const option_quantity_2 = this.document.createElement("option");
    option_quantity_2.textContent = "2";
    option_quantity_2.value = 2;
    const option_quantity_3 = this.document.createElement("option");
    option_quantity_3.textContent = "3";
    option_quantity_3.value = 3;
    select_quantity.append(
        option_quantity_1,
        option_quantity_2,
        option_quantity_3
    );

    const div_br_ngang = this.document.createElement("div");
    div_br_ngang.classList.add("br_ngang1");
    infomation.appendChild(div_br_ngang);

    // Ô thứ 2
    const div_2 = this.document.createElement("div");
    div_2.classList.add("col-md-6");
    infomation.appendChild(div_2);

    const div_2_h4 = this.document.createElement("h4");
    div_2_h4.textContent = "Thông tin đơn cược thứ 1";
    div_2.appendChild(div_2_h4);

    const div_2_row = this.document.createElement("div");
    div_2_row.classList.add("row");
    div_2.appendChild(div_2_row);

    const div_2_left = this.document.createElement("div");
    div_2_left.classList.add("col-6");
    div_2_row.appendChild(div_2_left);

    const div_2_right = this.document.createElement("div");
    div_2_right.classList.add("col-6");
    div_2_row.appendChild(div_2_right);

    //------------------- INPUT Chi tiết đơn cược -------------------
    // Tên đội thứ nhất
    const div_name_team1 = this.document.createElement("div");
    div_2_left.appendChild(div_name_team1);
    const label_name_team = this.document.createElement("label");
    label_name_team.classList.add("form-label");
    label_name_team.textContent = "Tên 2 đội";
    const input_name_team1 = this.document.createElement("input");
    input_name_team1.classList.add("form-control");
    input_name_team1.placeholder = "Valmiera FC vs. FK Liepaja";
    div_name_team1.append(label_name_team, input_name_team1);

    // Chi tiết kèo
    const div_detail = this.document.createElement("div");
    div_2_right.appendChild(div_detail);
    const label_detail = this.document.createElement("label");
    label_detail.classList.add("form-label");
    label_detail.textContent = "Chi tiết kèo cược";
    const input_detail = this.document.createElement("input");
    input_detail.classList.add("form-control");
    input_detail.placeholder = "Tài 2.5/3";
    div_detail.append(label_detail, input_detail);

    // Tỷ lệ ăn cược
    const div_odds = this.document.createElement("div");
    div_2_left.appendChild(div_odds);
    const label_odds = this.document.createElement("label");
    label_odds.classList.add("form-label");
    label_odds.textContent = "Tỷ lệ ăn cược";
    const input_odds = this.document.createElement("input");
    input_odds.classList.add("form-control");
    input_odds.type = "text";
    input_odds.value = "0.87";
    div_odds.append(label_odds, input_odds);

    // Nhập số tiền cược
    const div_tiencuoc = this.document.createElement("div");
    div_2_left.appendChild(div_tiencuoc);
    const label_tiencuoc = this.document.createElement("label");
    label_tiencuoc.classList.add("form-label");
    label_tiencuoc.textContent = "Số tiền cược";
    label_tiencuoc.appendChild(data_auto.cloneNode(true));
    const input_tiencuoc = this.document.createElement("input");
    input_tiencuoc.type = "text";
    input_tiencuoc.classList.add("form-control");
    input_tiencuoc.value = (Math.floor(Math.random() * 90) + 10) * 10;
    div_tiencuoc.append(label_tiencuoc, input_tiencuoc);

    // Chọn trước trận/ rung
    const div_rung = this.document.createElement("div");
    div_2_left.appendChild(div_rung);
    const label_rung = this.document.createElement("label");
    label_rung.classList.add("form-label");
    label_rung.textContent = "Trước trận/ Rung";
    label_rung.append(data_auto.cloneNode(true));
    const select_rung = this.document.createElement("select");
    select_rung.classList.add("select");
    const option_rung1 = this.document.createElement("option");
    option_rung1.value = "1";
    option_rung1.textContent = "Kèo trước trận";
    const option_rung2 = this.document.createElement("option");
    option_rung2.value = "2";
    option_rung2.textContent = "Kèo rung";
    select_rung.append(option_rung1, option_rung2);
    div_rung.append(label_rung, select_rung);

    const div_detail_rung = document.createElement("div");
    const label_time_dau = document.createElement('label')
    label_time_dau.classList.add("form-label")
    label_time_dau.textContent = "Bắt đầu trận"
    const input_time_dau = document.createElement('input')
    input_time_dau.type = 'text'
    input_time_dau.classList.add('form-control')
    input_time_dau.placeholder = '05/16 02:00'
    div_detail_rung.append(label_time_dau, input_time_dau)
    div_2_left.appendChild(div_detail_rung);
    const label_detail_rung = document.createElement("label");
    label_detail_rung.classList.add("form-label");
    label_detail_rung.textContent = "Chi tiết trận";
    const input_detail_rung = document.createElement("input");
    input_detail_rung.classList.add("form-control");
    input_detail_rung.placeholder = "1-1 Hiệp 2 76:12";

    select_rung.addEventListener("change", function () {
        if (select_rung.value == 2) {
            div_detail_rung.innerHTML = "";
            div_detail_rung.append(label_detail_rung, input_detail_rung);
        } else {
            div_detail_rung.innerHTML = "";
            div_detail_rung.append(label_time_dau, input_time_dau)
        }
    });

    // Nhập tên giải
    const div_giai = this.document.createElement("div");
    div_2_right.appendChild(div_giai);
    const label_giai = this.document.createElement("label");
    label_giai.classList.add("form-label");
    label_giai.textContent = "Giải đấu";
    const input_giai = this.document.createElement("input");
    input_giai.type = "text";
    input_giai.classList.add("form-control");
    input_giai.placeholder = "Giải Vô Địch Quốc Gia Latvia";
    div_giai.append(label_giai, input_giai);

    // Nhập thời gian cược
    
    const div_timecuoc = this.document.createElement("div");
    div_2_right.appendChild(div_timecuoc);
    const label_timecuoc = this.document.createElement("label");
    label_timecuoc.classList.add("form-label");
    label_timecuoc.textContent = "Thời gian cược";
    const input_timecuoc = this.document.createElement("input");
    input_timecuoc.type = "text";
    input_timecuoc.classList.add("form-control");
    input_timecuoc.value = month_date_hours_minutes();
    div_timecuoc.append(label_timecuoc, input_timecuoc);

    // Chọn kèo tài xỉu/ Hồng Kông
    const div_tx = this.document.createElement("div");
    div_2_right.appendChild(div_tx);
    const label_tx = this.document.createElement("label");
    label_tx.classList.add("form-label");
    label_tx.textContent = "Loại kèo";
    label_tx.appendChild(data_auto.cloneNode(true));
    const select_tx = this.document.createElement("select");
    select_tx.classList.add("select");
    const option_tx1 = this.document.createElement("option");
    option_tx1.value = "1";
    option_tx1.textContent = "Kèo Tài Xỉu";
    const option_tx2 = this.document.createElement("option");
    option_tx2.value = "2";
    option_tx2.textContent = "Kèo cược chấp";
    select_tx.append(option_tx1, option_tx2);
    div_tx.append(label_tx, select_tx);

    // Tỷ lệ ăn cược Châu Âu/ Hồng Kông
    const div_ancuoc = this.document.createElement("div");
    div_2_right.appendChild(div_ancuoc);
    const label_ancuoc = this.document.createElement("label");
    label_ancuoc.classList.add("form-label");
    label_ancuoc.textContent = "Loại thắng cược";
    label_ancuoc.appendChild(data_auto.cloneNode(true));
    const select_ancuoc = this.document.createElement("select");
    select_ancuoc.classList.add("select");
    const option_ancuoc1 = this.document.createElement("option");
    option_ancuoc1.value = "1";
    option_ancuoc1.textContent = "Hồng Kông";
    const option_ancuoc2 = this.document.createElement("option");
    option_ancuoc2.value = "2";
    option_ancuoc2.textContent = "Châu Âu";
    select_ancuoc.append(option_ancuoc1, option_ancuoc2);
    div_ancuoc.append(label_ancuoc, select_ancuoc);

    // ---------------------------- Thêm row cho option số lượng 2 và 3 ----------------------------

    const div_row_2 = this.document.createElement("div");
    div_row_2.classList.add("row", "p-2");
    card_body.appendChild(div_row_2);

    // Ô thứ 3 ----------------------------
    const div_3 = this.document.createElement("div");
    div_3.classList.add("col-md-6");
    // div_row_2.appendChild(div_3)

    const div_3_h4 = this.document.createElement("h4");
    div_3_h4.textContent = "Thông tin đơn cược thứ 2";
    div_3.appendChild(div_3_h4);

    const div_3_row = this.document.createElement("div");
    div_3_row.classList.add("row");
    div_3.appendChild(div_3_row);

    const div_3_left = this.document.createElement("div");
    div_3_left.classList.add("col-6");
    div_3_row.appendChild(div_3_left);

    const div_3_right = this.document.createElement("div");
    div_3_right.classList.add("col-6");
    div_3_row.appendChild(div_3_right);

    //------------------- INPUT Chi tiết đơn cược -------------------
    // Tên đội thứ nhất
    const div_name_team1_d2 = this.document.createElement("div");
    div_3_left.appendChild(div_name_team1_d2);
    const label_name_team_d2 = this.document.createElement("label");
    label_name_team_d2.classList.add("form-label");
    label_name_team_d2.textContent = "Tên 2 đội";
    const input_name_team1_d2 = this.document.createElement("input");
    input_name_team1_d2.classList.add("form-control");
    input_name_team1_d2.placeholder = "Valmiera FC vs. FK Liepaja";
    div_name_team1_d2.append(label_name_team_d2, input_name_team1_d2);

    // Chi tiết kèo
    const div_detail_d2 = this.document.createElement("div");
    div_3_right.appendChild(div_detail_d2);
    const label_detail_d2 = this.document.createElement("label");
    label_detail_d2.classList.add("form-label");
    label_detail_d2.textContent = "Chi tiết kèo cược";
    const input_detail_d2 = this.document.createElement("input");
    input_detail_d2.classList.add("form-control");
    input_detail_d2.placeholder = "Tài 2.5/3";
    div_detail_d2.append(label_detail_d2, input_detail_d2);

    // Tỷ lệ ăn cược
    const div_odds_d2 = this.document.createElement("div");
    div_3_left.appendChild(div_odds_d2);
    const label_odds_d2 = this.document.createElement("label");
    label_odds_d2.classList.add("form-label");
    label_odds_d2.textContent = "Tỷ lệ ăn cược";
    const input_odds_d2 = this.document.createElement("input");
    input_odds_d2.classList.add("form-control");
    input_odds_d2.type = "text";
    input_odds_d2.value = "0.87";
    div_odds_d2.append(label_odds_d2, input_odds_d2);

    // Nhập số tiền cược
    const div_tiencuoc_d2 = this.document.createElement("div");
    div_3_left.appendChild(div_tiencuoc_d2);
    const label_tiencuoc_d2 = this.document.createElement("label");
    label_tiencuoc_d2.classList.add("form-label");
    label_tiencuoc_d2.textContent = "Số tiền cược";
    label_tiencuoc_d2.appendChild(data_auto.cloneNode(true));
    const input_tiencuoc_d2 = this.document.createElement("input");
    input_tiencuoc_d2.type = "text";
    input_tiencuoc_d2.classList.add("form-control");
    input_tiencuoc_d2.value = (Math.floor(Math.random() * 90) + 10) * 10;
    div_tiencuoc_d2.append(label_tiencuoc_d2, input_tiencuoc_d2);

    // Chọn trước trận/ rung đơn 2
    const div_rung_d2 = this.document.createElement("div");
    div_3_left.appendChild(div_rung_d2);
    const label_rung_d2 = this.document.createElement("label");
    label_rung_d2.classList.add("form-label");
    label_rung_d2.textContent = "Trước trận/ Rung";
    label_rung_d2.append(data_auto.cloneNode(true));
    const select_rung_d2 = this.document.createElement("select");
    select_rung_d2.classList.add("select");
    const option_rung1_d2 = this.document.createElement("option");
    option_rung1_d2.value = "1";
    option_rung1_d2.textContent = "Kèo trước trận";
    const option_rung2_d2 = this.document.createElement("option");
    option_rung2_d2.value = "2";
    option_rung2_d2.textContent = "Kèo rung";
    select_rung_d2.append(option_rung1_d2, option_rung2_d2);
    div_rung_d2.append(label_rung_d2, select_rung_d2);

    const div_detail_rung_d2 = document.createElement("div");
    const label_time_dau_d2 = document.createElement('label')
    label_time_dau_d2.classList.add("form-label")
    label_time_dau_d2.textContent = "Bắt đầu trận"
    const input_time_dau_d2 = document.createElement('input')
    input_time_dau_d2.type = 'text'
    input_time_dau_d2.classList.add('form-control')
    input_time_dau_d2.placeholder = '05/16 02:00'
    div_detail_rung_d2.append(label_time_dau_d2, input_time_dau_d2)
    div_3_left.appendChild(div_detail_rung_d2);
    const label_detail_rung_d2 = document.createElement("label");
    label_detail_rung_d2.classList.add("form-label");
    label_detail_rung_d2.textContent = "Chi tiết trận";
    const input_detail_rung_d2 = document.createElement("input");
    input_detail_rung_d2.classList.add("form-control");
    input_detail_rung_d2.placeholder = "1-1 Hiệp 2 76:12";

    select_rung_d2.addEventListener("change", function () {
        if (select_rung_d2.value == 2) {
            div_detail_rung_d2.innerHTML = "";
            div_detail_rung_d2.append(label_detail_rung_d2, input_detail_rung_d2);
        } else {
            div_detail_rung_d2.innerHTML = "";
            div_detail_rung_d2.append(label_time_dau_d2, input_time_dau_d2)
        }
    });

    // Nhập tên giải
    const div_giai_d2 = this.document.createElement("div");
    div_3_right.appendChild(div_giai_d2);
    const label_giai_d2 = this.document.createElement("label");
    label_giai_d2.classList.add("form-label");
    label_giai_d2.textContent = "Giải đấu";
    const input_giai_d2 = this.document.createElement("input");
    input_giai_d2.type = "text";
    input_giai_d2.classList.add("form-control");
    input_giai_d2.placeholder = "Giải Vô Địch Quốc Gia Latvia";
    div_giai_d2.append(label_giai_d2, input_giai_d2);

    // Nhập thời gian cược
    const div_timecuoc_d2 = this.document.createElement("div");
    div_3_right.appendChild(div_timecuoc_d2);
    const label_timecuoc_d2 = this.document.createElement("label");
    label_timecuoc_d2.classList.add("form-label");
    label_timecuoc_d2.textContent = "Thời gian cược";
    const input_timecuoc_d2 = this.document.createElement("input");
    input_timecuoc_d2.type = "text";
    input_timecuoc_d2.classList.add("form-control");
    input_timecuoc_d2.value = month_date_hours_minutes();
    div_timecuoc_d2.append(label_timecuoc_d2, input_timecuoc_d2);

    // Chọn kèo tài xỉu/ Hồng Kông
    const div_tx_d2 = this.document.createElement("div");
    div_3_right.appendChild(div_tx_d2);
    const label_tx_d2 = this.document.createElement("label");
    label_tx_d2.classList.add("form-label");
    label_tx_d2.textContent = "Loại kèo";
    label_tx_d2.appendChild(data_auto.cloneNode(true));
    const select_tx_d2 = this.document.createElement("select");
    select_tx_d2.classList.add("select");
    const option_tx1_d2 = this.document.createElement("option");
    option_tx1_d2.value = "1";
    option_tx1_d2.textContent = "Kèo Tài Xỉu";
    const option_tx2_d2 = this.document.createElement("option");
    option_tx2_d2.value = "2";
    option_tx2_d2.textContent = "Kèo cược chấp";
    select_tx_d2.append(option_tx1_d2, option_tx2_d2);
    div_tx_d2.append(label_tx_d2, select_tx_d2);

    // Tỷ lệ ăn cược Châu Âu/ Hồng Kông
    const div_ancuoc_d2 = this.document.createElement("div");
    div_3_right.appendChild(div_ancuoc_d2);
    const label_ancuoc_d2 = this.document.createElement("label");
    label_ancuoc_d2.classList.add("form-label");
    label_ancuoc_d2.textContent = "Loại thắng cược";
    label_ancuoc_d2.appendChild(data_auto.cloneNode(true));
    const select_ancuoc_d2 = this.document.createElement("select");
    select_ancuoc_d2.classList.add("select");
    const option_ancuoc1_d2 = this.document.createElement("option");
    option_ancuoc1_d2.value = "1";
    option_ancuoc1_d2.textContent = "Hồng Kông";
    const option_ancuoc2_d2 = this.document.createElement("option");
    option_ancuoc2_d2.value = "2";
    option_ancuoc2_d2.textContent = "Châu Âu";
    select_ancuoc_d2.append(option_ancuoc1_d2, option_ancuoc2_d2);
    div_ancuoc_d2.append(label_ancuoc_d2, select_ancuoc_d2);

    // Ô thứ 4 ----------------------------------------
    const div_4 = this.document.createElement("div");
    div_4.classList.add("col-md-6");
    // div_row_2.appendChild(div_4)

    const div_4_h4 = this.document.createElement("h4");
    div_4_h4.textContent = "Thông tin đơn cược thứ 3";
    div_4.appendChild(div_4_h4);

    const div_4_row = this.document.createElement("div");
    div_4_row.classList.add("row");
    div_4.appendChild(div_4_row);

    const div_4_left = this.document.createElement("div");
    div_4_left.classList.add("col-6");
    div_4_row.appendChild(div_4_left);

    const div_4_right = this.document.createElement("div");
    div_4_right.classList.add("col-6");
    div_4_row.appendChild(div_4_right);

    //------------------- INPUT Chi tiết đơn cược -------------------
    // Tên đội thứ nhất
    const div_name_team1_d3 = this.document.createElement("div");
    div_4_left.appendChild(div_name_team1_d3);
    const label_name_team_d3 = this.document.createElement("label");
    label_name_team_d3.classList.add("form-label");
    label_name_team_d3.textContent = "Tên 2 đội";
    const input_name_team1_d3 = this.document.createElement("input");
    input_name_team1_d3.classList.add("form-control");
    input_name_team1_d3.placeholder = "Valmiera FC vs. FK Liepaja";
    div_name_team1_d3.append(label_name_team_d3, input_name_team1_d3);

    // Chi tiết kèo
    const div_detail_d3 = this.document.createElement("div");
    div_4_right.appendChild(div_detail_d3);
    const label_detail_d3 = this.document.createElement("label");
    label_detail_d3.classList.add("form-label");
    label_detail_d3.textContent = "Chi tiết kèo cược";
    const input_detail_d3 = this.document.createElement("input");
    input_detail_d3.classList.add("form-control");
    input_detail_d3.placeholder = "Tài 2.5/3";
    div_detail_d3.append(label_detail_d3, input_detail_d3);

    // Tỷ lệ ăn cược
    const div_odds_d3 = this.document.createElement("div");
    div_4_left.appendChild(div_odds_d3);
    const label_odds_d3 = this.document.createElement("label");
    label_odds_d3.classList.add("form-label");
    label_odds_d3.textContent = "Tỷ lệ ăn cược";
    const input_odds_d3 = this.document.createElement("input");
    input_odds_d3.classList.add("form-control");
    input_odds_d3.type = "text";
    input_odds_d3.value = "0.87";
    div_odds_d3.append(label_odds_d3, input_odds_d3);

    // Nhập số tiền cược
    const div_tiencuoc_d3 = this.document.createElement("div");
    div_4_left.appendChild(div_tiencuoc_d3);
    const label_tiencuoc_d3 = this.document.createElement("label");
    label_tiencuoc_d3.classList.add("form-label");
    label_tiencuoc_d3.textContent = "Số tiền cược";
    label_tiencuoc_d3.appendChild(data_auto.cloneNode(true));
    const input_tiencuoc_d3 = this.document.createElement("input");
    input_tiencuoc_d3.type = "text";
    input_tiencuoc_d3.classList.add("form-control");
    input_tiencuoc_d3.value = (Math.floor(Math.random() * 90) + 10) * 10;
    div_tiencuoc_d3.append(label_tiencuoc_d3, input_tiencuoc_d3);

    // Chọn trước trận/ rung đơn 3
    const div_rung_d3 = this.document.createElement("div");
    div_4_left.appendChild(div_rung_d3);
    const label_rung_d3 = this.document.createElement("label");
    label_rung_d3.classList.add("form-label");
    label_rung_d3.textContent = "Trước trận/ Rung";
    label_rung_d3.append(data_auto.cloneNode(true));
    const select_rung_d3 = this.document.createElement("select");
    select_rung_d3.classList.add("select");
    const option_rung1_d3 = this.document.createElement("option");
    option_rung1_d3.value = "1";
    option_rung1_d3.textContent = "Kèo trước trận";
    const option_rung2_d3 = this.document.createElement("option");
    option_rung2_d3.value = "2";
    option_rung2_d3.textContent = "Kèo rung";
    select_rung_d3.append(option_rung1_d3, option_rung2_d3);
    div_rung_d3.append(label_rung_d3, select_rung_d3);

    const div_detail_rung_d3 = document.createElement("div");
    const label_time_dau_d3 = document.createElement('label')
    label_time_dau_d3.classList.add("form-label")
    label_time_dau_d3.textContent = "Bắt đầu trận"
    const input_time_dau_d3 = document.createElement('input')
    input_time_dau_d3.type = 'text'
    input_time_dau_d3.classList.add('form-control')
    input_time_dau_d3.placeholder = '05/16 02:00'
    div_detail_rung_d3.append(label_time_dau_d3, input_time_dau_d3)
    div_4_left.appendChild(div_detail_rung_d3);
    const label_detail_rung_d3 = document.createElement("label");
    label_detail_rung_d3.classList.add("form-label");
    label_detail_rung_d3.textContent = "Chi tiết trận";
    const input_detail_rung_d3 = document.createElement("input");
    input_detail_rung_d3.classList.add("form-control");
    input_detail_rung_d3.placeholder = "1-1 Hiệp 2 76:12";

    select_rung_d3.addEventListener("change", function () {
        if (select_rung_d3.value == 2) {
            div_detail_rung_d3.innerHTML = "";
            div_detail_rung_d3.append(label_detail_rung_d3, input_detail_rung_d3);
        } else {
            div_detail_rung_d3.innerHTML = "";
            div_detail_rung_d3.append(label_time_dau_d3, input_time_dau_d3)
        }
    });

    // Nhập tên giải
    const div_giai_d3 = this.document.createElement("div");
    div_4_right.appendChild(div_giai_d3);
    const label_giai_d3 = this.document.createElement("label");
    label_giai_d3.classList.add("form-label");
    label_giai_d3.textContent = "Giải đấu";
    const input_giai_d3 = this.document.createElement("input");
    input_giai_d3.type = "text";
    input_giai_d3.classList.add("form-control");
    input_giai_d3.placeholder = "Giải Vô Địch Quốc Gia Latvia";
    div_giai_d3.append(label_giai_d3, input_giai_d3);

    // Nhập thời gian cược
    // const div_timecuoc_d3 = this.document.createElement("div");
    // div_4_right.appendChild(div_timecuoc_d3);
    // const label_timecuoc_d3 = this.document.createElement("label");
    // label_timecuoc_d3.classList.add("form-label");
    // label_timecuoc_d3.textContent = "Thời gian cược";
    // const input_timecuoc_d3 = this.document.createElement("input");
    // input_timecuoc_d3.type = "text";
    // input_timecuoc_d3.classList.add("form-control");
    // input_timecuoc_d3.placeholder = "06/29 22:56";
    // div_timecuoc_d3.append(label_timecuoc_d3, input_timecuoc_d3);

    // Chọn kèo tài xỉu/ Hồng Kông
    const div_tx_d3 = this.document.createElement("div");
    div_4_right.appendChild(div_tx_d3);
    const label_tx_d3 = this.document.createElement("label");
    label_tx_d3.classList.add("form-label");
    label_tx_d3.textContent = "Loại kèo";
    label_tx_d3.appendChild(data_auto.cloneNode(true));
    const select_tx_d3 = this.document.createElement("select");
    select_tx_d3.classList.add("select");
    const option_tx1_d3 = this.document.createElement("option");
    option_tx1_d3.value = "1";
    option_tx1_d3.textContent = "Kèo Tài Xỉu";
    const option_tx2_d3 = this.document.createElement("option");
    option_tx2_d3.value = "2";
    option_tx2_d3.textContent = "Kèo cược chấp";
    select_tx_d3.append(option_tx1_d3, option_tx2_d3);
    div_tx_d3.append(label_tx_d3, select_tx_d3);

    // Tỷ lệ ăn cược Châu Âu/ Hồng Kông
    const div_ancuoc_d3 = this.document.createElement("div");
    div_4_right.appendChild(div_ancuoc_d3);
    const label_ancuoc_d3 = this.document.createElement("label");
    label_ancuoc_d3.classList.add("form-label");
    label_ancuoc_d3.textContent = "Loại thắng cược";
    label_ancuoc_d3.appendChild(data_auto.cloneNode(true));
    const select_ancuoc_d3 = this.document.createElement("select");
    select_ancuoc_d3.classList.add("select");
    const option_ancuoc1_d3 = this.document.createElement("option");
    option_ancuoc1_d3.value = "1";
    option_ancuoc1_d3.textContent = "Hồng Kông";
    const option_ancuoc2_d3 = this.document.createElement("option");
    option_ancuoc2_d3.value = "2";
    option_ancuoc2_d3.textContent = "Châu Âu";
    select_ancuoc_d3.append(option_ancuoc1_d3, option_ancuoc2_d3);
    div_ancuoc_d3.append(label_ancuoc_d3, select_ancuoc_d3);

    // Thay đổi khi chọn Số lượng đơn cược
    select_quantity.addEventListener("change", function () {
        if (select_quantity.value == 1) {
            div_row_2.innerHTML = "";
        } else if (select_quantity.value == 2) {
            div_row_2.innerHTML = "";
            div_row_2.appendChild(div_3);
        } else if (select_quantity.value == 3) {
            div_row_2.innerHTML = "";
            div_row_2.appendChild(div_3);
            div_row_2.appendChild(div_4);
        }
    });

    // Hàm xử lý giá trị nhập vào và định dạng số
    input_tiencuoc.addEventListener("input", function () {
        formatInputValue(input_tiencuoc);
    });
    input_tiencuoc_d2.addEventListener("input", function () {
        formatInputValue(input_tiencuoc_d2);
    });
    input_tiencuoc_d3.addEventListener("input", function () {
        formatInputValue(input_tiencuoc_d3);
    });

    const div_warning = this.document.createElement("div");
    div_warning.classList.add("div_warning");
    card_body.appendChild(div_warning);
    const i_warning = this.document.createElement("i");
    i_warning.textContent =
        "Những mục đánh dấu (*) là dữ liệu tạo tự động, có thể chỉnh sửa nếu cần thiết";
    div_warning.appendChild(i_warning);

    // Nút button tạo đơn cược mới
    const div_import = this.document.createElement("div");
    div_import.classList.add("mt-4", "w-50");
    div_import.style.margin = "0px auto";
    card_body.appendChild(div_import);
    const button_import = this.document.createElement("button");
    button_import.classList.add("btn", "btn-success", "w-100");
    button_import.textContent = "Tạo đơn cược bóng mới";
    div_import.appendChild(button_import);

    button_import.addEventListener("click", function () {
        input_tiencuoc.value = input_tiencuoc.value.replace(/\./g, ",");
        input_tiencuoc_d2.value = input_tiencuoc_d2.value.replace(/\./g, ",");
        input_tiencuoc_d3.value = input_tiencuoc_d3.value.replace(/\./g, ",");
        const div_export = document.querySelector('#new-bet-ball')
        div_export.width = '591px'
        div_export.innerHTML = ''

        document.querySelector("#loading").style.display = "flex";
        setTimeout(function () {
            const photo_export = document.createElement('img')

            // Đưa dữ liệu của điện thoại
            const out_clock = document.createElement('div')
            out_clock.classList.add('out-clock')
            out_clock.innerHTML = input_clock.value

            const out_battery = document.createElement('div')
            out_battery.classList.add('out-battery')
            out_battery.style.width = (34 * parseInt(input_battery.value) / 100) + 'px'
            out_battery.style.backgroundColor = 'white'
            if(select_option_battery.value == 2 && input_battery.value > 20) {
                out_battery.style.backgroundColor = '#fede30'
            }
            if ((input_battery.value) <= 20) {
                out_battery.style.backgroundColor = 'red'
            }
            const out_wifi = document.createElement('div')
            out_wifi.classList.add('out-wifi')
            if(select_wifi.value == 1) {
                const icon_wifi = document.createElement('img')
                icon_wifi.src = '../photo/icon_wifi_white.jpg'
                out_wifi.appendChild(icon_wifi)
            }
            else if(select_wifi.value == 2) {
                out_wifi.classList.remove('out-wifi')
                out_wifi.classList.add('out-wifi-2')
                out_wifi.textContent = 'LTE'
            }
            else {
                out_wifi.classList.remove('out-wifi')
                out_wifi.classList.add('out-wifi-2')
                out_wifi.textContent = '4G'
            }

            const div_signal_invi = document.createElement('div')
            div_signal_invi.classList.add('signal')
            for (let i = 1; i <= 4; i++) {
                const div_bar_invi = document.createElement('div')
                div_bar_invi.classList.add('bar', 'background_invi')
                div_signal_invi.appendChild(div_bar_invi)
            }

            const div_signal = document.createElement('div')
            div_signal.classList.add('signal')
            for (let i = 1; i <= select_signal.value; i++) {
                const div_bar = document.createElement('div')
                div_bar.classList.add('bar', 'background_white')
                div_signal.appendChild(div_bar)
            }

            const mg_188 = document.createElement('div')
            mg_188.classList.add('mg-188')
            mg_188.textContent = 'mg188.com'

            // Đưa dữ  liệu đơn thứ nhất
            const div_total_bet = document.createElement('div')
            div_total_bet.classList.add('total_bet')
            const icon_money_total_bet = document.createElement('img')
            icon_money_total_bet.src = 'photo-bet/icon_money.png'
            icon_money_total_bet.classList.add('icon_money_total_bet')
            const span_total_bet = document.createElement('div')
            span_total_bet.classList.add('span_total_bet')

            const div_detail_bet = document.createElement('div')
            div_detail_bet.classList.add('detail-bet')
            const span_detail_bet = document.createElement('span')
            span_detail_bet.classList.add('span-total-bet')
            span_detail_bet.textContent = input_detail.value
            const span_a_cong = document.createElement('span')
            span_a_cong.textContent = ' @ '
            span_a_cong.style.fontSize = '21px'
            span_a_cong.style.fontFamily = 'fantasy'
            const span_odds = document.createElement('span')
            span_odds.classList.add('span-odds')
            span_odds.textContent = input_odds.value

            const div_out_rung = document.createElement('div')
            div_out_rung.classList.add("out-rung")
            const span_out_rung = document.createElement('span')
            span_out_rung.style.fontWeight = '500'
            span_out_rung.style.color = '#5a5d66'
            span_out_rung.textContent = ''
            if (select_rung.value == 2) {
                span_out_rung.textContent = 'Trong Trận- '
            }
            const span_tx = document.createElement('span')
            if (select_tx.value == 1) {
                span_tx.textContent = 'Tài/Xỉu'
            } else {
                span_tx.textContent = 'Cược Chấp'
            }
            const span_loai_thang_cuoc = document.createElement('span')
            if (select_ancuoc.value == 1) {
                span_loai_thang_cuoc.textContent = ' Kèo Hồng Kông'
            } else {
                span_loai_thang_cuoc.textContent = ' Kèo Châu Âu'
            }

            const div_time_dau = document.createElement('div')
            div_time_dau.classList.add('time-dau')
            div_time_dau.innerHTML = ''
            if (select_rung.value == 2) {
                var str = input_detail_rung.value
                var arr = str.split(" "); // Cắt chuỗi thành các phần tử trong một mảng
                var part1 = arr[0]; // Lấy phần tử đầu tiên của mảng
                var part2 = arr[1] + " " + arr[2]; // Ghép phần tử thứ hai và thứ ba của mảng thành một chuỗi
                var part3 = arr[3]; // Lấy phần tử thứ tư của mảng
                const span1 = document.createElement('span')
                span1.textContent = part1[0] + ' ' + part1[1] + part1[2]
                span1.style.fontFamily = 'fantasy'
                span1.style.color = '#3850e3'
                const span2 = document.createElement('span')
                span2.style.marginLeft = '4px'
                span2.textContent = part2 + ' '
                const span3 = document.createElement('span')
                span3.style.fontWeight = 500
                span3.style.fontFamily = 'din1'
                span3.textContent = part3
                div_time_dau.append(span1, span2, span3)
            } else if (select_rung.value == 1) {
                const span_time_dau = document.createElement('span')
                span_time_dau.textContent = input_time_dau.value
                span_time_dau.style.fontWeight = '500'
                div_time_dau.innerHTML = 'Begin Match '
                div_time_dau.appendChild(span_time_dau)
            }

            const div_out_2_team = document.createElement('div')
            div_out_2_team.classList.add('out-2-team')
            div_out_2_team.textContent = input_name_team1.value

            const div_giai = document.createElement('div')
            div_giai.classList.add("giai")
            div_giai.textContent = input_giai.value

            const div_price_bet = document.createElement('div')
            div_price_bet.classList.add('price-bet')
            const span_price_bet = document.createElement('div')
            span_price_bet.textContent = input_tiencuoc.value
            span_price_bet.style.margin = '-32px 0px 0px 21px'
            const span_duoi_tien_bet = document.createElement('span')
            span_duoi_tien_bet.textContent = '.00'
            span_duoi_tien_bet.style.fontSize = '17px'
            span_price_bet.appendChild(span_duoi_tien_bet)

            const div_win1 = document.createElement('div')
            div_win1.classList.add('win1')
            const span_win1 = document.createElement('span')
            var win = parseInt(input_tiencuoc.value.replace(/,/g, "") * input_odds.value)
            win = win.toLocaleString('en-US');
            span_win1.textContent = win
            span_win1.style.margin = '0px 0px 0px 5px'
            span_win1.style.display = 'inline-block'
            span_win1.appendChild(span_duoi_tien_bet.cloneNode(true))
            div_win1.append(icon_money_total_bet.cloneNode(true), span_win1)

            const div_trade_code = document.createElement('div')
            div_trade_code.classList.add('trade_code')

            const div_time_cuoc = document.createElement('div')
            div_time_cuoc.classList.add('time-bet')
            div_time_cuoc.textContent = input_timecuoc.value

            // Đưa dữ  liệu đơn thứ 2

            const div_detail_bet_d2 = document.createElement('div')
            div_detail_bet_d2.classList.add('detail-bet-d2')
            const span_detail_bet_d2 = document.createElement('span')
            span_detail_bet_d2.classList.add('span-total-bet-d2')
            span_detail_bet_d2.textContent = input_detail_d2.value
            const span_odds_d2 = document.createElement('span')
            span_odds_d2.classList.add('span-odds-d2')
            span_odds_d2.textContent = input_odds_d2.value

            const div_out_rung_d2 = document.createElement('div')
            div_out_rung_d2.classList.add("out-rung-d2")
            const span_out_rung_d2 = document.createElement('span')
            span_out_rung_d2.style.fontWeight = '500'
            span_out_rung_d2.style.color = '#5a5d66'
            span_out_rung_d2.textContent = ''
            if (select_rung_d2.value == 2) {
                span_out_rung_d2.textContent = 'Trong Trận- '
            }
            const span_tx_d2 = document.createElement('span')
            if (select_tx_d2.value == 1) {
                span_tx_d2.textContent = 'Tài/Xỉu'
            } else {
                span_tx_d2.textContent = 'Cược Chấp'
            }
            const span_loai_thang_cuoc_d2 = document.createElement('span')
            if (select_ancuoc_d2.value == 1) {
                span_loai_thang_cuoc_d2.textContent = ' Kèo Hồng Kông'
            } else {
                span_loai_thang_cuoc_d2.textContent = ' Kèo Châu Âu'
            }

            const div_time_dau_d2 = document.createElement('div')
            div_time_dau_d2.classList.add('time-dau-d2')
            div_time_dau_d2.innerHTML = ''
            if (select_rung_d2.value == 2) {
                var str_d2 = input_detail_rung_d2.value
                var arr_d2 = str_d2.split(" "); // Cắt chuỗi thành các phần tử trong một mảng
                var part1_d2 = arr_d2[0]; // Lấy phần tử đầu tiên của mảng
                var part2_d2 = arr_d2[1] + " " + arr_d2[2]; // Ghép phần tử thứ hai và thứ ba của mảng thành một chuỗi
                var part3_d2 = arr_d2[3]; // Lấy phần tử thứ tư của mảng
                const span1_d2 = document.createElement('span')
                span1_d2.textContent = part1_d2[0] + ' ' + part1_d2[1] + part1_d2[2]
                span1_d2.style.fontFamily = 'fantasy'
                span1_d2.style.color = '#3850e3'
                const span2_d2 = document.createElement('span')
                span2_d2.style.marginLeft = '4px'
                span2_d2.textContent = part2_d2 + ' '
                const span3_d2 = document.createElement('span')
                span3_d2.style.fontWeight = 500
                span3_d2.style.fontFamily = 'din1'
                span3_d2.textContent = part3_d2
                div_time_dau_d2.append(span1_d2, span2_d2, span3_d2)
            } else if (select_rung_d2.value == 1) {
                const span_time_dau_d2 = document.createElement('span')
                span_time_dau_d2.textContent = input_time_dau_d2.value
                span_time_dau_d2.style.fontWeight = '500'
                div_time_dau_d2.innerHTML = 'Begin Match '
                div_time_dau_d2.appendChild(span_time_dau_d2)
            }

            const div_out_2_team_d2 = document.createElement('div')
            div_out_2_team_d2.classList.add('out-2-team-d2')
            div_out_2_team_d2.textContent = input_name_team1_d2.value

            const div_giai_d2 = document.createElement('div')
            div_giai_d2.classList.add("giai-d2")
            div_giai_d2.textContent = input_giai_d2.value

            const div_price_bet_d2 = document.createElement('div')
            div_price_bet_d2.classList.add('price-bet-d2')
            const span_price_bet_d2 = document.createElement('div')
            span_price_bet_d2.textContent = input_tiencuoc_d2.value
            span_price_bet_d2.style.margin = '-32px 0px 0px 21px'
            const span_duoi_tien_bet_d2 = document.createElement('span')
            span_duoi_tien_bet_d2.textContent = '.00'
            span_duoi_tien_bet_d2.style.fontSize = '17px'
            span_price_bet_d2.appendChild(span_duoi_tien_bet_d2)

            const div_win1_d2 = document.createElement('div')
            div_win1_d2.classList.add('win1-d2')
            const span_win1_d2 = document.createElement('span')
            var win_d2 = parseInt(input_tiencuoc_d2.value.replace(/,/g, "") * input_odds_d2.value)
            win_d2 = win_d2.toLocaleString('en-US');
            span_win1_d2.textContent = win_d2
            span_win1_d2.style.margin = '0px 0px 0px 5px'
            span_win1_d2.style.display = 'inline-block'
            span_win1_d2.appendChild(span_duoi_tien_bet_d2.cloneNode(true))
            div_win1_d2.append(icon_money_total_bet.cloneNode(true), span_win1_d2)

            const div_trade_code_d2 = document.createElement('div')
            div_trade_code_d2.classList.add('trade_code-d2')

            const div_time_cuoc_d2 = document.createElement('div')
            div_time_cuoc_d2.classList.add('time-bet-d2')
            div_time_cuoc_d2.textContent = input_timecuoc_d2.value

            // Đưa dữ  liệu đơn thứ 3
            const div_detail_bet_d3 = document.createElement('div')
            div_detail_bet_d3.classList.add('detail-bet-d3')
            const span_detail_bet_d3 = document.createElement('span')
            span_detail_bet_d3.classList.add('span-total-bet-d3')
            span_detail_bet_d3.textContent = input_detail_d3.value
            const span_odds_d3 = document.createElement('span')
            span_odds_d3.classList.add('span-odds-d3')
            span_odds_d3.textContent = input_odds_d3.value

            const div_out_rung_d3 = document.createElement('div')
            div_out_rung_d3.classList.add("out-rung-d3")
            const span_out_rung_d3 = document.createElement('span')
            span_out_rung_d3.style.fontWeight = '500'
            span_out_rung_d3.style.color = '#5a5d66'
            span_out_rung_d3.textContent = ''
            if (select_rung_d3.value == 2) {
                span_out_rung_d3.textContent = 'Trong Trận- '
            }
            const span_tx_d3 = document.createElement('span')
            if (select_tx_d3.value == 1) {
                span_tx_d3.textContent = 'Tài/Xỉu'
            } else {
                span_tx_d3.textContent = 'Cược Chấp'
            }
            const span_loai_thang_cuoc_d3 = document.createElement('span')
            if (select_ancuoc_d3.value == 1) {
                span_loai_thang_cuoc_d3.textContent = ' Kèo Hồng Kông'
            } else {
                span_loai_thang_cuoc_d3.textContent = ' Kèo Châu Âu'
            }

            const div_time_dau_d3 = document.createElement('div')
            div_time_dau_d3.classList.add('time-dau-d3')
            div_time_dau_d3.innerHTML = ''
            if (select_rung_d3.value == 2) {
                var str_d3 = input_detail_rung_d3.value
                var arr_d3 = str_d3.split(" "); // Cắt chuỗi thành các phần tử trong một mảng
                var part1_d3 = arr_d3[0]; // Lấy phần tử đầu tiên của mảng
                var part2_d3 = arr_d3[1] + " " + arr_d3[2]; // Ghép phần tử thứ hai và thứ ba của mảng thành một chuỗi
                var part3_d3 = arr_d3[3]; // Lấy phần tử thứ tư của mảng
                const span1_d3 = document.createElement('span')
                span1_d3.textContent = part1_d3[0] + ' ' + part1_d3[1] + part1_d3[2]
                span1_d3.style.fontFamily = 'fantasy'
                span1_d3.style.color = '#3850e3'
                const span2_d3 = document.createElement('span')
                span2_d3.style.marginLeft = '4px'
                span2_d3.textContent = part2_d3 + ' '
                const span3_d3 = document.createElement('span')
                span3_d3.style.fontWeight = 500
                span3_d3.style.fontFamily = 'din1'
                span3_d3.textContent = part3_d3
                div_time_dau_d3.append(span1_d3, span2_d3, span3_d3)
            } else if (select_rung_d3.value == 1) {
                const span_time_dau_d3 = document.createElement('span')
                span_time_dau_d3.textContent = input_time_dau_d3.value
                span_time_dau_d3.style.fontWeight = '500'
                div_time_dau_d3.innerHTML = 'Begin Match '
                div_time_dau_d3.appendChild(span_time_dau_d3)
            }

            const div_out_2_team_d3 = document.createElement('div')
            div_out_2_team_d3.classList.add('out-2-team-d3')
            div_out_2_team_d3.textContent = input_name_team1_d3.value

            const div_giai_d3 = document.createElement('div')
            div_giai_d3.classList.add("giai-d3")
            div_giai_d3.textContent = input_giai_d3.value

            const div_price_bet_d3 = document.createElement('div')
            div_price_bet_d3.classList.add('price-bet-d3')
            const span_price_bet_d3 = document.createElement('div')
            span_price_bet_d3.textContent = input_tiencuoc_d3.value
            span_price_bet_d3.style.margin = '-32px 0px 0px 21px'
            const span_duoi_tien_bet_d3 = document.createElement('span')
            span_duoi_tien_bet_d3.textContent = '.00'
            span_duoi_tien_bet_d3.style.fontSize = '17px'
            span_price_bet_d3.appendChild(span_duoi_tien_bet_d3)

            const div_win1_d3 = document.createElement('div')
            div_win1_d3.classList.add('win1-d3')
            const span_win1_d3 = document.createElement('span')
            var win_d3 = parseInt(input_tiencuoc_d3.value.replace(/,/g, "") * input_odds_d3.value)
            win_d3 = win_d3.toLocaleString('en-US');
            span_win1_d3.textContent = win_d3
            span_win1_d3.style.margin = '0px 0px 0px 5px'
            span_win1_d3.style.display = 'inline-block'
            span_win1_d3.appendChild(span_duoi_tien_bet_d3.cloneNode(true))
            div_win1_d3.append(icon_money_total_bet.cloneNode(true), span_win1_d3)

            if (select_quantity.value == 1) {
                photo_export.src = 'photo-bet/photo_1.jpg'
                const one_ve = document.createElement('div')
                one_ve.classList.add('one_ve')
                one_ve.textContent = '1 Vé'
                span_total_bet.textContent = input_tiencuoc.value
                span_total_bet.appendChild(duoi_tien.cloneNode(true))

                div_total_bet.append(icon_money_total_bet.cloneNode(true), span_total_bet)
                div_detail_bet.append(span_detail_bet, span_a_cong.cloneNode(true), span_odds)
                div_out_rung.append(span_out_rung, span_tx, span_loai_thang_cuoc)
                div_price_bet.append(icon_money_total_bet.cloneNode(true), span_price_bet)
                div_trade_code.innerHTML = '94700' + (Math.floor(Math.random() * (1000000000000 - 9999999999999 + 1) + 9999999999999));
                div_export.append(one_ve, div_total_bet, div_detail_bet, div_out_rung, div_time_dau, div_out_2_team, div_giai, div_price_bet, div_win1, div_trade_code, div_time_cuoc)
            } else if (select_quantity.value == 2) {
                photo_export.src = 'photo-bet/photo_2.jpg'
                const one_ve = document.createElement('div')
                one_ve.classList.add('one_ve')
                one_ve.textContent = '2 Vé'
                const new_price1 = parseInt((input_tiencuoc.value).replace(/,/g, ''))
                const new_price2 = parseInt((input_tiencuoc_d2.value).replace(/,/g, ''))
                const new_total = (new_price1 + new_price2).toLocaleString('en-US');
                span_total_bet.textContent = new_total
                span_total_bet.appendChild(duoi_tien.cloneNode(true))

                // Dữ liệu đơn 1      
                div_total_bet.append(icon_money_total_bet.cloneNode(true), span_total_bet)
                div_detail_bet.append(span_detail_bet, span_a_cong.cloneNode(true), span_odds)
                div_out_rung.append(span_out_rung, span_tx, span_loai_thang_cuoc)
                div_price_bet.append(icon_money_total_bet.cloneNode(true), span_price_bet)
                div_trade_code.innerHTML = '94700' + (Math.floor(Math.random() * (1000000000000 - 9999999999999 + 1) + 9999999999999));
                div_export.append(one_ve, div_total_bet, div_detail_bet, div_out_rung, div_time_dau, div_out_2_team, div_giai, div_price_bet, div_win1, div_trade_code, div_time_cuoc)
                // Dữ liệu đơn 2
                div_detail_bet_d2.append(span_detail_bet_d2, span_a_cong.cloneNode(true), span_odds_d2)
                div_out_rung_d2.append(span_out_rung_d2, span_tx_d2, span_loai_thang_cuoc_d2)
                div_price_bet_d2.append(icon_money_total_bet.cloneNode(true), span_price_bet_d2)
                div_trade_code_d2.innerHTML = '94700' + (Math.floor(Math.random() * (1000000000000 - 9999999999999 + 1) + 9999999999999));
                div_export.append(one_ve, div_detail_bet_d2, div_out_rung_d2, div_time_dau_d2, div_out_2_team_d2, div_giai_d2, div_price_bet_d2, div_win1_d2, div_trade_code_d2, div_time_cuoc_d2)
            } else if (select_quantity.value == 3) {
                photo_export.src = 'photo-bet/photo_3.jpg'
                const one_ve = document.createElement('div')
                one_ve.classList.add('one_ve')
                one_ve.textContent = '3 Vé'
                const new_price1 = parseInt((input_tiencuoc.value).replace(/,/g, ''))
                const new_price2 = parseInt((input_tiencuoc_d2.value).replace(/,/g, ''))
                const new_price3 = parseInt((input_tiencuoc_d3.value).replace(/,/g, ''))
                const new_total = (new_price1 + new_price2 + new_price3).toLocaleString('en-US');
                span_total_bet.textContent = new_total
                span_total_bet.appendChild(duoi_tien.cloneNode(true))

                div_total_bet.append(icon_money_total_bet.cloneNode(true), span_total_bet)
                div_detail_bet.append(span_detail_bet, span_a_cong.cloneNode(true), span_odds)
                div_out_rung.append(span_out_rung, span_tx, span_loai_thang_cuoc)
                div_price_bet.append(icon_money_total_bet.cloneNode(true), span_price_bet)
                div_trade_code.innerHTML = '94700' + (Math.floor(Math.random() * (1000000000000 - 9999999999999 + 1) + 9999999999999));
                div_export.append(one_ve, div_total_bet, div_detail_bet, div_out_rung, div_time_dau, div_out_2_team, div_giai, div_price_bet, div_win1, div_trade_code, div_time_cuoc)
                // Dữ liệu đơn 2
                div_detail_bet_d2.append(span_detail_bet_d2, span_a_cong.cloneNode(true), span_odds_d2)
                div_out_rung_d2.append(span_out_rung_d2, span_tx_d2, span_loai_thang_cuoc_d2)
                div_price_bet_d2.append(icon_money_total_bet.cloneNode(true), span_price_bet_d2)
                div_trade_code_d2.innerHTML = '94700' + (Math.floor(Math.random() * (1000000000000 - 9999999999999 + 1) + 9999999999999));
                div_export.append(one_ve, div_detail_bet_d2, div_out_rung_d2, div_time_dau_d2, div_out_2_team_d2, div_giai_d2, div_price_bet_d2, div_win1_d2, div_trade_code_d2, div_time_cuoc_d2)
                // Dữ liệu đơn 3
                div_detail_bet_d3.append(span_detail_bet_d3, span_a_cong.cloneNode(true), span_odds_d3)
                div_out_rung_d3.append(span_out_rung_d3, span_tx_d3, span_loai_thang_cuoc_d3)
                div_price_bet_d3.append(icon_money_total_bet.cloneNode(true), span_price_bet_d3)
                div_export.append(one_ve, div_detail_bet_d3, div_out_rung_d3, div_time_dau_d3, div_out_2_team_d3, div_giai_d3, div_price_bet_d3, div_win1_d3)
            }

            div_export.append(photo_export, out_clock, out_battery, out_wifi, div_signal_invi, div_signal, mg_188)

            // const photo_demo = document.createElement('img')
            // photo_demo.src = 'photo-bet/2.png'
            // div_export.appendChild(photo_demo)
            document.querySelector("#loading").style.display = "none";
        }, 1000);
    });

    const button_to_img = this.document.querySelector('#button-to-img')
    if(button_to_img) {
        button_to_img.addEventListener("click", function () {
            window.scrollTo(0, 0);
            html2canvas(document.querySelector("#new-bet-ball")).then(canvas => {
                var a = document.createElement('a');
                a.href = canvas.toDataURL('image/jpeg', 0.9);
                a.download = 'new-bet-ball.jpg';
                a.click();
            });
        })
    }
});

// Hàm xử lý giá trị nhập vào và định dạng số
function formatInputValue(inputElement) {
    const formattedValue = inputElement.value.replace(/[^\d]/g, "");
    inputElement.value = formattedValue !== "" ? parseFloat(formattedValue).toLocaleString() : "";
}

const month_date_hours_minutes = () => {
    let now = new Date();
    let month = now.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
    if(month < 10) {
        month = '0' + month
    }
    let day = now.getDate()
    if(day < 10) {
        day = '0' + day
    }
    let hours = now.getHours()
    if(hours < 10) {
        hours = '0' + hours
    }
    let minutes = now.getMinutes()
    if(minutes < 10) {
        minutes = '0' + minutes
    }
    return `${month}/${day} ${hours}:${minutes}`

}