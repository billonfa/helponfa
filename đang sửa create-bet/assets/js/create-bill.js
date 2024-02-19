window.addEventListener('load', function () {
    try {
        document.querySelector('#input_battery_level').value = Math.floor(Math.random() * 100)
    } catch (error) {

    }
    document.querySelector('#loading').style.display = 'flex'
    setTimeout(function() {
        document.querySelector('#loading').style.display = 'none'
    }, 1000);
    var numberInput = document.getElementById("input_total_number");
    if(numberInput) {
        numberInput.addEventListener("input", function() {
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
    if(numberInput2) {
        numberInput2.addEventListener("input", function() {
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

    var inputElements = document.querySelectorAll('input'); // Tìm tất cả các thẻ input trên trang web

    inputElements.forEach(inputElement => { // Lặp qua từng thẻ input
    if (inputElement.value !== '') { // Kiểm tra giá trị của từng ô input, nếu nó khác rỗng thì đổi màu nền thành màu xanh
        inputElement.style.backgroundColor = '#c4cdd1';
    }
    });

    var buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].id === 'page-header-user-dropdown' || buttons[i].id === 'back-to-top') {
            continue
        }
        buttons[i].addEventListener('click', function(event) {
            document.querySelector('#loading').style.display = 'flex'
            setTimeout(function() {
                document.querySelector('#loading').style.display = 'none'
            }, 500);
        });
    }

    var links = document.querySelectorAll('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            document.querySelector('#loading').style.display = 'flex'
            setTimeout(function() {
                document.querySelector('#loading').style.display = 'none'
            }, 500);
        });
    }
});

//--------------------------------------- Đưa dữ liệu ACB ---------------------------------------
var screenshotButton_acb = document.getElementById("create_bill-acb");
var create_bill_acb = document.querySelector('#create_to_img-1')
if(create_bill_acb) {
    create_bill_acb.addEventListener("click", function() {
        window.scrollTo(0,0);
        var new_bill1 = document.querySelector("#new_bill1")
        new_bill1.style.width = "1000px"
        var clock = document.querySelector("#output_clock-acb")
        clock.classList.remove('time_acb')
        clock.classList.add('img-time_acb')

        var custom_icon = document.querySelector('#custom-icon')
        custom_icon.classList.remove('custom-icon')
        custom_icon.classList.add('img-custom-icon')

        var battery = document.querySelector("#output_battery_level")
        var value_battery = document.querySelector('#input_battery_level').value
        battery.classList.remove('battery-level')
        battery.classList.add('img-battery')
        battery.style.width = 50*value_battery/100 + 'px'

        var wifi = document.querySelector('#output_wifi')
        wifi.classList.remove('wifi')
        wifi.classList.add('img-wifi')
        const input_wifi = document.querySelector('#input_wifi').value
        if(input_wifi != 3) {
            wifi.style.top = '38px'
        }

        var signal = document.querySelector("#output_signal")
        signal.classList.remove('signal')
        signal.classList.add('img-signal')
        var bar = document.querySelectorAll('.bar')
        bar.forEach(function (item) {
            item.classList.remove('bar')
            item.classList.add('img-bar')
        })

        var signal__1 = document.querySelector('#output_signal-1')
        signal__1.classList.remove('signal-1')
        signal__1.classList.add('img-signal-1')
        var bar__1 = document.querySelectorAll(".bar-1")
        bar__1.forEach(function (item) {
            item.classList.remove('bar-1')
            item.classList.add('img-bar-1')
        })

        var signal2 = document.querySelector('#output_signal2')
        signal2.classList.remove('signal2')
        signal2.classList.add('img-signal2')
        var bar2 = document.querySelectorAll(".bar2")
        bar2.forEach(function (item) {
            item.classList.remove('bar2')
            item.classList.add('img-bar2')
        })

        var total_price_number = document.querySelector('.total_price_number_acb')
        total_price_number.classList.remove('total_price_number_acb')
        total_price_number.classList.add('img-total_price_number_acb')

        var total_price_text = document.querySelector('#output_total_text-acb')
        total_price_text.classList.remove('total_price_text_acb')
        total_price_text.classList.add('img-total_price_text_acb')

        var order_time_acb = document.querySelector('#output_time-acb')
        order_time_acb.classList.remove('order_time_acb')
        order_time_acb.classList.add('img-order_time_acb')

        var order_date_acb = document.querySelector('#output_day-acb')
        order_date_acb.classList.remove('order_date_acb')
        order_date_acb.classList.add('img-order_date_acb')

        var transferer_name_acb = document.querySelector('#output_transferer_name-acb')
        transferer_name_acb.classList.remove('transferer_name_acb')
        transferer_name_acb.classList.add('img-transferer_name_acb')

        var transferer_number_acb = document.querySelector('#output_transferer_number-acb')
        transferer_number_acb.classList.remove('transferer_number_acb')
        transferer_number_acb.classList.add('img-transferer_number_acb')

        var recipient_name_acb = document.querySelector('#output_recipient_name-acb')
        recipient_name_acb.classList.remove('recipient_name_acb')
        recipient_name_acb.classList.add('img-recipient_name_acb')

        var recipient_bank_acb = document.querySelector('#output_recipient_bank-acb')
        recipient_bank_acb.classList.remove('bank_name_acb')
        recipient_bank_acb.classList.add('img-bank_name_acb')

        var recipient_number_acb = document.querySelector('#output_recipient_number-acb')
        recipient_number_acb.classList.remove('recipient_number_acb')
        recipient_number_acb.classList.add('img-recipient_number_acb')

        var bank_now_acb = document.querySelector('.bank_now_acb')
        bank_now_acb.classList.remove('bank_now_acb')
        bank_now_acb.classList.add('img-bank_now_acb')
        
        html2canvas(document.querySelector("#new_bill1")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new_bill_acb.jpg';
            a.click();
            location.reload();
        });
    })
}
if(screenshotButton_acb) {
    screenshotButton_acb.addEventListener("click", function() {
        var value_clock_acb = document.querySelector('#input_clock').value
        var value_battery = document.querySelector('#input_battery_level').value
        var value_total_number_acb = document.querySelector('#input_total_price').value
        var value_total_text_acb = document.querySelector('#input_total_text-acb').value
        var value_time_acb = document.querySelector('#input_time-acb').value
        var value_day_acb = document.querySelector('#input_day-acb').value
        var value_transferer_name_acb = document.querySelector('#input_transferer_name-acb').value
        var value_transferer_number_acb = document.querySelector('#input_transferer_number-acb').value
        var value_recipient_name_acb = document.querySelector('#input_recipient_name-acb').value
        var value_recipient_bank_acb = document.querySelector('#input_recipient_bank-acb').value
        var value_recipient_number_acb = document.querySelector('#input_recipient_number-acb').value
    
        var output_clock_acb = document.querySelector('#output_clock-acb')
        output_clock_acb.innerHTML = value_clock_acb
        var output_battery = document.querySelector('#output_battery_level')
        output_battery.style.background = 'white'
        if(value_battery <= 20) {
            output_battery.style.background = '#fd465e'
        }
        output_battery.style.width = 19.7*value_battery/100 +'px'
        var output_total_number_acb = document.querySelector('#output_total_number-acb')
        value_total_number_acb = value_total_number_acb.replace(/,/g, ".")
        output_total_number_acb.innerHTML = value_total_number_acb
        var output_total_text_acb = document.querySelector('#output_total_text-acb')
        output_total_text_acb.innerHTML = value_total_text_acb
        var output_time_acb = document.querySelector('#output_time-acb')
        output_time_acb.innerHTML = value_time_acb
        var output_day_acb = document.querySelector('#output_day-acb')
        output_day_acb.innerHTML = value_day_acb
        var output_transferer_name_acb = document.querySelector('#output_transferer_name-acb')
        output_transferer_name_acb.innerHTML = value_transferer_name_acb
        var output_transferer_number_acb = document.querySelector('#output_transferer_number-acb')
        output_transferer_number_acb.innerHTML = value_transferer_number_acb
        var output_recipient_name_acb = document.querySelector('#output_recipient_name-acb')
        output_recipient_name_acb.innerHTML = value_recipient_name_acb
        var output_recipient_bank_acb = document.querySelector('#output_recipient_bank-acb')
        output_recipient_bank_acb.innerHTML = value_recipient_bank_acb
        var output_recipient_number_acb = document.querySelector('#output_recipient_number-acb')
        output_recipient_number_acb.innerHTML = value_recipient_number_acb

        var div_add = document.querySelector('#new_bill1')

        // Tạo sóng điện thoại
        var value_sim_waves = document.querySelector('#input_sim_waves').value
        if(value_sim_waves) {
            //Xoá thẻ signal cũ
            var signalDiv = document.querySelector('#output_signal')
            
            if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)
            //Tạo mới thẻ signal
            var newsignalDiv = document.createElement('div');
            newsignalDiv.classList.add('signal');
            newsignalDiv.id=('output_signal');
            div_add.appendChild(newsignalDiv)

            //Thêm thẻ bar vào signal
            for(var i = 0; i < value_sim_waves; i++) {
                var newbarDiv = document.createElement('div');
                newbarDiv.classList.add('bar');
                newbarDiv.classList.add('background_white');
                newsignalDiv.appendChild(newbarDiv);
            }
        }
        
        // Sim 2 điện thoại
        var value_sim2 = document.querySelector('#total_sim').value
        var signal2 = document.querySelector('#output_signal2')
        var signal__1  = document.querySelector('#output_signal-1')
        if (value_sim2 == 1) {
            signal2.style.display = 'none'
            signal__1.style.display = 'none'
            newsignalDiv.style.display = 'block'
        }
        else {
            signal2.style.display = 'block'
            signal__1.style.display = 'block'
            newsignalDiv.style.display = 'none'
        }

        //Tạo sóng wifi
        var value_wifi = document.querySelector('#input_wifi').value
        var signalDiv = document.querySelector('#output_wifi')
        if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)

        //Tạo mới wifi
        var new_wifiDiv = document.createElement('div')
        new_wifiDiv.classList.add('wifi')
        new_wifiDiv.id = "output_wifi"
        div_add.appendChild(new_wifiDiv)
        var new_spanWifi = document.createElement('span')
        new_wifiDiv.appendChild(new_spanWifi)
        new_spanWifi.style.color = 'white'
        if(value_wifi == 1) {
            new_spanWifi.textContent = 'LTE'
        }
        if(value_wifi == 2) {
            new_spanWifi.textContent = '4G'
        }
        if(value_wifi == 3) {
            var img_wifi = document.createElement('img')
            img_wifi.classList.add('img_wifi')
            img_wifi.src="photo/icon_wifi_white.jpg"
            new_spanWifi.appendChild(img_wifi)
        }
    })
}

