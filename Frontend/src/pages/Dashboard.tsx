import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Dashboard as DashboardComponent } from "@/components/dashboard/Dashboard";
import { useAuth } from "@/context/AuthContext";
import { capitalize } from "@/lib/utils";

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-20">
        <div className="page-container">
          <div className="mb-8">
            <h1 className="heading-lg">
              {user ? `${capitalize(user.role)} Dashboard` : 'Dashboard'}
            </h1>
            {/* <p className="text-muted-foreground">
              {user 
                ? `Welcome back, ${user.name}. View your case statistics and recent activity.` 
                : 'Please log in to view your dashboard'}
            </p> */}
          </div>
          <DashboardComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
