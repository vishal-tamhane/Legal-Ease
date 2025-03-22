
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
      description: "Tailored interfaces for judges, lawyers, litigants, and administrators.",
    },
    {
      icon: MessageSquare,
      title: "Online Dispute Resolution",
      description: "Resolve disputes efficiently through virtual mediation and AI-assisted tools.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-optimized court schedules with automated reminders for all participants.",
    },
    {
      icon: Search,
      title: "Legal Research",
      description: "NLP-powered analysis of case law, statutes, and precedents.",
    },
    {
      icon: Lock,
      title: "Secure Authentication",
      description: "JWT-based authentication with robust role-based access control.",
    },
  ];

  return (
    <section className="section bg-secondary/30 dark:bg-justice-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-4">
            Comprehensive Features for Modern Justice
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform offers a complete suite of tools designed to streamline the justice system
            and improve access for all participants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-lg p-6 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
