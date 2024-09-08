document.getElementById('btnEnviar').addEventListener('click', function() {
    const userMessage = document.getElementById('message-input').value.trim();
    if (userMessage === '') return;

    addMessage('user', userMessage);
    document.getElementById('message-input').value = '';

    setTimeout(() => {
        const botMessage = generateBotResponse();
        addMessage('bot', botMessage);
    }, 2000); // 2 segundos de retraso
});

function addMessage(sender, message) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse() {
    const responses = [
        'Hola, ¿cómo estás?',
        '¿En qué puedo ayudarte?',
        '¡Qué interesante!',
        'Cuéntame más.',
        'Estoy aquí para ayudarte.',
        '¡De nada!',
        '¿Necesitas algo mas?'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

document.getElementById('btnReiniciar').addEventListener('click', function() {
    document.getElementById('chatBox').innerHTML = '';
});
