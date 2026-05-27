function addNote() {

    let noteText = document.getElementById("noteInput").value;

    if(noteText === "") {
        alert("Please write a note");
        return;
    }

    let noteDiv = document.createElement("div");

    noteDiv.className = "note";

    noteDiv.innerHTML = `
        <p>${noteText}</p>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("notesContainer").appendChild(noteDiv);

    document.getElementById("noteInput").value = "";
}