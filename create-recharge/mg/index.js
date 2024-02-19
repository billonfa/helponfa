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

const form = document.querySelector('#form_2')

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

top_left.append(div_clock, div_total_sim, div_signal1, div_signal2)
// End Phần điện thoại

// Phần nội Option (ở trên bên phải)
const top_right = document.createElement('div')
top_right.classList.add('col-6')
row_top.appendChild(top_right)

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

const div_battery = document.createElement('div')
const label_battery = document.createElement('label')
label_battery.classList.add('form-label')
label_battery.textContent = "Phần trăm pin"
label_battery.appendChild(data_auto.cloneNode(true))
const input_battery = document.createElement('input')
input_battery.classList.add('form-control')
input_battery.value = getRandomInt(18, 85)
div_battery.append(label_battery, input_battery)

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

top_right.append(div_wifi, div_battery, div_orders)
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
h4_don1.textContent = "Thông tin rút tiền Đơn thứ 1"
h4_don1.classList.add('h4-don1')

const div_detail_time = document.createElement('div')
const label_deltail_time = document.createElement('label')
label_deltail_time.classList.add('form-label')
label_deltail_time.textContent = `Thời gian chi tiết`
label_deltail_time.appendChild(data_auto.cloneNode(true))
const input_detail_time = document.createElement('input')
input_detail_time.classList.add('form-control')
input_detail_time.value = getCurrentDateTime()
div_detail_time.append(label_deltail_time, input_detail_time)

const div_status = document.createElement('div')
const label_status = document.createElement('label')
label_status.classList.add('form-label')
label_status.textContent = "Trạng Thái Rút Tiền"
label_status.appendChild(data_auto.cloneNode(true))
const select_status = document.createElement('select')
select_status.classList.add('select')
const option1_status = document.createElement('option')
option1_status.textContent = 'Thành Công'
option1_status.value = 'Thành Công'
const option2_status = document.createElement('option')
option2_status.textContent = 'Đang xử lý'
option2_status.value = 'Đang xử lý'
const option3_status = document.createElement('option')
option3_status.textContent = 'Rút tiền thất bại'
option3_status.value = 'Rút tiền thất bại'
const option4_status = document.createElement('option')
option4_status.textContent = 'Kiểm duyệt thành công'
option4_status.value = 'Kiểm duyệt thành công'
select_status.append(option1_status)
div_status.append(label_status, select_status)

const div_price = document.createElement('div')
const label_price = document.createElement('label')
label_price.classList.add('form-label')
label_price.textContent = "Số tiền rút"
label_price.appendChild(data_auto.cloneNode(true))
const input_price = document.createElement('input')
input_price.classList.add('form-control')
input_price.value = (getRandomInt(1, 20) * 100)
div_price.append(label_price, input_price)

left_mid.append(h4_don1, div_detail_time, div_status, div_price)
// End Phần nội dung đơn 1

// Phần nội dung đơn 2 (Ở giữa bên phải)
const right_mid = document.createElement('div')
right_mid.classList.add('col-6')
row_mid.appendChild(right_mid)

const h4_don2 = document.createElement('h4')
h4_don2.textContent = "Thông tin rút tiền Đơn thứ 2"
h4_don2.classList.add('h4-don1')

const div_detail_time_d2 = document.createElement('div')
const input_detail_time_d2 = document.createElement('input')
input_detail_time_d2.classList.add('form-control')
input_detail_time_d2.value = getCurrentDateTime()
div_detail_time_d2.append(label_deltail_time.cloneNode(true), input_detail_time_d2)

