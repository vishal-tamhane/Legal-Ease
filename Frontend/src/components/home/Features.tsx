import React, { useEffect } from 'react';
import { IconType } from 'react-icons';
import { FileText, Users, MessageSquare, Calendar, Search, Lock } from 'lucide-react';

interface Feature {
  icon: IconType;
  title: string;
  description: string;
  link?: string;
}

const features: Feature[] = [
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
    link: "https://presolv360.com/"
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
  // Add other features here...
];

export function Features() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFeatureClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-transparent relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
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
              className="group perspective-1200 h-full"
              onClick={() => handleFeatureClick(feature.link)}
              style={{ cursor: feature.link ? 'pointer' : 'default' }}
            >
              <div 
                className="relative h-full p-8 bg-background rounded-xl shadow-2xl transition-all duration-500 transform-gpu 
                group-hover:[transform:rotateX(8deg)_rotateY(-2deg)_translateZ(20px)_translateY(-12px)]
                border border-border/20 hover:border-primary/30
                before:absolute before:inset-0 before:rounded-xl before:opacity-0 before:transition-opacity
                before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-primary/5 before:to-transparent
                after:absolute after:inset-0 after:rounded-xl after:opacity-0 after:transition-opacity
                after:bg-[radial-gradient(200px_circle_at_var(--x)_var(--y),_rgba(99,102,241,0.2)_0%,transparent_100%)]
                group-hover:before:opacity-100 group-hover:after:opacity-100
                overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Floating inner shadow layer */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity
                  [background:radial-gradient(circle_at_center,_rgba(0,0,0,0.05)_0%,transparent_60%)]" />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6 p-4 w-fit rounded-xl bg-primary/10 transform-gpu 
                    group-hover:translate-z-20 group-hover:scale-110 group-hover:rotate-[4deg] transition-transform
                    shadow-[0_8px_24px_-6px_rgba(79,70,229,0.3)] group-hover:shadow-[0_12px_32px_-4px_rgba(79,70,229,0.4)]">
                    <feature.icon className="w-8 h-8 text-primary transition-transform group-hover:rotate-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 transform-gpu group-hover:translate-z-10">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground transform-gpu group-hover:translate-z-5 transition-transform">
                    {feature.description}
                  </p>
                </div>

                {/* Dynamic 3D edge effects */}
                <div className="absolute inset-0 rounded-xl border border-white/10 
                  group-hover:border-primary/20 transition-colors pointer-events-none
                  [mask:linear-gradient(transparent,white_80%)]" />
                <div className="absolute inset-0 rounded-xl border-2 border-white/5 
                  group-hover:border-primary/10 transition-colors pointer-events-none
                  -m-[1px] opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 12s ease-in-out infinite -4s;
        }
        
        .perspective-1200 {
          perspective: 1200px;
        }
      `}</style>
    </section>
  );
}