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
const div_option = document.createElement('div')
const div_import = document.querySelector('#info_phone')
const img_header = document.querySelector('#header_phone')
const img_footer = document.querySelector('#footer_phone')

const data_auto = document.createElement('span')
data_auto.classList.add('data_auto')
data_auto.textContent = " (*)"
const br_game = document.createElement('div')
br_game.classList.add('br_game')
const br_ngang = document.createElement('div')
br_ngang.classList.add('br_ngang1')

const div_img_import = document.createElement('div')
const label_img_import = document.createElement('label')
label_img_import.classList.add('form-label')
label_img_import.textContent = 'Hình ảnh'
const input_img_import = document.createElement('input')
input_img_import.classList.add('form-control')
input_img_import.type = "file"; // Loại input là file
input_img_import.id = "imageInput"; // ID của input
input_img_import.accept = "image/*"; // Chấp nhận tất cả loại hình ảnh
input_img_import.id = 'imageInput'
div_img_import.append(label_img_import, input_img_import)

// Chọn Iphone và adroid
const div_adroid_iphone = document.createElement('div')
const label_adroid_iphone = document.createElement('label')
label_adroid_iphone.classList.add('form-label')
label_adroid_iphone.textContent = 'Loại điện thoại'
label_adroid_iphone.appendChild(data_auto.cloneNode(true))
const select_adroid_iphone = document.createElement('select')
select_adroid_iphone.classList.add('select')
const option_adroid_iphone1 = document.createElement('option')
option_adroid_iphone1.textContent = 'Iphone'
option_adroid_iphone1.value = 1
const option_adroid_iphone2 = document.createElement('option')
option_adroid_iphone2.textContent = 'Adroid'
option_adroid_iphone2.value = 2
select_adroid_iphone.append(option_adroid_iphone1, option_adroid_iphone2)
div_adroid_iphone.append(label_adroid_iphone, select_adroid_iphone)
// End Chọn Iphone và adroid

// Phần điện thoại (ở trên bên trái)
// Phần Iphone
const row_top = document.createElement('div')
row_top.classList.add('row')
div_option.appendChild(row_top)
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

const div_battery_yellow = document.createElement('div')
const label_battery_yellow = document.createElement('label')
label_battery_yellow.classList.add('form-label')
label_battery_yellow.textContent = 'Pin vàng'
label_battery_yellow.appendChild(data_auto.cloneNode(true))
const select_battery_yellow = document.createElement('select')
select_battery_yellow.classList.add('select')
const option_battery_yellow1 = document.createElement('option')
option_battery_yellow1.textContent = 'Không'
option_battery_yellow1.value = 1
const option_battery_yellow2 = document.createElement('option')
option_battery_yellow2.textContent = 'Có'
option_battery_yellow2.value = 2
select_battery_yellow.append(option_battery_yellow1, option_battery_yellow2)
div_battery_yellow.append(label_battery_yellow, select_battery_yellow)

const div_text_battery = document.createElement('div')
const label_text_battery = document.createElement('label')
label_text_battery.classList.add('form-label')
label_text_battery.textContent = 'Hiển thị % pin'
const select_text_battery = document.createElement('select')
select_text_battery.classList.add('select')
const option_text_battery1 = document.createElement('option')
option_text_battery1.textContent = 'Không'
option_text_battery1.value = 1
const option_text_battery2 = document.createElement('option')
option_text_battery2.textContent = 'Có'
option_text_battery2.value = 2
select_text_battery.append(option_text_battery1, option_text_battery2)
div_text_battery.append(label_text_battery, select_text_battery)

const div_cate_phone = document.createElement('div')
const label_cate_phone = document.createElement('label')
label_cate_phone.classList.add('form-label')
label_cate_phone.textContent = 'Mẫu'
label_cate_phone.appendChild(data_auto.cloneNode(true))
const select_cate_phone = document.createElement('select')
select_cate_phone.classList.add('select')
const option_cate_phone1 = document.createElement('option')
option_cate_phone1.textContent = 1
const option_cate_phone2 = document.createElement('option')
option_cate_phone2.textContent = 2
select_cate_phone.append(option_cate_phone1, option_cate_phone2)
div_cate_phone.append(label_cate_phone, select_cate_phone)

top_right.append(div_battery, div_battery_yellow, div_cate_phone)
div_option.appendChild(br_game)
// End phần iphone

