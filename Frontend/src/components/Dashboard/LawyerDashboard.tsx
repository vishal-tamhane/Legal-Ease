import React from "react";
import { useNavigate } from "react-router-dom";


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  FileText,
  MessageSquare,
  Clock,
  ArrowUp,
  ArrowDown,
  Link,
} from "lucide-react";
import { Button } from "../ui/button";
import { redirect } from "react-router-dom";

export function LawyerDashboard() {
  const navigate = useNavigate();
  const stats = [
    {
      title: "Active Cases",
      value: "24",
      change: "+3",
      trend: "up",
      icon: FileText,
      description: "From last month",
    },
    {
      title: "Upcoming Hearings",
      value: "12",
      change: "+2",
      trend: "up",
      icon: Calendar,
      description: "Next 7 days",
    },
    {
      title: "Pending Filings",
      value: "8",
      change: "-2",
      trend: "down",
      icon: Clock,
      description: "Awaiting submission",
    },
  ];

  const caseDeadlines = [
    {
      caseNumber: "2023-45",
      title: "Roberts v. City of Metropolis",
      deadline: "June 15, 2023",
      type: "Motion Filing Deadline",
    },
    {
      caseNumber: "2023-62",
      title: "Johnson v. MegaCorp Inc.",
      deadline: "June 18, 2023",
      type: "Discovery Deadline",
    },
    {
      caseNumber: "2023-78",
      title: "Smith Family Trust",
      deadline: "June 20, 2023",
      type: "Brief Submission",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 w-full md:w-auto">
      <Button onClick={() => navigate('/filecase')} size="sm" className="flex items-center gap-2">
            <FileText className="h-4 w-4" /> New Case
          </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Card key={i} className="hover-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                {stat.trend === "up" ? (
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span
                  className={
                    stat.trend === "up" ? "text-green-500" : "text-red-500"
                  }
                >
                  {stat.change}
                </span>
                <span className="text-muted-foreground ml-1">
                  {stat.description}
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="col-span-1 hover-card">
          <CardHeader>
            <CardTitle>Recent Case Activity</CardTitle>
            <CardDescription>Updates on your active cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="h-9 w-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    Case #2023-45: Motion Granted
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Judge Thomas approved your motion to extend discovery
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-9 w-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    Case #2023-62: Document Filed
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Opposition filed response to your motion
                  </p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="h-9 w-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    Case #2023-78: Hearing Scheduled
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Initial hearing set for June 22, 2023
                  </p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 hover-card">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Important case deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {caseDeadlines.map((deadline, index) => (
                <div
                  key={index}
                  className="bg-secondary/50 dark:bg-justice-800/50 rounded-lg p-4"
                >
                  <p className="text-sm font-medium">
                    Case #{deadline.caseNumber}: {deadline.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {deadline.deadline}
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Clock className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">
                      {deadline.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
