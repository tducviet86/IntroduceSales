import type { RouteObject } from "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { publicRoutes } from "./routes"

const routes: RouteObject[] = [...publicRoutes]
const router = createBrowserRouter(routes)

export default function AppRouter() {
  return <RouterProvider router={router} />
}
