import { Route, Routes } from 'react-router-dom'
import { Home } from './layouts/Home'
import { Sidebar } from './Features/Sidebar'
import { ProductDetails } from './layouts/ProductDetails'
import { Cart } from './layouts/Cart'
import { Login } from './layouts/Login'
import { ProtectedRoute } from './Components/ProtectedRoute'
import { Register } from './layouts/Register'
import { Dashboard } from './layouts/Dashboard'

function App() {
    return (
        <Sidebar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/item/:id" element={<ProductDetails />} />
                    <Route path="/carrito/" element={<Cart />} />
                    <Route path="/admin/" element={<Dashboard />} />
                </Route>
                <Route path="/login/" element={<Login />} />
                <Route path="/register/" element={<Register />} />
            </Routes>
        </Sidebar>
    )
}

export default App
