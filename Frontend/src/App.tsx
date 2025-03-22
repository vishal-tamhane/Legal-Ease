import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Cases from "./pages/Cases";
import CaseView from "./pages/CaseView";
import Auth from "./pages/Auth";
import { ChatPage } from "./pages/ChatPage";
import LawyerDashboard from "@/components/Dashboard/LawyerDashboard"; // ✅ Default export


import {JudgeDashboard} from "./components/Dashboard/JudgeDashboard";
// import LawyerDashboard from "./components/LawyerDashboard";
import {LitigantDashboard} from "./components/Dashboard/LitigantDashboard";
import {AdminDashboard} from "./components/Dashboard/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/cases/:id" element={<CaseView />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/dashboard/lawyerDashboard" element={<LawyerDashboard />} />
              <Route path="/dashboard/judgeDashboard" element={<JudgeDashboard />} />
              <Route path="/dashboard/litigantDashboard" element={<LitigantDashboard />} />
               <Route path="/dashboard/adminDashboard" element={<AdminDashboard />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;