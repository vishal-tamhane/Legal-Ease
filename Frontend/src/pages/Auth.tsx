
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthForm } from "@/components/auth/AuthForm";

const Auth = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow mt-24 flex items-center py-12 justify-center">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="heading-md mb-2">Welcome to LegalEase</h1>
            <p className="text-muted-foreground">Sign in to your account or create a new one</p>
          </div>
          <div className="glass-card rounded-lg p-8">
            <AuthForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
