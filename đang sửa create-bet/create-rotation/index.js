window.addEventListener("load", function () {
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

    const button_create = document.querySelector('#create_to_img')
    if(button_create) {
        button_create.addEventListener("click", function() {
        const value_wifi = document.querySelector('#input_wifi_ip').value
        if(value_wifi == 1 || value_wifi == 2) {
            document.querySelector('#output_wifi_ip').style.top = '22px'
        }
        window.scrollTo(0,0);
        html2canvas(document.querySelector("#new_rotation")).then(canvas => {
                var a = document.createElement('a');
                a.href = canvas.toDataURL('image/jpeg', 0.9);
                a.download = 'new-rotation.jpg';
                a.click();
                // location.reload()
            });
        })
    }
    // Dữ liệu bóng vip
    try {
        try {
            const button_ip = this.document.querySelector('#create_ip')
            button_ip.addEventListener('click', function() {
                // Lấy dữ liệu bv ở Iphone
                const value_clock_ip = document.querySelector('#input_clock_ip').value
                const value_batery_ip = document.querySelector('#input_battery_level_ip').value
                const value_sim_waves_ip = document.querySelector('#input_sim_waves_ip').value
                const value_wifi_ip = document.querySelector('#input_wifi_ip').value
                // Xử lý dữ liệu bv ở Iphone
                const out_clock = document.querySelector('#output_clock_ip')
                out_clock.textContent = value_clock_ip
                const out_battery = document.querySelector('#output_battery_level_ip')
                out_battery.style.backgroundColor = 'white'
                out_battery.style.width = value_batery_ip * 28 / 100+ 'px'
                if(value_batery_ip <= 20) {
                    out_battery.style.backgroundColor = 'red'
                }
                // Số vạch sóng đt
                const output_signal_ip = document.querySelector('#output_signal_ip')
                output_signal_ip.innerHTML = ''
                for(let i = 0; i < value_sim_waves_ip; i++) {
                    var new_signal = document.createElement('div')
                    new_signal.classList.add('bar', 'background_white')
                    output_signal_ip.appendChild(new_signal)
                }
                // Sóng wifi
                const out_wifi = document.querySelector('#output_wifi_ip')
                out_wifi.innerHTML = ''
                out_wifi.style.left = '496px'
                out_wifi.style.top = '24px'
                out_wifi.style.color = 'white'
                out_wifi.style.fontSize = '17px'

                if(value_wifi_ip == 1) {
                    out_wifi.textContent = 'LTE'
                }
                else if (value_wifi_ip == 2) {
                    out_wifi.textContent = '4G'
                    
                }
                else {
                    const icon_wifi = document.createElement('img')
                    icon_wifi.classList.add('img_wifi')
                    icon_wifi.src = '../photo/icon_wifi_white.jpg'
                    out_wifi.append(icon_wifi);
                    out_wifi.style = ''
                }
            })
            
        }
        catch (error) {
            console.log(error)
        }
        
        // Xử lý Ip và adroid
        const price_bv = this.document.querySelector('#input_price_bv')
        const cate_iphone = this.document.querySelectorAll('.cate_iphone_bv')
        const cate_adroid = this.document.querySelectorAll('.cate_adroid_bv')
        const img_export = document.querySelector('#photo_export')
        
        const input_cate_phone = this.document.querySelector('#input_cate_phone_bv')

        // Ở Bong Vip
        input_cate_phone.addEventListener('change', function () {
            if(input_cate_phone.value == 1) {
                cate_iphone.forEach(item => item.classList.remove('hidden')) 
                cate_adroid.forEach(item => item.classList.add('hidden')) 
                document.querySelector('#create_adroid').id = 'create_ip'
                img_export.src = 'photo-rotation/iphone/bongvip_1m.jpg';
            }
            else {
                cate_iphone.forEach(item => item.classList.add('hidden'))
                cate_adroid.forEach(item => item.classList.remove('hidden'))
                document.querySelector('#create_ip').id = 'create_adroid'
                img_export.src = 'photo-rotation/adroid/bongvip_1m.jpeg';
            }
        })
        
        price_bv.addEventListener('change', function() {
            // BV - ip
            if(input_cate_phone.value == 1) {
                if(price_bv.value == 1000) {
                    img_export.src = 'photo-rotation/iphone/bongvip_1m.jpg';
                }
                if(price_bv.value == 2000) {
                    img_export.src = 'photo-rotation/iphone/bongvip_2m.jpg';
                }
                if(price_bv.value == 5000) {
                    img_export.src = 'photo-rotation/iphone/bongvip_5m.jpg';
                }
                if(price_bv.value == 400) {
                    img_export.src = 'photo-rotation/iphone/bongvip_400k.jpg';
                }
                if(price_bv.value == 500) {
                    img_export.src = 'photo-rotation/iphone/bongvip_500k.jpg';
                }
            }
            // BV - adroid
            if(input_cate_phone.value == 2) {
                if(price_bv.value == 1000) {
                    img_export.src = 'photo-rotation/adroid/bongvip_1m.jpeg';
                }
                if(price_bv.value == 2000) {
                    img_export.src = 'photo-rotation/adroid/bongvip_2m.jpeg';
                }
                if(price_bv.value == 5000) {
                    img_export.src = 'photo-rotation/adroid/bongvip_5m.jpeg';
                }
                if(price_bv.value == 400) {
                    img_export.src = 'photo-rotation/adroid/bongvip_400k.jpeg';
                }
                if(price_bv.value == 500) {
                    img_export.src = 'photo-rotation/adroid/bongvip_500k.jpeg';
                }
            }
        })
        
    }
    catch (error){
        console.log(error)
    }
    
    // Dữ liệu mg
    try {
        // Xử lý ở Iphone
        try {
            const button_ip = this.document.querySelector('#create_ip')
            button_ip.addEventListener('click', function() {
                // Lấy dữ liệu bv ở Iphone
                const value_clock_ip = document.querySelector('#input_clock_ip').value
                const value_batery_ip = document.querySelector('#input_battery_level_ip').value
                const value_sim_waves_ip = document.querySelector('#input_sim_waves_ip').value
                const value_wifi_ip = document.querySelector('#input_wifi_ip').value
                // Xử lý dữ liệu bv ở Iphone
                const out_clock = document.querySelector('#output_clock_ip')
                out_clock.textContent = value_clock_ip
                const out_battery = document.querySelector('#output_battery_level_ip')
                out_battery.style.backgroundColor = 'white'
                out_battery.style.width = value_batery_ip * 28 / 100+ 'px'
                if(value_batery_ip <= 20) {
                    out_battery.style.backgroundColor = 'red'
                }
                // Số vạch sóng đt
                const output_signal_ip = document.querySelector('#output_signal_ip')
                output_signal_ip.innerHTML = ''
                for(let i = 0; i < value_sim_waves_ip; i++) {
                    var new_signal = document.createElement('div')
                    new_signal.classList.add('bar', 'background_white')
                    output_signal_ip.appendChild(new_signal)
                }
                // Sóng wifi
                const out_wifi = document.querySelector('#output_wifi_ip')
                out_wifi.innerHTML = ''
                out_wifi.style.left = '496px'
                out_wifi.style.top = '24px'
                out_wifi.style.color = 'white'
                out_wifi.style.fontSize = '17px'

                if(value_wifi_ip == 1) {
                    out_wifi.textContent = 'LTE'
                }
                else if (value_wifi_ip == 2) {
                    out_wifi.textContent = '4G'
                    
                }
                else {
                    const icon_wifi = document.createElement('img')
                    icon_wifi.classList.add('img_wifi')
                    icon_wifi.src = '../photo/icon_wifi_white.jpg'
                    out_wifi.append(icon_wifi);
                    out_wifi.style = ''
                }
            })
            
        }
        catch (error) {
            console.log(error)
        }
        
        // Xử lý Ip và adroid
        const price_mg = this.document.querySelector('#input_price_mg')
        const cate_iphone = this.document.querySelectorAll('.cate_iphone_mg')
        const cate_adroid = this.document.querySelectorAll('.cate_adroid_mg')
        const img_export = document.querySelector('#photo_export')
        
        const input_cate_phone = this.document.querySelector('#input_cate_phone_mg')
        // Ở Bong Vip
        input_cate_phone.addEventListener('change', function () {
            if(input_cate_phone.value == 1) {
                cate_iphone.forEach(item => item.classList.remove('hidden')) 
                cate_adroid.forEach(item => item.classList.add('hidden')) 
                document.querySelector('#create_adroid').id = 'create_ip'
                img_export.src = 'photo-rotation/iphone/mg_1m.jpg';
            }
            else {
                cate_iphone.forEach(item => item.classList.add('hidden'))
                cate_adroid.forEach(item => item.classList.remove('hidden'))
                document.querySelector('#create_ip').id = 'create_adroid'
                img_export.src = 'photo-rotation/adroid/mg_1m.jpeg';
            }
        })
        
        price_mg.addEventListener('change', function() {
            // BV - ip
            if(input_cate_phone.value == 1) {
                if(price_mg.value == 1000) {
                    img_export.src = 'photo-rotation/iphone/mg_1m.jpg';
                }
                if(price_mg.value == 2000) {
                    img_export.src = 'photo-rotation/iphone/mg_2m.jpg';
                }
                if(price_mg.value == 5000) {
                    img_export.src = 'photo-rotation/iphone/mg_5m.jpg';
                }
                if(price_mg.value == 400) {
                    img_export.src = 'photo-rotation/iphone/mg_400k.jpg';
                }
                if(price_mg.value == 500) {
                    img_export.src = 'photo-rotation/iphone/mg_500k.jpg';
                }
            }
            // BV - adroid
            if(input_cate_phone.value == 2) {
                if(price_mg.value == 1000) {
                    img_export.src = 'photo-rotation/adroid/mg_1m.jpeg';
                }
                if(price_mg.value == 2000) {
                    img_export.src = 'photo-rotation/adroid/mg_2m.jpeg';
                }
                if(price_mg.value == 5000) {
                    img_export.src = 'photo-rotation/adroid/mg_5m.jpeg';
                }
                if(price_mg.value == 400) {
                    img_export.src = 'photo-rotation/adroid/mg_400k.jpeg';
                }
                if(price_mg.value == 500) {
                    img_export.src = 'photo-rotation/adroid/mg_500k.jpeg';
                }
            }
        })
        
    }
    catch (error){
        console.log(error)
    }
})