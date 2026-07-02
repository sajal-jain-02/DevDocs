const notes = [
  {
    id: "1",
    title: "Understanding useEffect",
    description:"Learn how useEffect works and when to use it",
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
    description:"Learn how to navigate between pages using React Router",
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
    description:"Learn how to create and use custom hooks to share logic between components",
    content:" ",
    tags: ["react", "advanced"]
  },
  {
    id: "4",
    title: "State Management With Redux",
    description:"Learn how to manage global state using Redux",
    content: " ",
    tags: ["react","advanced"]
  },
  {
    id: "5",
    title: "Deployment",
    description:"Learn how to deploy your React app to production",
    content:" ",
    tags: ["project" , "ci/cd"]
  },
  {
    id: "6",
    title: "Testing with Jest",
    description:"Learn how to test your React components using Jest",
    content:" ",
    tags: ["react", "testing"]
  },
  {
    id: "7",
    title: "Performance Optimization",
    description:"Learn how to optimize your React app's performance",
    content: " ",
    tags: ["react", "performance"]
  },
  {
    id: "8",
    title: "React Context API",
    description:"Learn how to use React Context API to share state between components",
    content:" ",
    tags: ["react", "state management"]
  },
  {
    id: "9",
    title: " React Suspense",
    description:"Learn how to use React Suspense to handle asynchronous operations",
    content: " ",
    tags: ["react", "advanced"]
  }
]

export default notes