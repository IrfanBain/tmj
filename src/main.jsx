import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage/index.jsx'
import ProfilePage from './pages/ProfilePage/index.jsx'
import Pemerintahan from './pages/Pemerintahan/index.jsx'
import BeritaPage from './pages/Berita/index.jsx'
import BeritaView from './pages/BeritaView/index.jsx'
import DusunSrinadi from './pages/Dusun/Srinadi/index.jsx'
import LoginPage from './pages/Login/index.jsx'
import RegisterPage from './pages/Register/index.jsx'
import DashboardHome from './pages/Dashboard/Home/index.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/profil',
    element: <ProfilePage />
  },
  {
    path: '/pemerintahan',
    element: <Pemerintahan />
  },
  {
    path: '/berita',
    element: <BeritaPage />
  },
  {
    path: '/beritaView',
    element: <BeritaView />
  },
  {
    path: '/dusun/srinadi',
    element: <DusunSrinadi />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/dashboard',
    element: <DashboardHome />
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
