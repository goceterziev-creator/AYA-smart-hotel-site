const ayaBubble = document.getElementById("ayaBubble");
const ayaChat = document.getElementById("ayaChat");
const closeChat = document.getElementById("closeChat");

ayaBubble.addEventListener("click", () => {
    ayaChat.style.display = "block";
    ayaBubble.style.display = "none";
});

closeChat.addEventListener("click", () => {
    ayaChat.style.display = "none";
    ayaBubble.style.display = "flex";
});
