import React from "react";
import { useAuth } from "@/context/AuthContext";
import { JudgeDashboard } from "./JudgeDashboard";
import { LawyerDashboard } from "./LawyerDashboard";
import { LitigantDashboard } from "./LitigantDashboard";
import { AdminDashboard } from "./AdminDashboard";

export function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl font-semibold mb-2">Not Authenticated</h2>
        <p className="text-muted-foreground">Please log in to view your dashboard</p>
      </div>
    );
  }

  // Display welcome message and user info
  const WelcomeHeader = () => (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">
        Welcome, {user.fullName}
      </h1>
      <p className="text-muted-foreground">
        {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Dashboard
      </p>
    </div>
  );

  // Render role-specific dashboard with welcome header
  const renderDashboard = () => {
    switch (user.role) {
      case 'judge':
        return (
          <>
            <WelcomeHeader />
            <JudgeDashboard />
          </>
        );
      case 'lawyer':
        return (
          <>
            <WelcomeHeader />
            <LawyerDashboard />
          </>
        );
      case 'litigant':
        return (
          <>
            <WelcomeHeader />
            <LitigantDashboard />
          </>
        );
      case 'admin':
        return (
          <>
            <WelcomeHeader />
            <AdminDashboard />
          </>
        );
      default:
        return (
          <div className="text-center p-8">
            <h2 className="text-xl font-semibold mb-2">Unknown User Role</h2>
            <p className="text-muted-foreground">Your account type is not recognized</p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {renderDashboard()}
    </div>
  );
}
