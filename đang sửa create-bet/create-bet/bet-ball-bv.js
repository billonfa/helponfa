window.addEventListener('load', function () {
    document.querySelector('#loading').style.display = 'flex'
    setTimeout(function () {
        document.querySelector('#loading').style.display = 'none'
    }, 1000);
    var numberInput = document.getElementById("input_total_number");
    if (numberInput) {
        numberInput.addEventListener("input", function () {
            var userInput = numberInput.value;
            var formatted = userInput.replace(/,/g, ''); // xóa tất cả dấu phẩy có sẵn
            formatted = formatted.replace(/\D/g, ""); // xóa tất cả ký tự không phải số
            formatted = parseFloat(formatted);
            if (!isNaN(formatted)) { // kiểm tra nếu giá trị là một số hợp lệ
                formatted = formatted.toLocaleString(); // định dạng số
                numberInput.value = formatted;
            } else { // nếu giá trị không hợp lệ
                numberInput.value = ""; // xóa giá trị trong ô input
            }
        });
    }

    var numberInput2 = document.getElementById("input_total_price");
    if (numberInput2) {
        numberInput2.addEventListener("input", function () {
            var userInput2 = numberInput2.value;
            var formatted = userInput2.replace(/,/g, ''); // xóa tất cả dấu phẩy có sẵn
            formatted = formatted.replace(/\D/g, ""); // xóa tất cả ký tự không phải số
            formatted = parseFloat(formatted);
            if (!isNaN(formatted)) { // kiểm tra nếu giá trị là một số hợp lệ
                formatted = formatted.toLocaleString(); // định dạng số
                numberInput2.value = formatted;
            } else { // nếu giá trị không hợp lệ
                numberInput2.value = ""; // xóa giá trị trong ô input
            }
        });
    }

    const inputElements = document.querySelectorAll('input'); // Tìm tất cả các thẻ input trên trang web

    inputElements.forEach(inputElement => { // Lặp qua từng thẻ input
        if (inputElement.value !== '') { // Kiểm tra giá trị của từng ô input, nếu nó khác rỗng thì đổi màu nền thành màu xanh
            inputElement.style.backgroundColor = '#c4cdd1';
        }
    });

    const buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id === 'page-header-user-dropdown' || buttons[i].id === 'back-to-top') {
            continue
        }
        buttons[i].addEventListener('click', function (event) {
            document.querySelector('#loading').style.display = 'flex'
            setTimeout(function () {
                document.querySelector('#loading').style.display = 'none'
            }, 500);
        });
    }

    const links = document.querySelectorAll('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            document.querySelector('#loading').style.display = 'flex'
            setTimeout(function () {
                document.querySelector('#loading').style.display = 'none'
            }, 500);
        });
    }

});

// Tạo Form điền dữ liệu BV

const form = document.querySelector('#form')

const data_auto = document.createElement('span')
data_auto.classList.add('data_auto')
data_auto.textContent = " (*)"
const br_game = document.createElement('div')
br_game.classList.add('br_game')
const br_ngang = document.createElement('div')
br_ngang.classList.add('br_ngang1')

// Phần điện thoại (ở trên bên trái)
const row_top = document.createElement('div')
row_top.classList.add('row')
form.appendChild(row_top)
const top_left = document.createElement('div')
top_left.classList.add('col-6')
row_top.appendChild(top_left)
const div_clock = document.createElement('div')
const label_clock = document.createElement('label')
label_clock.classList.add('form-label')
label_clock.textContent = "Đồng hồ "
label_clock.appendChild(data_auto.cloneNode(true))
const input_clock = document.createElement('input')
input_clock.classList.add('form-control')
input_clock.value = hours_minutes()
div_clock.append(label_clock, input_clock)

const div_wifi = document.createElement('div')
const label_wifi = document.createElement('label')
label_wifi.classList.add('form-label')
label_wifi.textContent = "Sóng Wifi"
label_wifi.appendChild(data_auto.cloneNode(true))
const select_wifi = document.createElement('select')
select_wifi.classList.add('select')
const option1_wifi = document.createElement('option')
option1_wifi.textContent = "Wifi"
option1_wifi.value = 1
const option2_wifi = document.createElement('option')
option2_wifi.textContent = "LTE"
option2_wifi.value = 2
const option3_wifi = document.createElement('option')
option3_wifi.textContent = "4G"
option3_wifi.value = 3
select_wifi.append(option1_wifi, option2_wifi, option3_wifi)
div_wifi.append(label_wifi, select_wifi)