//--------------------------------------- Đưa dữ liệu Agribank ---------------------------------------
var screenshotButton_agribank = document.getElementById("create_bill-2");
var create_bill_agribank = document.querySelector('#create_to_img-2')
if(create_bill_agribank) {
    create_bill_agribank.addEventListener("click", function() {
        window.scrollTo(0,0);
        var new_bill = document.querySelector("#new_bill2")
        new_bill.style.width = "1000px"

        var clock = document.querySelector("#output_clock-agribank")
        clock.classList.remove('time-agribank')
        clock.classList.add('img-time_acb')

        var custom_icon = document.querySelector('#custom-icon')
        custom_icon.classList.remove('custom-icon')
        custom_icon.classList.add('img-custom-icon')

        var battery = document.querySelector("#output_battery_level")
        var value_battery = document.querySelector('#input_battery_level').value
        battery.classList.remove('battery-level')
        battery.classList.add('img-battery')
        battery.style.width = 50*value_battery/100 + 'px'

        var wifi = document.querySelector('#output_wifi')
        wifi.classList.remove('wifi')
        wifi.classList.add('img-wifi')
        const input_wifi = document.querySelector('#input_wifi').value
        if(input_wifi != 3) {
            wifi.style.top = '38px'
        }

        var signal = document.querySelector("#output_signal")
        signal.classList.remove('signal')
        signal.classList.add('img-signal')
        var bar = document.querySelectorAll('.bar')
        bar.forEach(function (item) {
            item.classList.remove('bar')
            item.classList.add('img-bar')
        })

        var signal__1 = document.querySelector('#output_signal-1')
        signal__1.classList.remove('signal-1')
        signal__1.classList.add('img-signal-1')
        var bar__1 = document.querySelectorAll(".bar-1")
        bar__1.forEach(function (item) {
            item.classList.remove('bar-1')
            item.classList.add('img-bar-1')
        })

        var signal2 = document.querySelector('#output_signal2')
        signal2.classList.remove('signal2')
        signal2.classList.add('img-signal2')
        var bar2 = document.querySelectorAll(".bar2")
        bar2.forEach(function (item) {
            item.classList.remove('bar2')
            item.classList.add('img-bar2')
        })

        var total_price = document.querySelector('.total_price_number-agribank')
        total_price.classList.remove('total_price_number-agribank')
        total_price.classList.add('img-total_price_number-agribank')

        var recipient_number = document.querySelector("#output_recipient_number-agribank")
        recipient_number.classList.remove('recipient_number-agribank')
        recipient_number.classList.add('img-recipient_number-agribank')

        var recipient_name = document.querySelector('#output_recipient_name-agribank')
        recipient_name.classList.remove('recipient_name-agribank')
        recipient_name.classList.add('img-recipient_name-agribank')

        var trade_code = document.querySelector("#output_trade_code-agribank")
        trade_code.classList.remove('trade_code-agribank')
        trade_code.classList.add('img-trade_code-agribank')

        var recipient_bank = document.querySelector("#output_recipient_bank-agribank")
        recipient_bank.classList.remove('recipient_bank-agribank')
        recipient_bank.classList.add('img-recipient_bank-agribank')

        var trade_time = document.querySelector('#output_trade_time-agribank')
        trade_time.classList.remove('trade_time')
        trade_time.classList.add('img-trade_time')

        html2canvas(document.querySelector("#new_bill2")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new_bill_agribank.jpg';
            a.click();
            location.reload();
        });
    })
}
if(screenshotButton_agribank) {
    screenshotButton_agribank.addEventListener("click", function() {
        document.querySelector('#loading').style.display = 'flex'
        setTimeout(function() {
            document.querySelector('#loading').style.display = 'none'
        },500)
        var value_clock_agribank = document.querySelector('#input_clock').value
        var value_battery = document.querySelector('#input_battery_level').value
        var value_total_price_agribank = document.querySelector('#input_total_number').value
        var value_recipient_number_agribank = document.querySelector('#input_recipient_number-agribank').value
        var value_recipient_name_agribank = document.querySelector('#input_recipient_name-agribank').value
        var value_trade_code_agribank = document.querySelector('#input_trade_code-agribank').value
        var value_recipient_bank_agribank = document.querySelector('#input_recipient_bank-agribank').value
        var value_trade_time_agribank = document.querySelector('#input_trade_time-agribank').value
        
        var output_clock_agribank = document.querySelector('#output_clock-agribank')
        output_clock_agribank.innerHTML = value_clock_agribank
        var output_battery = document.querySelector('#output_battery_level')
        output_battery.style.background = 'white'
        if(value_battery <= 20) {
            output_battery.style.background = '#fd465e'
        }
        output_battery.style.width = 19.7*value_battery/100 +'px'
        var output_total_price_agribank = document.querySelector('#output_total_price-agribank')
        output_total_price_agribank.innerHTML = value_total_price_agribank.replace(/\./g, ',')
        var output_recipient_number_agribank = document.querySelector('#output_recipient_number-agribank')
        output_recipient_number_agribank.innerHTML = value_recipient_number_agribank
        var output_recipient_name_agribank = document.querySelector('#output_recipient_name-agribank')
        output_recipient_name_agribank.innerHTML = value_recipient_name_agribank
        var output_trade_code_agribank = document.querySelector('#output_trade_code-agribank')
        output_trade_code_agribank.innerHTML = value_trade_code_agribank
        var output_recipient_bank_agribank = document.querySelector('#output_recipient_bank-agribank')
        output_recipient_bank_agribank.innerHTML = value_recipient_bank_agribank
        var output_trade_time_agribank = document.querySelector('#output_trade_time-agribank')
        output_trade_time_agribank.innerHTML = value_trade_time_agribank

        var div_add = document.querySelector('#new_bill2')
        // Tạo sóng điện thoại
        var value_sim_waves = document.querySelector('#input_sim_waves').value
        if(value_sim_waves) {
            //Xoá thẻ signal cũ
            var signalDiv = document.querySelector('#output_signal')
            if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)
            //Tạo mới thẻ signal
            var newsignalDiv = document.createElement('div');
            newsignalDiv.classList.add('signal');
            newsignalDiv.id=('output_signal');
            div_add.appendChild(newsignalDiv)

            //Thêm thẻ bar vào signal
            for(var i = 0; i < value_sim_waves; i++) {
                var newbarDiv = document.createElement('div');
                newbarDiv.classList.add('bar');
                newbarDiv.classList.add('background_white');
                newsignalDiv.appendChild(newbarDiv);
            }
        }

        // Sim 2 điện thoại
        var value_sim2 = document.querySelector('#total_sim').value
        var signal2 = document.querySelector('#output_signal2')
        var signal__1  = document.querySelector('#output_signal-1')
        if (value_sim2 == 1) {
            signal2.style.display = 'none'
            signal__1.style.display = 'none'
            newsignalDiv.style.display = 'block'
        }
        else {
            signal2.style.display = 'block'
            signal__1.style.display = 'block'
            newsignalDiv.style.display = 'none'
        }
        
        //Tạo sóng wifi
        var value_wifi = document.querySelector('#input_wifi').value
        var signalDiv = document.querySelector('#output_wifi')
        if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)

        //Tạo mới wifi
        var new_wifiDiv = document.createElement('div')
        new_wifiDiv.classList.add('wifi')
        new_wifiDiv.id = "output_wifi"
        div_add.appendChild(new_wifiDiv)
        var new_spanWifi = document.createElement('span')
        new_wifiDiv.appendChild(new_spanWifi)
        new_spanWifi.style.color = 'white'
        if(value_wifi == 1) {
            new_spanWifi.textContent = 'LTE'
        }
        if(value_wifi == 2) {
            new_spanWifi.textContent = '4G'
        }
        if(value_wifi == 3) {
            var img_wifi = document.createElement('img')
            img_wifi.classList.add('img_wifi')
            img_wifi.src="photo/icon_wifi_white.jpg"
            new_spanWifi.appendChild(img_wifi)
        }
    })
}

