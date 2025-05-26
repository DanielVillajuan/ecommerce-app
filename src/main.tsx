import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AuthProvider } from './context/Auth.tsx'
import { CartProvider } from './context/Cart.tsx'
import { ProductProvider } from './context/Product.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ProductProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </ProductProvider>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>,
)
