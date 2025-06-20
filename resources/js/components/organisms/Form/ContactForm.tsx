import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import TextareaWithLabel from '@/components/molecules/FormField/TextareaWithLabel';
import { Button } from '@/components/ui/button';
import { SendIcon } from 'lucide-react';

const ContactForm = () => {
    return (
        <div className="h-fit p-4">
            <div className="flex flex-col gap-5">
                <AnimatedMotion as="div" duration={1} variantName="slideRight">
                    <InputWithLabel labelFor="name" label="Name" id="name" name="name" type="text" placeholder="Your Name" autoComplete="off" />
                </AnimatedMotion>

                <AnimatedMotion as="div" delay={0.2} duration={1} variantName="slideRight">
                    <InputWithLabel
                        labelFor="email"
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        autoComplete="off"
                    />
                </AnimatedMotion>

                <AnimatedMotion as="div" delay={0.4} duration={1} variantName="slideRight">
                    <TextareaWithLabel
                        labelFor="message"
                        label="Message"
                        id="message"
                        name="message"
                        placeholder="Leave us a message..."
                        autoComplete="off"
                    />
                </AnimatedMotion>

                <AnimatedMotion as="div" delay={0.6} duration={1} variantName="slideRight">
                    <Button effect="expandIcon" icon={SendIcon} iconPlacement="right" className="w-full">
                        Send Message
                    </Button>
                </AnimatedMotion>
            </div>
        </div>
    );
};

export default ContactForm;
