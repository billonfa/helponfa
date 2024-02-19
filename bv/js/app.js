
var create_bill_bet = document.querySelector('#create_bill1')
if (create_bill_bet) {
    create_bill_bet.addEventListener("click", function () {
        window.scrollTo(0, 0);
        html2canvas(document.querySelector("#new-bet-ball-bv")).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg', 0.9);
            a.download = 'new_withdrawal_Bongvip.jpg';
            a.click();
            location.reload()
        });
    })
}