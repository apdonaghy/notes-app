let notes = [];
let container;

function addNote(event) {
    event.preventDefault();
    let note = {
        title: document.getElementById('title').value,
        copy: document.getElementById('body-copy').value
    }
    notes.push(note);

    document.querySelector('form').reset();

    if (note['title'].length !== 0) {
        // let notePad = `<h2>${note['title']}</h2><span class="delete"><i class="fas fa-times-circle"></i></span><p>${note['copy']}</p>`

     

       
        let newNotePad = document.createElement('div');
        newNotePad.setAttribute('id', 'user-note-pad')
        // newNotePad.innerHTML = notePad;


        let newH2 = document.createElement('h2')
        newH2.innerHTML = note['title'];
        newNotePad.appendChild(newH2);

        let close = document.createElement('span')
        close.setAttribute('id', 'close-this')
        close.innerHTML = `<i class="fas fa-times-circle">`;
        newNotePad.appendChild(close);


        let newP = document.createElement('p')
        newP.innerHTML = note['copy'];
        newNotePad.appendChild(newP);

        container.appendChild(newNotePad);

        close.addEventListener("click", function (event) {

            document.getElementById("close-this")
            this.parentElement.remove();
    
    
          });

        document.getElementById('title').focus();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    container = document.querySelector('.wrapper');
    document.getElementById('btn').addEventListener('click', addNote);
    document.getElementById('title').focus();
});