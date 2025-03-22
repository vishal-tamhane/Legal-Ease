
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { z } from "zod";

// Import the formSchema type
import { meetingFormSchema } from "./schema";

type FormValues = z.infer<typeof meetingFormSchema>;

interface MeetingDetailsProps {
  control: Control<FormValues>;
}

const MeetingDetails = ({ control }: MeetingDetailsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Meeting Title</FormLabel>
            <FormControl>
              <Input 
                placeholder="Hearing for Case #12345" 
                {...field} 
                className="input-focus-ring"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="caseNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Case Number</FormLabel>
            <FormControl>
              <Input 
                placeholder="CIV-2023-123456" 
                {...field} 
                className="input-focus-ring"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default MeetingDetails;