const div_status_d2 = document.createElement('div')
const select_status_d2 = document.createElement('select')
select_status_d2.classList.add('select')
const option1_status_d2 = document.createElement('option')
option1_status_d2.textContent = 'Thành Công'
option1_status_d2.value = 'Thành Công'
const option2_status_d2 = document.createElement('option')
option2_status_d2.textContent = 'Đang xử lý'
option2_status_d2.value = 'Đang xử lý'
const option3_status_d2 = document.createElement('option')
option3_status_d2.textContent = 'Rút tiền thất bại'
option3_status_d2.value = 'Rút tiền thất bại'
const option4_status_d2 = document.createElement('option')
option4_status_d2.textContent = 'Kiểm duyệt thành công'
option4_status_d2.value = 'Kiểm duyệt thành công'
select_status_d2.append(option1_status_d2)
div_status_d2.append(label_status.cloneNode(true), select_status_d2)

const div_price_d2 = document.createElement('div')
const input_price_d2 = document.createElement('input')
input_price_d2.classList.add('form-control')
input_price_d2.value = (getRandomInt(1, 20) * 100)
div_price_d2.append(label_price.cloneNode(true), input_price_d2)

// right_mid.append(h4_don2, div_detail_time_d2, div_status_d2, div_price_d2)
row_mid.appendChild(br_game.cloneNode(true))
// End phần nội dung đơn 2 

// Nội dung đơn 3 (Ở dưới bên trái)
const bot_row = document.createElement('div')
bot_row.classList.add('row')
form.appendChild(bot_row)
const left_bot = document.createElement('div')
left_bot.classList.add('col-6')
bot_row.appendChild(left_bot)

const h4_don3 = document.createElement('h4')
h4_don3.textContent = "Thông tin rút tiền Đơn thứ 3"
h4_don3.classList.add('h4-don1')

const div_detail_time_d3 = document.createElement('div')
const input_detail_time_d3 = document.createElement('input')
input_detail_time_d3.classList.add('form-control')
input_detail_time_d3.value = getCurrentDateTime()
div_detail_time_d3.append(label_deltail_time.cloneNode(true), input_detail_time_d3)

const div_status_d3 = document.createElement('div')
const select_status_d3 = document.createElement('select')
select_status_d3.classList.add('select')
const option1_status_d3 = document.createElement('option')
option1_status_d3.textContent = 'Thành Công'
option1_status_d3.value = 'Thành Công'
const option2_status_d3 = document.createElement('option')
option2_status_d3.textContent = 'Đang xử lý'
option2_status_d3.value = 'Đang xử lý'
const option3_status_d3 = document.createElement('option')
option3_status_d3.textContent = 'Rút tiền thất bại'
option3_status_d3.value = 'Rút tiền thất bại'
const option4_status_d3 = document.createElement('option')
option4_status_d3.textContent = 'Kiểm duyệt thành công'
option4_status_d3.value = 'Kiểm duyệt thành công'
select_status_d3.append(option1_status_d3)
div_status_d3.append(label_status.cloneNode(true), select_status_d3)

const div_price_d3 = document.createElement('div')
const input_price_d3 = document.createElement('input')
input_price_d3.classList.add('form-control')
input_price_d3.value = (getRandomInt(1, 20) * 100)
div_price_d3.append(label_price.cloneNode(true), input_price_d3)

// left_bot.append(h4_don3, div_detail_time_d3, div_status_d3, div_price_d3)
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
// 

// Tùy chỉnh 1-2-3 đơn
select_orders.addEventListener('change', function () {
    const photo_show = document.querySelector('#photo_show')
    if (select_orders.value == 1) {
        right_mid.innerHTML = ''
        left_bot.innerHTML = ''
        photo_show.src = 'photo-recharge/mg_1don.png'
    } else if (select_orders.value == 2) {
        left_bot.innerHTML = ''
        right_mid.append(h4_don2, div_detail_time_d2, div_status_d2, div_price_d2)
        photo_show.src = 'photo-recharge/mg_2don.png'
    } else if (select_orders.value == 3) {
        right_mid.append(h4_don2, div_detail_time_d2, div_status_d2, div_price_d2)
        left_bot.append(h4_don3, div_detail_time_d3, div_status_d3, div_price_d3)
        photo_show.src = 'photo-recharge/mg_3don.png'
    }
})
// End Tùy chỉnh 1-2-3 đơn

