const words = [
    "агрономія", "алфавіт", "аркушик", "асиметрія", 
    "багаторазовий", "безпринципний", "бешкет", "благовіст", 
    "близький", "болотистий", "бородавка", "босоніж", 
    "боязнь", "бурштиновий", "бюлетень"
];
const correctAnswers = [
    "агронОмія", "алфАвІт", "Аркушик", "асиметрІя", 
    "багаторазОвий", "безпринцИпний", "бЕшкет", "блАговіст", 
    "близькИй", "болотИстий", "борОдавка", "босОніж", 
    "боЯзнь", "бурштинОвий", "бюлетЕнь"
];

let availableIndices = [...Array(words.length).keys()];
let currentIndex;

function getRandomIndex() {
    if (availableIndices.length === 0) {
        availableIndices = [...Array(words.length).keys()];
    }
    const randomIdx = Math.floor(Math.random() * availableIndices.length);
    return availableIndices.splice(randomIdx, 1)[0];
}

function showWord() {
    currentIndex = getRandomIndex();
    document.getElementById("word").textContent = words[currentIndex];
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
}

function showPopup(message, isCorrect) {
    const popup = document.getElementById("popup");
    document.getElementById("popup-message").textContent = message;
    popup.className = isCorrect ? "popup correct" : "popup wrong";
    popup.style.display = "block";
    
    if (isCorrect) {
        document.getElementById("correctSound").play();
        setTimeout(() => { 
            popup.style.display = "none"; 
            showWord(); 
        }, 2500);
    } else {
        document.getElementById("wrongSound").play();
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function checkAndNextWord() {
    const inputElement = document.getElementById("answer");
    const userAnswer = inputElement.value;
    const correctAnswer = correctAnswers[currentIndex];

    if (userAnswer === correctAnswer) {
        showPopup("✅ Все правильно!", true);
    } else {
        showPopup(`❌ Неправильно! Правильна відповідь: ${correctAnswer}`, false);
    }
}

showWord();
