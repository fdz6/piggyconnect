const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const messageText = messageInput.value;
  const messageElement = document.createElement('p');
  messageElement.textContent = messageText;
  messageElement.classList.add('message', 'sent');
  
  messagesContainer.appendChild(messageElement);
  messageInput.value = '';
});
