 

// document.getElementById('themeToggle').addEventListener('click', function() {
//     const currentTheme = document.body.className;
//     if (currentTheme === 'light-theme') {
//         document.body.className = 'dark-theme';
//     } else {
//         document.body.className = 'light-theme';
//     }
// });



// @ts-nocheck

const johnSelectorBtn = document.querySelector('#john-selector')
const harrySelectorBtn = document.querySelector('#harry-selector')
const natashaSelectorBtn = document.querySelector('#natasha-selector')
const piterSelectorBtn = document.querySelector('#piter-selector')
const margaretSelectorBtn = document.querySelector('#margaret-selector')
const vanessaSelectorBtn = document.querySelector('#vanessa-selector')
const mioraSelectorBtn = document.querySelector('#miora-selector')
const hannaSelectorBtn = document.querySelector('#hanna-selector')
const lynaSelectorBtn = document.querySelector('#lyna-selector')
const maikalSelectorBtn = document.querySelector('#maikal-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-chat-button')

const messages = JSON.parse(localStorage.getItem('messages')) || []

const createChatMessageElement = (message) => `
  <div class="message ${message.sender === 'John' ? 'blue-bg' : 'gray-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
  </div>
`

window.onload = () => {
  messages.forEach((message) => {
    chatMessages.innerHTML += createChatMessageElement(message)
  })
}

let messageSender = 'John'

const updateMessageSender = (name) => {
  messageSender = name
  chatHeader.innerText = `${messageSender} chatting...`
  chatInput.placeholder = `Type here, ${messageSender}...`

  if (name === 'John') {
    johnSelectorBtn.classList.add('active-person')
    harrySelectorBtn.classList.remove('active-person')
  }
  if (name === 'harry') {
    harrySelectorBtn.classList.add('active-person')
    johnSelectorBtn.classList.remove('active-person')
  }
  if (name === 'natasha') {
    natashaSelectorBtn.classList.add('active-person')
    piterSelectorBtn.classList.remove('active-person')
  }
  if (name === 'piter') {
    piterSelectorBtn.classList.add('active-person')
    natashaSelectorBtn.classList.remove('active-person')
  }
  if (name === 'margaret') {
    margaretSelectorBtn.classList.add('active-person')
    vanessaSelectorBtn.classList.remove('active-person')
  }
  if (name === 'vanessa') {
    vanessaSelectorBtn.classList.add('active-person')
    margaretSelectorBtn.classList.remove('active-person')
  }
  if (name === 'miora') {
    mioraSelectorBtn.classList.add('active-person')
    hannaSelectorBtn.classList.remove('active-person')
  }
  if (name === 'hanna') {
    hannaSelectorBtn.classList.add('active-person')
    mioraSelectorBtn.classList.remove('active-person')
  }
  if (name === 'lyna') {
    lynaSelectorBtn.classList.add('active-person')
    maikalSelectorBtn.classList.remove('active-person')
  }
  if (name === 'maikal') {
    maikalSelectorBtn.classList.add('active-person')
    lynaSelectorBtn.classList.remove('active-person')
  }
 

  /* auto-focus the input field */
  chatInput.focus()
}

johnSelectorBtn.onclick = () => updateMessageSender('John')
harrySelectorBtn.onclick = () => updateMessageSender('harry')
natashaSelectorBtn.onclick = () => updateMessageSender('natasha')
piterSelectorBtn.onclick = () => updateMessageSender('piter')
margaretSelectorBtn.onclick = () => updateMessageSender('margaret')
vanessaSelectorBtn.onclick = () => updateMessageSender('vanessa')
mioraSelectorBtn.onclick = () => updateMessageSender('miora')
hannaSelectorBtn.onclick = () => updateMessageSender('hanna')
lynaSelectorBtn.onclick = () => updateMessageSender('lyna')
maikalSelectorBtn.onclick = () => updateMessageSender('maikal')

const sendMessage = (e) => {
  e.preventDefault()

  const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const message = {
    sender: messageSender,
    text: chatInput.value,
    timestamp,
  }

  /* Save message to local storage */
  messages.push(message)
  localStorage.setItem('messages', JSON.stringify(messages))

  /* Add message to DOM */
  chatMessages.innerHTML += createChatMessageElement(message)

  /* Clear input field */
  chatInputForm.reset()

  /*  Scroll to bottom of chat messages */
  chatMessages.scrollTop = chatMessages.scrollHeight
}

chatInputForm.addEventListener('submit', sendMessage)

attachment-btn.addEventListener('click', () => {
  localStorage.clear()
  chatMessages.innerHTML = ''
})