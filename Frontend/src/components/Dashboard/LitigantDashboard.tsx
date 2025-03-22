
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, MessageSquare, DollarSign, Clock } from "lucide-react";

export function LitigantDashboard() {
  const activeCases = [
    {
      caseNumber: "2023-45",
      title: "You v. Insurance Co.",
      status: "In Progress",
      lastUpdate: "Motion filed by your attorney",
      date: "2 days ago"
    },
    {
      caseNumber: "2023-38",
      title: "You v. Landlord Corp",
      status: "Awaiting Hearing",
      lastUpdate: "Hearing scheduled",
      date: "June 20, 2023"
    }
  ];

  const upcomingEvents = [
    {
      caseNumber: "2023-45",
      event: "Evidence Submission Deadline",
      date: "June 18, 2023",
      description: "Submit all evidence to your attorney"
    },
    {
      caseNumber: "2023-45",
      event: "Deposition",
      date: "June 25, 2023",
      description: "Your deposition with opposing counsel"
    },
    {
      caseNumber: "2023-38",
      event: "Court Hearing",
      date: "June 28, 2023",
      description: "Initial hearing with Judge Miller"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
            <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
              <FileText className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">
              Cases in progress
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Calendar className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">
              In the next 30 days
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attorney Messages</CardTitle>
            <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
              <MessageSquare className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground mt-1">
              Unread messages
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="col-span-1 hover-card">
          <CardHeader>
            <CardTitle>Your Cases</CardTitle>
            <CardDescription>Status of your active cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeCases.map((caseItem, index) => (
                <div key={index} className="bg-secondary/50 dark:bg-justice-800/50 rounded-lg p-4">
                  <p className="text-sm font-medium">Case #{caseItem.caseNumber}: {caseItem.title}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {caseItem.status}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-muted-foreground">{caseItem.lastUpdate}</p>
                    <p className="text-xs text-muted-foreground">{caseItem.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 hover-card">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Important dates for your cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="h-9 w-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Case #{event.caseNumber}: {event.event}</p>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-card">
        <CardHeader>
          <CardTitle>Case Expenses</CardTitle>
          <CardDescription>Your legal expenses to date</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm font-medium">Attorney Fees</p>
              </div>
              <p className="text-sm font-bold">$4,500.00</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm font-medium">Court Filings</p>
              </div>
              <p className="text-sm font-bold">$750.00</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm font-medium">Expert Witnesses</p>
              </div>
              <p className="text-sm font-bold">$1,200.00</p>
            </div>
            <div className="border-t pt-4 flex items-center justify-between">
              <p className="text-sm font-medium">Total Expenses</p>
              <p className="text-sm font-bold">$6,450.00</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
