import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectPage from './pages/Project'
import NewProject from './pages/NewProject'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import MeusInteresses from './pages/MeusInteresses'
import Cause from './pages/Cause'
import EditProject from './pages/EditProject'

import AdminLogin from './pages/Admin'
import Dashboard from './pages/Admin/Dashboard'
import AdminApproval from './pages/Admin/Approval'
import Administration from './pages/Admin/Administration'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/meusInteresses" element={<MeusInteresses />} />
                <Route path="/cause/fome" element={<Cause />} />
                <Route path="/cause/saude" element={<Cause />} />
                <Route path="/cause/maus-tratos-aos-animais" element={<Cause />} />
                <Route path="/cause/sem-teto" element={<Cause />} />
                <Route path="/cause/empoderamento-feminino" element={<Cause />} />
                <Route path="/project/:id" element={<ProjectPage />} />
                <Route path="/editProject/:id" element={<EditProject />} />
                <Route path="/newProject" element={<NewProject />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />

                {/* Admin routes */}
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/approval" element={<AdminApproval />} />
                <Route path="/administration" element={<Administration />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas