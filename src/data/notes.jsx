const notes = [
  {
    id: "1",
    title: "Understanding useEffect",
    content:`# What is useEffect?

useEffect runs after render.

## Syntax

\`\`\`js
useEffect(() => {
  console.log("Hello")
}, [])
\`\`\`

> Important
> Cleanup functions prevent memory leaks.
`,
    tags: ["react", "hooks"]
  },
  {
    id: "2",
    title: "React Router Basics",
    content: `
# React Router

React Router enables navigation.

## Routes

- Route
- Link
- useNavigate
- useParams
`,
    tags: ["react", "router"]
  },
  {
    id: "3",
    title: "Custom Hooks",
    content:" ",
    tags: ["react", "advanced"]
  },
  {
    id: "4",
    title: "State Management With Redux",
    content: " ",
    tags: ["react","advanced"]
  },
  {
    id: "5",
    title: "Deployment",
    content:" ",
    tags: ["project" , "ci/cd"]
  },
  {
    id: "6",
    title: "Testing with Jest",
    content:" ",
    tags: ["react", "testing"]
  },
  {
    id: "7",
    title: "Performance Optimization",
    content: " ",
    tags: ["react", "performance"]
  },
  {
    id: "8",
    title: "React Context API",
    content:" ",
    tags: ["react", "state management"]
  },
  {
    id: "9",
    title: " React Suspense",
    content: " ",
    tags: ["react", "advanced"]
  }
]

export default notes