const bookBtn = document.getElementById("bookBtn");
const paymentSection = document.getElementById("paymentSection");
const paymentDetails = document.getElementById("paymentDetails");
const confirmPayment = document.getElementById("confirmPayment");
const cancelPayment = document.getElementById("cancelPayment");

bookBtn.addEventListener("click", function () {
    const roomTypeText = document.getElementById("roomType").selectedOptions[0].text;
    const guests = document.getElementById("guests").value;
    const totalAmount = document.getElementById("totalPrice").textContent;

    paymentDetails.innerHTML = `
        🏨 <b>Резервация за:</b> ${roomTypeText}<br>
        👥 <b>Гости:</b> ${guests}<br>
        💰 <b>Обща сума:</b> ${totalAmount}
    `;

    paymentSection.style.display = "block";
});

confirmPayment.addEventListener("click", function () {
    alert("🎉 Успешно! Вашата резервация е потвърдена.");
    paymentSection.style.display = "none";
});

cancelPayment.addEventListener("click", function () {
    paymentSection.style.display = "none";
});