// Phần Adroid
const div_row_top_adroid = document.createElement('div')
div_row_top_adroid.classList.add('row')
const div_clock_adroid = document.createElement('div')
const input_clock_adroid = document.createElement('input')
input_clock_adroid.classList.add('form-control')
input_clock_adroid.value = hours_minutes()
div_clock_adroid.append(label_clock.cloneNode(true), input_clock_adroid)

const div_cate_phone_adroid = document.createElement('div')
const select_cate_phone_adroid = document.createElement('select')
select_cate_phone_adroid.classList.add('select')
const option_cate_phone_adroid1 = document.createElement('option')
option_cate_phone_adroid1.textContent = 'Mẫu 1 (Trình duyệt)'
option_cate_phone_adroid1.value = 1
const option_cate_phone_adroid2 = document.createElement('option')
option_cate_phone_adroid2.textContent = 'Mẫu 1 (App)'
option_cate_phone_adroid2.value = 2
const option_cate_phone_adroid3 = document.createElement('option')
option_cate_phone_adroid3.textContent = 'Mẫu 2 (Trình duyệt)'
option_cate_phone_adroid3.value = 3
const option_cate_phone_adroid4 = document.createElement('option')
option_cate_phone_adroid4.textContent = 'Mẫu 2 (App)'
option_cate_phone_adroid4.value = 4
select_cate_phone_adroid.append(option_cate_phone_adroid1, option_cate_phone_adroid2, option_cate_phone_adroid3, option_cate_phone_adroid4)
div_cate_phone_adroid.append(label_cate_phone.cloneNode(true), select_cate_phone_adroid)

div_row_top_adroid.append(div_clock_adroid, div_cate_phone_adroid)
// End phần Adroid

select_adroid_iphone.addEventListener('change', function() {
    if(select_adroid_iphone.value == 1) {
        div_option.innerHTML = ''
        div_import.innerHTML = ''
        div_option.appendChild(row_top, br_game)
    } else if (select_adroid_iphone.value == 2) {
        div_option.innerHTML = ''
        div_import.innerHTML = ''
        div_option.append(div_row_top_adroid, br_game)
    }
})
// End Phần Option

// Button tạo đơn và câu cảnh báo
const div_button_import_data = document.createElement('div')
div_button_import_data.classList.add('w-50')
div_button_import_data.style.margin = '0px auto'
const button_import_data = document.createElement('button')
button_import_data.classList.add('btn', 'btn-success', 'w-100')
button_import_data.textContent = "Tạo đơn mới"
div_button_import_data.appendChild(button_import_data)

const warning_notify = document.createElement('h6')
warning_notify.style.textAlign = "center"
warning_notify.innerHTML = "<i style='color:red'>Những mục đánh dấu (*) là dữ liệu tạo tự động, có thể chỉnh sửa nếu cần thiết</i>"
form.append(div_adroid_iphone, div_img_import, br_game.cloneNode(true), div_option, warning_notify, div_button_import_data)
// 

// Đưa dữ liệu vào ảnh
button_import_data.addEventListener('click', function () {
    if(select_adroid_iphone.value == 1) {
        if(select_cate_phone.value == 1) {
            img_header.src = 'header/iphone-1.png'
            img_footer.src = 'footer/iphone-1.png'
            import_data1(div_import)
        } else if(select_cate_phone.value == 2) {
            img_header.src = 'header/iphone-2.png'
            img_footer.src = 'footer/iphone-2.png'
            import_data2(div_import)
        }
    } else if(select_adroid_iphone.value == 2) {
        if(select_cate_phone_adroid.value == 1) {
            img_header.src = 'header/adroid/mau-1-trinh-duyet.png'
            img_footer.src = 'footer/adroid/mau-1-trinh-duyet.png'
            import_data_adroid1(div_import)
        } else if(select_cate_phone_adroid.value == 2) {
            img_header.src = 'header/adroid/mau-1-app.png'
            img_footer.src = 'footer/adroid/mau-1-app.png'
            import_data_adroid2(div_import)
        } else if(select_cate_phone_adroid.value == 3) {
            img_header.src = 'header/adroid/mau-2-trinh-duyet.png'
            img_footer.src = 'footer/adroid/mau-2-trinh-duyet.png'
            import_data_adroid3(div_import)
        } else if(select_cate_phone_adroid.value == 4) {
            img_header.src = 'header/adroid/mau-2-app.png'
            img_footer.src = 'footer/adroid/mau-2-app.png'
            import_data_adroid4(div_import)
        }
        
    }
    
})
// End thông tin đơn cược 1
// End đưa dữ liệu vào ảnh

