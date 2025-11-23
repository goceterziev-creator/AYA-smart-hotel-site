// ===============================
//  AYA Smart Hotels – Booking Logic
// ===============================

// DOM Elements
const roomType = document.getElementById("roomType");
const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const guests = document.getElementById("guests");
const totalPrice = document.getElementById("totalPrice");
const roomPriceEl = document.getElementById("roomPrice");
const taxAmountEl = document.getElementById("taxAmount");
const aiSuggestionBox = document.getElementById("aiSuggestion");

// Room Rates
const ROOM_RATES = {
    standard: 80,
    deluxe: 120,
    suite: 200
};

// Calculate number of nights
function calculateNights() {
    if (!checkIn.value || !checkOut.value) return 0;

    const start = new Date(checkIn.value);
    const end = new Date(checkOut.value);
    const diffTime = end - start;
    const nights = diffTime / (1000 * 60 * 60 * 24);

    return nights > 0 ? nights : 0;
}

// Calculate total cost
function calculateTotal() {
    const nights = calculateNights();
    const roomTypeValue = roomType.value;

    if (!ROOM_RATES[roomTypeValue] || nights === 0) {
        totalPrice.textContent = "$0";
        roomPriceEl.textContent = "$0";
        taxAmountEl.textContent = "$0";
        return;
    }

    const rate = ROOM_RATES[roomTypeValue];
    const basePrice = rate * nights;
    const tax = basePrice * 0.18;
    const total = basePrice + tax;

    roomPriceEl.textContent = `$${rate} × ${nights} нощувки = $${basePrice.toFixed(2)}`;
    taxAmountEl.textContent = `$${tax.toFixed(2)}`;
    totalPrice.textContent = `$${total.toFixed(2)}`;
}

// AI Recommendation
function generateAISuggestion() {
    const roomTypeValue = roomType.value;
    const nights = calculateNights();

    if (!roomTypeValue || nights === 0) {
        aiSuggestionBox.innerHTML =
            `🧠 AYA препоръчва: Моля, изберете стая и дати за престой.`;
        return;
    }

    let suggestion = "";

    if (roomTypeValue === "standard") {
        suggestion = `📌 Стандартната стая е подходяща за кратки престои и оптимална цена.`;
    } else if (roomTypeValue === "deluxe") {
        suggestion = `💎 Делукс стаята предлага повече комфорт и уют – идеална за двойки.`;
    } else if (roomTypeValue === "suite") {
        suggestion = `👑 Луксозният апартамент е най-подходящ за престижно и VIP изживяване.`;
    }

    aiSuggestionBox.innerHTML =
        `🧠 AYA препоръчва:<br>${suggestion}<br>⏳ Продължителност: ${nights} нощувки`;
}

// Event Listeners
[roomType, checkIn, checkOut].forEach(input => {
    input.addEventListener("change", () => {
        calculateTotal();
        generateAISuggestion();
    });
});

// Initial load
calculateTotal();
