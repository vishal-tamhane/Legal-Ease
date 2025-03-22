import React from 'react';
import { CheckCircle2, Circle, Clock, AlertCircle } from 'lucide-react';

interface CaseStage {
  id: number;
  stage: string;
  status: 'completed' | 'current' | 'pending' | 'delayed';
  date?: string;
  notes?: string;
}

interface CaseStatusTrackerProps {
  caseNumber: string;
  currentStage: string;
}

const defaultStages: CaseStage[] = [
  { id: 1, stage: 'Filing', status: 'completed', date: '2025-01-15', notes: 'All documents verified' },
  { id: 2, stage: 'Admission', status: 'completed', date: '2025-02-01', notes: 'Case admitted' },
  { id: 3, stage: 'Notice Issued', status: 'completed', date: '2025-02-15', notes: 'Notices sent to all parties' },
  { id: 4, stage: 'Reply Filed', status: 'current', date: '2025-03-01', notes: 'Awaiting final submissions' },
  { id: 5, stage: 'Arguments', status: 'pending' },
  { id: 6, stage: 'Judgment', status: 'pending' }
];

const getStatusIcon = (status: CaseStage['status']) => {
  switch (status) {
    case 'completed':
      return <CheckCircle2 className="w-6 h-6 text-green-500" />;
    case 'current':
      return <Clock className="w-6 h-6 text-blue-500 animate-pulse" />;
    case 'delayed':
      return <AlertCircle className="w-6 h-6 text-red-500" />;
    default:
      return <Circle className="w-6 h-6 text-gray-300" />;
  }
};

export function CaseStatusTracker({ caseNumber, currentStage }: CaseStatusTrackerProps) {
  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-primary">Case Progress</h3>
        <span className="text-sm text-muted-foreground">Case: {caseNumber}</span>
      </div>

      <div className="relative">
        {defaultStages.map((stage, index) => (
          <div key={stage.id} className="flex items-start mb-8 relative">
            <div className="flex items-center">
              <div className="relative">
                {getStatusIcon(stage.status)}
                {index < defaultStages.length - 1 && (
                  <div className="absolute w-px h-full bg-gray-200 left-1/2 top-6 -translate-x-1/2" />
                )}
              </div>
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h4 className={`font-medium ${stage.status === 'current' ? 'text-blue-600' : ''}`}>
                  {stage.stage}
                </h4>
                {stage.date && (
                  <span className="text-sm text-muted-foreground">
                    {new Date(stage.date).toLocaleDateString()}
                  </span>
                )}
              </div>
              {stage.notes && (
                <p className="text-sm text-muted-foreground mt-1">{stage.notes}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-secondary/10 rounded-lg">
        <h4 className="font-medium mb-2">Next Steps</h4>
        <ul className="list-disc list-inside text-sm text-muted-foreground">
          <li>Submit remaining documents by next hearing</li>
          <li>Prepare for final arguments</li>
          <li>Schedule witness testimonies</li>
        </ul>
      </div>
    </div>
  );
} 