const div_total_sim = document.createElement('div')
const label_total_sim = document.createElement('label')
label_total_sim.classList.add('form-label')
label_total_sim.textContent = 'Số lượng sim'
label_total_sim.appendChild(data_auto.cloneNode(true))
const select_total_sim = document.createElement('select')
select_total_sim.classList.add('select')
const option1_total_sim = document.createElement('option')
option1_total_sim.textContent = '1'
option1_total_sim.value = 1
const option2_total_sim = document.createElement('option')
option2_total_sim.textContent = '2'
option2_total_sim.value = 2
select_total_sim.append(option1_total_sim, option2_total_sim)
div_total_sim.append(label_total_sim, select_total_sim)
select_total_sim.addEventListener('change', function () {
    if (select_total_sim.value == 2) {
        div_signal2.append(label_signal2, select_signal2)
    } else {
        div_signal2.innerHTML = ''
    }
})

const div_signal1 = document.createElement('div')
const label_signal1 = document.createElement('label')
label_signal1.classList.add('form-label')
label_signal1.textContent = 'Sóng điện thoại sim 1'
label_signal1.appendChild(data_auto.cloneNode(true))
const select_signal1 = document.createElement('select')
select_signal1.classList.add('select')
for (let i = 4; i > 0; i--) {
    const option_signal = document.createElement('option')
    option_signal.textContent = i
    option_signal.value = i
    select_signal1.appendChild(option_signal)
}
div_signal1.append(label_signal1, select_signal1)

const div_signal2 = document.createElement('div')
const label_signal2 = document.createElement('label')
label_signal2.classList.add('form-label')
label_signal2.textContent = 'Sóng điện thoại sim 2'
label_signal2.appendChild(data_auto.cloneNode(true))
const select_signal2 = document.createElement('select')
select_signal2.classList.add('select')
for (let i = 4; i > 0; i--) {
    const option_signal = document.createElement('option')
    option_signal.textContent = i
    option_signal.value = i
    select_signal2.appendChild(option_signal)
}

top_left.append(div_clock, div_wifi, div_total_sim, div_signal1, div_signal2)
// End Phần điện thoại

// Phần nội Option (ở trên bên phải)
const top_right = document.createElement('div')
top_right.classList.add('col-6')
row_top.appendChild(top_right)

const div_battery = document.createElement('div')
const label_battery = document.createElement('label')
label_battery.classList.add('form-label')
label_battery.textContent = "Phần trăm pin"
label_battery.appendChild(data_auto.cloneNode(true))
const input_battery = document.createElement('input')
input_battery.classList.add('form-control')
input_battery.value = getRandomInt(18, 85)
div_battery.append(label_battery, input_battery)

const div_cate = document.createElement('div')
const label_cate = document.createElement('label')
label_cate.classList.add('form-label')
label_cate.textContent = 'Mẫu đơn cược'
label_cate.appendChild(data_auto.cloneNode(true))
const select_cate = document.createElement('select')
select_cate.classList.add('select')
const option1_cate = document.createElement('option')
option1_cate.textContent = '1'
const option2_cate = document.createElement('option')
option2_cate.textContent = '2'
select_cate.append(option1_cate, option2_cate)
div_cate.append(label_cate, select_cate)

const div_orders = document.createElement('div')
const label_orders = document.createElement('label')
label_orders.classList.add('form-label')
label_orders.textContent = "Số lượng đơn rút tiền"
label_orders.appendChild(data_auto.cloneNode(true))
const select_orders = document.createElement('select')
select_orders.classList.add('select')
const option1_orders = document.createElement('option')
option1_orders.textContent = '1'
option1_orders.value = 1
const option2_orders = document.createElement('option')
option2_orders.textContent = '2'
option2_orders.value = 2
const option3_orders = document.createElement('option')
option3_orders.textContent = '3'
option3_orders.value = 3
select_orders.append(option1_orders, option2_orders, option3_orders)
div_orders.append(label_orders, select_orders)

const div_time = document.createElement('div')
const label_time = document.createElement('label')
label_time.classList.add('form-label')
label_time.textContent = "Thời gian rút tiền"
label_time.appendChild(data_auto.cloneNode(true))
const input_time = document.createElement('input')
input_time.classList.add("form-control")
input_time.value = `${tinhNgayThang(0)} - ${tinhNgayThang(0)}`
div_time.append(label_time, input_time)


top_right.append(div_battery, div_time, div_cate, div_orders)
form.appendChild(br_game)
// End Phần Option

// Phần nội dung đơn 1 (Ở giữa bên trái)
const row_mid = document.createElement('div')
row_mid.classList.add('row')
form.appendChild(row_mid)
const left_mid = document.createElement('div')
left_mid.classList.add('col-6')
row_mid.appendChild(left_mid)

const h4_don1 = document.createElement('h4')
h4_don1.textContent = "Thông tin Đơn cược thứ 1"
h4_don1.classList.add('h4-don1')
left_mid.appendChild(h4_don1)

