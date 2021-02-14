/* JS TO DELETE NOTES (TAKES NOTE'S ID AND SEND A REQUEST 
TO THE DELETE NOTE POINT AND 
WHEN IT RESPONDS IT WILL RELOAD THE WINDOW WITH THE NOTE DELETED)*/

function deleteNote(noteId) {
    fetch("/delete-note", {
      method: "POST",
      body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
      window.location.href = "/";
    });
  }
  