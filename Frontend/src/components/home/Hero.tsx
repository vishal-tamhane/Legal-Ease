
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Scale, UserCheck } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      heroRef.current.style.setProperty('--x', `${x}`);
      heroRef.current.style.setProperty('--y', `${y}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at calc(var(--x, 0.5) * 100%) calc(var(--y, 0.5) * 100%), rgba(59, 130, 246, 0.1), transparent 30%)',
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[15%] w-48 h-48 bg-primary/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-secondary/80 backdrop-blur-sm border border-border text-sm font-medium">
            <span className="mr-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">New</span>
            <span>Introducing AI-powered legal research</span>
          </div>

          <h1 className="heading-xl mb-6 animate-fadeIn">
            <span className="text-primary">Justice</span> reimagined for the 
            <span className="relative inline-block mx-2">
              digital age
              <span className="absolute bottom-2 left-0 w-full h-2 bg-secondary/80 -z-10"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Streamlining case management, legal research, and dispute resolution with
            modern technology and AI-powered tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full">
              <Link to="/auth">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full">
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slideUp" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white dark:bg-justice-800/50 backdrop-blur-sm p-6 rounded-lg border border-border hover-card">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Access</h3>
            <p className="text-muted-foreground text-sm">
              Role-based security for judges, lawyers, litigants, and administrators.
            </p>
          </div>
          
          <div className="bg-white dark:bg-justice-800/50 backdrop-blur-sm p-6 rounded-lg border border-border hover-card">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Tools</h3>
            <p className="text-muted-foreground text-sm">
              Legal research, document summarization, and predictive analytics.
            </p>
          </div>
          
          <div className="bg-white dark:bg-justice-800/50 backdrop-blur-sm p-6 rounded-lg border border-border hover-card">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <UserCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Virtual Courtroom</h3>
            <p className="text-muted-foreground text-sm">
              Conduct hearings remotely with integrated video conferencing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