//------------------- INPUT Chi tiết đơn cược thứ 1-----------------------------------------------------------------------------------------------
const div_bet_1 = document.createElement('div')
div_bet_1.classList.add('row')
left_mid.appendChild(div_bet_1)
const div_bet_1_left = document.createElement('div')
div_bet_1_left.classList.add('col-6')
const div_bet_1_right = document.createElement('div')
div_bet_1_right.classList.add('col-6')
div_bet_1.append(div_bet_1_left, div_bet_1_right)
// Tên đội thứ nhất
const div_name_team1 = this.document.createElement("div");
div_bet_1_left.appendChild(div_name_team1);
const label_name_team = this.document.createElement("label");
label_name_team.classList.add("form-label");
label_name_team.textContent = "Tên 2 đội";
const input_name_team1 = this.document.createElement("input");
input_name_team1.classList.add("form-control");
input_name_team1.placeholder = "Valmiera FC vs. FK Liepaja";
div_name_team1.append(label_name_team, input_name_team1);

// Tỷ lệ ăn cược
const div_odds = this.document.createElement("div");
div_bet_1_left.appendChild(div_odds);
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
div_bet_1_left.appendChild(div_tiencuoc);
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
div_bet_1_left.appendChild(div_rung);
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
div_bet_1_left.appendChild(div_detail_rung);
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

// Chi tiết kèo
const div_detail = this.document.createElement("div");
div_bet_1_right.appendChild(div_detail);
const label_detail = this.document.createElement("label");
label_detail.classList.add("form-label");
label_detail.textContent = "Chi tiết kèo cược";
const input_detail = this.document.createElement("input");
input_detail.classList.add("form-control");
input_detail.placeholder = "Tài 2.5/3";
div_detail.append(label_detail, input_detail);

// Nhập tên giải
const div_giai = this.document.createElement("div");
div_bet_1_right.appendChild(div_giai);
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
div_bet_1_right.appendChild(div_timecuoc);
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
div_bet_1_right.appendChild(div_tx);
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
div_bet_1_right.appendChild(div_ancuoc);
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
// End Phần nội dung đơn 1

//------------------- INPUT Chi tiết đơn cược thứ 2 (Ở giữa bên phải)-----------------------------------------------------------------------------------------------
const right_mid = document.createElement('div')
right_mid.classList.add('col-6')
row_mid.appendChild(right_mid)

const div_bet_2 = document.createElement('div')
div_bet_2.classList.add('row')
right_mid.appendChild(div_bet_2)
const h4_don2 = document.createElement('h4')
h4_don2.textContent = "Thông tin Đơn cược thứ 2"
h4_don2.classList.add('h4-don1')
div_bet_2.appendChild(h4_don2)

const div_bet_2_left = document.createElement('div')
div_bet_2_left.classList.add('col-6')
const div_bet_2_right = document.createElement('div')
div_bet_2_right.classList.add('col-6')
div_bet_2.append(div_bet_2_left, div_bet_2_right)

// Tên đội thứ nhất
const div_name_team1_d2 = this.document.createElement("div");
div_bet_2_left.appendChild(div_name_team1_d2);
const input_name_team1_d2 = this.document.createElement("input");
input_name_team1_d2.classList.add("form-control");
input_name_team1_d2.placeholder = "Valmiera FC vs. FK Liepaja";
div_name_team1_d2.append(label_name_team.cloneNode(true), input_name_team1_d2);

// Tỷ lệ ăn cược
const div_odds_d2 = this.document.createElement("div");
div_bet_2_left.appendChild(div_odds_d2);
const input_odds_d2 = this.document.createElement("input");
input_odds_d2.classList.add("form-control");
input_odds_d2.type = "text";
input_odds_d2.value = "0.87";
div_odds_d2.append(label_odds.cloneNode(true), input_odds_d2);

// Nhập số tiền cược
const div_tiencuoc_d2 = this.document.createElement("div");
div_bet_2_left.appendChild(div_tiencuoc_d2);
const input_tiencuoc_d2 = this.document.createElement("input");
input_tiencuoc_d2.type = "text";
input_tiencuoc_d2.classList.add("form-control");
input_tiencuoc_d2.value = (Math.floor(Math.random() * 90) + 10) * 10;
div_tiencuoc_d2.append(label_tiencuoc.cloneNode(true), input_tiencuoc_d2);

// Chọn trước trận/ rung
const div_rung_d2 = this.document.createElement("div");
div_bet_2_left.appendChild(div_rung_d2);
const select_rung_d2 = this.document.createElement("select");
select_rung_d2.classList.add("select");
const option_rung1_d2 = this.document.createElement("option");
option_rung1_d2.value = "1";
option_rung1_d2.textContent = "Kèo trước trận";
const option_rung2_d2 = this.document.createElement("option");
option_rung2_d2.value = "2";
option_rung2_d2.textContent = "Kèo rung";
select_rung_d2.append(option_rung1_d2, option_rung2_d2);
div_rung_d2.append(label_rung.cloneNode(true), select_rung_d2);

