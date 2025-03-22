
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { JudgeDashboard } from "./JudgeDashboard";
import { LawyerDashboard } from "./LawyerDashboard";
import { LitigantDashboard } from "./LitigantDashboard";
import { AdminDashboard } from "./AdminDashboard";

export function Dashboard() {
  const { user } = useAuth();

  // Display different dashboard based on user role
  if (!user) {
    return (
      <div className="text-center p-8">
        <h2 className="text-xl font-semibold mb-2">Not Authenticated</h2>
        <p className="text-muted-foreground">Please log in to view your dashboard</p>
      </div>
    );
  }

  switch (user.role) {
    case 'judge':
      return <JudgeDashboard />;
    case 'lawyer':
      return <LawyerDashboard />;
    case 'litigant':
      return <LitigantDashboard />;
    case 'admin':
      return <AdminDashboard />;
    default:
      return (
        <div className="text-center p-8">
          <h2 className="text-xl font-semibold mb-2">Unknown User Role</h2>
          <p className="text-muted-foreground">Your account type is not recognized</p>
        </div>
      );
  }
}
