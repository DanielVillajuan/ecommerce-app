import { Route, Routes } from 'react-router-dom'
import { Home } from './layouts/Home'
import { Sidebar } from './Features/Sidebar'
import { ProductDetails } from './layouts/ProductDetails'
import { Cart } from './layouts/Cart'

function App() {
    return (
        <Sidebar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<ProductDetails />} />
                <Route path="/carrito/" element={<Cart />} />
            </Routes>
        </Sidebar>
    )
}

export default App