const div_detail_rung_d2 = document.createElement("div");
const input_time_dau_d2 = document.createElement('input')
input_time_dau_d2.type = 'text'
input_time_dau_d2.classList.add('form-control')
input_time_dau_d2.placeholder = '05/16 02:00'
div_detail_rung_d2.append(label_time_dau.cloneNode(true), input_time_dau_d2)
div_bet_2_left.appendChild(div_detail_rung_d2);
const input_detail_rung_d2 = document.createElement("input");
input_detail_rung_d2.classList.add("form-control");
input_detail_rung_d2.placeholder = "1-1 Hiệp 2 76:12";

select_rung_d2.addEventListener("change", function () {
    if (select_rung_d2.value == 2) {
        div_detail_rung_d2.innerHTML = "";
        div_detail_rung_d2.append(label_detail_rung.cloneNode(true), input_detail_rung_d2);
    } else {
        div_detail_rung_d2.innerHTML = "";
        div_detail_rung_d2.append(label_time_dau.cloneNode(true), input_time_dau_d2)
    }
});

// Chi tiết kèo
const div_detail_d2 = this.document.createElement("div");
div_bet_2_right.appendChild(div_detail_d2);
const input_detail_d2 = this.document.createElement("input");
input_detail_d2.classList.add("form-control");
input_detail_d2.placeholder = "Tài 2.5/3";
div_detail_d2.append(label_detail.cloneNode(true), input_detail_d2);

// Nhập tên giải
const div_giai_d2 = this.document.createElement("div");
div_bet_2_right.appendChild(div_giai_d2);
const input_giai_d2 = this.document.createElement("input");
input_giai_d2.type = "text";
input_giai_d2.classList.add("form-control");
input_giai_d2.placeholder = "Giải Vô Địch Quốc Gia Latvia";
div_giai_d2.append(label_giai.cloneNode(true), input_giai_d2);

// Nhập thời gian cược

const div_timecuoc_d2 = this.document.createElement("div");
div_bet_2_right.appendChild(div_timecuoc_d2);
const input_timecuoc_d2 = this.document.createElement("input");
input_timecuoc_d2.type = "text";
input_timecuoc_d2.classList.add("form-control");
input_timecuoc_d2.value = month_date_hours_minutes();
div_timecuoc_d2.append(label_timecuoc.cloneNode(true), input_timecuoc_d2);

// Chọn kèo tài xỉu/ Hồng Kông
const div_tx_d2 = this.document.createElement("div");
div_bet_2_right.appendChild(div_tx_d2);
const select_tx_d2 = this.document.createElement("select");
select_tx_d2.classList.add("select");
const option_tx1_d2 = this.document.createElement("option");
option_tx1_d2.value = "1";
option_tx1_d2.textContent = "Kèo Tài Xỉu";
const option_tx2_d2 = this.document.createElement("option");
option_tx2_d2.value = "2";
option_tx2_d2.textContent = "Kèo cược chấp";
select_tx_d2.append(option_tx1_d2, option_tx2_d2);
div_tx_d2.append(label_tx.cloneNode(true), select_tx_d2)

// Tỷ lệ ăn cược Châu Âu/ Hồng Kông
const div_ancuoc_d2 = this.document.createElement("div");
div_bet_2_right.appendChild(div_ancuoc);
const select_ancuoc_d2 = this.document.createElement("select");
select_ancuoc_d2.classList.add("select");
const option_ancuoc1_d2 = this.document.createElement("option");
option_ancuoc1_d2.value = "1";
option_ancuoc1_d2.textContent = "Hồng Kông";
const option_ancuoc2_d2 = this.document.createElement("option");
option_ancuoc2_d2.value = "2";
option_ancuoc2_d2.textContent = "Châu Âu";
select_ancuoc_d2.append(option_ancuoc1_d2, option_ancuoc2_d2);
div_ancuoc_d2.append(label_ancuoc.cloneNode(true), select_ancuoc_d2);

row_mid.appendChild(br_game.cloneNode(true))
// End phần nội dung đơn 2 

// Nội dung đơn 3 (Ở dưới bên trái)
const row_bot = document.createElement('div')
row_bot.classList.add('row')
form.appendChild(row_bot)
const left_bot = document.createElement('div')
left_bot.classList.add('col-6')
row_bot.appendChild(left_bot)

const h4_don3 = document.createElement('h4')
h4_don3.textContent = "Thông tin Đơn cược thứ 3"
h4_don3.classList.add('h4-don1')
left_bot.appendChild(h4_don3)

const div_bet_3 = document.createElement('div')
div_bet_3.classList.add('row')
left_bot.appendChild(div_bet_3)

const div_bet_3_left = document.createElement('div')
div_bet_3_left.classList.add('col-6')
const div_bet_3_right = document.createElement('div')
div_bet_3_right.classList.add('col-6')