//--------------------------------------- Đưa dữ liệu BIDV ---------------------------------------
var screenshotButton_bidv = document.getElementById("create_bill-bidv");
var create_bill_bidv = document.querySelector('#create_to_img-3')
if (screenshotButton_bidv) {
    screenshotButton_bidv.addEventListener("click", function() {
        var value_clock_bidv = document.querySelector('#input_clock').value
        var value_battery = document.querySelector('#input_battery_level').value
        var value_total_price_bidv = document.querySelector('#input_total_number').value
        var value_recipient_number_bidv = document.querySelector('#input_recipient_number-bidv').value
        var value_recipient_name_bidv = document.querySelector('#input_recipient_name-bidv').value
        var value_recipient_bank_bidv = document.querySelector('#input_recipient_bank-bidv').value
        var value_time_bidv = document.querySelector('#input_time-bidv').value
        var value_content_bidv = document.querySelector('#input_content-bidv').value
        var value_code_number = document.querySelector('#input_code_number-bidv').value
    
        var output_clock_bidv = document.querySelector('#output_clock-bidv')
        output_clock_bidv.innerHTML = value_clock_bidv
        var output_battery = document.querySelector('#output_battery_level')
        output_battery.classList.add('background_black')
        if(value_battery <= 20) {
            output_battery.style.background = '#fd465e'
        }
        output_battery.style.width = 19.7*value_battery/100 +'px'
        var output_total_price_bidv = document.querySelector('#output_total_price-bidv')
        output_total_price_bidv.innerHTML = value_total_price_bidv.replace(/\./g, ',')
        var output_recipient_number_bidv = document.querySelector('#output_recipient_number-bidv')
        output_recipient_number_bidv.innerHTML = value_recipient_number_bidv
        var output_recipient_name_bidv = document.querySelector('#output_recipient_name-bidv')
        output_recipient_name_bidv.innerHTML = value_recipient_name_bidv
        var output_recipient_bank_bidv = document.querySelector('#output_recipient_bank-bidv')
        output_recipient_bank_bidv.innerHTML = value_recipient_bank_bidv
        var output_time_bidv = document.querySelector('#output_time-bidv')
        output_time_bidv.innerHTML = value_time_bidv
        var output_content_bidv = document.querySelector('#output_content-bidv')
        output_content_bidv.innerHTML = value_content_bidv
        var output_code_number = document.querySelector('#output_code_number-bidv')
        output_code_number.innerHTML = value_code_number

        var div_add = document.querySelector('#new_bill3')
        // Tạo sóng điện thoại
        var value_sim_waves = document.querySelector('#input_sim_waves').value
        if(value_sim_waves) {
            //Xoá thẻ signal cũ
            var signalDiv = document.querySelector('#output_signal')
            
            if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)
            //Tạo mới thẻ signal
            var newsignalDiv = document.createElement('div');
            newsignalDiv.classList.add('signal');
            newsignalDiv.id=('output_signal');
            div_add.appendChild(newsignalDiv)

            //Thêm thẻ bar vào signal
            for(var i = 0; i < value_sim_waves; i++) {
                var newbarDiv = document.createElement('div');
                newbarDiv.classList.add('bar');
                newbarDiv.classList.add('background_black');
                newsignalDiv.appendChild(newbarDiv);
            }
        }

        // Sim 2 điện thoại
        var value_sim2 = document.querySelector('#total_sim').value
        var signal2 = document.querySelector('#output_signal2')
        var signal__1  = document.querySelector('#output_signal-1')
        if (value_sim2 == 1) {
            signal2.style.display = 'none'
            signal__1.style.display = 'none'
            newsignalDiv.style.display = 'block'
        }
        else {
            signal2.style.display = 'block'
            signal__1.style.display = 'block'
            newsignalDiv.style.display = 'none'
        }
        
        //Tạo sóng wifi
        var value_wifi = document.querySelector('#input_wifi').value
        var signalDiv = document.querySelector('#output_wifi')
        if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)

        //Tạo mới wifi
        var new_wifiDiv = document.createElement('div')
        new_wifiDiv.classList.add('wifi')
        new_wifiDiv.id = "output_wifi"
        div_add.appendChild(new_wifiDiv)
        var new_spanWifi = document.createElement('span')
        new_wifiDiv.appendChild(new_spanWifi)
        new_spanWifi.style.color = 'black'
        if(value_wifi == 1) {
            new_spanWifi.textContent = 'LTE'
        }
        if(value_wifi == 2) {
            new_spanWifi.textContent = '4G'
        }
        if(value_wifi == 3) {
            var img_wifi = document.createElement('img')
            img_wifi.classList.add('img_wifi')
            img_wifi.src="photo/icon_wifi_black.jpg"
            new_spanWifi.appendChild(img_wifi)
        }
    });
}
if (create_bill_bidv) {
    create_bill_bidv.addEventListener("click", function() {
        window.scrollTo(0,0);
        var new_bill = document.querySelector("#new_bill3")
        new_bill.style.width = "1000px"

        var clock = document.querySelector("#output_clock-bidv")
        clock.classList.remove('time-bidv')
        clock.classList.add('img-time_acb')
        clock.style.color = 'black'

        var custom_icon = document.querySelector('#custom-icon')
        custom_icon.classList.remove('custom-icon')
        custom_icon.classList.add('img-custom-icon')

        var battery = document.querySelector("#output_battery_level")
        var value_battery = document.querySelector('#input_battery_level').value
        battery.classList.remove('battery-level')
        battery.classList.add('img-battery')
        battery.style.width = 50*value_battery/100 + 'px'

        var wifi = document.querySelector('#output_wifi')
        wifi.classList.remove('wifi')
        wifi.classList.add('img-wifi')
        const input_wifi = document.querySelector('#input_wifi').value
        if(input_wifi != 3) {
            wifi.style.top = '38px'
        }

        var signal = document.querySelector("#output_signal")
        signal.classList.remove('signal')
        signal.classList.add('img-signal')
        var bar = document.querySelectorAll('.bar')
        bar.forEach(function (item) {
            item.classList.remove('bar')
            item.classList.add('img-bar')
        })

        var signal__1 = document.querySelector('#output_signal-1')
        signal__1.classList.remove('signal-1')
        signal__1.classList.add('img-signal-1')
        var bar__1 = document.querySelectorAll(".bar-1")
        bar__1.forEach(function (item) {
            item.classList.remove('bar-1')
            item.classList.add('img-bar-1')
        })

        var signal2 = document.querySelector('#output_signal2')
        signal2.classList.remove('signal2')
        signal2.classList.add('img-signal2')
        var bar2 = document.querySelectorAll(".bar2")
        bar2.forEach(function (item) {
            item.classList.remove('bar2')
            item.classList.add('img-bar2')
        })

        var content1 = document.querySelector('.content1')
        content1.classList.remove('content1')
        content1.classList.add('img-content1')

        var total_price = document.querySelector('.total_price-bidv')
        total_price.classList.remove('total_price-bidv')
        total_price.classList.add('img-total_price-bidv')

        var out_total_price = document.querySelector('#output_total_price-bidv')
        out_total_price.removeAttribute('id')
        out_total_price.id = 'img-output_total_price-bidv'

        var infomation = document.querySelector('.infomation_recipient-bidv')
        infomation.classList.remove('infomation_recipient-bidv')
        infomation.classList.add('img-infomation_recipient-bidv')
        
        var code_number = document.querySelector('#output_code_number-bidv')
        code_number.classList.remove('code_number-bidv')
        code_number.classList.add('img-code_number-bidv')

        html2canvas(document.querySelector("#new_bill3")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new_bill_bidv.jpg';
            a.click();
            location.reload();
        });
    })
}

//--------------------------------------- Đưa dữ liệu MB bank ---------------------------------------
var screenshotButton_mbbank = document.getElementById("create_bill-mbbank");
if(screenshotButton_mbbank) {
    screenshotButton_mbbank.addEventListener("click", function() {
        var value_clock_mbbank = document.querySelector('#input_clock').value
        var value_battery = document.querySelector('#input_battery_level').value
        var value_total_price_mbbank = document.querySelector('#input_total_price-mbbank').value
        var value_recipient_number_mbbank = document.querySelector('#input_recipient_number-mbbank').value
        var value_recipient_name_mbbank = document.querySelector('#input_recipient_name-mbbank').value
        var value_recipient_bank_mbbank = document.querySelector('#input_recipient_bank-mbbank').value
        var value_source_account_mbbank = document.querySelector('#input_source_account-mbbank').value
        var value_source_name_mbbank = document.querySelector('#input_source_name-mbbank').value
        var value_content_mbbank = document.querySelector('#input_content-mbbank').value
        var value_time_mbbank = document.querySelector('#input_time-mbbank').value
        var value_code_number = document.querySelector('#input_code_number-mbbank').value
    
        var output_clock_mbbank = document.querySelector('#output_clock-mbbank')
        output_clock_mbbank.innerHTML = value_clock_mbbank
        var output_battery = document.querySelector('#output_battery_level')
        output_battery.style.background = 'white'
        if(value_battery <= 20) {
            output_battery.style.background = '#fd465e'
        }
        output_battery.style.width = 19.7*value_battery/100 +'px'
        var output_total_price_mbbank = document.querySelector('#output_total_price-mbbank')
        output_total_price_mbbank.innerHTML = value_total_price_mbbank
        var output_recipient_name_mbbank = document.querySelector('#output_recipient_name-mbbank')
        output_recipient_name_mbbank.innerHTML = value_recipient_name_mbbank
        var output_recipient_number_mbbank = document.querySelector('#output_recipient_number-mbbank')
        output_recipient_number_mbbank.innerHTML = value_recipient_number_mbbank
        var output_recipient_bank_mbbank = document.querySelector('#output_recipient_text-mbbank')
        output_recipient_bank_mbbank.innerHTML = value_recipient_bank_mbbank
        var output_source_account_mbbank = document.querySelector('#output_source_account-mbbank')
        output_source_account_mbbank.innerHTML = value_source_account_mbbank
        var output_source_name_mbbank = document.querySelector('#output_source_name-mbbank')
        output_source_name_mbbank.innerHTML = value_source_name_mbbank
        var output_content_mbbank = document.querySelector('#output_content-mbbank')
        output_content_mbbank.innerHTML = value_content_mbbank
        var output_time_mbbank = document.querySelector('#output_time-mbbank')
        output_time_mbbank.innerHTML = value_time_mbbank
        var output_code_number = document.querySelector('#output_trade_code-mbbank')
        output_code_number.innerHTML = value_code_number
    })
}

