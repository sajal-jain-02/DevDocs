import notes from '../data/notes.js'

export const getAllNotes = () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]")

  return [...notes, ...savedNotes]
}

export const saveNote = (newNote) => {
    localStorage.setItem(
        "notes",
        JSON.stringify([...JSON.parse(localStorage.getItem("notes") || "[]"), newNote])
    )
}

export const deleteNote = (id) => {
    localStorage.setItem(
        "notes",
        JSON.stringify(JSON.parse(localStorage.getItem("notes") || "[]").filter(note => note.id !== id))
    )
}

export const updateNote = (updatedNote) => {
    localStorage.setItem(
        "notes",
        JSON.stringify(JSON.parse(localStorage.getItem("notes") || "[]").map(note => note.id === updatedNote.id ? updatedNote : note))
    )
}

export const getNoteById = (id) => {
    const allNotes = getAllNotes()
    return allNotes.find(note => note.id === id)
}