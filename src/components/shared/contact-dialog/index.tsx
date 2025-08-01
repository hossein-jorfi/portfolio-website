import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ContactDialog = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Contact</DialogTitle>
        <DialogDescription>
          Contact me for any questions or opportunities.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default ContactDialog;
