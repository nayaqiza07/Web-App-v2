import InputWithLabel from '@/components/molecules/FormField/InputWithLabel';
import TextareaWithLabel from '@/components/molecules/FormField/TextareaWithLabel';
import { Button } from '@/components/ui/button';
import { useForm } from '@inertiajs/react';
import { easeOut, motion } from 'framer-motion';
import { SendIcon } from 'lucide-react';
import { FormEventHandler } from 'react';

type ContactUsForm = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const ContactForm = () => {
    const { data, setData, reset } = useForm<Required<ContactUsForm>>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data);
        reset();
    };

    return (
        <div className="h-fit min-w-0 md:p-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: easeOut }}>
                    <InputWithLabel
                        labelFor="name"
                        label="Name"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        autoComplete="off"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                </motion.div>

                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 1, ease: easeOut }}>
                    <InputWithLabel
                        labelFor="email"
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        autoComplete="off"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                </motion.div>

                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 1, ease: easeOut }}>
                    <InputWithLabel
                        labelFor="phone"
                        label="Phone"
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        autoComplete="off"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                    />
                </motion.div>

                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 1, ease: easeOut }}>
                    <TextareaWithLabel
                        labelFor="message"
                        label="Message"
                        id="message"
                        name="message"
                        placeholder="Leave us a message..."
                        autoComplete="off"
                        value={data.message}
                        onChange={(e) => setData('message', e.target.value)}
                        className="h-20 overflow-y-auto"
                    />
                </motion.div>

                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 1, ease: easeOut }}>
                    <Button type="submit" effect="expandIcon" icon={SendIcon} iconPlacement="right" className="w-full">
                        Send Message
                    </Button>
                </motion.div>
            </form>
        </div>
    );
};

export default ContactForm;