div_bet_3.append(div_bet_3_left, div_bet_3_right)

// Tên đội thứ nhất
const div_name_team1_d3 = this.document.createElement("div");
div_bet_3_left.appendChild(div_name_team1_d3);
const input_name_team1_d3 = this.document.createElement("input");
input_name_team1_d3.classList.add("form-control");
input_name_team1_d3.placeholder = "Valmiera FC vs. FK Liepaja";
div_name_team1_d3.append(label_name_team.cloneNode(true), input_name_team1_d3);

// Tỷ lệ ăn cược
const div_odds_d3 = this.document.createElement("div");
div_bet_3_left.appendChild(div_odds_d3);
const input_odds_d3 = this.document.createElement("input");
input_odds_d3.classList.add("form-control");
input_odds_d3.type = "text";
input_odds_d3.value = "0.87";
div_odds_d3.append(label_odds.cloneNode(true), input_odds_d3);

// Nhập số tiền cược
const div_tiencuoc_d3 = this.document.createElement("div");
div_bet_3_left.appendChild(div_tiencuoc_d3);
const input_tiencuoc_d3 = this.document.createElement("input");
input_tiencuoc_d3.type = "text";
input_tiencuoc_d3.classList.add("form-control");
input_tiencuoc_d3.value = (Math.floor(Math.random() * 90) + 10) * 10;
div_tiencuoc_d3.append(label_tiencuoc.cloneNode(true), input_tiencuoc_d3);

// Chọn trước trận/ rung
const div_rung_d3 = this.document.createElement("div");
div_bet_3_left.appendChild(div_rung_d3);
const select_rung_d3 = this.document.createElement("select");
select_rung_d3.classList.add("select");
const option_rung1_d3 = this.document.createElement("option");
option_rung1_d3.value = "1";
option_rung1_d3.textContent = "Kèo trước trận";
const option_rung2_d3 = this.document.createElement("option");
option_rung2_d3.value = "2";
option_rung2_d3.textContent = "Kèo rung";
select_rung_d3.append(option_rung1_d3, option_rung2_d3);
div_rung_d3.append(label_rung.cloneNode(true), select_rung_d3);

const div_detail_rung_d3 = document.createElement("div");
const input_time_dau_d3 = document.createElement('input')
input_time_dau_d3.type = 'text'
input_time_dau_d3.classList.add('form-control')
input_time_dau_d3.placeholder = '05/16 02:00'
div_detail_rung_d3.append(label_time_dau.cloneNode(true), input_time_dau_d3)
div_bet_3_left.appendChild(div_detail_rung_d3);
const input_detail_rung_d3 = document.createElement("input");
input_detail_rung_d3.classList.add("form-control");
input_detail_rung_d3.placeholder = "1-1 Hiệp 2 76:12";

select_rung_d3.addEventListener("change", function () {
    if (select_rung_d3.value == 2) {
        div_detail_rung_d3.innerHTML = "";
        div_detail_rung_d3.append(label_detail_rung.cloneNode(true), input_detail_rung_d3);
    } else {
        div_detail_rung_d3.innerHTML = "";
        div_detail_rung_d3.append(label_time_dau.cloneNode(true), input_time_dau_d3)
    }
});

// Chi tiết kèo
const div_detail_d3 = this.document.createElement("div");
div_bet_3_right.appendChild(div_detail_d3);
const input_detail_d3 = this.document.createElement("input");
input_detail_d3.classList.add("form-control");
input_detail_d3.placeholder = "Tài 2.5/3";
div_detail_d3.append(label_detail.cloneNode(true), input_detail_d3);

// Nhập tên giải
const div_giai_d3 = this.document.createElement("div");
div_bet_3_right.appendChild(div_giai_d3);
const input_giai_d3 = this.document.createElement("input");
input_giai_d3.type = "text";
input_giai_d3.classList.add("form-control");
input_giai_d3.placeholder = "Giải Vô Địch Quốc Gia Latvia";
div_giai_d3.append(label_giai.cloneNode(true), input_giai_d3);

// Nhập thời gian cược

const div_timecuoc_d3 = this.document.createElement("div");
div_bet_3_right.appendChild(div_timecuoc_d3);
const input_timecuoc_d3 = this.document.createElement("input");
input_timecuoc_d3.type = "text";
input_timecuoc_d3.classList.add("form-control");
input_timecuoc_d3.value = month_date_hours_minutes();
div_timecuoc_d3.append(label_timecuoc.cloneNode(true), input_timecuoc_d3);

// Chọn kèo tài xỉu/ Hồng Kông
const div_tx_d3 = this.document.createElement("div");
div_bet_3_right.appendChild(div_tx_d3);
const select_tx_d3 = this.document.createElement("select");
select_tx_d3.classList.add("select");
const option_tx1_d3 = this.document.createElement("option");
option_tx1_d3.value = "1";
option_tx1_d3.textContent = "Kèo Tài Xỉu";
const option_tx2_d3 = this.document.createElement("option");
option_tx2_d3.value = "2";
option_tx2_d3.textContent = "Kèo cược chấp";
select_tx_d3.append(option_tx1_d3, option_tx2_d3);
div_tx_d3.append(label_tx.cloneNode(true), select_tx_d3)

