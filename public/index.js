const addBtn = document.getElementById('add')
const titleText = document.getElementById('title')
const noteText = document.getElementById('text')
const aside = document.getElementById('aside')

addBtn.addEventListener('click', addNote);

function addNote() {
    const card = document.createElement('div')
    const cardTitle = document.createElement('h3')
    const cardText = document.createElement('p')
    cardTitle.textContent = titleText.value
    cardText.textContent = noteText.value
    aside.appendChild(card).appendChild(cardTitle)
    card.appendChild(cardText)
};