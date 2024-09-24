document.getElementById("noakhali_donate_btn").addEventListener("click", function (event) {

    event.preventDefault();
    let donate_money1 = document.getElementById("noakhali_donate_money").value;

    if (!/\d/.test(donate_money1) || (donate_money1 < 0)) {
        console.log(typeof donate_money1)
        return alert("Invalid Donation Amount");
    }


    total_noakhali_amount = document.getElementById("noakhali_total_donate").innerHTML;
    total_noakhali_amount = parseFloat(total_noakhali_amount)
    donate_money1 = parseFloat(donate_money1);
    remaining_balance = document.getElementById("balance").innerHTML;
    remaining_balance = parseFloat(remaining_balance)

    if (donate_money1 > remaining_balance) {
        return alert("Insufficient balance")

    }






    




    total_noakhali_amount = total_noakhali_amount + donate_money1;
    document.getElementById("noakhali_total_donate").innerHTML = total_noakhali_amount;

    remaining_balance = remaining_balance - donate_money1;
    document.getElementById("balance").innerHTML = remaining_balance;


    document.getElementById('my_modal_1').showModal();

    const date = new Date();
    const p = document.createElement('p')
    p.style.border = "1px solid gray";
    p.style.padding = "20px";
    p.style.borderRadius = "10px"
    p.style.marginTop = "10px"
    p.style.fontSize = "18px";
    p.innerText = `${donate_money1} Taka is Donated for sadman-2024 at Noakhali, Bangladesh \n Date: ${date} `;
    document.getElementById('history').appendChild(p)



})