import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { MailIcon, MapPinIcon, PhoneCallIcon, SendIcon } from 'lucide-react';
import SkeletonChatWithUs from '../Skeleton/SkeletonChatWithUs';

interface ChatWithUsProps {
    isLoading?: boolean;
}

const ChatWithUs: React.FC<ChatWithUsProps> = ({ isLoading = false }) => {
    const data = [
        {
            title: 'Chat With Us',
            desc: 'Speak to our friendly team via chat.',
            contacts: [
                { icon: MailIcon, text: 'example@email.com' },
                { icon: SendIcon, text: '+62812345678' },
            ],
        },
        {
            title: 'Call Us',
            desc: 'Call our team on Monday - Saturday from 8am to 4pm.',
            contacts: [{ icon: PhoneCallIcon, text: '+62812345678' }],
        },
        {
            title: 'Visit Us',
            desc: 'Visit to us in person at our Jepara HQ.',
            contacts: [{ icon: MapPinIcon, text: 'Langon, Jepara' }],
        },
    ];

    return isLoading ? (
        <SkeletonChatWithUs />
    ) : (
        <div className="flex flex-col gap-8 text-center text-xs font-semibold md:p-4 md:text-start">
            {data.length > 0 &&
                data.map((data, index) => (
                    <AnimatedMotion as="div" delay={index * 0.5} duration={1} variantName="slideLeft" key={index} className="flex flex-col gap-2">
                        <AnimatedMotion as="h1" delay={index * 0.8} duration={1} variantName="fadeIn" className="text-base">
                            {data.title}
                        </AnimatedMotion>
                        <AnimatedMotion as="p" delay={index * 0.9} duration={1} variantName="fadeIn" className="text-muted-foreground">
                            {data.desc}
                        </AnimatedMotion>
                        {data.contacts.length > 0 &&
                            data.contacts.map((contact, i) => (
                                <AnimatedMotion
                                    as="p"
                                    delay={1}
                                    duration={1}
                                    variantName="fadeIn"
                                    key={i}
                                    className="flex items-center justify-center gap-3 md:justify-start"
                                >
                                    {<contact.icon size={20} />}
                                    <span>{contact.text}</span>
                                </AnimatedMotion>
                            ))}
                    </AnimatedMotion>
                ))}
        </div>
    );
};

export default ChatWithUs;