// Tỷ lệ ăn cược Châu Âu/ Hồng Kông
const div_ancuoc_d3 = this.document.createElement("div");
div_bet_3_right.appendChild(div_ancuoc);
const select_ancuoc_d3 = this.document.createElement("select");
select_ancuoc_d3.classList.add("select");
const option_ancuoc1_d3 = this.document.createElement("option");
option_ancuoc1_d3.value = "1";
option_ancuoc1_d3.textContent = "Hồng Kông";
const option_ancuoc2_d3 = this.document.createElement("option");
option_ancuoc2_d3.value = "2";
option_ancuoc2_d3.textContent = "Châu Âu";
select_ancuoc_d3.append(option_ancuoc1_d3, option_ancuoc2_d3);
div_ancuoc_d3.append(label_ancuoc.cloneNode(true), select_ancuoc_d3);

row_bot.appendChild(br_game.cloneNode(true))

// left_bot.append()
// End nội dung đơn 3

// Button tạo đơn và câu cảnh báo
const div_button_import_data = document.createElement('div')
div_button_import_data.classList.add('w-50')
div_button_import_data.style.margin = '0px auto'
const button_import_data = document.createElement('button')
button_import_data.classList.add('btn', 'btn-success', 'w-100')
button_import_data.textContent = "Tạo đơn rút tiền mới"
div_button_import_data.appendChild(button_import_data)

const warning_notify = document.createElement('h6')
warning_notify.style.textAlign = "center"
warning_notify.innerHTML = "<i style='color:red'>Những mục đánh dấu (*) là dữ liệu tạo tự động, có thể chỉnh sửa nếu cần thiết</i>"

form.append(warning_notify, div_button_import_data)

// Tùy chỉnh 1-2-3 đơn
select_orders.addEventListener('change', function () {
    const photo_show = document.querySelector('#photo_show')
    if (select_orders.value == 1) {
        right_mid.innerHTML = ''
        left_bot.innerHTML = ''
        if(select_cate.value == '1') {
            photo_show.src = 'photo-ball-bv/mau1_1don.png'
        }
        else if(select_cate.value == '2') {
            photo_show.src = 'photo-ball-bv/mau2_1don.png'
        }
    } else if (select_orders.value == 2) {
        left_bot.innerHTML = ''
        right_mid.append(h4_don2)
        if(select_cate.value == '1') {
            photo_show.src = 'photo-ball-bv/mau1_2don.png'
        }
        else if(select_cate.value == '2') {
            photo_show.src = 'photo-ball-bv/mau2_2don.png'
        }
    } else if (select_orders.value == 3) {
        right_mid.append(h4_don2)
        left_bot.append(h4_don3)
        if(select_cate.value == '1') {
            photo_show.src = 'photo-ball-bv/mau1_3don.png'
        }
        else if(select_cate.value == '2') {
            photo_show.src = 'photo-ball-bv/mau2_3don.png'
        }
    }
})
// End Tùy chỉnh 1-2-3 đơn

// Đưa dữ liệu vào ảnh
button_import_data.addEventListener('click', function () {
    const div_import = document.querySelector('#new-bet-ball-bv')
    div_import.innerHTML = ''
    if(select_cate.value == 1) {
        for_phone_m1(div_import)
        if (select_orders.value == 1) {
            import_data1(div_import)
        }
        else if(select_orders.value == 2) {
            import_data2(div_import)
        }
        else if(select_orders.value == 3) {
            import_data3(div_import)
        }
    }
    else if(select_cate.value == 2) {
        for_phone_m2(div_import)
        if (select_orders.value == 1) {
            import_data1_v2(div_import)
        }
        else if(select_orders.value == 2) {
            import_data2_v2(div_import)
        }
        else if(select_orders.value == 3) {
            import_data3_v2(div_import)
        }
    }
})
// End thông tin đơn cược 1
// End đưa dữ liệu vào ảnh

