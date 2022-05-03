import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectPage from './pages/Project'
import NewProject from './pages/NewProject'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import EditProject from './pages/EditProject'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/project/:id" element={<ProjectPage />} />
                <Route path="/editProject/:id" element={<EditProject />} />
                <Route path="/newProject" element={<NewProject />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas