import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectPage from './pages/Project'
import NewProject from './pages/NewProject'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/newProject" element={<NewProject />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas