
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CaseList } from "@/components/dashboard/CaseList";

const Cases = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-24">
        <div className="page-container">
          <div className="mb-8">
            <h1 className="heading-lg mb-2">Case Management</h1>
            <p className="text-muted-foreground">View and manage all your cases</p>
          </div>
          <CaseList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cases;
