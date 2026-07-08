import snippets from '../data/snippets.js'

export const getAllSnippets = () => {
    const savedSnippets = JSON.parse(localStorage.getItem("snippets") || "[]")

  return [...snippets, ...savedSnippets]
}

export const saveSnippet = (newSnippet) => {
    localStorage.setItem(
        "snippets",
        JSON.stringify([...JSON.parse(localStorage.getItem("snippets") || "[]"), newSnippet])
    )
}

export const deleteSnippet = (id) => {
    localStorage.setItem(
        "snippets",
        JSON.stringify(JSON.parse(localStorage.getItem("snippets") || "[]").filter(snippet => snippet.id !== id))
    )
}

export const updateSnippet = (updatedSnippet) => {
    localStorage.setItem(
        "snippets",
        JSON.stringify(JSON.parse(localStorage.getItem("snippets") || "[]").map(snippet => snippet.id === updatedSnippet.id ? updatedSnippet : snippet))
    )
}

export const getSnippetById = (id) => {
    const allSnippets = getAllSnippets()
    return allSnippets.find(snippet => snippet.id === id)
}