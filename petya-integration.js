// ===============================
//  AYA Concierge AI – Integration
// ===============================

// Replace PETYA name everywhere
const assistantName = "AYA Concierge AI";

// AI greeting message
const aiGreeting = `
✨ Здравейте! Аз съм AYA – вашият персонален AI Concierge.  
Помагам ви да изберете най-подходящата стая според стил, комфорт, бюджет и продължителност на престой. 🏨💫  
Попитайте ме смело – аз мисля вместо вас! 🧠
`;

// DOM elements
const askPetyaBtn = document.getElementById("askPetya");
const aiSuggestionBox = document.getElementById("aiSuggestion");

// Handle AI Suggestion
function generateAISuggestion() {
    const roomType = document.getElementById("roomType").value;
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const guests = document.getElementById("guests").value;

    if (!roomType || !checkIn || !checkOut) {
        aiSuggestionBox.innerHTML =
            "🧠 AYA препоръчва: Моля, въведете стая, дати и гости.";
        return;
    }

    let suggestion = "";

    if (roomType === "standard") {
        suggestion = `📌 За кратки престои и оптимална цена, Стандартната стая е чудесен избор. `;
    } else if (roomType === "deluxe") {
        suggestion = `💎 Делукс стаята предлага по-високо ниво на комфорт – идеална за двойки и романтични уикенди. `;
    } else if (roomType === "suite") {
        suggestion = `👑 Луксозният апартамент е най-добрият вариант за престижно изживяване, повече пространство и VIP конфиденциалност. `;
    }

    aiSuggestionBox.innerHTML =
        `🧠 ${assistantName} препоръчва:<br>${suggestion}<br>
         Продължителност: ${checkIn} → ${checkOut}<br>
         Гости: ${guests}`;
}

// On Ask AYA button click
askPetyaBtn.addEventListener("click", function () {
    alert(aiGreeting);
});
    setupSmartRecommendations() {
        // Advanced AI recommendation logic
        this.recommendationEngine = {
            analyzeSeason: function() {
                const month = new Date().getMonth();
                return month >= 5 && month <= 8 ? 'high' : 'low';
            },
            
            suggestOptimalRoom: function(guests, purpose) {
                const recommendations = {
                    'business': 'deluxe',
                    'romance': 'suite', 
                    'family': 'suite',
                    'solo': 'standard'
                };
                return recommendations[purpose] || 'deluxe';
            },
            
            calculateBestPrice: function(roomType, season) {
                const basePrice = {
                    standard: 80,
                    deluxe: 120, 
                    suite: 200
                }[roomType];
                
                return season === 'high' ? basePrice * 1.2 : basePrice * 0.9;
            }
        };
    }

    // Advanced AI method for future expansion
    predictUserPreferences() {
        return {
            preferredRoomType: 'deluxe',
            budgetRange: 'medium',
            travelPurpose: 'leisure',
            priority: 'comfort'
        };
    }
}

// Initialize PЕТЯ AI
document.addEventListener('DOMContentLoaded', () => {
    window.PetyaHotelAI = new PetyaHotelAI();
});
