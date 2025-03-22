
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative group">
          {features.map((feature, index) => (
            <div
              key={index}
              className="perspective-1000 hover:perspective-[2000px] transition-all duration-500"
            >
              <div
                className="glass-card rounded-xl p-6 transform-style-preserve-3d 
        transition-all duration-300 hover:translate-z-10 hover:-translate-y-2
        before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 
        before:to-transparent before:rounded-xl before:backdrop-blur-2xl
        after:absolute after:inset-0 after:bg-gradient-to-br 
        after:from-transparent after:to-white/5 after:rounded-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
        hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),inset_0_-2px_4px_rgba(255,255,255,0.1)]"
                style={{
                  transform: `
            rotateX(calc(var(--mouse-y) * -1deg)) 
            rotateY(calc(var(--mouse-x) * 1deg))
          `,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Inner content with 3D layers */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 
          transform translate-z-6">
                    <feature.icon className="h-6 w-6 text-primary transform translate-z-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 transform translate-z-12">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground transform translate-z-16">
                    {feature.description}
                  </p>
                </div>

                {/* 3D edge effect */}
                <div className="absolute inset-0 border border-white/5 rounded-xl 
        transform translate-z-[-4px] pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
