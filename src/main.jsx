import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUpPage from "./components/SignUpPage.jsx"
import SignInPage from "./components/SignInPage.jsx"
import App from './App.jsx' 
import StripeBusiness from './components/StripeBusiness.jsx'
import StripeAPIBusiness from './components/StripeAPIBusiness.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  console.log("Publishable Key:", PUBLISHABLE_KEY);
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}
    appearance={{
      variables: {colorPrimary: "#6b21a8"}
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/business" element={<StripeBusiness />} />
          <Route path="/stripe-business" element={<StripeAPIBusiness />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
)

