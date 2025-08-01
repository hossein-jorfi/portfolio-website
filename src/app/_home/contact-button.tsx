import ContactDialog from "@/components/shared/contact-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

const ContactButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          Contact <ArrowRight />
        </Button>
      </DialogTrigger>
      <ContactDialog />
    </Dialog>
  );
};

export default ContactButton;