//--------------------------------------- Đưa dữ liệu Momo ---------------------------------------
var screenshotButton_momo = document.getElementById('create_bill-momo')
var create_bill_momo = document.querySelector('#create_to_img-5')
if(screenshotButton_momo) {
    screenshotButton_momo.addEventListener("click", function() {
        var value_clock_momo = document.querySelector('#input_clock').value
        var value_battery = document.querySelector('#input_battery_level').value
        var value_recipient_name_momo = document.querySelector('#input_recipient_name-momo').value
        var value_recipient_bank_momo = document.querySelector('#input_recipient_bank-momo').value
        var value_total_price_momo = document.querySelector('#input_total_price').value
        var value_time_momo = document.querySelector('#input_time-momo').value
        var value_trade_code_momo = document.querySelector('#input_trade_code-momo').value
        var value_recipient_number_momo = document.querySelector('#input_recipient_number-momo').value
        var value_banking_name_momo = document.querySelector('#input_banking_name-momo').value
        var value_message_momo = document.querySelector('#input_message-momo').value
        var value_banking_banking_momo = document.querySelector('#input_banking_bank-momo').value

        var output_clock_momo = document.querySelector('#output_clock-momo')
        output_clock_momo.innerHTML = value_clock_momo
        var output_battery = document.querySelector('#output_battery_level')
        output_battery.style.background = 'white'
        if(value_battery <= 20) {
            output_battery.style.background = '#fd465e'
        }
        output_battery.style.width = 19.7*value_battery/100 +'px'
        var output_recipient_name_momo = document.querySelector('#output_recipient_name-momo')
        output_recipient_name_momo.innerHTML = value_recipient_name_momo
        var output_recipient_bank_momo = document.querySelector('#output_recipient_bank-momo')
        output_recipient_bank_momo.innerHTML = value_recipient_bank_momo
        var output_total_price_momo = document.querySelector('#output_total_price-momo')
        value_total_price_momo = value_total_price_momo.replace(/,/g, ".")
        output_total_price_momo.innerHTML = value_total_price_momo
        var ouput_total_price2_momo = document.querySelector('#output_total_price2-momo')
        ouput_total_price2_momo.innerHTML = value_total_price_momo
        var output_time_momo = document.querySelector('#output_time-momo')
        output_time_momo.innerHTML = value_time_momo
        var output_trade_code_momo = document.querySelector('#output_trade_code-momo')
        output_trade_code_momo.innerHTML = value_trade_code_momo
        var output_recipient_number_momo = document.querySelector('#output_recipient_number-momo')
        output_recipient_number_momo.innerHTML = value_recipient_number_momo
        var output_banking_name_momo = document.querySelector('#output_banking_name-momo')
        output_banking_name_momo.innerHTML = value_banking_name_momo
        var output_message_momo = document.querySelector('#output_message-momo')
        output_message_momo.innerHTML = value_message_momo
        var output_banking_banking_momo = document.querySelector('#output_banking_bank-momo')
        output_banking_banking_momo.innerHTML = value_banking_banking_momo

        var div_add = document.querySelector('#new_bill5')
        // Tạo sóng điện thoại
        var value_sim_waves = document.querySelector('#input_sim_waves').value
        if(value_sim_waves) {
            //Xoá thẻ signal cũ
            var signalDiv = document.querySelector('#output_signal')
            
            if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)
            //Tạo mới thẻ signal
            var newsignalDiv = document.createElement('div');
            newsignalDiv.classList.add('signal');
            newsignalDiv.id=('output_signal');
            div_add.appendChild(newsignalDiv)

            //Thêm thẻ bar vào signal
            for(var i = 0; i < value_sim_waves; i++) {
                var newbarDiv = document.createElement('div');
                newbarDiv.classList.add('bar');
                newbarDiv.classList.add('background_white');
                newsignalDiv.appendChild(newbarDiv);
            }
        }

        // Sim 2 điện thoại
        var value_sim2 = document.querySelector('#total_sim').value
        var signal2 = document.querySelector('#output_signal2')
        var signal__1  = document.querySelector('#output_signal-1')
        if (value_sim2 == 1) {
            signal2.style.display = 'none'
            signal__1.style.display = 'none'
            newsignalDiv.style.display = 'block'
        }
        else {
            signal2.style.display = 'block'
            signal__1.style.display = 'block'
            newsignalDiv.style.display = 'none'
        }
        
        //Tạo sóng wifi
        var value_wifi = document.querySelector('#input_wifi').value
        var signalDiv = document.querySelector('#output_wifi')
        if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)

        //Tạo mới wifi
        var new_wifiDiv = document.createElement('div')
        new_wifiDiv.classList.add('wifi')
        new_wifiDiv.id = "output_wifi"
        div_add.appendChild(new_wifiDiv)
        var new_spanWifi = document.createElement('span')
        new_wifiDiv.appendChild(new_spanWifi)
        new_spanWifi.style.color = 'white'
        if(value_wifi == 1) {
            new_spanWifi.textContent = 'LTE'
        }
        if(value_wifi == 2) {
            new_spanWifi.textContent = '4G'
        }
        if(value_wifi == 3) {
            var img_wifi = document.createElement('img')
            img_wifi.classList.add('img_wifi')
            img_wifi.src="photo/icon_wifi_white.jpg"
            new_spanWifi.appendChild(img_wifi)
        }
    })
}   
if(create_bill_momo) {
    create_bill_momo.addEventListener("click", function() {
        window.scrollTo(0,0);
        var new_bill = document.querySelector("#new_bill5")
        new_bill.style.width = "1000px"

        var clock = document.querySelector("#output_clock-momo")
        clock.classList.remove('clock-momo')
        clock.classList.add('img-time_acb')

        var custom_icon = document.querySelector('#custom-icon')
        custom_icon.classList.remove('custom-icon')
        custom_icon.classList.add('img-custom-icon')

        var battery = document.querySelector("#output_battery_level")
        var value_battery = document.querySelector('#input_battery_level').value
        battery.classList.remove('battery-level')
        battery.classList.add('img-battery')
        battery.style.width = 50*value_battery/100 + 'px'

        var wifi = document.querySelector('#output_wifi')
        wifi.classList.remove('wifi')
        wifi.classList.add('img-wifi')
        const input_wifi = document.querySelector('#input_wifi').value
        if(input_wifi != 3) {
            wifi.style.top = '38px'
        }

        var signal = document.querySelector("#output_signal")
        signal.classList.remove('signal')
        signal.classList.add('img-signal')
        var bar = document.querySelectorAll('.bar')
        bar.forEach(function (item) {
            item.classList.remove('bar')
            item.classList.add('img-bar')
        })

        var signal__1 = document.querySelector('#output_signal-1')
        signal__1.classList.remove('signal-1')
        signal__1.classList.add('img-signal-1')
        var bar__1 = document.querySelectorAll(".bar-1")
        bar__1.forEach(function (item) {
            item.classList.remove('bar-1')
            item.classList.add('img-bar-1')
        })

        var signal2 = document.querySelector('#output_signal2')
        signal2.classList.remove('signal2')
        signal2.classList.add('img-signal2')
        var bar2 = document.querySelectorAll(".bar2")
        bar2.forEach(function (item) {
            item.classList.remove('bar2')
            item.classList.add('img-bar2')
        })
        
        var recipient_name = document.querySelector('.recipient_name-momo')
        recipient_name.classList.remove('recipient_name-momo')
        recipient_name.classList.add('img-recipient_name-momo')

        var total_price = document.querySelector('.total_price-momo')
        total_price.classList.remove('total_price-momo')
        total_price.classList.add('img-total_price-momo')

        var time = document.querySelector('#output_time-momo')
        time.classList.remove('time-momo')
        time.classList.add('img-time-momo')
        
        var trade_code = document.querySelector('#output_trade_code-momo')
        trade_code.classList.remove('trade_code-momo')
        trade_code.classList.add('img-trade_code-momo')

        var transfer_bank = document.querySelector('#output_transfer_bank-momo')
        transfer_bank.classList.remove('transfer_bank-momo')
        transfer_bank.classList.add('img-transfer_bank-momo')

        var overheads = document.querySelector('.overheads-momo')
        overheads.classList.remove('overheads-momo')
        overheads.classList.add('img-overheads-momo')

        var recipient_number = document.querySelector('#output_recipient_number-momo')
        recipient_number.classList.remove('recipient_number-momo')
        recipient_number.classList.add('img-recipient_number-momo')

        var banking_name = document.querySelector('#output_banking_name-momo')
        banking_name.classList.remove('banking_name-momo')
        banking_name.classList.add('img-banking_name-momo')

        var banking_bank = document.querySelector('#output_banking_bank-momo')
        banking_bank.classList.remove('banking_bank-momo')
        banking_bank.classList.add('img-banking_bank-momo')

        var total_price2 = document.querySelector('.total_price2-momo')
        total_price2.classList.remove('total_price2-momo')
        total_price2.classList.add('img-total_price2-momo')

        var message = document.querySelector('#output_message-momo')
        message.classList.remove('message-momo')
        message.classList.add('img-message-momo')

        html2canvas(document.querySelector("#new_bill5")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new_bill_momo.jpg';
            a.click();
            location.reload();
        });
    })
}

// --------------------------------------- Đưa dữ liệu MSB ---------------------------------------
var screenshotButton_msb = document.querySelector('#create_bill-msb')
var create_bill_msb = document.querySelector('#create_to_img-6')
if(screenshotButton_msb) {
    screenshotButton_msb.addEventListener("click", function() {
        var value_clock_msb = document.querySelector('#input_clock').value
        var value_battery = document.querySelector('#input_battery_level').value
        var value_holder_name_msb = document.querySelector('#input_holder_name-msb').value
        var value_total_price_msb = document.querySelector('#input_total_number').value
        var value_recipient_number_msb = document.querySelector('#input_recipient_number-msb').value
        var value_recipient_name_msb = document.querySelector('#input_recipient_name-msb').value
        var value_message_msb = document.querySelector('#input_message-msb').value

        var output_clock_msb = document.querySelector('#output_clock-msb')
        output_clock_msb.innerHTML = value_clock_msb
        var output_battery = document.querySelector('#output_battery_level')
        output_battery.style.background = 'black'
        if(value_battery <= 20) {
            output_battery.style.background = '#fd465e'
        }
        output_battery.style.width = 19.7*value_battery/100 +'px'
        var output_holder_name_msb = document.querySelector('#output_holder_name-msb')
        output_holder_name_msb.innerHTML = value_holder_name_msb
        var output_total_price_msb = document.querySelector('#output_total_price-msb')
        output_total_price_msb.innerHTML = value_total_price_msb.replace(/\./g, ',')
        var output_recipient_number_msb = document.querySelector('#output_recipient_number-msb')
        output_recipient_number_msb.innerHTML = value_recipient_number_msb
        var output_recipient_name_msb = document.querySelector('#output_recipient_name-msb')
        output_recipient_name_msb.innerHTML = value_recipient_name_msb
        var output_message_msb = document.querySelector('#output_message-msb')
        output_message_msb.innerHTML = value_message_msb

        var div_add = document.querySelector('#new_bill6')
        // Tạo sóng điện thoại
        var value_sim_waves = document.querySelector('#input_sim_waves').value
        if(value_sim_waves) {
            //Xoá thẻ signal cũ
            var signalDiv = document.querySelector('#output_signal')
            if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)
            //Tạo mới thẻ signal
            var newsignalDiv = document.createElement('div');
            newsignalDiv.classList.add('signal');
            newsignalDiv.id=('output_signal');
            div_add.appendChild(newsignalDiv)

            //Thêm thẻ bar vào signal
            for(var i = 0; i < value_sim_waves; i++) {
                var newbarDiv = document.createElement('div');
                newbarDiv.classList.add('bar');
                newbarDiv.classList.add('background_black');
                newsignalDiv.appendChild(newbarDiv);
            }
        }

        // Sim 2 điện thoại
        var value_sim2 = document.querySelector('#total_sim').value
        var signal2 = document.querySelector('#output_signal2')
        var signal__1  = document.querySelector('#output_signal-1')
        if (value_sim2 == 1) {
            signal2.style.display = 'none'
            signal__1.style.display = 'none'
            newsignalDiv.style.display = 'block'
        }
        else {
            signal2.style.display = 'block'
            signal__1.style.display = 'block'
            newsignalDiv.style.display = 'none'
        }
        
        //Tạo sóng wifi
        var value_wifi = document.querySelector('#input_wifi').value
        var signalDiv = document.querySelector('#output_wifi')
        if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)

        //Tạo mới wifi
        var new_wifiDiv = document.createElement('div')
        new_wifiDiv.classList.add('wifi')
        new_wifiDiv.id = "output_wifi"
        div_add.appendChild(new_wifiDiv)
        var new_spanWifi = document.createElement('span')
        new_wifiDiv.appendChild(new_spanWifi)
        new_spanWifi.style.color = 'black'
        if(value_wifi == 1) {
            new_spanWifi.textContent = 'LTE'
        }
        if(value_wifi == 2) {
            new_spanWifi.textContent = '4G'
        }
        if(value_wifi == 3) {
            var img_wifi = document.createElement('img')
            img_wifi.classList.add('img_wifi')
            img_wifi.src="photo/icon_wifi_black.jpg"
            new_spanWifi.appendChild(img_wifi)
        }
    })
}
if(create_bill_msb) {
    create_bill_msb.addEventListener("click", function() {
        window.scrollTo(0,0);
        var new_bill = document.querySelector("#new_bill6")
        new_bill.style.width = "1000px"

        var clock = document.querySelector("#output_clock-msb")
        clock.classList.remove('clock-msb')
        clock.classList.add('img-time_acb')
        clock.style.color = 'black'

        var custom_icon = document.querySelector('#custom-icon')
        custom_icon.classList.remove('custom-icon')
        custom_icon.classList.add('img-custom-icon')

        var battery = document.querySelector("#output_battery_level")
        var value_battery = document.querySelector('#input_battery_level').value
        battery.classList.remove('battery-level')
        battery.classList.add('img-battery')
        battery.style.width = 50*value_battery/100 + 'px'

        var wifi = document.querySelector('#output_wifi')
        wifi.classList.remove('wifi')
        wifi.classList.add('img-wifi')
        var input_wifi = document.querySelector('#input_wifi').value
        if(input_wifi != 3) {
            wifi.classList.remove('img-wifi')
            wifi.classList.add('img-lte')
        }

        var signal = document.querySelector("#output_signal")
        signal.classList.remove('signal')
        signal.classList.add('img-signal')
        var bar = document.querySelectorAll('.bar')
        bar.forEach(function (item) {
            item.classList.remove('bar')
            item.classList.add('img-bar')
        })

        var signal__1 = document.querySelector('#output_signal-1')
        signal__1.classList.remove('signal-1')
        signal__1.classList.add('img-signal-1')
        var bar__1 = document.querySelectorAll(".bar-1")
        bar__1.forEach(function (item) {
            item.classList.remove('bar-1')
            item.classList.add('img-bar-1')
        })

        var signal2 = document.querySelector('#output_signal2')
        signal2.classList.remove('signal2')
        signal2.classList.add('img-signal2')
        var bar2 = document.querySelectorAll(".bar2")
        bar2.forEach(function (item) {
            item.classList.remove('bar2')
            item.classList.add('img-bar2')
        })

        var holder_name = document.querySelector('#output_holder_name-msb')
        holder_name.classList.remove('holder_name-msb')
        holder_name.classList.add('img-holder_name-msb')

        var total_price = document.querySelector('.total_price-msb')
        total_price.classList.remove('total_price-msb')
        total_price.classList.add('img-total_price-msb')

        var recipient_number = document.querySelector('#output_recipient_number-msb')
        recipient_number.classList.remove('recipient_number-msb')
        recipient_number.classList.add('img-recipient_number-msb')

        var recipient_name = document.querySelector('#output_recipient_name-msb')
        recipient_name.classList.remove('recipient_name-msb')
        recipient_name.classList.add('img-recipient_name-msb')

        var message = document.querySelector('#output_message-msb')
        message.classList.remove('message-msb')
        message.classList.add('img-message-msb')

        html2canvas(document.querySelector("#new_bill6")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new_bill_msb.jpg';
            a.click();
            location.reload();
        });
    })
}

