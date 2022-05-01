import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectPage from './pages/Project'
import NewProject from './pages/NewProject'
import EditProject from './pages/EditProject'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/project/:id" element={<ProjectPage />} />
                <Route path="/newProject" element={<NewProject />} />
                <Route path="/editProject/:id" element={<EditProject />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas