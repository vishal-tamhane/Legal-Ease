
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from 'sonner';
import { useState } from 'react';
import MeetingDetails from './MeetingDetails';
import DateTimeSelection from './DateTimeSelection';
import ParticipantsSection from './ParticipantsSection';
import HelpDialog from './HelpDialogue';
import { meetingFormSchema, MeetingFormValues } from './schema';

interface ScheduleMeetingFormProps {
  onScheduled: (meetingLink: string) => void;
  defaultJudgeEmail: string;
}

const ScheduleMeetingForm = ({ 
  onScheduled, 
  defaultJudgeEmail 
}: ScheduleMeetingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const form = useForm<MeetingFormValues>({
    resolver: zodResolver(meetingFormSchema),
    defaultValues: {
      title: '',
      caseNumber: '',
      time: '',
      duration: '30',
      judgeEmail: defaultJudgeEmail,
      lawyer1Email: '',
      lawyer2Email: '',
      litigant1Email: '',
      litigant2Email: '',
    },
  });

  function onSubmit(data: MeetingFormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Generate a meeting link (in real app, this would come from the backend)
      const meetingId = Math.random().toString(36).substring(2, 10);
      const meetingLink = `https://meet.example.com/${meetingId}`;
      
      console.log('Meeting scheduled with data:', data);
      
      // Show success message
      toast.success('Meeting scheduled successfully');
      
      // Pass the meeting link back to the parent component
      onScheduled(meetingLink);
    }, 1500);
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-center flex-1">Schedule a Court Meeting</h2>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setShowHelp(true)}
          aria-label="Help"
        >
          <span className="h-5 w-5 text-muted-foreground">?</span>
        </Button>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <MeetingDetails control={form.control} />
          <DateTimeSelection control={form.control} />
          <ParticipantsSection control={form.control} defaultJudgeEmail={defaultJudgeEmail} />
          
          <Button 
            type="submit" 
            className="w-full transition-all hover:shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Scheduling...' : 'Schedule Court Meeting'}
          </Button>
        </form>
      </Form>
      
      <HelpDialog open={showHelp} onOpenChange={setShowHelp} />
    </>
  );
};

export default ScheduleMeetingForm;
