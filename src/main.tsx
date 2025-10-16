import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CartProvider } from './contexts/CartContext'
import { LanguageProvider } from './contexts/LanguageContext'

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </LanguageProvider>
);
