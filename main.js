const cookieImg = document.getElementById('cookieImg');
const fortuneMessage = document.getElementById('fortuneMessageSecondary');
const luckyMessage = document.getElementById('yourLucky');
const cookieMessage = document.getElementById('cookieMessage');
const openAnotherBtn = document.getElementById('openAnother');

const fortuneMessages = [
    "Você terá sucesso em um novo empreendimento!",
    "Boas notícias estão a caminho!",
    "Seu esforço será recompensado em breve!"
];

let messageReceived = false;

function openNewCookie() {
    cookieImg.src = "./src/fortune-cookie.png";
    fortuneMessage.innerText = "";
    fortuneMessage.style.display = 'none';
    cookieMessage.style.display = 'block';
    openAnotherBtn.style.display = 'none';
    messageReceived = false;
}

openAnotherBtn.addEventListener('click', openNewCookie);

cookieImg.addEventListener('click',
    function () {
        if (!messageReceived) {
            cookieImg.src = "./src/opened-cookie.png";
            luckyMessage.textContent = "Sua sorte do dia é";
            luckyMessage.style.display = 'block';
            cookieMessage.style.display = 'none';
            openAnotherBtn.style.display = 'block';
            fortuneMessage.style.display = 'block';

            const randomIndex = Math.floor(Math.random() * fortuneMessages.length);
            const randomMessage = fortuneMessages[randomIndex];

            fortuneMessage.innerText = randomMessage;
            messageReceived = true;
        }
    }
);
