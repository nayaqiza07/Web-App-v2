import AnimatedMotion from '@/components/atoms/Animated/AnimatedMotion';
import { useContactStore } from '@/stores/useContactStore';
import { MailIcon, MapIcon, MapPinIcon, PhoneCallIcon, SendIcon } from 'lucide-react';

const ChatWithUs = () => {
    const { contacts } = useContactStore();

    const data = [
        {
            title: 'Chat With Us',
            desc: 'Speak to our friendly team via chat.',
            contacts: [
                { icon: MailIcon, text: contacts[0]?.email_us },
                { icon: SendIcon, text: contacts[0]?.chat_us },
            ],
        },
        {
            title: 'Call Us',
            desc: 'Call our team on Monday - Saturday from 8am to 4pm.',
            contacts: [{ icon: PhoneCallIcon, text: contacts[0]?.call_us }],
        },
        {
            title: 'Visit Us',
            desc: 'Visit to us in person at our Jepara HQ.',
            contacts: [
                { icon: MapPinIcon, text: contacts[0]?.visit_us },
                {
                    icon: MapIcon,
                    text: contacts[0]?.our_coordinate,
                    is_link:
                        'https://www.google.com/maps/place/PT.+HORESTCO/@-6.629841,110.738444,14z/data=!4m5!3m4!1s0x0:0x77cc4003e6ac057f!8m2!3d-6.6298414!4d110.7384441?hl=en',
                },
            ],
        },
    ];

    return (
        <div className="flex flex-col gap-8 text-center text-xs font-semibold md:p-4 md:text-start">
            {data.length > 0 &&
                data.map((data, index) => (
                    <AnimatedMotion
                        as="div"
                        delay={index * 0.5}
                        duration={1}
                        variantName="slideLeft"
                        key={index}
                        animate="visible"
                        className="flex flex-col gap-2"
                    >
                        <AnimatedMotion as="h1" delay={index * 0.8} duration={1} variantName="fadeIn" animate="visible" className="text-base">
                            {data.title}
                        </AnimatedMotion>
                        <AnimatedMotion
                            as="p"
                            delay={index * 0.9}
                            duration={1}
                            variantName="fadeIn"
                            animate="visible"
                            className="text-muted-foreground"
                        >
                            {data.desc}
                        </AnimatedMotion>
                        {data.contacts.length > 0 &&
                            data.contacts.map((contact, i) => (
                                <AnimatedMotion
                                    as="p"
                                    delay={1}
                                    duration={1}
                                    variantName="fadeIn"
                                    animate="visible"
                                    key={i}
                                    className="flex justify-center gap-3 md:justify-start"
                                >
                                    {<contact.icon size={16} className="shrink-0" />}
                                    {contact.is_link ? (
                                        <a href={contact.is_link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {contact.text}
                                        </a>
                                    ) : (
                                        <span>{contact.text}</span>
                                    )}
                                </AnimatedMotion>
                            ))}
                    </AnimatedMotion>
                ))}
        </div>
    );
};

export default ChatWithUs;
