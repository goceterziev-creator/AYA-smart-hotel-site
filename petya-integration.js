const assistantName = "AYA Concierge AI";

const aiGreeting = `
✨ Здравейте! Аз съм AYA – вашият персонален AI Concierge.
Помагам ви с избор на стаи, престой, VIP услуги и интелигентни препоръки. 🧠
`;

const askPetyaBtn = document.getElementById("askPetya");
const aiSuggestionBox = document.getElementById("aiSuggestion");

askPetyaBtn.addEventListener("click", function () {
    alert(aiGreeting);
});
