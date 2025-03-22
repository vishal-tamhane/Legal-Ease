import React from "react";
import { cn } from "@/lib/utils";
import { Check, Circle } from "lucide-react";

interface NavigationStep {
  id: string;
  title: string;
  description: string;
}

interface EFilingNavigationProps {
  steps: NavigationStep[];
  currentStep: string;
  onStepChange: (stepId: string) => void;
  className?: string;
}

const EFilingNavigation: React.FC<EFilingNavigationProps> = ({
  steps,
  currentStep,
  onStepChange,
  className,
}) => {
  // Find the index of the current step
  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <nav
      className={cn("w-full overflow-x-auto flex items-center py-6", className)}
    >
      <div className="container px-4 md:px-6">
        <ol className="flex items-center justify-center space-x-2 md:space-x-6 ">
          {steps.map((step, index) => {
            // Calculate step status
            const isCompleted = index < currentStepIndex;
            const isCurrent = step.id === currentStep;
            const isPending = index > currentStepIndex;

            return (
              <li
                key={step.id}
                className="flex items-center space-x-4 relative"
              >
                {/* Connector line between steps */}
                {index > 0 && (
                  <div
                    className={cn(
                      "absolute left-0 top-1/2 h-px w-12 -translate-x-full -translate-y-1/2 md:w-16",
                      isCompleted ? "bg-primary" : "bg-border"
                    )}
                  />
                )}

                {/* Step indicator */}
                <button
                  onClick={() => onStepChange(step.id)}
                  disabled={isPending}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200",
                    isCompleted &&
                      "border-primary bg-primary text-primary-foreground",
                    isCurrent && "border-primary text-primary",
                    isPending &&
                      "border-muted bg-muted text-muted-foreground cursor-not-allowed",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </button>

                {/* Step text */}
                <div className="hidden md:block">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      isCurrent && "text-primary",
                      isPending && "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </p>
                  <p className="hidden text-xs text-muted-foreground md:block">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default EFilingNavigation;
