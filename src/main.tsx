import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import Contact from "./pages/Contact.tsx"
import { MainProjects } from "./pages/MainProjects.tsx"
import { ThemeProvider } from "./components/ThemeProvider"

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/Projects",
    element: <MainProjects />,
  },
])

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
    <RouterProvider router={router} />
  </ThemeProvider>
)