// Đưa dữ liệu vào ảnh
button_import_data.addEventListener('click', function () {
    const div_import = document.querySelector('#new-bet-ball')
    if (select_orders.value == 1) {
        import_data1(div_import)
    }
    else if(select_orders.value == 2) {
        import_data2(div_import)
    }
    else if(select_orders.value == 3) {
        import_data3(div_import)
    }
})
// End thông tin đơn cược 1
// End đưa dữ liệu vào ảnh

var create_bill_bet = document.querySelector('#create_bill2')
if (create_bill_bet) {
    create_bill_bet.addEventListener("click", function () {
        window.scrollTo(0, 0);
        html2canvas(document.querySelector("#new-bet-ball")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new-recharge-MG188.jpg';
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
        const ngay = themSo0(ngayDaThayDoi.getDate());
        const thang = themSo0(ngayDaThayDoi.getMonth() + 1);
        return `${ngay}/${thang}`;
    } else {
        const ngay = themSo0(hienTai.getDate());
        const thang = themSo0(hienTai.getMonth() + 1);
        return `${ngay}/${thang}`;
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

function import_data1(div_import) {
    div_import.innerHTML = ''
    const photo_don1 = document.createElement('img')
    photo_don1.src = 'photo-recharge/mg_1don.png'
    photo_don1.setAttribute('id', 'photo_show')
    photo_don1.style.width = '800px'
    const photo_demo = document.createElement('img')
    photo_demo.src = 'photo-recharge/demo_mg_1.jpg'
    photo_demo.style.width = '800px'
    div_import.append(photo_don1)

    const clock = document.createElement('div')
    clock.classList.add('clock')
    clock.textContent = input_clock.value

    const battery = document.createElement('div')
    battery.classList.add('battery')
    battery.style.width = (41 * input_battery.value / 100) + 'px'
    battery.style.background = 'white'
    if (input_battery.value <= 20) {
        battery.style.background = 'red'
    }

    const wifi = document.createElement('div')
    const img_wifi = document.createElement('img')
    img_wifi.style.width = '100%'
    wifi.classList.add('wifi')
    wifi.appendChild(img_wifi)
    img_wifi.src = '../photo/icon_wifi_white.jpg'
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
            bar.classList.add('bar', 'background_white')
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
            bar1.classList.add('bar1', 'background_white')
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
            bar2.classList.add('bar2', 'background_white')
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
        img_custom_icon.src = '../photo/clock_white.png'
    } else if (number_custom_icon == 2) {
        img_custom_icon.src = '../photo/location_white.png'
    }
    custom_icon.appendChild(img_custom_icon)

    div_import.append(clock, battery, wifi, custom_icon)
    // End Phụ trợ của điện thoại

    // Thông tin đơn cược 1
    const detail_time = document.createElement('div')
    detail_time.classList.add('detail_time')
    detail_time.textContent = input_detail_time.value
    const withdrawal = document.createElement('div')
    withdrawal.classList.add('withdrawal')
    withdrawal.textContent = (input_price.value) + '.00'

    const trade_code = document.createElement('div')
    trade_code.classList.add('trade_code')
    trade_code.textContent = 'G16768' + getRandomInt(100000000, 999999999) + '600000' + getRandomInt(1000, 9999) 
    // trade_code.textContent = 'G167680592565916000006206'

    const status_import = document.createElement('div')
    status_import.classList.add('status')
    status_import.textContent = select_status.value

    div_import.append(detail_time, withdrawal, trade_code, status_import)
}

function import_data2(div_import) {
    div_import.innerHTML = ''
    const photo_don1 = document.createElement('img')
    photo_don1.src = 'photo-recharge/mg_2don.png'
    photo_don1.setAttribute('id', 'photo_show')
    photo_don1.style.width = '800px'
    const photo_demo = document.createElement('img')
    photo_demo.src = 'photo-recharge/demo_mg_1.jpg'
    photo_demo.style.width = '800px'
    div_import.append(photo_don1)

    const clock = document.createElement('div')
    clock.classList.add('clock_v2')
    clock.textContent = input_clock.value

    const battery = document.createElement('div')
    battery.classList.add('battery_v2')
    battery.style.width = (41 * input_battery.value / 100) + 'px'
    battery.style.background = 'white'
    if (input_battery.value <= 20) {
        battery.style.background = 'red'
    }

    const wifi = document.createElement('div')
    const img_wifi = document.createElement('img')
    img_wifi.style.width = '100%'
    wifi.classList.add('wifi_v2')
    wifi.appendChild(img_wifi)
    img_wifi.src = '../photo/icon_wifi_white.jpg'
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
            bar.classList.add('bar_v2', 'background_white')
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
            bar1.classList.add('bar1_v2', 'background_white')
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
            bar2.classList.add('bar2_v2', 'background_white')
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
        img_custom_icon.src = '../photo/clock_white.png'
    } else if (number_custom_icon == 2) {
        img_custom_icon.src = '../photo/location_white.png'
    }
    custom_icon.appendChild(img_custom_icon)

    div_import.append(clock, battery, wifi, custom_icon)
    // End Phụ trợ của điện thoại

    // Thông tin đơn cược 1
    const detail_time = document.createElement('div')
    detail_time.classList.add('detail_time_v2')
    detail_time.textContent = input_detail_time.value
    const withdrawal = document.createElement('div')
    withdrawal.classList.add('withdrawal_v2')
    withdrawal.textContent = (input_price.value) + '.00'

    const trade_code = document.createElement('div')
    const number_trade_code = 'G16768' + getRandomInt(100000000, 999999999) + '600000' + getRandomInt(1000, 9999)
    trade_code.classList.add('trade_code_v2')
    trade_code.textContent = number_trade_code

    const status_import = document.createElement('div')
    status_import.classList.add('status_v2')
    status_import.textContent = select_status.value

    div_import.append(detail_time, withdrawal, trade_code, status_import)
    // End thông tin đơn cược 1

    // Thông tin đơn cược 2
    const detail_time_d2 = document.createElement('div')
    detail_time_d2.classList.add('detail_time_v2_d2')
    detail_time_d2.textContent = input_detail_time_d2.value

    const withdrawal_d2 = document.createElement('div')
    withdrawal_d2.classList.add('withdrawal_v2_d2')
    withdrawal_d2.textContent = (input_price_d2.value) + '.00'

    const trade_code_d2 = document.createElement('div')
    trade_code_d2.classList.add('trade_code_v2_d2')
    trade_code_d2.textContent = 'G16768' + getRandomInt(100000000, 999999999) + '600000' + getRandomInt(1000, 9999) 

    const status_import_d2 = document.createElement('div')
    status_import_d2.classList.add('status_v2_d2')
    status_import_d2.textContent = select_status_d2.value

    var new_price = input_price.value.replace(/,/g,"")
    var new_price_d2 = input_price_d2.value.replace(/,/g,"")
    const total_price = formatMoney(parseInt(new_price) + parseInt(new_price_d2))

    // End Thông tin đơn cược 2
    div_import.append(detail_time_d2, withdrawal_d2, trade_code_d2, status_import_d2)
}

function import_data3(div_import) {
    div_import.innerHTML = ''
    const photo_don1 = document.createElement('img')
    photo_don1.src = 'photo-recharge/mg_3don.png'
    photo_don1.setAttribute('id', 'photo_show')
    photo_don1.style.width = '800px'
    const photo_demo = document.createElement('img')
    photo_demo.src = 'photo-recharge/demo_mg_1.jpg'
    photo_demo.style.width = '800px'
    div_import.append(photo_don1)

    const clock = document.createElement('div')
    clock.classList.add('clock_v2')
    clock.textContent = input_clock.value

    const battery = document.createElement('div')
    battery.classList.add('battery_v2')
    battery.style.width = (41 * input_battery.value / 100) + 'px'
    battery.style.background = 'white'
    if (input_battery.value <= 20) {
        battery.style.background = 'red'
    }

    const wifi = document.createElement('div')
    const img_wifi = document.createElement('img')
    img_wifi.style.width = '100%'
    wifi.classList.add('wifi_v2')
    wifi.appendChild(img_wifi)
    img_wifi.src = '../photo/icon_wifi_white.jpg'
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
            bar.classList.add('bar_v2', 'background_white')
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
            bar1.classList.add('bar1_v2', 'background_white')
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
            bar2.classList.add('bar2_v2', 'background_white')
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
        img_custom_icon.src = '../photo/clock_white.png'
    } else if (number_custom_icon == 2) {
        img_custom_icon.src = '../photo/location_white.png'
    }
    custom_icon.appendChild(img_custom_icon)

    div_import.append(clock, battery, wifi, custom_icon)
    // End Phụ trợ của điện thoại

    // Thông tin đơn cược 1
    const detail_time = document.createElement('div')
    detail_time.classList.add('detail_time_v2')
    detail_time.textContent = input_detail_time.value

    const withdrawal = document.createElement('div')
    withdrawal.classList.add('withdrawal_v2')
    withdrawal.textContent = (input_price.value) + '.00'

    const trade_code = document.createElement('div')
    const number_trade_code = 'G16768' + getRandomInt(100000000, 999999999) + '600000' + getRandomInt(1000, 9999) 
    trade_code.classList.add('trade_code_v2')
    trade_code.textContent = number_trade_code

    const status_import = document.createElement('div')
    status_import.classList.add('status_v2')
    status_import.textContent = select_status.value

    div_import.append(detail_time, withdrawal, trade_code, status_import)
    // End thông tin đơn cược 1

    // Thông tin đơn cược 2
    const detail_time_d2 = document.createElement('div')
    detail_time_d2.classList.add('detail_time_v2_d2')
    detail_time_d2.textContent = input_detail_time_d2.value

    const withdrawal_d2 = document.createElement('div')
    withdrawal_d2.classList.add('withdrawal_v2_d2')
    withdrawal_d2.textContent = (input_price_d2.value) + '.00'

    const trade_code_d2 = document.createElement('div')
    trade_code_d2.classList.add('trade_code_v2_d2')
    trade_code_d2.textContent = 'G16768' + getRandomInt(100000000, 999999999) + '600000' + getRandomInt(1000, 9999) 

    const status_import_d2 = document.createElement('div')
    status_import_d2.classList.add('status_v2_d2')
    status_import_d2.textContent = select_status_d2.value
    // End Thông tin đơn cược 2
    div_import.append(detail_time_d2, withdrawal_d2, trade_code_d2, status_import_d2)

    // Thông tin đơn cược 3
    const detail_time_d3 = document.createElement('div')
    detail_time_d3.classList.add('detail_time_v2_d3')
    detail_time_d3.textContent = input_detail_time_d3.value

    const status_import_d3 = document.createElement('div')
    status_import_d3.classList.add('status_v2_d3')

    const withdrawal_d3 = document.createElement('div')
    withdrawal_d3.classList.add('withdrawal_v2_d3')
    withdrawal_d3.textContent = (input_price_d3.value) + '.00'

    const trade_code_d3 = document.createElement('div')
    trade_code_d3.classList.add('trade_code_v2_d3')
    trade_code_d3.textContent = 'G16768' + getRandomInt(100000000, 999999999) + '600000' + getRandomInt(1000, 9999) 

    var new_price = input_price.value.replace(/,/g,"")
    var new_price_d2 = input_price_d2.value.replace(/,/g,"")
    var new_price_d3 = input_price_d3.value.replace(/,/g,"")
    const total_price = formatMoney(parseInt(new_price) + parseInt(new_price_d2) + parseInt(new_price_d3))

    // End Thông tin đơn cược 3
    div_import.append(detail_time_d3, withdrawal_d3, trade_code_d3)

}