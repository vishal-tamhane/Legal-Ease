import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, FileText, ArrowRight } from "lucide-react";

type CaseStatus = "Active" | "Pending" | "Closed" | "Archived";

interface Case {
  id: string;
  title: string;
  caseNumber: string;
  status: CaseStatus;
  date: string;
  type: string;
}

export function CaseList() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const cases: Case[] = [
    {
      id: "1",
      title: "Smith v. Johnson",
      caseNumber: "2023-001",
      status: "Active",
      date: "2023-05-12",
      type: "Civil"
    },
    {
      id: "2",
      title: "State v. Williams",
      caseNumber: "2023-002",
      status: "Pending",
      date: "2023-05-15",
      type: "Criminal"
    },
    {
      id: "3",
      title: "Anderson Inc. v. Tech Solutions",
      caseNumber: "2023-003",
      status: "Active",
      date: "2023-05-18",
      type: "Corporate"
    },
    {
      id: "4",
      title: "Garcia Estate Settlement",
      caseNumber: "2023-004",
      status: "Closed",
      date: "2023-04-30",
      type: "Probate"
    },
    {
      id: "5",
      title: "Martinez v. City Council",
      caseNumber: "2023-005",
      status: "Active",
      date: "2023-05-22",
      type: "Administrative"
    },
    {
      id: "6",
      title: "Lee Family Dispute",
      caseNumber: "2023-006",
      status: "Pending",
      date: "2023-05-25",
      type: "Family"
    },
    {
      id: "7",
      title: "Davis Property Division",
      caseNumber: "2023-007",
      status: "Archived",
      date: "2023-03-15",
      type: "Real Estate"
    }
  ];

  const filteredCases = cases.filter(
    (c) =>
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.caseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: CaseStatus) => {
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
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-auto flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search cases..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button size="sm" className="flex items-center gap-2">
            <FileText className="h-4 w-4" /> New Case
          </Button>
        </div>
      </div>

      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case</TableHead>
              <TableHead>Case Number</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCases.map((caseItem) => (
              <TableRow key={caseItem.id} className="hover-card cursor-pointer">
                <TableCell className="font-medium">{caseItem.title}</TableCell>
                <TableCell>{caseItem.caseNumber}</TableCell>
                <TableCell>{caseItem.type}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={`${getStatusColor(caseItem.status)}`}>
                    {caseItem.status}
                  </Badge>
                </TableCell>
                <TableCell>{new Date(caseItem.date).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" asChild>
                    <Link to={`/cases/${caseItem.id}`}>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
