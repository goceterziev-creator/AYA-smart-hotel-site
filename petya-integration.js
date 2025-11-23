// AYA Concierge AI Integration (replaces Petya visual behavior)
class AYAConciergeAI {
    constructor() {
        this.name = "AYA Concierge AI";
        this.version = "3.0";
        this.init();
    }

    init() {
        console.log(`🌐 ${this.name} v${this.version} - Активирана`);
        this.dynamicMessages();
    }

    dynamicMessages() {
        const aiMessages = [
            "Добре дошли в AYA Smart Hotels — вашето AI изживяване започва тук.",
            "Мога да ви помогна да изберете перфектната стая според вашия стил на пътуване.",
            "Анализирам цена, комфорт и продължителност за оптимална препоръка.",
            "AYA Concierge AI е до вас преди, по време и след престоя ви."
        ];

        let index = 0;
        setInterval(() => {
            const aiElement = document.querySelector('.ai-message');
            if (aiElement) {
                aiElement.textContent = aiMessages[index];
                index = (index + 1) % aiMessages.length;
            }
        }, 5000);
    }
}

// Initialize AYA Concierge AI on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.AYAConciergeAI = new AYAConciergeAI();
});
