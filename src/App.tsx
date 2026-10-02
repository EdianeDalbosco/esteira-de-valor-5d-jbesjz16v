import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AuthProvider } from '@/hooks/use-auth'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import Index from './pages/Index'
import Login from './pages/Login'
import ThankYou from './pages/ThankYou'
import LeadsDashboard from './pages/admin/LeadsDashboard'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route
              path="/admin/leads"
              element={
                <ProtectedRoute>
                  <LeadsDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </ErrorBoundary>
)

export default App
