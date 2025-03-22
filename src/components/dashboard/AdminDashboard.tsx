
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Bell, Settings, Server, Shield, ArrowUp, ArrowDown } from "lucide-react";

export function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,284",
      change: "+24",
      trend: "up",
      icon: Users,
      description: "This month",
    },
    {
      title: "Active Cases",
      value: "586",
      change: "+12%",
      trend: "up",
      icon: FileText,
      description: "From last month",
    },
    {
      title: "System Alerts",
      value: "3",
      change: "-2",
      trend: "down",
      icon: Bell,
      description: "Unresolved issues",
    },
    {
      title: "Server Status",
      value: "99.9%",
      change: "+0.2%",
      trend: "up",
      icon: Server,
      description: "Uptime this month",
    },
  ];

  const recentUsers = [
    {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      role: "Judge",
      joinDate: "June 12, 2023"
    },
    {
      name: "Robert Smith",
      email: "robert.smith@example.com",
      role: "Lawyer",
      joinDate: "June 10, 2023"
    },
    {
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      role: "Litigant",
      joinDate: "June 9, 2023"
    },
    {
      name: "David Wong",
      email: "david.wong@example.com",
      role: "Lawyer",
      joinDate: "June 8, 2023"
    }
  ];

  const systemAlerts = [
    {
      title: "Database Backup Completed",
      type: "success",
      time: "2 hours ago"
    },
    {
      title: "User Authentication Attempts Spike",
      type: "warning",
      time: "Yesterday"
    },
    {
      title: "Storage Space Running Low",
      type: "error",
      time: "2 days ago"
    }
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="col-span-1 hover-card">
          <CardHeader>
            <CardTitle>Recent User Registrations</CardTitle>
            <CardDescription>New user accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentUsers.map((user, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="h-9 w-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                        {user.role}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Joined {user.joinDate}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 hover-card">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Recent system alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemAlerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                    alert.type === 'success' ? 'bg-green-100 text-green-600' : 
                    alert.type === 'warning' ? 'bg-yellow-100 text-yellow-600' : 
                    'bg-red-100 text-red-600'
                  }`}>
                    {alert.type === 'success' ? (
                      <Server className="h-5 w-5" />
                    ) : alert.type === 'warning' ? (
                      <Bell className="h-5 w-5" />
                    ) : (
                      <Shield className="h-5 w-5" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{alert.title}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
              ))}
              
              <div className="pt-2">
                <button className="text-sm text-primary hover:underline flex items-center">
                  <Settings className="h-4 w-4 mr-1" />
                  System Settings
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="hover-card">
        <CardHeader>
          <CardTitle>Usage Statistics</CardTitle>
          <CardDescription>System performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Storage Usage</p>
              <div className="h-2 bg-secondary rounded-full">
                <div className="h-2 bg-primary rounded-full" style={{ width: '68%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground">68% of 500GB used</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Database Performance</p>
              <div className="h-2 bg-secondary rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground">92% efficiency</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">API Requests</p>
              <div className="h-2 bg-secondary rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground">45% of rate limit</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
