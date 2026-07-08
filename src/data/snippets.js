const snippets = [
  {
    id: "1",
    title: "Fetch API GET Request with Error Handling",
    language: "javascript",
    description: "A robust GET request using Fetch API with error handling and JSON parsing.",
    code: `async function fetchData(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// Usage
fetchData('https://api.example.com/users')
  .then(data => console.log(data))
  .catch(error => console.error('Failed to fetch:', error));`,
    tags: ["fetch", "api", "async", "error-handling"],
    createdAt: "2026-07-06"
  },
  {
    id: "2",
    title: "React useEffect Cleanup Function",
    language: "jsx",
    description: "Properly cleanup side effects in useEffect to prevent memory leaks.",
    code: `import { useEffect, useState } from 'react';

function DataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      const response = await fetch('/api/data');
      const result = await response.json();
      
      if (isMounted) {
        setData(result);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}`,
    tags: ["useEffect", "cleanup", "hooks", "side-effects"],
    createdAt: "2026-07-06"
  },
  {
    id: "3",
    title: "TypeScript Interface with Generics",
    language: "typescript",
    description: "Generic interface for API responses with type safety.",
    code: `interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: number;
}

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUser(id: number): Promise<ApiResponse<User>> {
  const response = await fetch(\`/api/users/\${id}\`);
  const data: ApiResponse<User> = await response.json();
  return data;
}

// Usage
fetchUser(1).then(result => {
  console.log(result.data.name);
  console.log(result.status);
});`,
    tags: ["generics", "interfaces", "types", "api"],
    createdAt: "2026-07-06"
  },
  {
    id: "4",
    title: "FastAPI GET Endpoint with Pydantic",
    language: "python",
    description: "FastAPI endpoint with Pydantic model for request validation.",
    code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class Item(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Optional[str] = None):
    items = {
        1: {"id": 1, "name": "Laptop", "price": 999.99},
        2: {"id": 2, "name": "Phone", "price": 699.99}
    }
    
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    
    item = items[item_id]
    if q:
        item["query"] = q
    
    return item`,
    tags: ["fastapi", "pydantic", "endpoints", "validation"],
    createdAt: "2026-07-06"
  },
  {
    id: "5",
    title: "package.json Configuration",
    language: "json",
    description: "Complete package.json with scripts, dependencies, and metadata for a React project.",
    code: `{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "A modern React application",
  "main": "index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint src/**/*.js",
    "format": "prettier --write src/**/*.{js,jsx,css}"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "axios": "^1.3.0"
  },
  "devDependencies": {
    "eslint": "^8.34.0",
    "prettier": "^2.8.0",
    "@testing-library/react": "^14.0.0"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}`,
    tags: ["package.json", "npm", "configuration", "react"],
    createdAt: "2026-07-06"
  },
  {
    id: "6",
    title: "SQL INNER JOIN with Aggregation",
    language: "sql",
    description: "INNER JOIN query with GROUP BY for aggregated sales data.",
    code: `SELECT 
    c.customer_id,
    c.customer_name,
    COUNT(o.order_id) AS total_orders,
    SUM(o.amount) AS total_spent,
    AVG(o.amount) AS average_order_value
FROM 
    customers c
INNER JOIN 
    orders o ON c.customer_id = o.customer_id
WHERE 
    o.order_date >= '2024-01-01'
GROUP BY 
    c.customer_id, 
    c.customer_name
HAVING 
    SUM(o.amount) > 1000
ORDER BY 
    total_spent DESC;`,
    tags: ["join", "aggregation", "group-by", "analytics"],
    createdAt: "2026-07-06"
  },
  {
    id: "7",
    title: "CSS Flexbox Centering Layout",
    language: "css",
    description: "Perfect centering technique using Flexbox for any element.",
    code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.centered-content {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Alternative: Grid centering */
.grid-center {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

/* Horizontal only */
.horizontal-center {
  display: flex;
  justify-content: center;
}

/* Vertical only */
.vertical-center {
  display: flex;
  align-items: center;
}`,
    tags: ["flexbox", "centering", "layout", "css"],
    createdAt: "2026-07-06"
  },
  {
    id: "8",
    title: "HTML Form with Validation",
    language: "html",
    description: "Accessible HTML5 form with built-in validation attributes.",
    code: `<form action="/submit" method="POST" novalidate>
  <div class="form-group">
    <label for="email">Email Address:</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
      placeholder="you@example.com"
    />
    <span class="error">Please enter a valid email</span>
  </div>

  <div class="form-group">
    <label for="password">Password:</label>
    <input
      type="password"
      id="password"
      name="password"
      required
      minlength="8"
      placeholder="Min 8 characters"
    />
  </div>

  <div class="form-group">
    <label for="terms">
      <input type="checkbox" id="terms" name="terms" required>
      I agree to the terms and conditions
    </label>
  </div>

  <button type="submit">Submit</button>
</form>`,
    tags: ["forms", "validation", "html5", "accessibility"],
    createdAt: "2026-07-06"
  },
  {
    id: "9",
    title: "Git Cherry Pick Workflow",
    language: "bash",
    description: "Cherry-pick specific commits from one branch to another.",
    code: `# Switch to target branch
git checkout feature-branch

# Cherry-pick a specific commit
git cherry-pick <commit-hash>

# Cherry-pick multiple commits
git cherry-pick <commit-hash-1> <commit-hash-2> <commit-hash-3>

# Cherry-pick without committing (edit the commit)
git cherry-pick -n <commit-hash>

# Cherry-pick range of commits
git cherry-pick <start-commit>^..<end-commit>

# Abort cherry-pick if conflicts occur
git cherry-pick --abort

# Continue after resolving conflicts
git cherry-pick --continue

# Example: Cherry-pick commit from main to feature
git checkout feature/new-ui
git cherry-pick abc123def456`,
    tags: ["git", "cherry-pick", "branches", "commits"],
    createdAt: "2026-07-06"
  },
  {
    id: "10",
    title: "Docker Build and Run Commands",
    language: "docker",
    description: "Essential Docker commands for building, running, and managing containers.",
    code: `# Build Docker image from Dockerfile
docker build -t myapp:latest .

# Build with build args
docker build --build-arg NODE_ENV=production -t myapp:prod .

# Run container in detached mode
docker run -d -p 8080:80 --name myapp-container myapp:latest

# Run with environment variables
docker run -d -p 8080:80 -e API_KEY=secret -e DB_HOST=localhost myapp:latest

# Run with volume mount
docker run -d -p 8080:80 -v $(pwd)/data:/app/data myapp:latest

# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a container
docker stop myapp-container

# Remove a container
docker rm myapp-container

# Remove an image
docker rmi myapp:latest

# View container logs
docker logs myapp-container

# Execute command in running container
docker exec -it myapp-container /bin/bash

# Clean up unused resources
docker system prune -a`,
    tags: ["docker", "containers", "build", "devops"],
    createdAt: "2026-07-06"
  }
];

export default snippets;