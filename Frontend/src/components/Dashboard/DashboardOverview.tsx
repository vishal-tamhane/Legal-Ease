import React from 'react';
import { AnimatedTransition, StaggeredContainer } from '../UI/AnimatedTransition';
import { CaseCard, CaseData } from '../Cases/CaseCard';
import { AlertTriangle, ArrowRight, BarChart3, Calendar, Clock, Scale } from 'lucide-react';
import { useState } from 'react';
import { ChatContainer } from '../Chat/ChatContainer';

// Mock data
const mockCases: CaseData[] = [
  {
    id: "CAS-2023-4872",
    title: "Johnson v. Smith",
    type: "Civil Dispute",
    status: "active",
    priority: "high",
    date: "Oct 15, 2023",
    participants: ["Johnson, M.", "Smith, A.", "Judge Williams"],
    timeEstimate: "3-4 weeks"
  },
  {
    id: "CAS-2023-4238",
    title: "State v. Reynolds",
    type: "Criminal Case",
    status: "pending",
    priority: "urgent",
    date: "Oct 18, 2023",
    participants: ["State Prosecutor", "Reynolds, T.", "Judge Martinez"],
    timeEstimate: "1-2 weeks"
  },
  {
    id: "CAS-2023-3921",
    title: "DeLuca Family Trust",
    type: "Probate",
    status: "delayed",
    priority: "medium",
    date: "Sep 29, 2023",
    participants: ["DeLuca, A.", "DeLuca, C.", "Judge Thompson"],
    timeEstimate: "6-8 weeks"
  },
  {
    id: "CAS-2023-3689",
    title: "Chen Property Dispute",
    type: "Real Estate",
    status: "resolved",
    priority: "low",
    date: "Sep 12, 2023",
    participants: ["Chen, L.", "Park Development Co.", "Judge Roberts"],
    timeEstimate: "Completed"
  }
];

const DashboardOverview = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'priority'>('upcoming');
  
  // Statistics for the dashboard
  const stats = [
    { label: 'Active Cases', value: 42, icon: <Scale className="h-5 w-5" /> },
    { label: 'Critical Deadlines', value: 7, icon: <AlertTriangle className="h-5 w-5" /> },
    { label: "Today's Hearings", value: 12, icon: <Calendar className="h-5 w-5" /> },
    { label: 'Avg. Resolution Time', value: '21 days', icon: <Clock className="h-5 w-5" /> },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AnimatedTransition>
            <h1 className="text-3xl font-bold">Justice<span className="text-justice-600">Flow</span> Dashboard</h1>
            <p className="mt-2 text-muted-foreground">AI-powered tools for efficient case management</p>
          </AnimatedTransition>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            <StaggeredContainer className="col-span-full grid grid-cols-1 gap-6 md:grid-cols-2">
              {stats.map((stat) => (
                <AnimatedTransition 
                  key={stat.label} 
                  variant="staggered"
                  className="glass-card p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
                    </div>
                    <div className="rounded-full bg-justice-50 p-3 text-justice-600">
                      {stat.icon}
                    </div>
                  </div>
                </AnimatedTransition>
              ))}
            </StaggeredContainer>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between">
              <AnimatedTransition>
                <h2 className="text-2xl font-semibold">Case Management</h2>
              </AnimatedTransition>
              
              <AnimatedTransition className="flex rounded-lg overflow-hidden border">
                <button 
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'upcoming' 
                      ? 'bg-justice-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Upcoming
                </button>
                <button 
                  onClick={() => setActiveTab('priority')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'priority' 
                      ? 'bg-justice-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Priority
                </button>
              </AnimatedTransition>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6">
              <StaggeredContainer className="grid grid-cols-1 gap-6">
                {mockCases.map((caseItem) => (
                  <AnimatedTransition key={caseItem.id} variant="staggered">
                    <CaseCard caseData={caseItem} />
                  </AnimatedTransition>
                ))}
              </StaggeredContainer>
            </div>
            
            <AnimatedTransition className="mt-6 flex justify-end">
              <button className="flex items-center gap-2 text-justice-600 hover:text-justice-700 text-sm font-medium hover-lift">
                View all cases
                <ArrowRight className="h-4 w-4" />
              </button>
            </AnimatedTransition>
          </div>

          <div className="mt-12">
            <AnimatedTransition>
              <h2 className="text-2xl font-semibold">Analytics Overview</h2>
            </AnimatedTransition>
            
            <AnimatedTransition className="mt-6 glass-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <BarChart3 className="text-justice-600 h-6 w-6" />
                <h3 className="text-lg font-medium">Case Resolution Trends</h3>
              </div>
              <div className="h-64 w-full bg-justice-50 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Analytics visualization will appear here</p>
              </div>
            </AnimatedTransition>
          </div>
        </div>

        <div className="lg:col-span-1">
          <AnimatedTransition>
            <ChatContainer />
          </AnimatedTransition>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview; 