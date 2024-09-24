document.getElementById("donate_btn").addEventListener("click", function () {
    document.getElementById("history_btn").style.backgroundColor="white"
    document.getElementById("donate_btn").style.backgroundColor="#B4F461"
    document.getElementById("history_card").classList.add('hidden');
    document.getElementById("donate_card").classList.remove('hidden')

})

document.getElementById("history_btn").addEventListener("click",function(){
    document.getElementById("history_btn").style.backgroundColor="#B4F461";
    document.getElementById("donate_btn").style.backgroundColor="white";
    document.getElementById("history_card").classList.remove('hidden');
    document.getElementById("donate_card").classList.add("hidden")
    
})