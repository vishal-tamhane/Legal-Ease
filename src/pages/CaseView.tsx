
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CaseDetails } from "@/components/cases/CaseDetails";

const CaseView = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-24">
        <div className="page-container">
          <CaseDetails />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseView;
