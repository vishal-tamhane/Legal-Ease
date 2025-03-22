import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, Users, Gavel, ArrowUp, ArrowDown } from "lucide-react";
import { CourtCalendar } from "./CourtCalendar";

export function JudgeDashboard() {
  const stats = [
    {
      title: "Assigned Cases",
      value: "42",
      change: "+5%",
      trend: "up",
      icon: FileText,
      description: "From last month",
    },
    {
      title: "Hearings Today",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Calendar,
      description: "Compared to yesterday",
    },
    {
      title: "Cases Resolved",
      value: "156",
      change: "+12%",
      trend: "up",
      icon: Gavel,
      description: "This year",
    },
    {
      title: "Case Backlog",
      value: "23",
      change: "-4%",
      trend: "down",
      icon: FileText,
      description: "From last month",
    },
  ];

  const upcomingHearings = [
    {
      caseNumber: "2023-78",
      title: "Smith v. Johnson",
      time: "10:00 AM",
      date: "June 15, 2023",
      type: "Initial Hearing",
      parties: "2 Attorneys"
    },
    {
      caseNumber: "2023-45",
      title: "State v. Williams",
      time: "2:30 PM",
      date: "June 16, 2023",
      type: "Evidence Review",
      parties: "3 Attorneys"
    },
    {
      caseNumber: "2023-92",
      title: "Garcia v. City of Springfield",
      time: "9:00 AM",
      date: "June 18, 2023",
      type: "Final Arguments",
      parties: "2 Attorneys"
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Card key={i} className="hover-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
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
                <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground ml-1">{stat.description}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Court Calendar Section */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Court Calendar</CardTitle>
          <CardDescription>Manage your court schedule and hearings</CardDescription>
        </CardHeader>
        <CardContent>
          <CourtCalendar />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="col-span-1 hover-card">
          <CardHeader>
            <CardTitle>Recent Rulings</CardTitle>
            <CardDescription>Your recent case decisions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="h-9 w-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Gavel className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Case #2023-65: Thompson v. Harris</p>
                  <p className="text-sm text-muted-foreground">Judgment in favor of plaintiff</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-9 w-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Gavel className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Case #2023-59: Martinez v. Wilson</p>
                  <p className="text-sm text-muted-foreground">Motion to dismiss denied</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-9 w-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Gavel className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Case #2023-42: Brown v. State</p>
                  <p className="text-sm text-muted-foreground">Judgment in favor of defendant</p>
                  <p className="text-xs text-muted-foreground">Last week</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 hover-card">
          <CardHeader>
            <CardTitle>Upcoming Hearings</CardTitle>
            <CardDescription>Your court schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingHearings.map((hearing, index) => (
                <div key={index} className="bg-secondary/50 dark:bg-justice-800/50 rounded-lg p-4">
                  <p className="text-sm font-medium">Case #{hearing.caseNumber}: {hearing.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{hearing.date} • {hearing.time}</p>
                  <div className="flex items-center mt-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">{hearing.type}, {hearing.parties}</span>
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
