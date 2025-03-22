
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogHeader, 
    DialogTitle 
  } from "@/components/ui/dialog";
  
  interface HelpDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }
  
  const HelpDialog = ({ open, onOpenChange }: HelpDialogProps) => {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How to Schedule a Court Meeting</DialogTitle>
            <DialogDescription>
              This form allows you to schedule virtual court meetings with all required participants.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p>
              <strong>Meeting Details:</strong> Enter the case title, case number, and select your preferred date and time.
            </p>
            <p>
              <strong>Judge:</strong> Your email is pre-filled as the judge for this meeting.
            </p>
            <p>
              <strong>Participants:</strong> Enter the email addresses for both lawyers and both litigants involved in the case.
            </p>
            <p>
              <strong>Meeting Link:</strong> After scheduling, a meeting link will be generated that you can share with all participants.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default HelpDialog;
  