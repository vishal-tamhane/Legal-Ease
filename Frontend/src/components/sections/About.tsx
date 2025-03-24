import React from "react";
import { Button } from "@/components/ui/button";
import { Gavel, Scale, Users, Shield } from "lucide-react";

const features = [
  {
    icon: <Gavel className="h-8 w-8 text-primary" />,
    title: "Expert Legal Solutions",
    description: "Access to experienced legal professionals and comprehensive case management tools."
  },
  {
    icon: <Scale className="h-8 w-8 text-primary" />,
    title: "Fair & Transparent",
    description: "Ensuring justice through transparent processes and equitable legal proceedings."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Collaborative Platform",
    description: "Connect with judges, lawyers, and clients seamlessly in one integrated platform."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Secure & Confidential",
    description: "Your legal matters are protected with enterprise-grade security and privacy."
  }
];

export function About() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl  sm:text-4xl md:text-5xl tracking-tighter font-bold mb-4 text-gray-800 dark:text-[#5f7aba] ">
            About Legal Ease
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Streamlining justice delivery through innovative technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground">
              To revolutionize the legal system by providing a modern, efficient, and accessible
              platform that connects all stakeholders in the justice delivery system. We aim to
              reduce delays, enhance transparency, and improve access to justice for all.
            </p>
            <div className="pt-6">
              <Button size="lg" className="rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 