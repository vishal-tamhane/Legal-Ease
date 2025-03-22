
import { z } from "zod";

export const meetingFormSchema = z.object({
  title: z.string().min(3, {
    message: 'Meeting title must be at least 3 characters.',
  }),
  caseNumber: z.string().min(1, {
    message: 'Case number is required.',
  }),
  date: z.date({
    required_error: 'A meeting date is required.',
  }),
  time: z.string({
    required_error: 'Meeting time is required.',
  }),
  duration: z.string({
    required_error: 'Meeting duration is required.',
  }),
  judgeEmail: z.string().email({
    message: 'Please enter a valid judge email address.',
  }),
  lawyer1Email: z.string().email({
    message: 'Please enter a valid email for the first lawyer.',
  }),
  lawyer2Email: z.string().email({
    message: 'Please enter a valid email for the second lawyer.',
  }),
  litigant1Email: z.string().email({
    message: 'Please enter a valid email for the first litigant.',
  }),
  litigant2Email: z.string().email({
    message: 'Please enter a valid email for the second litigant.',
  }),
});

export type MeetingFormValues = z.infer<typeof meetingFormSchema>;
