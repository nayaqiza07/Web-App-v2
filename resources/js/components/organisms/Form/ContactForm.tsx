import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import TextareaWithLabel from '@/components/molecules/FormField/TextareaWithLabel';
import { Button } from '@/components/ui/button';
import { SendIcon } from 'lucide-react';

const ContactForm = () => {
    return (
        <div className="text-card-foreground rounded-2xl border p-4 shadow-sm">
            <div className="flex flex-col gap-3">
                <InputWithLabel labelFor="name" label="Name" id="name" name="name" type="text" placeholder="Enter Your Name" autoComplete="off" />
                <InputWithLabel
                    labelFor="email"
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                />
                <TextareaWithLabel
                    labelFor="message"
                    label="Message"
                    id="message"
                    name="message"
                    placeholder="Enter Your Message"
                    autoComplete="off"
                />
                <Button effect="expandIcon" icon={SendIcon} iconPlacement="right" className="w-fit">
                    Send Message
                </Button>
            </div>
        </div>
    );
};

export default ContactForm;
