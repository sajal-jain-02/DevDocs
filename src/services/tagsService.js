import { getAllNotes } from "./noteService.js"
import { getAllSnippets } from "./snippetService.js"

export const getAllTags = () => {
    const notes = getAllNotes()
    const snippets = getAllSnippets()

    const allTags = [...notes.flatMap(note => note.tags), ...snippets.flatMap(snippet => snippet.tags)]

    const tagCount = allTags.reduce((acc, tag) =>{
        const lowerTag = tag.toLowerCase()
        if(acc[lowerTag]){
            acc[lowerTag]++
        } else {
            acc[lowerTag] = 1
        }

        return acc
    }, {})

    const tags = Object.entries(tagCount).map(([name, count]) => (
        { name, count }
    ))
    tags.sort((a, b) => b.count - a.count)
    return tags
}