// --------------------------------------- Đưa dữ liệu Sacombank --------------------------------------- 
var screenshotButton_sacombank = document.querySelector('#create_bill-sacombank')
var create_bill_sacombank = document.querySelector('#create_to_img-7')
if(screenshotButton_sacombank) {
    screenshotButton_sacombank.addEventListener("click", function() {
        var value_clock_sacombank = document.querySelector('#input_clock').value
        var value_battery = document.querySelector('#input_battery_level').value
        var value_recipient_number_sacombank = document.querySelector('#input_recipient_number-sacombank').value
        var value_recipient_name_sacombank = document.querySelector('#input_recipient_name-sacombank').value
        var value_total_price_sacombank = document.querySelector('#input_total_number').value
        var value_time_sacombank = document.querySelector('#input_time-sacombank').value
        var value_trade_code_sacombank = document.querySelector('#input_trade_code-sacombank').value
        var value_from_number = document.querySelector('#input_from_number-sacombank').value
        var value_recipient_bank_sacombank = document.querySelector('#input_recipient_bank-sacombank').value
        var value_message_sacombank = document.querySelector('#input_message-sacombank').value

        var output_clock_sacombank = document.querySelector('#output_clock-sacombank')
        output_clock_sacombank.innerHTML = value_clock_sacombank
        var output_battery = document.querySelector('#output_battery_level')
        output_battery.style.background = 'white'
        if(value_battery <= 20) {
            output_battery.style.background = '#fd465e'
        }
        output_battery.style.width = 19.7*value_battery/100 +'px'
        var output_recipient_number_sacombank = document.querySelector('#output_recipient_number-sacombank')
        output_recipient_number_sacombank.innerHTML = value_recipient_number_sacombank
        var output_recipient_number2_sacombank = document.querySelector('#output_recipient_number2-sacombank')
        output_recipient_number2_sacombank.innerHTML = value_recipient_number_sacombank
        var output_recipient_name_sacombank = document.querySelector('#output_recipient_name-sacombank')
        output_recipient_name_sacombank.innerHTML = value_recipient_name_sacombank
        var output_total_price_sacombank = document.querySelector('#output_total_price-sacombank')
        output_total_price_sacombank.innerHTML = value_total_price_sacombank.replace(/\./g, ',')
        var output_total_price2_sacombank = document.querySelector('#output_total_price2-sacombank')
        output_total_price2_sacombank.innerHTML = value_total_price_sacombank.replace(/\./g, ',')
        var output_total_price3_sacombank = document.querySelector('#output_total_price3-sacombank')
        output_total_price3_sacombank.innerHTML = value_total_price_sacombank.replace(/\./g, ',')
        var output_time_sacombank = document.querySelector('#output_time-sacombank')
        output_time_sacombank.innerHTML = value_time_sacombank
        var output_trade_code_sacombank = document.querySelector('#output_trade_code-sacombank')
        output_trade_code_sacombank.innerHTML = value_trade_code_sacombank
        var output_from_number = document.querySelector('#output_from_number-sacombank')
        output_from_number.innerHTML = value_from_number
        var output_recipient_bank_sacombank = document.querySelector('#output_recipient_bank-sacombank')
        output_recipient_bank_sacombank.innerHTML = value_recipient_bank_sacombank
        var output_message_sacombank = document.querySelector('#output_message-sacombank')
        output_message_sacombank.innerHTML = value_message_sacombank

        var div_add = document.querySelector('#new_bill7')
        // Tạo sóng điện thoại
        var value_sim_waves = document.querySelector('#input_sim_waves').value
        if(value_sim_waves) {
            //Xoá thẻ signal cũ
            var signalDiv = document.querySelector('#output_signal')
            
            if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)
            //Tạo mới thẻ signal
            var newsignalDiv = document.createElement('div');
            newsignalDiv.classList.add('signal');
            newsignalDiv.id=('output_signal');
            div_add.appendChild(newsignalDiv)

            //Thêm thẻ bar vào signal
            for(var i = 0; i < value_sim_waves; i++) {
                var newbarDiv = document.createElement('div');
                newbarDiv.classList.add('bar');
                newbarDiv.classList.add('background_white');
                newsignalDiv.appendChild(newbarDiv);
            }
        }

        // Sim 2 điện thoại
        var value_sim2 = document.querySelector('#total_sim').value
        var signal2 = document.querySelector('#output_signal2')
        var signal__1  = document.querySelector('#output_signal-1')
        if (value_sim2 == 1) {
            signal2.style.display = 'none'
            signal__1.style.display = 'none'
            newsignalDiv.style.display = 'block'
        }
        else {
            signal2.style.display = 'block'
            signal__1.style.display = 'block'
            newsignalDiv.style.display = 'none'
        }
        
        //Tạo sóng wifi
        var value_wifi = document.querySelector('#input_wifi').value
        var signalDiv = document.querySelector('#output_wifi')
        if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)

        //Tạo mới wifi
        var new_wifiDiv = document.createElement('div')
        new_wifiDiv.classList.add('wifi')
        new_wifiDiv.id = "output_wifi"
        div_add.appendChild(new_wifiDiv)
        var new_spanWifi = document.createElement('span')
        new_wifiDiv.appendChild(new_spanWifi)
        new_spanWifi.style.color = 'white'
        if(value_wifi == 1) {
            new_spanWifi.textContent = 'LTE'
        }
        if(value_wifi == 2) {
            new_spanWifi.textContent = '4G'
        }
        if(value_wifi == 3) {
            var img_wifi = document.createElement('img')
            img_wifi.classList.add('img_wifi')
            img_wifi.src="photo/icon_wifi_white.jpg"
            new_spanWifi.appendChild(img_wifi)
        }
    })
}
if(create_bill_sacombank) {
    create_bill_sacombank.addEventListener("click", function() {
        window.scrollTo(0,0);
        var new_bill = document.querySelector("#new_bill7")
        new_bill.style.width = "1000px"

        var clock = document.querySelector("#output_clock-sacombank")
        clock.classList.remove('clock-sacombank')
        clock.classList.add('img-time_acb')

        var custom_icon = document.querySelector('#custom-icon')
        custom_icon.classList.remove('custom-icon')
        custom_icon.classList.add('img-custom-icon')

        var battery = document.querySelector("#output_battery_level")
        var value_battery = document.querySelector('#input_battery_level').value
        battery.classList.remove('battery-level')
        battery.classList.add('img-battery')
        battery.style.width = 50*value_battery/100 + 'px'

        var wifi = document.querySelector('#output_wifi')
        wifi.classList.remove('wifi')
        wifi.classList.add('img-wifi')
        const input_wifi = document.querySelector('#input_wifi').value
        if(input_wifi != 3) {
            wifi.style.top = '38px'
        }

        var signal = document.querySelector("#output_signal")
        signal.classList.remove('signal')
        signal.classList.add('img-signal')
        var bar = document.querySelectorAll('.bar')
        bar.forEach(function (item) {
            item.classList.remove('bar')
            item.classList.add('img-bar')
        })

        var signal__1 = document.querySelector('#output_signal-1')
        signal__1.classList.remove('signal-1')
        signal__1.classList.add('img-signal-1')
        var bar__1 = document.querySelectorAll(".bar-1")
        bar__1.forEach(function (item) {
            item.classList.remove('bar-1')
            item.classList.add('img-bar-1')
        })

        var signal2 = document.querySelector('#output_signal2')
        signal2.classList.remove('signal2')
        signal2.classList.add('img-signal2')
        var bar2 = document.querySelectorAll(".bar2")
        bar2.forEach(function (item) {
            item.classList.remove('bar2')
            item.classList.add('img-bar2')
        })

        var recipient_number = document.querySelector(".recipient_number-sacombank")
        recipient_number.classList.remove('recipient_number-sacombank')
        recipient_number.classList.add('img-recipient_number-sacombank')

        var total = document.querySelector('.total_price-sacombank')
        total.classList.remove('total_price-sacombank')
        total.classList.add('img-total_price-sacombank')

        var time = document.querySelector('#output_time-sacombank')
        time.classList.remove('time-sacombank')
        time.classList.add('img-time-sacombank')

        var trade_code = document.querySelector('#output_trade_code-sacombank')
        trade_code.classList.remove('trade_code-sacombank')
        trade_code.classList.add('img-trade_code-sacombank')

        var cate_trade = document.querySelector('.cate_trade-sacombank')
        cate_trade.classList.remove('cate_trade-sacombank')
        cate_trade.classList.add('img-cate_trade-sacombank')

        var from_number = document.querySelector('#output_from_number-sacombank')
        from_number.classList.remove('from_number-sacombank')
        from_number.classList.add('img-from_number-sacombank')

        var recipient_number2 = document.querySelector('#output_recipient_number2-sacombank')
        recipient_number2.classList.remove('recipient_number2-sacombank')
        recipient_number2.classList.add('img-recipient_number2-sacombank')

        var recipient_bank = document.querySelector('#output_recipient_bank-sacombank')
        recipient_bank.classList.remove('recipient_bank-sacombank')
        recipient_bank.classList.add('img-recipient_bank-sacombank')

        var message = document.querySelector('#output_message-sacombank')
        message.classList.remove('message-sacombank')
        message.classList.add('img-message-sacombank')

        var total_price2 = document.querySelector('#output_total_price2-sacombank')
        total_price2.classList.remove('total_price2-sacombank')
        total_price2.classList.add('img-total_price2-sacombank')

        var total_price3 = document.querySelector('#output_total_price3-sacombank')
        total_price3.classList.remove('total_price3-sacombank')
        total_price3.classList.add('img-total_price3-sacombank')

        html2canvas(document.querySelector("#new_bill7")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new_bill_sacombank.jpg';
            a.click();
            location.reload();
        });
    })
}

