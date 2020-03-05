let notes = [];

const addNote = (event) => {
    event.preventDefault();
    let note = {
        title: document.getElementById('title').value,
        copy: document.getElementById('body-copy').value
    }
    notes.push(note);

    document.querySelector('form').reset();




    let notePad = `<h2>${note['title']}</h2><p>${note['copy']}</p>`


    let newNotePad = document.createElement('div');
    newNotePad.setAttribute('id', 'user-note-pad')
    newNotePad.innerHTML = notePad;


    let container = document.querySelector('.wrapper');

    container.appendChild(newNotePad);
    document.getElementById('title').focus();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addNote);
    document.getElementById('title').focus();
});