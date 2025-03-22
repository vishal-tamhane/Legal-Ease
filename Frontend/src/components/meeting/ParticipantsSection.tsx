
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Scale, User, Users } from "lucide-react";
import { Control } from "react-hook-form";
import { z } from "zod";

// Import the formSchema type
import { meetingFormSchema } from "./schema";

type FormValues = z.infer<typeof meetingFormSchema>;

interface ParticipantsSectionProps {
  control: Control<FormValues>;
  defaultJudgeEmail: string;
}

const ParticipantsSection = ({ control, defaultJudgeEmail }: ParticipantsSectionProps) => {
  return (
    <div className="border-t border-border/50 my-6 pt-6">
      <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
        <User className="h-5 w-5 text-primary" /> 
        Participants
      </h3>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="glass p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="h-5 w-5 text-primary" />
              <h4 className="font-medium">Judge</h4>
            </div>
            <FormField
              control={control}
              name="judgeEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      {...field}
                      className="input-focus-ring"
                      readOnly
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Users className="h-5 w-5 text-primary" />
              <h4 className="font-medium">Lawyers</h4>
            </div>
            <div className="space-y-4">
              <FormField
                control={control}
                name="lawyer1Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lawyer 1 Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="lawyer1@example.com" 
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
                name="lawyer2Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lawyer 2 Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="lawyer2@example.com" 
                        {...field}
                        className="input-focus-ring"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <div className="glass p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <User className="h-5 w-5 text-primary" />
              <h4 className="font-medium">Litigants</h4>
            </div>
            <div className="space-y-4">
              <FormField
                control={control}
                name="litigant1Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Litigant 1 Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="litigant1@example.com" 
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
                name="litigant2Email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Litigant 2 Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="litigant2@example.com" 
                        {...field}
                        className="input-focus-ring"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipantsSection;