// --------------------------------------- Đưa dữ liệu Techcombank --------------------------------------- 
var screenshotButton_techcombank = document.querySelector('#create_bill-techcombank')
var create_bill_techcombank = document.querySelector('#create_to_img-8')
if(screenshotButton_techcombank) {
    screenshotButton_techcombank.addEventListener("click", function() {
        var value_clock_techcombank = document.querySelector('#input_clock').value
        var value_battery = document.querySelector('#input_battery_level').value
        var value_recipient_name_techcombank = document.querySelector('#input_recipient_name-techcombank').value
        var value_total_price_techcombank = document.querySelector('#input_total_number').value
        var value_recipient_bank_techcombank = document.querySelector('#input_recipient_bank-techcombank').value
        var value_recipient_number_techcombank = document.querySelector('#input_recipient_number-techcombank').value
        var value_message_techcombank = document.querySelector('#input_message-techcombank').value
        var value_time_techcombank = document.querySelector('#input_time-techcombank').value
        var value_trade_code_techcombank = document.querySelector('#input_trade_code-techcombank').value

        var output_clock_techcombank = document.querySelector('#output_clock-techcombank')
        output_clock_techcombank.innerHTML = value_clock_techcombank
        var output_battery = document.querySelector('#output_battery_level')
        output_battery.style.background = 'black'
        if(value_battery <= 20) {
            output_battery.style.background = '#fd465e'
        }
	    output_battery.style.width = 19.7*value_battery/100 +'px'
        var output_recipient_name_techcombank = document.querySelector('#output_recipient_name-techcombank')
        output_recipient_name_techcombank.innerHTML = value_recipient_name_techcombank
        var output_total_price_techcombank = document.querySelector('#output_total_price-techcombank')
        output_total_price_techcombank.innerHTML = value_total_price_techcombank.replace(/\./g, ',')
        var output_recipient_bank_techcombank = document.querySelector('#output_recipient_bank-techcombank')
        output_recipient_bank_techcombank.innerHTML = value_recipient_bank_techcombank
        var output_recipient_number_techcombank = document.querySelector('#output_recipient_number-techcombank')
        output_recipient_number_techcombank.innerHTML = value_recipient_number_techcombank
        var output_message_techcombank = document.querySelector('#output_message-techcombank')
        output_message_techcombank.innerHTML = value_message_techcombank
        var output_time_techcombank = document.querySelector('#output_time-techcombank')
        output_time_techcombank.innerHTML = value_time_techcombank
        var output_trade_code_techcombank = document.querySelector('#output_trade_code-techcombank')
        output_trade_code_techcombank.innerHTML = value_trade_code_techcombank

        var div_add = document.querySelector('#new_bill8')
        // Tạo sóng điện thoại
        var value_sim_waves = document.querySelector('#input_sim_waves').value
        if(value_sim_waves) {
            //Xoá thẻ signal cũ
            var signalDiv = document.querySelector('#output_signal')
            if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)
            //Tạo mới thẻ signal
            var newsignalDiv = document.createElement('div');
            newsignalDiv.classList.add('signal');
            newsignalDiv.id=('output_signal');
            div_add.appendChild(newsignalDiv)

            //Thêm thẻ bar vào signal
            for(var i = 0; i < value_sim_waves; i++) {
                var newbarDiv = document.createElement('div');
                newbarDiv.classList.add('bar');
                newbarDiv.classList.add('background_black');
                newsignalDiv.appendChild(newbarDiv);
            }
        }

        // Sim 2 điện thoại
        var value_sim2 = document.querySelector('#total_sim').value
        var signal2 = document.querySelector('#output_signal2')
        var signal__1  = document.querySelector('#output_signal-1')
        if (value_sim2 == 1) {
            signal2.style.display = 'none'
            signal__1.style.display = 'none'
            newsignalDiv.style.display = 'block'
        }
        else {
            signal2.style.display = 'block'
            signal__1.style.display = 'block'
            newsignalDiv.style.display = 'none'
        }
        
        //Tạo sóng wifi
        var value_wifi = document.querySelector('#input_wifi').value
        var signalDiv = document.querySelector('#output_wifi')
        if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)

        //Tạo mới wifi
        var new_wifiDiv = document.createElement('div')
        new_wifiDiv.classList.add('wifi')
        new_wifiDiv.id = "output_wifi"
        div_add.appendChild(new_wifiDiv)
        var new_spanWifi = document.createElement('span')
        new_wifiDiv.appendChild(new_spanWifi)
        new_spanWifi.style.color = 'black'
        if(value_wifi == 1) {
            new_spanWifi.textContent = 'LTE'
        }
        if(value_wifi == 2) {
            new_spanWifi.textContent = '4G'
        }
        if(value_wifi == 3) {
            var img_wifi = document.createElement('img')
            img_wifi.classList.add('img_wifi')
            img_wifi.src="photo/icon_wifi_black.jpg"
            new_spanWifi.appendChild(img_wifi)
        }
    })
}
if(create_bill_techcombank) {
    create_bill_techcombank.addEventListener("click", function() {
        window.scrollTo(0,0);
        var new_bill = document.querySelector("#new_bill8")
        new_bill.style.width = "1000px"

        var clock = document.querySelector("#output_clock-techcombank")
        clock.classList.remove('clock-techcombank')
        clock.classList.add('img-time_acb')
        clock.style.color = 'black'

        var custom_icon = document.querySelector('#custom-icon')
        custom_icon.classList.remove('custom-icon')
        custom_icon.classList.add('img-custom-icon')

        var battery = document.querySelector("#output_battery_level")
        var value_battery = document.querySelector('#input_battery_level').value
        battery.classList.remove('battery-level')
        battery.classList.add('img-battery')
        battery.style.width = 50*value_battery/100 + 'px'

        var wifi = document.querySelector('#output_wifi')
        wifi.classList.remove('wifi')
        wifi.classList.add('img-wifi')
        const input_wifi = document.querySelector('#input_wifi').value
        if(input_wifi != 3) {
            wifi.style.top = '38px'
        }

        var signal = document.querySelector("#output_signal")
        signal.classList.remove('signal')
        signal.classList.add('img-signal')
        var bar = document.querySelectorAll('.bar')
        bar.forEach(function (item) {
            item.classList.remove('bar')
            item.classList.add('img-bar')
        })

        var signal__1 = document.querySelector('#output_signal-1')
        signal__1.classList.remove('signal-1')
        signal__1.classList.add('img-signal-1')
        var bar__1 = document.querySelectorAll(".bar-1")
        bar__1.forEach(function (item) {
            item.classList.remove('bar-1')
            item.classList.add('img-bar-1')
        })

        var signal2 = document.querySelector('#output_signal2')
        signal2.classList.remove('signal2')
        signal2.classList.add('img-signal2')
        var bar2 = document.querySelectorAll(".bar2")
        bar2.forEach(function (item) {
            item.classList.remove('bar2')
            item.classList.add('img-bar2')
        })

        var block_recipient = document.querySelector('.block_recipient_name-techcombank')
        block_recipient.classList.remove('block_recipient_name-techcombank')
        block_recipient.classList.add('img-block_recipient_name-techcombank')

        var recipient_bank = document.querySelector('.recipient_bank-techcombank')
        recipient_bank.classList.remove('recipient_bank-techcombank')
        recipient_bank.classList.add('img-recipient_bank-techcombank')

        var message = document.querySelector('#output_message-techcombank')
        message.classList.remove('message-techcombank')
        message.classList.add('img-message-techcombank')

        var time = document.querySelector('#output_time-techcombank')
        time.classList.remove('time-techcombank')
        time.classList.add('img-time-techcombank')

        var trade_code = document.querySelector('.trade_code-techcombank')
        trade_code.classList.remove('trade_code-techcombank')
        trade_code.classList.add('img-trade_code-techcombank')

        html2canvas(document.querySelector("#new_bill8")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new_bill_sacombank.jpg';
            a.click();
            location.reload();
        });
    })
}

// --------------------------------------- Đưa dữ liệu Vietcombank --------------------------------------- 

