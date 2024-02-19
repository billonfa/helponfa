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

const warning_notify = document.createElement('h6')
warning_notify.style.textAlign = "center"
warning_notify.innerHTML = "<i style='color:red'>Lưu ý: Sử dụng tỉ lệ cược HONG KONG</i>"
form.appendChild(warning_notify)

const data_auto = document.createElement('span')
data_auto.classList.add('data_auto')
data_auto.textContent = " (*)"
const br_game = document.createElement('div')
br_game.classList.add('br_game')
const br_ngang = document.createElement('div')
br_ngang.classList.add('br_ngang1')

const row_1 = document.createElement('div')
row_1.classList.add('row', 'text-center')
const left_1 = document.createElement('div')
left_1.classList.add('col-6')
const right_1 = document.createElement('div')
right_1.classList.add('col-6')
row_1.append(left_1, right_1)
form.appendChild(row_1)

for(let i = 0; i < 10; i++) {
    const div_tran = document.createElement('div')
    const label_tran = document.createElement('label')
    label_tran.classList.add('form-label')
    label_tran.textContent = `Trận thứ ${i+1}`
    const input_tran = document.createElement('input')
    input_tran.classList.add('form-control')
    const int_rd = getRandomInt(80, 110)
    input_tran.placeholder = int_rd / 100
    input_tran.id = `tran${i}`

    const select_win = document.createElement('select')
    select_win.id = `select${i}`
    change_color_win(select_win)
    const win1 = document.createElement('option')
    win1.style.color = '#00ad00'
    win1.textContent = 'Thắng 100%'
    win1.value = 1
    const win50 = document.createElement('option')
    win50.style.color = 'rgb(0 221 0)'
    win50.textContent = 'Thắng 50%'
    win50.value = 2
    const hoa = document.createElement('option')
    hoa.style.color = 'black'
    hoa.textContent = 'Hòa'
    hoa.value = 3
    const lose50 = document.createElement('option')
    lose50.style.color = 'red'
    lose50.textContent = 'Thua 50%'
    lose50.value = 4
    select_win.classList.add('select')
    select_win.append(win1, win50, hoa, lose50)

    div_tran.append(label_tran, input_tran, select_win)

    if(i < 5) {
        left_1.appendChild(div_tran)
    }
    else {
        right_1.appendChild(div_tran)
    }
}

const div_tien_cuoc = document.createElement('div')
div_tien_cuoc.classList.add('tien_cuoc')
const label_tien_cuoc = document.createElement('label')
label_tien_cuoc.classList.add('form-label', 'label_tien_cuoc')
label_tien_cuoc.textContent = 'Tiền cược'
const input_tien_cuoc = document.createElement('input')
input_tien_cuoc.classList.add('form-control', 'input_tien_cuoc')
input_tien_cuoc.value = '15.000'
change_money(input_tien_cuoc)
div_tien_cuoc.append(label_tien_cuoc, input_tien_cuoc)
form.appendChild(div_tien_cuoc)

const div_result = document.createElement('div')
div_result.classList.add('result')
form.appendChild(div_result)

function change_color_win(select_win) {
    select_win.addEventListener('change', function () {
        if(select_win.value == 1) {
            select_win.style.color = '#00ad00'
        }
        else if (select_win.value == 2) {
            select_win.style.color = 'rgb(0 221 0)'
        }
        else if (select_win.value == 3) {
            select_win.style.color = 'black'
        }
        else if (select_win.value == 4) {
            select_win.style.color = 'red'
        }
    })
}

const tinh_tien = document.querySelector('#tinh_tien')
if(tinh_tien) {
    tinh_tien.addEventListener('click', function () {
        let total = 0
        let tien_cuoc = input_tien_cuoc.value.replace(/\./g, "");
        let tong_ti_le_cuoc = 1
        for(let i = 0; i < 10; i++) {
            const ti_le = document.querySelector(`#tran${i}`)
            if(ti_le.value != '') {
                const select_win = document.querySelector(`#select${i}`)
                if(select_win.value == 1) {
                    tong_ti_le_cuoc *= (1 + parseFloat(ti_le.value))
                }
                else if (select_win.value == 2) {
                    tong_ti_le_cuoc *= 1 + (ti_le.value / 2)
                }
                else if (select_win.value == 4) {
                    tong_ti_le_cuoc *= 0.5
                }
            }
        }
        total = parseInt(total + tien_cuoc * tong_ti_le_cuoc)
        const tien_co_the_thang = doi_thanh_tien(total - tien_cuoc)
        total = doi_thanh_tien(parseInt(tien_cuoc * tong_ti_le_cuoc))
        console.log("Toal: " + total)
        console.log("Tien co the thang: " + tien_co_the_thang)

        div_result.textContent = ''
        div_result.innerHTML = '<div>Tiền có thể thắng: <span class="tien_co_the_thang">' + tien_co_the_thang + '</span></div>' +
                                '<div">Tổng tiền nhận được: <span class="total">'+ total + '</span></div>'
    })
}

function doi_thanh_tien(money) {
    money = money.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
    money = money.replace(/₫/g, "")
    return money
}

function change_money(numberInput) {
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}