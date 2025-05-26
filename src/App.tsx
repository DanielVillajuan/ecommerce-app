import { Route, Routes } from 'react-router-dom'
import { Home } from './layouts/Home'
import { Sidebar } from './Features/Sidebar'

function App() {
    return (
        <Sidebar>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Sidebar>
    )
}

export default App