try {
    //Form thông tin 
    const today  = new Date();
    // Lấy giờ và phút từ thời gian hiện tại
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var day = today.getDate();
    var month = today.getMonth() + 1; // Lưu ý: Tháng trong JavaScript được đếm từ 0 đến 11
    var year = today.getFullYear();
    // Định dạng lại giờ và phút nếu có một chữ số
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    day = day < 10 ? '0' + day : day
    month = month < 10 ? '0' + month : month
    var daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    var dayOfWeek = daysOfWeek[today.getDay()];
    var dateTime = hours + ':' + minutes + ' ' + dayOfWeek + ' ' + day + '/' + month + '/' + year;
    
    const form_vietcombank = document.querySelector('#form_vietcombank')
    const data_auto = document.createElement('span')
    data_auto.classList.add('data_auto')
    data_auto.textContent = '(*)'
    const br_game = document.createElement('div')
    br_game.classList.add('br_game')
    
    const div_clock = document.createElement('div')
    const label_clock = document.createElement('label')
    label_clock.classList.add('form-label')
    label_clock.textContent = 'Đồng Hồ'
    label_clock.appendChild(data_auto.cloneNode(true))
    const input_clock = document.createElement('input')
    input_clock.classList.add('form-control')
    input_clock.value = `${hours}:${minutes}`
    div_clock.append(label_clock, input_clock)
    
    const div_battery = document.createElement('div')
    const label_battery = document.createElement('label')
    label_battery.classList.add('form-label')
    label_battery.textContent = 'Phần trăm pin'
    label_battery.appendChild(data_auto.cloneNode(true))
    const input_battery = document.createElement('input')
    input_battery.classList.add('form-control')
    input_battery.value = Math.round(Math.random() * (90 - 17) + 17)
    div_battery.append(label_battery, input_battery)
    
    const div_total_sim = document.createElement('div')
    const label_total_sim = document.createElement('label')
    label_total_sim.classList.add('form-label')
    label_total_sim.textContent = 'Sim điện thoại'
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

    const div_signal2 = document.createElement('div')
    const label_signal2 = document.createElement('label')
    label_signal2.classList.add('form-label')
    label_signal2.textContent = 'Sóng điện thoại (Sim 2)'
    label_signal2.appendChild(data_auto.cloneNode(true))
    const select_signal2 = document.createElement('select')
    select_signal2.classList.add('select')
    for(let i = 4; i > 0; i--) {
        const option_signal = document.createElement('option')
        option_signal.textContent = `${i}`
        option_signal.value = `${i}`
        select_signal2.appendChild(option_signal)
    }
    select_total_sim.addEventListener('change', function () {
        if(select_total_sim.value == 2) {
            div_signal2.append(label_signal2, select_signal2)
        }
        else {
            div_signal2.innerHTML = ''
        }
    })
    
    const div_signal1 = document.createElement('div')
    const label_signal1 = document.createElement('label')
    label_signal1.classList.add('form-label')
    label_signal1.textContent = 'Sóng điện thoại (Sim 1)'
    label_signal1.appendChild(data_auto.cloneNode(true))
    const select_signal1 = document.createElement('select')
    select_signal1.classList.add('select')
    for(let i = 4; i > 0; i--) {
        const option_signal = document.createElement('option')
        option_signal.textContent = `${i}`
        option_signal.value = `${i}`
        select_signal1.appendChild(option_signal)
    }
    div_signal1.append(label_signal1, select_signal1)

    const div_wifi = document.createElement('div')
    const label_wifi = document.createElement('label')
    label_wifi.classList.add('form-label')
    label_wifi.textContent = "Sóng Wifi"
    label_wifi.appendChild(data_auto.cloneNode(true))
    const select_wifi = document.createElement('select')
    select_wifi.classList.add('select')
    const option1_wifi = document.createElement('option')
    option1_wifi.textContent = 'Wifi'
    option1_wifi.value = 1
    const option2_wifi = document.createElement('option')
    option2_wifi.textContent = 'LTE'
    option2_wifi.value = 2
    const option3_wifi = document.createElement('option')
    option3_wifi.textContent = '4G'
    option3_wifi.value = 3
    select_wifi.append(option1_wifi, option2_wifi, option3_wifi)
    div_wifi.append(label_wifi, select_wifi)

    const div_total_price = document.createElement('div')
    const label_total_price = document.createElement('label')
    label_total_price.classList.add('form-label')
    label_total_price.textContent = 'Số tiền'
    const input_total_price = document.createElement('input')
    input_total_price.classList.add('form-control')
    input_total_price.placeholder = '999,999,999'
    div_total_price.append(label_total_price, input_total_price)
    // Tự động thêm dấu "," khi nhập số tiền
    input_total_price.addEventListener("input", function() {
        var userInput = input_total_price.value;
        var formatted = userInput.replace(/,/g, ''); // xóa tất cả dấu phẩy có sẵn
        formatted = formatted.replace(/\D/g, ""); // xóa tất cả ký tự không phải số
        formatted = parseFloat(formatted);
        if (!isNaN(formatted)) { // kiểm tra nếu giá trị là một số hợp lệ
        formatted = formatted.toLocaleString(); // định dạng số
            input_total_price.value = formatted;
        } else { // nếu giá trị không hợp lệ
            input_total_price.value = ""; // xóa giá trị trong ô input
        }
    });

    const div_time = document.createElement('div')
    const label_time = document.createElement('label')
    label_time.classList.add('form-label')
    label_time.textContent = 'Thời gian giao dịch'
    label_time.appendChild(data_auto.cloneNode(true))
    const input_time = document.createElement('input')
    input_time.classList.add('form-control')
    input_time.value = dateTime
    div_time.append(label_time, input_time)

    const div_trade_code = document.createElement('div')
    const label_trade_code = document.createElement('label')
    label_trade_code.classList.add('form-label')
    label_trade_code.textContent = 'Mã giao dịch'
    label_trade_code.appendChild(data_auto.cloneNode(true))
    const input_trade_code = document.createElement('input')
    input_trade_code.classList.add('form-control')
    input_trade_code.value = getRandomInt(1000000000, 9999999999)
    div_trade_code.append(label_trade_code, input_trade_code)

    const div_content = document.createElement('div')
    const label_content = document.createElement('label')
    label_content.classList.add('form-label')
    label_content.textContent = 'Nội dung'
    label_content.appendChild(data_auto.cloneNode(true))
    const input_content = document.createElement('input')
    input_content.classList.add('form-control')
    input_content.value = getRandomInt(1000, 9999)
    div_content.append(label_content, input_content)

    const div_recipient_name = document.createElement('div')
    const label_recipient_name = document.createElement('label')
    label_recipient_name.classList.add('form-label')
    label_recipient_name.textContent = 'Tên người thụ hưởng'
    const input_recipient_name = document.createElement('input')
    input_recipient_name.classList.add('form-control')
    input_recipient_name.placeholder = 'NGUYEN HO TUAN TINH'
    div_recipient_name.append(label_recipient_name, input_recipient_name)

    const div_recipient_number = document.createElement('div')
    const label_recipient_number = document.createElement('label')
    label_recipient_number.classList.add('form-label')
    label_recipient_number.textContent = 'Số tài khoản ngân hàng nhận'
    const input_recipient_number = document.createElement('input')
    input_recipient_number.classList.add('form-control')
    input_recipient_number.placeholder = '9999999999999'
    div_recipient_number.append(label_recipient_number, input_recipient_number)

    const div_create_bill = document.createElement('div')
    div_create_bill.classList.add('mt-4')
    const button_create_bill = document.createElement('button')
    button_create_bill.classList.add('btn', 'btn-success', 'w-100')
    button_create_bill.textContent = 'Tạo hóa đơn mới'
    div_create_bill.appendChild(button_create_bill)

    const div_notify_form = document.createElement('div')
    div_notify_form.classList.add('notify-form')
    const i_notify_form = document.createElement('i')
    i_notify_form.textContent = 'Những mục đánh dấu (*) là dữ liệu tạo tự động, có thể chỉnh sửa nếu cần thiết'
    div_notify_form.appendChild(i_notify_form)
    
    // Thêm những thứ mặc định trên đt
    form_vietcombank.append(div_clock, div_battery, div_total_sim, div_signal1, div_signal2, div_wifi, br_game.cloneNode(true))
    // Thêm những thứ bank của Vietcombank cần (Data không phải nhập)
    form_vietcombank.append(div_time, div_trade_code, div_content, br_game.cloneNode(true))
    // Thêm những thứ bank của Vietcombank cần (Data nhập tay)
    form_vietcombank.append(div_total_price, div_recipient_name, div_recipient_number)
    // Thêm button và notify
    form_vietcombank.append(div_create_bill, div_notify_form)


    // Đưa thông tin vào ảnh
    button_create_bill.addEventListener('click', function() {
        const img_vietcombank = document.querySelector('#new_bill10')
        img_vietcombank.innerHTML = ''
        const img_bill = document.createElement('img')
        img_bill.src = 'photo/vietcombank.webp'
        img_bill.classList.add('photo_style')

        const clock = document.createElement('div')
        clock.classList.add('clock-vietcombank')
        clock.textContent = input_clock.value
    
        const battery = document.createElement('div')
        battery.classList.add('battery-vietcombank')
        battery.style.width = 39 * input_battery.value / 100 + 'px'
        battery.style.background = 'white'
        if(input_battery.value < 20) {
            battery.style.background = 'red'
        }
    
        const wifi = document.createElement('div')
        wifi.innerHTML = ''
        if(select_wifi.value == 1) {
            wifi.classList.add('wifi-vietcombank')
            const img_wifi = document.createElement('img')
            img_wifi.style.width = '100%'
            img_wifi.src = 'photo/icon_wifi_white.jpg'
            wifi.append(img_wifi)
        }
        else if (select_wifi.value == 2) {
            wifi.classList.add('text_wifi-vietcombank')
            wifi.textContent = 'LTE'
        } else if (select_wifi.value == 3) {
            wifi.classList.add('text_wifi-vietcombank')
            wifi.textContent = '4G'
        }
    
        if (select_total_sim.value == 1) {
            const signal = document.createElement('div')
            signal.classList.add('signal-vietcombank')
            for(let i = 0; i < select_signal1.value; i++) {
                const bar = document.createElement('div')
                bar.classList.add('bar-vietcombank', 'background_white')
                signal.appendChild(bar)
            }
    
            const signal_invi = document.createElement('div')
            signal_invi.classList.add('signal-vietcombank')
            for(let i = 0; i < 4; i++) {
                const bar = document.createElement('div')
                bar.classList.add('bar-vietcombank', 'background_invi_vietcombank')
                signal_invi.appendChild(bar)
            }
            img_vietcombank.append(signal_invi, signal)
        }
    
        else if (select_total_sim.value == 2) {
            // Sóng đt sim 1
            const signal1 = document.createElement('div')
            signal1.classList.add('signal1-vietcombank')
            for(let i = 0; i < select_signal1.value; i++) {
                const bar_signal1 = document.createElement('div')
                bar_signal1.classList.add('bar1-vietcombank', 'background_white')
                signal1.appendChild(bar_signal1)
            }
            const signal1_invi = document.createElement('div')
            signal1_invi.classList.add('signal1-vietcombank')
            for(let i = 0; i < 4; i++) {
                const bar_signal1_invi = document.createElement('div')
                bar_signal1_invi.classList.add('bar1-vietcombank', 'background_invi_vietcombank')
                signal1_invi.appendChild(bar_signal1_invi)
            }
    
            // Sóng đt sim 2
            const signal2 = document.createElement('div')
            signal2.classList.add('signal2-vietcombank')
            for(let i = 0; i < select_signal2.value; i++) {
                const bar_signal2 = document.createElement('div')
                bar_signal2.classList.add('bar2-vietcombank','background_white')
                signal2.appendChild(bar_signal2)
            }
            const signal2_invi = document.createElement('div')
            signal2_invi.classList.add('signal2-vietcombank')
            for(let i = 0; i < 4; i++) {
                const bar_signal2_invi = document.createElement('div')
                bar_signal2_invi.classList.add('bar2-vietcombank', 'background_invi_vietcombank')
                signal2_invi.appendChild(bar_signal2_invi)
            }
            img_vietcombank.append(signal1_invi, signal1, signal2_invi, signal2)
        }
        
        const price = document.createElement('div')
        price.classList.add('price-vietcombank')
        price.textContent = input_total_price.value.replace(/\./g, ',') + ' VND'
    
        const time = document.createElement('div')
        time.classList.add('time-vietcombank')
        time.textContent = input_time.value
    
        const recipient_name = document.createElement('div')
        recipient_name.classList.add('recipient_name-vietcombank')
        recipient_name.textContent = input_recipient_name.value
    
        const recipient_number = document.createElement('div')
        recipient_number.classList.add('recipient_number-vietcombank')
        recipient_number.textContent = input_recipient_number.value
    
        const trade_code = document.createElement('div')
        trade_code.classList.add('trade_code-vietcombank')
        trade_code.textContent = getRandomInt(1000000000, 9999999999)
    
        const content = document.createElement('div')
        content.classList.add('content-vietcombank')
        content.textContent = input_content.value

        const custom_icon = document.createElement('div')
        custom_icon.classList.add('custom_icon-vietcombank')
        const img_custom_icon = document.createElement('img')
        img_custom_icon.style.width = '100%'
        const int_custom_icon = getRandomInt(1, 3)
        console.log(int_custom_icon)
        if(int_custom_icon == 1) {
            img_custom_icon.src = 'photo/location_white.png'
        } else if (int_custom_icon == 2) {
            img_custom_icon.src = 'photo/clock_white.png'
        }
        custom_icon.appendChild(img_custom_icon)
    
        img_vietcombank.append(img_bill, custom_icon, clock, battery, wifi, price, time, recipient_name, recipient_number, trade_code, content)    
    })
    const create_to_img_vietcombank = document.querySelector('#create_to_img-10')
    create_to_img_vietcombank.addEventListener('click', function () {
        html2canvas(document.querySelector("#new_bill10")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new_bill_vietcombank.jpg';
            a.click();
            location.reload();
        });
    })
} catch (error) {
    console.log(error)
}


// --------------------------------------- Đưa dữ liệu Vietinbank --------------------------------------- 
var screenshotButton_vietinbank = document.querySelector('#create_bill-vietinbank')
var create_bill_vietinbank = document.querySelector('#create_to_img-11')
if(screenshotButton_vietinbank) {
    screenshotButton_vietinbank.addEventListener("click", function() {
        var value_clock_vietinbank = document.querySelector('#input_clock').value
        var value_battery = document.querySelector('#input_battery_level').value
        var value_time_vietinbank = document.querySelector('#input_time-vietinbank').value
        var value_trade_code_vietinbank = document.querySelector('#input_trade_code-vietinbank').value
        var value_from_number_vietinbank = document.querySelector('#input_from_number-vietinbank').value
        var value_from_name_vietinbank = document.querySelector('#input_from_name-vietinbank').value
        var value_recipient_number_vietinbank = document.querySelector('#input_recipient_number-vietinbank').value
        var value_recipient_name_vietinbank = document.querySelector('#input_recipient_name-vietinbank').value
        var value_recipient_bank_vietinbank = document.querySelector('#input_recipient_bank-vietinbank').value
        var value_total_number_vietinbank = document.querySelector('#input_total_number').value
        var value_total_text_vietinbank = document.querySelector('#input_total_text-vietinbank').value
        var value_message_vietinbank = document.querySelector('#input_message-vietinbank').value

        var output_clock_vietinbank = document.querySelector('#output_clock-vietinbank')
        output_clock_vietinbank.innerHTML = value_clock_vietinbank
        var output_battery = document.querySelector('#output_battery_level')
        output_battery.style.background = 'white'
        if(value_battery <= 20) {
            output_battery.style.background = '#fd465e'
        }
        output_battery.style.width = 19.7*value_battery/100 +'px'
        var output_time_vietinbank = document.querySelector('#output_time-vietinbank')
        output_time_vietinbank.innerHTML = value_time_vietinbank
        var output_trade_code_vietinbank = document.querySelector('#output_trade_code-vietinbank')
        output_trade_code_vietinbank.innerHTML = value_trade_code_vietinbank
        var output_from_number_vietinbank = document.querySelector('#output_from_number-vietinbank')
        output_from_number_vietinbank.innerHTML = value_from_number_vietinbank
        var output_from_name_vietinbank = document.querySelector('#output_from_name-vietinbank')
        output_from_name_vietinbank.innerHTML = value_from_name_vietinbank
        var output_recipient_number_vietinbank = document.querySelector('#output_recipient_number-vietinbank')
        output_recipient_number_vietinbank.innerHTML = value_recipient_number_vietinbank
        var output_recipient_name_vietinbank = document.querySelector('#output_recipient_name-vietinbank')
        output_recipient_name_vietinbank.innerHTML = value_recipient_name_vietinbank
        var output_recipient_bank_vietinbank = document.querySelector('#output_recipient_bank-vietinbank')
        output_recipient_bank_vietinbank.innerHTML = value_recipient_bank_vietinbank
        var output_total_number_vietinbank = document.querySelector('#output_total_number-vietinbank')
        output_total_number_vietinbank.innerHTML = value_total_number_vietinbank.replace(/\./g, ',')
        var output_total_text_vietinbank = document.querySelector('#output_total_text-vietinbank')
        output_total_text_vietinbank.innerHTML = value_total_text_vietinbank
        var output_message_vietinbank = document.querySelector('#output_message-vietinbank')
        output_message_vietinbank.innerHTML = value_message_vietinbank

        var div_add = document.querySelector('#new_bill11')
        // Tạo sóng điện thoại
        var value_sim_waves = document.querySelector('#input_sim_waves').value
        if(value_sim_waves) {
            //Xoá thẻ signal cũ
            var signalDiv = document.querySelector('#output_signal')
            
            if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)
            //Tạo mới thẻ signal
            var newsignalDiv = document.createElement('div');
            newsignalDiv.classList.add('signal');
            newsignalDiv.id=('output_signal');
            div_add.appendChild(newsignalDiv)

            //Thêm thẻ bar vào signal
            for(var i = 0; i < value_sim_waves; i++) {
                var newbarDiv = document.createElement('div');
                newbarDiv.classList.add('bar');
                newbarDiv.classList.add('background_white');
                newsignalDiv.appendChild(newbarDiv);
            }
        }

        // Sim 2 điện thoại
        var value_sim2 = document.querySelector('#total_sim').value
        var signal2 = document.querySelector('#output_signal2')
        var signal__1  = document.querySelector('#output_signal-1')
        if (value_sim2 == 1) {
            signal2.style.display = 'none'
            signal__1.style.display = 'none'
            newsignalDiv.style.display = 'block'
        }
        else {
            signal2.style.display = 'block'
            signal__1.style.display = 'block'
            newsignalDiv.style.display = 'none'
        }
        
        //Tạo sóng wifi
        var value_wifi = document.querySelector('#input_wifi').value
        var signalDiv = document.querySelector('#output_wifi')
        if(signalDiv) signalDiv.parentNode.removeChild(signalDiv)

        //Tạo mới wifi
        var new_wifiDiv = document.createElement('div')
        new_wifiDiv.classList.add('wifi')
        new_wifiDiv.id = "output_wifi"
        div_add.appendChild(new_wifiDiv)
        var new_spanWifi = document.createElement('span')
        new_wifiDiv.appendChild(new_spanWifi)
        new_spanWifi.style.color = 'white'
        if(value_wifi == 1) {
            new_spanWifi.textContent = 'LTE'
        }
        if(value_wifi == 2) {
            new_spanWifi.textContent = '4G'
        }
        if(value_wifi == 3) {
            var img_wifi = document.createElement('img')
            img_wifi.classList.add('img_wifi')
            img_wifi.src="photo/icon_wifi_white.jpg"
            new_spanWifi.appendChild(img_wifi)
        }
    })
}
if(create_bill_vietinbank) {
    create_bill_vietinbank.addEventListener("click", function() {
        window.scrollTo(0,0);
        var new_bill = document.querySelector("#new_bill11")
        new_bill.style.width = "1000px"

        var clock = document.querySelector("#output_clock-vietinbank")
        clock.classList.remove('clock-vietcombank')
        clock.classList.add('img-time_acb')

        var custom_icon = document.querySelector('#custom-icon')
        custom_icon.classList.remove('custom-icon')
        custom_icon.classList.add('img-custom-icon')

        var battery = document.querySelector("#output_battery_level")
        var value_battery = document.querySelector('#input_battery_level').value
        battery.classList.remove('battery-level')
        battery.classList.add('img-battery-vietinbank')
        battery.style.width = 50*value_battery/100 + 'px'

        var wifi = document.querySelector('#output_wifi')
        wifi.classList.remove('wifi')
        wifi.classList.add('img-wifi')
        const input_wifi = document.querySelector('#input_wifi').value
        if(input_wifi != 3) {
            wifi.style.top = '37.5px'
        }

        var signal = document.querySelector("#output_signal")
        signal.classList.remove('signal')
        signal.classList.add('img-signal')
        var bar = document.querySelectorAll('.bar')
        bar.forEach(function (item) {
            item.classList.remove('bar')
            item.classList.add('img-bar')
        })

        var signal__1 = document.querySelector('#output_signal-1')
        signal__1.classList.remove('signal-1')
        signal__1.classList.add('img-signal-1')
        var bar__1 = document.querySelectorAll(".bar-1")
        bar__1.forEach(function (item) {
            item.classList.remove('bar-1')
            item.classList.add('img-bar-1')
        })

        var signal2 = document.querySelector('#output_signal2')
        signal2.classList.remove('signal2')
        signal2.classList.add('img-signal2')
        var bar2 = document.querySelectorAll(".bar2")
        bar2.forEach(function (item) {
            item.classList.remove('bar2')
            item.classList.add('img-bar2')
        })

        var time= document.querySelector('#output_time-vietinbank')
        time.classList.remove('time-vietinbank')
        time.classList.add('img-time-vietinbank')

        var trade_code = document.querySelector('#output_trade_code-vietinbank')
        trade_code.classList.remove('trade_code-vietinbank')
        trade_code.classList.add('img-trade_code-vietinbank')

        var from_number = document.querySelector('#output_from_number-vietinbank')
        from_number.classList.remove('from_number-vietinbank')
        from_number.classList.add('img-from_number-vietinbank')

        var from_name = document.querySelector('#output_from_name-vietinbank')
        from_name.classList.remove('from_name-vietinbank')
        from_name.classList.add('img-from_name-vietinbank')

        var recipient_number = document.querySelector('#output_recipient_number-vietinbank')
        recipient_number.classList.remove('recipient_number-vietinbank')
        recipient_number.classList.add('img-recipient_number-vietinbank')

        var recipient_name = document.querySelector('#output_recipient_name-vietinbank')
        recipient_name.classList.remove('recipient_name-vietinbank')
        recipient_name.classList.add('img-recipient_name-vietinbank')

        var recipient_bank = document.querySelector('#output_recipient_bank-vietinbank')
        recipient_bank.classList.remove('recipient_bank-vietinbank')
        recipient_bank.classList.add('img-recipient_bank-vietinbank')

        var total_number = document.querySelector('.recipient_total_number-vietinbank')
        total_number.classList.remove('recipient_total_number-vietinbank')
        total_number.classList.add('img-recipient_total_number-vietinbank')

        var total_text = document.querySelector('#output_total_text-vietinbank')
        total_text.classList.remove('recipient_total_text-vietinbank')
        total_text.classList.add('img-recipient_total_text-vietinbank')

        var text_free = document.querySelector('.text_free-vietinbank')
        text_free.classList.remove('text_free-vietinbank')
        text_free.classList.add('img-text_free-vietinbank')

        var message = document.querySelector('#output_message-vietinbank')
        message.classList.remove('message-vietinbank')
        message.classList.add('img-message-vietinbank')

        var bar = document.querySelectorAll(".bar")
        bar.forEach(function (item) {
            item.classList.remove('bar')
            item.classList.add('img-bar')
        })

        html2canvas(document.querySelector("#new_bill11")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new_bill_vietinbank.jpg';
            a.click();
            location.reload();
        });
    })
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}