var create_bill_bet = document.querySelector('#button-to-img')
if (create_bill_bet) {
    create_bill_bet.addEventListener("click", function () {
        window.scrollTo(0, 0);
        html2canvas(document.querySelector("#new-bet-ball-bv")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new_bet_Bongvip.jpg';
            a.click();
            location.reload()
        });
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tinhNgayThang(soNgay) {
    const hienTai = new Date();

    const themSo0 = (so) => (so < 10 ? `0${so}` : so);

    if (soNgay !== 0) {
        const ngayDaThayDoi = new Date(hienTai);
        ngayDaThayDoi.setDate(hienTai.getDate() + soNgay);
        const thang = themSo0(ngayDaThayDoi.getMonth() + 1);
        const ngay = themSo0(ngayDaThayDoi.getDate());
        return `${thang}/${ngay}`;
    } else {
        const ngay = themSo0(hienTai.getDate());
        const thang = themSo0(hienTai.getMonth() + 1);
        return `${thang}/${ngay}`;
    }
}

function hours_minutes() {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();

    // Thêm số 0 vào trước giờ nếu giờ < 10
    hour = hour < 10 ? "0" + hour : hour;

    // Thêm số 0 vào trước phút nếu phút < 10
    minute = minute < 10 ? "0" + minute : minute;

    return hour + ":" + minute;
}

function month_date_hours_minutes() {
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


function getCurrentDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var day = now.getDate().toString().padStart(2, '0');
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var dateTimeString = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    return dateTimeString;
}

function formatMoney(number) {
    var formatter = new Intl.NumberFormat('en-US');
    return formatter.format(number);
}

const import_img = (url_photo) => {
    const div_import = document.querySelector('#new-bet-ball-bv')
    const photo_don1 = document.createElement('img')
    photo_don1.src = `${url_photo}`
    photo_don1.setAttribute('id', 'photo_show')
    div_import.appendChild(photo_don1)
}
const for_phone_m1 = (div_import) => {

    const clock = document.createElement('div')
    clock.classList.add('clock')
    clock.textContent = input_clock.value

    const battery = document.createElement('div')
    battery.classList.add('battery')
    battery.style.width = (47 * input_battery.value / 100) + 'px'
    battery.style.background = 'black'
    if (input_battery.value <= 20) {
        battery.style.background = 'red'
    }

    const wifi = document.createElement('div')
    const img_wifi = document.createElement('img')
    img_wifi.style.width = '100%'
    wifi.classList.add('wifi')
    wifi.appendChild(img_wifi)
    img_wifi.src = '../photo/icon_wifi_black.jpg'
    wifi.innerHTML = ''
    if (select_wifi.value == 1) {
        wifi.appendChild(img_wifi)
    } else if (select_wifi.value == 2) {
        wifi.textContent = 'LTE'
        wifi.classList.add('wifi-text')
        wifi.classList.remove('wifi')
    } else {
        wifi.textContent = '4G'
        wifi.classList.add('wifi-text')
        wifi.classList.remove('wifi')
    }

    if (select_total_sim.value == 1) {
        const signal = document.createElement('div')
        signal.classList.add('signal')
        for (let i = 1; i <= select_signal1.value; i++) {
            const bar = document.createElement('div')
            bar.classList.add('bar', 'background_black')
            signal.appendChild(bar)
        }
        const signal_invi = document.createElement('div')
        signal_invi.classList.add('signal')
        for (let i = 1; i <= 4; i++) {
            const bar_invi = document.createElement('div')
            bar_invi.classList.add('bar', 'background_invi')
            signal_invi.appendChild(bar_invi)
        }
        div_import.append(signal_invi, signal)
    } else {
        const signal1 = document.createElement('div')
        signal1.classList.add('signal1')
        for (let i = 1; i <= select_signal1.value; i++) {
            const bar1 = document.createElement('div')
            bar1.classList.add('bar1', 'background_black')
            signal1.appendChild(bar1)
        }
        const signal1_invi = document.createElement('div')
        signal1_invi.classList.add('signal1')
        for (let i = 1; i <= 4; i++) {
            const bar1_invi = document.createElement('div')
            bar1_invi.classList.add('bar1', 'background_invi')
            signal1_invi.appendChild(bar1_invi)
        }

        const signal2 = document.createElement('div')
        signal2.classList.add('signal2')
        for (let i = 1; i <= select_signal2.value; i++) {
            const bar2 = document.createElement('div')
            bar2.classList.add('bar2', 'background_black')
            signal2.appendChild(bar2)
        }
        const signal2_invi = document.createElement('div')
        signal2_invi.classList.add('signal2')
        for (let i = 1; i <= 4; i++) {
            const bar2_invi = document.createElement('div')
            bar2_invi.classList.add('bar2', 'background_invi')
            signal2_invi.appendChild(bar2_invi)
        }
        div_import.append(signal1_invi, signal1, signal2_invi, signal2)
    }

    const custom_icon = document.createElement('div')
    custom_icon.classList.add('custom_icon')
    const img_custom_icon = document.createElement('img')
    img_custom_icon.style.width = '100%'
    const number_custom_icon = getRandomInt(1, 3)
    if (number_custom_icon == 1) {
        img_custom_icon.src = '../photo/clock_black.png'
    } else if (number_custom_icon == 2) {
        img_custom_icon.src = '../photo/location_black.png'
    }
    custom_icon.appendChild(img_custom_icon)

    div_import.append(clock, battery, wifi, custom_icon)
    // End Phụ trợ của điện thoại
}

const for_phone_m2 = (div_import) => {

    const clock = document.createElement('div')
    clock.classList.add('clock_v2')
    clock.textContent = input_clock.value

    const battery = document.createElement('div')
    battery.classList.add('battery_v2')
    battery.style.width = (47 * input_battery.value / 100) + 'px'
    battery.style.background = 'black'
    if (input_battery.value <= 20) {
        battery.style.background = 'red'
    }

    const wifi = document.createElement('div')
    const img_wifi = document.createElement('img')
    img_wifi.style.width = '100%'
    wifi.classList.add('wifi_v2')
    wifi.appendChild(img_wifi)
    img_wifi.src = '../photo/icon_wifi_black.jpg'
    wifi.innerHTML = ''
    if (select_wifi.value == 1) {
        wifi.appendChild(img_wifi)
    } else if (select_wifi.value == 2) {
        wifi.textContent = 'LTE'
        wifi.classList.add('wifi-text_v2')
        wifi.classList.remove('wifi_v2')
    } else {
        wifi.textContent = '4G'
        wifi.classList.add('wifi-text_v2')
        wifi.classList.remove('wifi_v2')
    }

    if (select_total_sim.value == 1) {
        const signal = document.createElement('div')
        signal.classList.add('signal_v2')
        for (let i = 1; i <= select_signal1.value; i++) {
            const bar = document.createElement('div')
            bar.classList.add('bar_v2', 'background_black')
            signal.appendChild(bar)
        }
        const signal_invi = document.createElement('div')
        signal_invi.classList.add('signal_v2')
        for (let i = 1; i <= 4; i++) {
            const bar_invi = document.createElement('div')
            bar_invi.classList.add('bar_v2', 'background_invi')
            signal_invi.appendChild(bar_invi)
        }
        div_import.append(signal_invi, signal)
    } else {
        const signal1 = document.createElement('div')
        signal1.classList.add('signal1_v2')
        for (let i = 1; i <= select_signal1.value; i++) {
            const bar1 = document.createElement('div')
            bar1.classList.add('bar1_v2', 'background_black')
            signal1.appendChild(bar1)
        }
        const signal1_invi = document.createElement('div')
        signal1_invi.classList.add('signal1_v2')
        for (let i = 1; i <= 4; i++) {
            const bar1_invi = document.createElement('div')
            bar1_invi.classList.add('bar1_v2', 'background_invi')
            signal1_invi.appendChild(bar1_invi)
        }

        const signal2 = document.createElement('div')
        signal2.classList.add('signal2_v2')
        for (let i = 1; i <= select_signal2.value; i++) {
            const bar2 = document.createElement('div')
            bar2.classList.add('bar2_v2', 'background_black')
            signal2.appendChild(bar2)
        }
        const signal2_invi = document.createElement('div')
        signal2_invi.classList.add('signal2_v2')
        for (let i = 1; i <= 4; i++) {
            const bar2_invi = document.createElement('div')
            bar2_invi.classList.add('bar2_v2', 'background_invi')
            signal2_invi.appendChild(bar2_invi)
        }
        div_import.append(signal1_invi, signal1, signal2_invi, signal2)
    }

    const custom_icon = document.createElement('div')
    custom_icon.classList.add('custom_icon_v2')
    const img_custom_icon = document.createElement('img')
    img_custom_icon.style.width = '100%'
    const number_custom_icon = getRandomInt(1, 3)
    if (number_custom_icon == 1) {
        img_custom_icon.src = '../photo/clock_black.png'
    } else if (number_custom_icon == 2) {
        img_custom_icon.src = '../photo/location_black.png'
    }
    custom_icon.appendChild(img_custom_icon)

    div_import.append(clock, battery, wifi, custom_icon)
    // End Phụ trợ của điện thoại
}

function import_data1(div_import) {
    const url_photo = 'photo-ball-bv/mau1_1don.png'
    import_img(url_photo)

    // Thông tin đơn cược 1
    div_import.append()
}

function import_data2(div_import) {
    const url_photo = 'photo-ball-bv/mau1_2don.png'
    import_img(url_photo)

    div_import.append()
}

function import_data3(div_import) {
    const url_photo = 'photo-ball-bv/mau1_3don.png'
    import_img(url_photo)

    div_import.append()
}

function import_data1_v2(div_import) {
    const url_photo = 'photo-ball-bv/mau2_1don.png'
    import_img(url_photo)

    // Thông tin đơn cược 1
    div_import.append()
}

function import_data2_v2(div_import) {
    const url_photo = 'photo-ball-bv/mau2_2don.png'
    import_img(url_photo)

    div_import.append()
}

function import_data3_v2(div_import) {
    const url_photo = 'photo-ball-bv/mau2_3don.png'
    import_img(url_photo)
    div_import.append()
}