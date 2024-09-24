document.getElementById("feni_donate_btn").addEventListener("click", function (event) {

    event.preventDefault();
    let donate_money2 = document.getElementById("feni_donate_money").value;
    donate_money2 = parseFloat(donate_money2);
    
    if ((donate_money2 < 0) || (isNaN(donate_money2))) {
        
        return alert("Invalid Donation Amount");
    }


    total_feni_amount = document.getElementById("feni_total_donate").innerHTML;
    total_feni_amount = parseFloat(total_feni_amount)
  

    remaining_balance = document.getElementById("balance").innerHTML;
    remaining_balance = parseFloat(remaining_balance)

    if (donate_money2 > remaining_balance) {
        return alert("Insufficient balance")
    }



    total_feni_amount = total_feni_amount + donate_money2;
    document.getElementById("feni_total_donate").innerHTML = total_feni_amount;

    remaining_balance = remaining_balance - donate_money2;
    document.getElementById("balance").innerHTML = remaining_balance;
    document.getElementById('my_modal_1').showModal();

    const date = new Date();
    const p = document.createElement('p')
    p.style.border = "1px solid gray";
    p.style.padding = "20px";
    p.style.borderRadius = "10px"
    p.style.marginTop="10px"
    p.style.fontSize="18px";
    p.innerText = `${donate_money2} Taka is Donated for sadman-2024 at Feni, Bangladesh \n Date: ${date} `;
    document.getElementById('history').appendChild(p)


})