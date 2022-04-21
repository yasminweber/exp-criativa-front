import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Project_Page from './pages/Project'
import Home from './pages/Home'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project_Page />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas