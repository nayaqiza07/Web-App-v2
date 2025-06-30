import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import TextareaWithLabel from '@/components/molecules/FormField/TextareaWithLabel';
import { Button } from '@/components/ui/button';
import { SendIcon } from 'lucide-react';
import SkeletonContactForm from '../Skeleton/SkeletonContactForm';

interface ContactFormProps {
    isLoading?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isLoading = false }) => {
    return isLoading ? (
        <SkeletonContactForm />
    ) : (
        <div className="h-fit md:p-4">
            <div className="flex flex-col gap-5">
                <AnimatedMotion as="div" duration={1} variantName="slideRight" animate="visible">
                    <InputWithLabel labelFor="name" label="Name" id="name" name="name" type="text" placeholder="Your Name" autoComplete="off" />
                </AnimatedMotion>

                <AnimatedMotion as="div" delay={0.2} duration={1} variantName="slideRight" animate="visible">
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

                <AnimatedMotion as="div" delay={0.4} duration={1} variantName="slideRight" animate="visible">
                    <InputWithLabel labelFor="phone" label="Phone" id="phone" name="phone" type="tel" placeholder="Phone Number" autoComplete="off" />
                </AnimatedMotion>

                <AnimatedMotion as="div" delay={0.6} duration={1} variantName="slideRight" animate="visible">
                    <TextareaWithLabel
                        labelFor="message"
                        label="Message"
                        id="message"
                        name="message"
                        placeholder="Leave us a message..."
                        autoComplete="off"
                    />
                </AnimatedMotion>

                <AnimatedMotion as="div" delay={0.8} duration={1} variantName="slideRight" animate="visible">
                    <Button effect="expandIcon" icon={SendIcon} iconPlacement="right" className="w-full">
                        Send Message
                    </Button>
                </AnimatedMotion>
            </div>
        </div>
    );
};

export default ContactForm;
