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
import LawyerDashboard from "@/components/Dashboard/LawyerDashboard";
import { JudgeDashboard } from "./components/Dashboard/JudgeDashboard";
import { LitigantDashboard } from "./components/Dashboard/LitigantDashboard";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import MeetingBuilder from "./components/meeting/MeetingBuilder";
import {LawyerDashboard} from "@/components/Dashboard/LawyerDashboard";
import { JudgeDashboard } from "./components/Dashboard/JudgeDashboard";
import { LitigantDashboard } from "./components/Dashboard/LitigantDashboard";
import { AdminDashboard } from "./components/Dashboard/AdminDashboard";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

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
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/lawyer" element={<LawyerDashboard />} />
              <Route path="/dashboard/judge" element={<JudgeDashboard />} />
              <Route path="/dashboard/litigant" element={<LitigantDashboard />} />
              <Route path="/dashboard/admin" element={<AdminDashboard />} />

              <Route path="/cases" element={<Cases />} />
              <Route path="/cases/:id" element={<CaseView />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/meeting" element={<MeetingBuilder />} />
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
