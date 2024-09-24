document.getElementById("quota_donate_btn").addEventListener("click", function (event) {

    event.preventDefault();
    let donate_money3 = document.getElementById("quota_donate_money").value;
    if ((isNaN(donate_money3))) {
        return alert("Invalid Donation Amount");
    }
    donate_money3 = parseFloat(donate_money3);
    if ((donate_money3 < 0)) {
        return alert("Invalid Donation Amount");
    }

    total_quota_amount = document.getElementById("quota_total_donate").innerHTML;
    total_quota_amount = parseFloat(total_quota_amount)

    remaining_balance = document.getElementById("balance").innerHTML;
    remaining_balance = parseFloat(remaining_balance)

    if (donate_money3 > remaining_balance) {
        return alert("Insufficient balance")
    }
    total_quota_amount = total_quota_amount + donate_money3;
    document.getElementById("quota_total_donate").innerHTML = total_quota_amount;
    remaining_balance = remaining_balance - donate_money3;
    document.getElementById("balance").innerHTML = remaining_balance;
    document.getElementById('my_modal_1').showModal();


    const date = new Date();
    const p = document.createElement('p')
    p.style.border = "1px solid gray";
    p.style.padding = "20px";
    p.style.borderRadius = "10px"
    p.style.marginTop = "10px"
    p.style.fontSize = "18px";
    p.innerText = `${donate_money3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh \n Date: ${date} `;
    document.getElementById('history').appendChild(p)

})