var create_bill_bet = document.querySelector('#create_bill')
if (create_bill_bet) {
    create_bill_bet.addEventListener("click", function () {
        window.scrollTo(0, 0);
        html2canvas(document.querySelector("#new-bet-ball")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new_withdrawal_Bongvip.jpg';
            a.click();
            // location.reload()
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

const imageInput = document.getElementById('imageInput');
const imageDisplay = document.querySelector('#imageDisplay')
imageInput.addEventListener('change', function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        imageDisplay.src = e.target.result;
    };

    reader.readAsDataURL(file);
});
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
function import_data1(div_import) {
    const url = [
        'vnbongvip.net',
        'vnbongvip.com',
        'vn1bongvip.net',
        'vn1bongvip.com',
        'vn2bongvip.net',
        'vn2bongvip.com',
        'bongvip666.com',
        'bongvip6868.com',
        '05.vnbongvip.net',
        '05.vnbongvip.com',
        '05.vn1bongvip.net',
        '05.vn1bongvip.com',
        '05.vn2bongvip.net',
        '05.vn2bongvip.com',
        '05.bongvip666.com',
        '05.bongvip6868.com',
    ]
    div_import.innerHTML = ''
    const imageDisplay = document.querySelector('#imageDisplay')
    imageDisplay.style.marginTop = '136.7px'
    console.log(url[getRandomInt(0,3)])

    const div_url = document.createElement('div')
    div_url.classList.add('text-url1')
    const lock_url = document.createElement('img')
    lock_url.src = 'header/o-khoa-ip-1.png'
    lock_url.classList.add('lock-iphone-1')
    const text_url = document.createElement('span')
    text_url.textContent = `${url[getRandomInt(0,15)]}`
    div_url.append(lock_url, text_url)

    const clock = document.createElement('div')
    clock.classList.add('clock')
    clock.textContent = input_clock.value

    const battery = document.createElement('div')
    battery.classList.add('battery')
    battery.style.width = (39 * input_battery.value / 100) + 'px'
    battery.style.background = 'white'
    if(select_battery_yellow.value == 2) {
        battery.style.background = '#ffcd7c'
    }
    if (input_battery.value <= 20) {
        battery.style.background = 'red'
    }

    const text_battery = document.createElement('div')
    text_battery.classList.add('text_battery')
    text_battery.textContent = `${input_battery.value}`

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

    div_import.append(clock, battery, wifi, div_url)
    // End Phụ trợ của điện thoại
}
function import_data2(div_import) {
    const url = [
        'vnbongvip.net',
        'vnbongvip.com',
        'vn1bongvip.net',
        'vn1bongvip.com',
        'vn2bongvip.net',
        'vn2bongvip.com',
        'bongvip666.com',
        'bongvip6868.com',
        '05.vnbongvip.net',
        '05.vnbongvip.com',
        '05.vn1bongvip.net',
        '05.vn1bongvip.com',
        '05.vn2bongvip.net',
        '05.vn2bongvip.com',
        '05.bongvip666.com',
        '05.bongvip6868.com',
    ]
    div_import.innerHTML = ''

    const div_url = document.createElement('div')
    div_url.classList.add('text-url2')
    const lock_url = document.createElement('img')
    lock_url.src = 'footer/o-khoa-ip-2.png'
    lock_url.classList.add('lock-iphone-2')
    const text_url = document.createElement('span')
    text_url.textContent = `${url[getRandomInt(0,15)]}`
    div_url.append(lock_url, text_url)

    const imageDisplay = document.querySelector('#imageDisplay')
    imageDisplay.style.marginTop = '92.05px'

    const clock = document.createElement('div')
    clock.classList.add('clock')
    clock.style.color = 'black'
    clock.textContent = input_clock.value

    const battery = document.createElement('div')
    battery.classList.add('battery-2')
    battery.style.width = (39 * input_battery.value / 100) + 'px'
    battery.style.background = 'black'
    if(select_battery_yellow.value == 2) {
        battery.style.background = '#faca2d'
    }
    if (input_battery.value <= 20) {
        battery.style.background = 'red'
    }

    const text_battery = document.createElement('div')
    text_battery.classList.add('text_battery')
    text_battery.textContent = `${input_battery.value}`

    const wifi = document.createElement('div')
    const img_wifi = document.createElement('img')
    img_wifi.style.width = '100%'
    wifi.classList.add('wifi')
    wifi.style.color = 'black'
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

    div_import.append(clock, battery, wifi, div_url)
    // End Phụ trợ của điện thoại
}

function import_data_adroid1(div_import) {
    const url = [
        'vnbongvip.net/m/in',
        'vnbongvip.com/m/in',
        'vn1bongvip.com/m/i',
        'vn2bongvip.com/m/i',
        'vn2bongvip.net/m/i',
        'vn2bongvip.com/m/i',
        'bongvip666.com/m/',
        'bongvip6868.com/',
        '05.vnbongvip.net/m',
        '05.vnbongvip.com/m',
        '05.vn1bongvip.net/',
        '05.vn1bongvip.com/',
        '05.vn2bongvip.net/',
        '05.vn2bongvip.com/',
        '05.bongvip666.com/',
        '05.bongvip6868.com',
    ]
    div_import.innerHTML = ''

    const imageDisplay = document.querySelector('#imageDisplay')
    imageDisplay.style.marginTop = '157.7px'

    const clock = document.createElement('div')
    clock.classList.add('clock-adroid')
    clock.textContent = input_clock_adroid.value

    const custom_icon = document.createElement('div')
    custom_icon.classList.add('div-icon')
    for(let i = 0; i < getRandomInt(1, 7); i++) {
        const img_custom_icon = document.createElement('img')
        img_custom_icon.src = `photo/adroid-icon/${getRandomInt(1, 11)}.png`
        img_custom_icon.classList.add('icon-left')
        custom_icon.appendChild(img_custom_icon)
    }

    const signal = document.createElement('div')
    signal.classList.add('signal_adroid')
    const img_signal = document.createElement('img')
    img_signal.src = 'photo/adroid-icon/song-dien-thoai.png'
    img_signal.style.width = '100%'
    signal.appendChild(img_signal)

    const signal2 = document.createElement('div')
    const img_signal2 = document.createElement('img')
    switch (getRandomInt(1,2)) {
        case 1:
            img_signal2.src = 'photo/adroid-icon/wifi.png'
            signal2.classList.add('wifi_adroid')
            break
        case 2:
            img_signal2.src = 'photo/adroid-icon/4g.png'
            signal2.classList.add('b4g_adroid')
            break
    }
    img_signal2.style.width = '100%'
    signal2.appendChild(img_signal2)

    const battery = document.createElement('div')
    battery.classList.add('battery-adroid')
    battery.style.height = (getRandomInt(20,80) * 20 / 100) + 'px'

    const text_url = document.createElement('div')
    text_url.classList.add('url-adroid1')
    text_url.textContent = url[getRandomInt(0,15)]

    
    div_import.append(clock, custom_icon, signal, signal2, battery, text_url)
    // End Phụ trợ của điện thoại
}
function import_data_adroid2(div_import) {
    const url = [
        'vnbongvip.net',
        'vnbongvip.com',
        'vn1bongvip.net',
        'vn1bongvip.com',
        'vn2bongvip.net',
        'vn2bongvip.com',
        'bongvip666.com',
        'bongvip6868.com',
        '05.vnbongvip.net',
        '05.vnbongvip.com',
        '05.vn1bongvip.net',
        '05.vn1bongvip.com',
        '05.vn2bongvip.net',
        '05.vn2bongvip.com',
        '05.bongvip666.com',
        '05.bongvip6868.com',
    ]
    div_import.innerHTML = ''

    const div_url = document.createElement('div')
    div_url.classList.add('text-url2')
    const lock_url = document.createElement('img')
    lock_url.src = 'footer/o-khoa-ip-2.png'
    lock_url.classList.add('lock-iphone-2')
    const text_url = document.createElement('span')
    text_url.textContent = `${url[getRandomInt(0,15)]}`
    div_url.append(lock_url, text_url)

    const imageDisplay = document.querySelector('#imageDisplay')

    const clock = document.createElement('div')
    clock.classList.add('clock')
    clock.style.color = 'black'
    clock.textContent = input_clock.value

    const battery = document.createElement('div')
    battery.classList.add('battery-2')
    battery.style.width = (39 * input_battery.value / 100) + 'px'
    battery.style.background = 'black'
    if(select_battery_yellow.value == 2) {
        battery.style.background = '#faca2d'
    }
    if (input_battery.value <= 20) {
        battery.style.background = 'red'
    }

    const text_battery = document.createElement('div')
    text_battery.classList.add('text_battery')
    text_battery.textContent = `${input_battery.value}`

    const wifi = document.createElement('div')
    const img_wifi = document.createElement('img')
    img_wifi.style.width = '100%'
    wifi.classList.add('wifi')
    wifi.style.color = 'black'
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

    div_import.append(clock, battery, wifi, custom_icon, div_url)
    // End Phụ trợ của điện thoại
}