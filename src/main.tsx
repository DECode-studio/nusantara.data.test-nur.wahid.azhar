import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DashboardPage from './page/dashboard'
import SignInPage from './page/sign-in'

import AuthProvider from './service/provider/auth-provider'
import { ModalMessageProvider } from './service/provider/message-box'
import Toast from './layout/components/message/toast'

import './style/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ModalMessageProvider>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
          </Routes>
        </ModalMessageProvider>
        <Toast />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
