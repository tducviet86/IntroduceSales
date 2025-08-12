// src/router/index.tsx
// import {  Navigate } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import PageNotFound from "../pages/not-found/PageNotFound"
import HomePage from "../pages/home/HomePage"
import AboutPage from "../pages/about/AboutPage"
import ProjectsPage from "../pages/ProjectPage/ProjectPage"
import NewsPage from "../pages/news/news"
import GuidesPage from "../pages/portfolio/Portfolio"
import ContactPage from "../pages/contact/Contact"
// import ProjectsPage from "../pages/projects/ProjectsPage" // nếu đã có, bỏ comment

export const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element:<HomePage /> }, // Trang chủ
      { path: "/about", element: <AboutPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/news", element: <NewsPage /> },
      { path: "/guides", element: <GuidesPage /> },
      { path: "/contact", element: <ContactPage /> },
      // 404 cho nhánh public
      { path: "*", element: <PageNotFound /> },
    ],
  },
]


