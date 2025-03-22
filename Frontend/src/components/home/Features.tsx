import React from "react";
import { FileText, Users, MessageSquare, Calendar, Search, Lock } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: FileText,
      title: "Case Management",
      description: "File cases online, track status, and manage documents in one place.",
    },
    {
      icon: Users,
      title: "User Roles",
      description: "Tailored interfaces for different legal professionals.",
    },
    {
      icon: MessageSquare,
      title: "Dispute Resolution",
      description: "Virtual mediation with AI-assisted tools.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-optimized court schedules and reminders.",
    },
    {
      icon: Search,
      title: "Legal Research",
      description: "NLP-powered case law analysis.",
    },
    {
      icon: Lock,
      title: "Secure Auth",
      description: "JWT authentication with RBAC controls.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Modern Legal Platform
          </h2>
          <p className="text-lg text-muted-foreground">
            Streamlined tools for efficient justice system management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group perspective-1000 h-full"
            >
              <div className="relative h-full p-8 bg-background rounded-xl shadow-lg transition-all duration-300 transform-gpu 
                group-hover:translate-z-10 group-hover:-translate-y-2 group-hover:shadow-xl
                border border-border/20 hover:border-primary/30
                before:absolute before:inset-0 before:rounded-xl before:opacity-0 before:transition-opacity
                before:bg-gradient-to-br before:from-primary/10 before:to-transparent
                group-hover:before:opacity-100"
              >
                <div className="relative z-10">
                  <div className="mb-6 p-4 w-fit rounded-xl bg-primary/10 transform-gpu 
                    group-hover:translate-z-20 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>

                {/* 3D edge effect */}
                <div className="absolute inset-0 rounded-xl border border-white/5 
                  group-hover:border-primary/10 transition-colors pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}