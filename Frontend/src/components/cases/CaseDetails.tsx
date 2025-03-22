import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChevronLeft, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Users, 
  Clock,
  Video 
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

// Mock case data
const cases = [
  {
    id: "1",
    title: "Smith v. Johnson",
    caseNumber: "2023-001",
    status: "Active",
    date: "2023-05-12",
    type: "Civil",
    description: "Dispute over property boundaries between neighboring landowners.",
    judge: "Judge Robert Williams",
    plaintiffs: ["James Smith"],
    defendants: ["Sarah Johnson"],
    attorneys: ["Michael Davis (Plaintiff)", "Jennifer Wilson (Defendant)"],
    hearings: [
      { id: "h1", title: "Initial Hearing", date: "2023-06-15", time: "10:00 AM", location: "Virtual Courtroom A" },
      { id: "h2", title: "Evidence Review", date: "2023-07-20", time: "2:30 PM", location: "Virtual Courtroom B" }
    ],
    documents: [
      { id: "d1", title: "Complaint", date: "2023-05-12", author: "Michael Davis", type: "Legal Filing" },
      { id: "d2", title: "Response", date: "2023-05-25", author: "Jennifer Wilson", type: "Legal Filing" },
      { id: "d3", title: "Property Survey", date: "2023-06-01", author: "Expert Witness", type: "Evidence" }
    ],
    timeline: [
      { id: "t1", event: "Case Filed", date: "2023-05-12" },
      { id: "t2", event: "Response Filed", date: "2023-05-25" },
      { id: "t3", event: "Initial Hearing Scheduled", date: "2023-06-01" }
    ]
  },
  // Other cases would be defined here
];

export function CaseDetails() {
  const { id } = useParams<{ id: string }>();
  const caseData = cases.find((c) => c.id === id);
  const navigate = useNavigate();

  if (!caseData) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold">Case not found</h2>
        <p className="text-muted-foreground mt-2">The case you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="mt-4">
          <Link to="/cases">Back to Cases</Link>
        </Button>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-600 border-green-200";
      case "Pending":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-200";
      case "Closed":
        return "bg-gray-500/10 text-gray-600 border-gray-200";
      case "Archived":
        return "bg-red-500/10 text-red-600 border-red-200";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cases">
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">{caseData.title}</h1>
          <Badge variant="outline" className={`ml-2 ${getStatusColor(caseData.status)}`}>
            {caseData.status}
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" /> Documents
          </Button>
          <Button onClick={() => navigate('/meeting')}  className="flex items-center gap-2">
            <Video className="h-4 w-4" /> Schedule a Court Hearing
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Case Overview</CardTitle>
          <CardDescription>Case #{caseData.caseNumber} • {caseData.type}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>{caseData.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Judge</p>
                <p className="text-sm text-muted-foreground">{caseData.judge}</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Filed On</p>
                <p className="text-sm text-muted-foreground">{new Date(caseData.date).toLocaleDateString()}</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Plaintiff(s)</p>
                <p className="text-sm text-muted-foreground">{caseData.plaintiffs.join(", ")}</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Defendant(s)</p>
                <p className="text-sm text-muted-foreground">{caseData.defendants.join(", ")}</p>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <p className="text-sm font-medium">Attorneys</p>
                <p className="text-sm text-muted-foreground">{caseData.attorneys.join(", ")}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="hearings" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="hearings">Hearings</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>
        
        <TabsContent value="hearings" className="space-y-4 mt-6">
          {caseData.hearings.map((hearing) => (
            <Card key={hearing.id} className="hover-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{hearing.title}</CardTitle>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Upcoming
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{new Date(hearing.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{hearing.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{hearing.location}</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button size="sm">Join Hearing</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="documents" className="mt-6">
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {caseData.documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">{doc.title}</TableCell>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell>{new Date(doc.date).toLocaleDateString()}</TableCell>
                    <TableCell>{doc.author}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="timeline" className="space-y-4 mt-6">
          <div className="border-l-2 border-muted pl-6 space-y-6 ml-4">
            {caseData.timeline.map((item, index) => (
              <div key={item.id} className="relative">
                <div className="absolute -left-[30px] h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{item.event}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
